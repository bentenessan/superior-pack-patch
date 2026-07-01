// Receives server requests and plays Better Combat attack animations on the client.
// Optionally re-sends Better Combat's own packet so other clients can see it too.

function tryLoad(name) {
  try {
    return (Java.loadClass ? Java.loadClass(name) : Java.type(name))
  } catch (e) {
    return null
  }
}

function unwrapPlayer(p) {
  if (!p) return null
  // KubeJS wrappers differ by version; try common fields/methods.
  if (p.minecraftPlayer) return p.minecraftPlayer
  if (p.minecraftEntity) return p.minecraftEntity
  if (p.entity) return p.entity
  if (typeof p.getMinecraftEntity === 'function') return p.getMinecraftEntity()
  if (typeof p.getEntity === 'function') return p.getEntity()
  return p
}

let AnimatedHand = tryLoad('net.bettercombat.logic.AnimatedHand')
let AttackAnimationPacket = tryLoad('net.bettercombat.network.Packets$AttackAnimation')

// Forge jar relocates Fabric API -> net.bettercombat.fabricmc.* (Fabric uses net.fabricmc.*)
let ClientPlayNetworking =
  tryLoad('net.bettercombat.fabricmc.fabric.api.client.networking.v1.ClientPlayNetworking') ||
  tryLoad('net.fabricmc.fabric.api.client.networking.v1.ClientPlayNetworking')

function handFromString(hand) {
  if (!AnimatedHand) return null
  let h = String(hand || 'main').toLowerCase()
  if (h === 'off' || h === 'offhand' || h === 'off_hand') return AnimatedHand.OFF_HAND
  if (h === 'two' || h === 'twohand' || h === 'two_handed' || h === 'twohanded') return AnimatedHand.TWO_HANDED
  return AnimatedHand.MAIN_HAND
}

function toNumber(v, fallback) {
  let n = Number(v)
  return isFinite(n) ? n : fallback
}

global.playBetterCombatAnimationFor = function (playerLike, animationId, hand, lengthTicks, upswing, syncToOthers) {
  if (!animationId || !AnimatedHand) return false

  let player = unwrapPlayer(playerLike)
  if (!player) return false

  let animatedHand = handFromString(hand)
  if (!animatedHand) return false

  let length = toNumber(lengthTicks, 0)
  if (length <= 0) {
    if (!PlayerAttackHelper) return false
    length = PlayerAttackHelper.getAttackCooldownTicksCapped(player)
  }

  let up = toNumber(upswing, 0.5)
  if (syncToOthers === undefined || syncToOthers === null) syncToOthers = true

  try {
    // Better Combat adds this method via mixin.
    player.playAttackAnimation(String(animationId), animatedHand, length, up)
  } catch (e) {
    return false
  }

  // Optional: sync so other players see it (server will forward to trackers).
  if (syncToOthers && ClientPlayNetworking && AttackAnimationPacket) {
    try {
      ClientPlayNetworking.send(
        AttackAnimationPacket.ID,
        new AttackAnimationPacket(player.getId(), animatedHand, String(animationId), length, up).write()
      )
    } catch (e2) {
      // ignore
    }
  }

  return true
}

if (typeof NetworkEvents !== 'undefined') {
  NetworkEvents.dataReceived('bettercombat_play_anim', function (event) {
    let d = event.data || {}
    global.playBetterCombatAnimationFor(
      event.player,
      d.animation,
      d.hand,
      d.length,
      d.upswing,
      d.sync
    )
  })
}
