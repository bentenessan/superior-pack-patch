// Sync dynamic keybind display text (for the HUD key labels above ability icons).
//
// Smart Key Prompts has been removed from this pack. This script now only uses
// vanilla KeyMapping display strings (which reflect rebinding in Controls).

const KEY_LETTERS = ['g', 'h', 'j', 'k', 'l']

function _kmFor(letter) {
  if (letter === 'g') return global.gKeySpecial
  if (letter === 'h') return global.hKeySpecial
  if (letter === 'j') return global.jKeySpecial
  if (letter === 'k') return global.kKeySpecial
  if (letter === 'l') return global.lKeySpecial
  return null
}

function _looksUnboundLabel(s) {
  if (!s) return false
  let t = String(s).trim().toLowerCase()
  if (!t) return false
  if (t === 'not bound' || t === 'unbound') return true
  if (t === 'key.keyboard.unknown' || t === 'key.unknown') return true
  if (t.indexOf('not bound') !== -1) return true
  return false
}

function _labelFor(letter) {
  let km = _kmFor(letter)
  if (km) {
    try {
      let s = String(km.getTranslatedKeyMessage().getString())
      if (s && !_looksUnboundLabel(s)) return s
    } catch (e) {}
  }
  return letter.toUpperCase()
}

let _ticks = 0
let _last = { g: null, h: null, j: null, k: null, l: null }

ClientEvents.tick(e => {
  _ticks++
  if (_ticks % 20 !== 0) return // ~1s
  if (!e.player) return

  // If key mappings aren't ready yet, don't overwrite server-side values.
  for (let i = 0; i < KEY_LETTERS.length; i++) {
    if (!_kmFor(KEY_LETTERS[i])) return
  }

  let payload = {}
  KEY_LETTERS.forEach(letter => {
    payload[letter] = _labelFor(letter)
  })

  if (
    payload.g === _last.g &&
    payload.h === _last.h &&
    payload.j === _last.j &&
    payload.k === _last.k &&
    payload.l === _last.l
  ) return

  _last = payload
  e.player.sendData('superior:key_prompt_sync', payload)
})
