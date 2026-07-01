// kubejs/client_scripts/biomebeats_control.js

const Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
const Constants = Java.loadClass('io.github.maki99999.biomebeats.Constants');
const MusicManager = Java.loadClass('io.github.maki99999.biomebeats.music.MusicManager');
const BooleanClass = Java.loadClass('java.lang.Boolean');
// Track last volume set via our override API (0.0..1.0)
const bbLastSetVolumeScale = null;

// Helper to get primitive boolean Class for reflection
function getBooleanType() {
  try {
    // Access directly; no reflection needed
    return BooleanClass.TYPE; // boolean.class
  } catch (e) {
    console.log('[BiomeBeats] Failed to get Boolean.TYPE:');
    return null;
  }
}

// Get Biome Beats' global MusicManager instance
function getBiomeBeatsMusicManager() {
  try {
    // Field is public static final; access directly instead of using reflection
    return Constants.MUSIC_MANAGER;
  } catch (e) {
    console.log('[BiomeBeats] Failed to access Constants.MUSIC_MANAGER:');
    return null;
  }
}

// ──────────────────────────────
// Global functions
// ──────────────────────────────

global.stopBiomeBeatsMusic = function () {
  let mgr = getBiomeBeatsMusicManager();
  if (!mgr) return;
  try {
    mgr.stop(); // hard stop
  } catch (e) {
    console.log('[BiomeBeats] Failed to stop music:');
  }
};

global.pauseBiomeBeatsMusic = function () {
  let mgr = getBiomeBeatsMusicManager();
  if (!mgr) return;
  try {
    mgr.pause(); // pause current track
  } catch (e) {
    console.log('[BiomeBeats] Failed to pause music:');
  }
};

global.resumeBiomeBeatsMusic = function () {
  let mgr = getBiomeBeatsMusicManager();
  if (!mgr) return;
  try {
    mgr.resume(); // resume (fade-in) if paused
  } catch (e) {
    console.log('[BiomeBeats] Failed to resume music:');
  }
};

global.skipBiomeBeatsTrack = function () {
  let mgr = getBiomeBeatsMusicManager();
  if (!mgr) return;
  try {
    // Try reflection first: private void playNext(boolean fromEom)
    let booleanType = getBooleanType();
    if (!booleanType) throw new Error('boolean type unavailable');
    let ClassRef = Java.loadClass('java.lang.Class');
    let mmClass = ClassRef.forName('io.github.maki99999.biomebeats.music.MusicManager');
    let playNext = mmClass.getDeclaredMethod('playNext', booleanType);
    playNext.setAccessible(true);
    // false = manual skip (not from end-of-media)
    playNext.invoke(mgr, java.lang.Boolean.FALSE);
  } catch (e) {
    // Fallback: stop and play a random other track
    try {
      let tracks = mgr.getMusicTracks();
      if (tracks == null) {
        // Manager may not be initialized yet; avoid double-init if unnecessary
        try { mgr.init(); } catch (_) {}
        tracks = mgr.getMusicTracks();
      }
      if (!tracks) return;

      let ArrayList = Java.loadClass('java.util.ArrayList');
      let list = new ArrayList(tracks);

      let current = null;
      try { current = mgr.getCurrentMusicTrack(); } catch (_) {}
      if (current) list.remove(current);

      if (list.isEmpty()) return;
      let idx = Math.floor(Math.random() * list.size());
      let next = list.get(idx);

      mgr.stop();
      mgr.play(next);
    } catch (e2) {
      console.log('[BiomeBeats] Failed to skip track (fallback):', e2);
    }
  }
};

// Optional: simple volume control (0.0–1.0)
global.setBiomeBeatsVolume = function (scale) {
  let mgr = getBiomeBeatsMusicManager();
  if (!mgr) return;
  try {
    // Coerce to number and clamp
    let n = typeof scale === 'string' ? parseFloat(scale) : scale;
    if (isNaN(n)) n = 0;
    if (n < 0) n = 0; if (n > 1) n = 1;
    mgr.setVolume(n); // MusicManager multiplies by 0.5 internally
    bbLastSetVolumeScale = n;
  } catch (e) {
    console.log('[BiomeBeats] Failed to change music volume:', e);
  }
};

// Returns current BiomeBeats volume scale (0.0..1.0)
// Preference: returns last override set by setBiomeBeatsVolume, otherwise derives from MC options
global.getVolume = function () {
  try {
    if (bbLastSetVolumeScale !== null) return bbLastSetVolumeScale;
    let mc = Minecraft.getInstance();
    if (!mc || !mc.options) return 0;
    let SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource');
    let opts = mc.options;
    // Try deobf name first
    let master = null, music = null;
    try {
      master = opts.getSoundSourceVolume(SoundSource.MASTER);
      music = opts.getSoundSourceVolume(SoundSource.MUSIC);
    } catch (ignored) {
      // Fallback to obfuscated method name via reflection
      try {
        let ClassRef = Java.loadClass('java.lang.Class');
        let OptionsClass = ClassRef.forName('net.minecraft.client.Options');
        let SoundSourceClass = ClassRef.forName('net.minecraft.sounds.SoundSource');
        let getVol = OptionsClass.getDeclaredMethod('m_92147_', SoundSourceClass);
        getVol.setAccessible(true);
        master = getVol.invoke(opts, SoundSource.MASTER);
        music = getVol.invoke(opts, SoundSource.MUSIC);
      } catch (e2) {
        console.log('[BiomeBeats] getVolume reflection failed:', e2);
        return 0;
      }
    }
    if (master == null || music == null) return 0;
    // Match MusicManager.updateVolume() input (before the internal 0.5 multiplier)
    return master * music;
  } catch (e) {
    console.log('[BiomeBeats] getVolume failed:', e);
    return 0;
  }
};

// ──────────────────────────────
// Boss-hit logic (60s pause timer)
// ──────────────────────────────

let CHANNEL_ID = 'biomebeats_boss_hit';
let RESUME_DELAY_TICKS = 600;

let paused = {};

// NEW: track Biome Beats current volume per player (0..1)
let bbVol = {};

// NEW: client-side effective max volume for music (0..1)
const SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource');

function getUserMusicMax() {
  let mc = Minecraft.getInstance();
  if (!mc || !mc.options) return 1.0;
  let master = mc.options.getSoundSourceVolume(SoundSource.MASTER);
  let music  = mc.options.getSoundSourceVolume(SoundSource.MUSIC);
  return master * music;
}

// NEW: setter wrapper that ALSO records current BB volume for that player
function setBBVolume(playerName, volume) {
  let v = Math.max(0, Math.min(1, Number(volume)));
  bbVol[playerName] = v;
  global.setBiomeBeatsVolume(v);
}

NetworkEvents.dataReceived(CHANNEL_ID, event => {
  let name = event.player.username;

  // Reset timer if already paused
  if (paused[name] == true) {
    paused[`${name}_cooldown`] = RESUME_DELAY_TICKS;
    return;
  }

  paused[name] = true;

  let steps = 30;

  // NEW: start fade from current Biome Beats volume (prevents jump)
  // Fallback to user's max if we don't know current yet
  let startVol = (bbVol[name] != null) ? bbVol[name] : getUserMusicMax();

  for (let i = 0; i <= steps; i++) {
    let t = i / steps;                 // 0..1
    let volume = startVol * (1 - t);   // startVol -> 0
    let valid = (i == steps);
    Client.scheduleInTicks(i * 3, () => {
      setBBVolume(name, volume);

      if (valid) {
        paused[`${name}_cooldown`] = RESUME_DELAY_TICKS;
      }
    });
  }
});

ClientEvents.tick(event => {
  let name = event.player.username;

  if (paused[name] != true) return;
  if (!paused[`${name}_cooldown`]) return;

  paused[`${name}_cooldown`] -= 1;
  if (paused[`${name}_cooldown`] > 0) return;

  paused[name] = false;

  let steps = 30;

  // Fade back up to the user's CURRENT max volume
  let maxVol = getUserMusicMax();

  for (let i = 0; i <= steps; i++) {
    let t = i / steps;          // 0..1
    let volume = maxVol * t;    // 0 -> maxVol
    let valid = (i == steps);

    Utils.server.scheduleInTicks(i * 3, () => {
      // If re-paused mid fade-in, abort the step
      if (paused[name] == true) return;

      setBBVolume(name, volume);

      if (valid) {
        delete paused[`${name}_cooldown`];
      }
    });
  }
});



