const Outliner = Java.loadClass('net.createmod.catnip.outliner.Outliner')
const Color = Java.loadClass('net.createmod.catnip.theme.Color')
const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
const Collections = Java.loadClass('java.util.Collections')
const AllSpecialTextures = Java.loadClass('nl.requios.effortlessbuilding.create.AllSpecialTextures')

const DEFAULT_DURATION_TICKS = 20
const OUTLINE_LINE_WIDTH = 0.0625
const DEFAULT_COLOR = 'red'

// Synced with kubejs/server_scripts/JSfunctions/applyGlow.js
const GLOW_COLORS = {
  light_gray: 'd3d3d3',
  gray: '808080',
  dark_gray: '505050',

  light_red: 'ff7f7f',
  red: 'ff0000',
  dark_red: '8b0000',

  light_orange: 'ffb84d',
  orange: 'ffa500',
  dark_orange: 'cc8400',

  light_yellow: 'ffffaa',
  yellow: 'ffff00',
  dark_yellow: 'cccc00',

  light_green: '90ee90',
  green: '00ff00',
  dark_green: '006400',

  light_cyan: 'aaffff',
  cyan: '00ffff',
  dark_cyan: '008b8b',

  light_blue: 'add8e6',
  blue: '0000ff',
  dark_blue: '00008b',

  light_purple: 'd19ce8',
  purple: '800080',
  dark_purple: '4b006b',

  light_pink: 'ffb6c1',
  pink: 'ff69b4',
  dark_pink: 'c71585',

  light_brown: 'd2b48c',
  brown: 'a52a2a',
  dark_brown: '5c1919',

  light_void: 'aa77ff',
  void: '7a00cc',
  dark_void: '3e0066',

  light_shadow: '666666',
  shadow: '303030',
  dark_shadow: '0f0f0f',

  light_gold: 'ffe680',
  gold: 'ffd700',
  dark_gold: 'b39700',

  white: 'ffffff',
  black: '000000'
}

let activeOutlines = {}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

function parseOutlineArgs(a, b, c, d, e, f) {
  if (Array.isArray(a)) {
    return {
      x: a[0],
      y: a[1],
      z: a[2],
      color: b,
      durationTicks: c,
      key: d
    }
  }

  if (a && typeof a === 'object') {
    let color = a.color
    let durationTicks = a.durationTicks
    let key = a.key

    // Support legacy positional overrides for object input.
    if (typeof b === 'number') {
      durationTicks = b
      key = c
    } else {
      if (b !== undefined) color = b
      if (c !== undefined) durationTicks = c
      if (d !== undefined) key = d
    }

    return {
      x: a.x,
      y: a.y,
      z: a.z,
      color: color,
      durationTicks: durationTicks,
      key: key
    }
  }

  // Legacy: (x, y, z, durationTicks?, key?)
  if (typeof d === 'number') {
    return {
      x: a,
      y: b,
      z: c,
      color: undefined,
      durationTicks: d,
      key: e
    }
  }

  return {
    x: a,
    y: b,
    z: c,
    color: d,
    durationTicks: e,
    key: f
  }
}

function toInt(value) {
  let n = Number(value)
  if (isNaN(n)) return null
  return Math.floor(n)
}

function toDurationTicks(value) {
  let n = Number(value)
  if (isNaN(n) || n < 1) return DEFAULT_DURATION_TICKS
  return Math.floor(n)
}

function toColorChannelFloat(value) {
  if (typeof value === 'string' && value.trim().endsWith('%')) {
    let n = Number(value.trim().slice(0, -1))
    if (isNaN(n)) return null
    return clamp(n / 100, 0, 1)
  }

  let n = Number(value)
  if (isNaN(n)) return null
  if (n > 1) return clamp(n / 255, 0, 1)
  return clamp(n, 0, 1)
}

function toAlphaFloat(value) {
  if (typeof value === 'string' && value.trim().endsWith('%')) {
    let n = Number(value.trim().slice(0, -1))
    if (isNaN(n)) return null
    return clamp(n / 100, 0, 1)
  }

  let n = Number(value)
  if (isNaN(n)) return null
  if (n > 1) return clamp(n / 255, 0, 1)
  return clamp(n, 0, 1)
}

function isLikelyColorString(value) {
  if (typeof value !== 'string') return false
  let key = value.trim().toLowerCase()
  if (key in GLOW_COLORS || key === 'random' || key === 'rainbow') return true
  if (/^rgba?\(/.test(key)) return true
  let cleaned = key.replace(/^#/, '').replace(/^0x/, '')
  return /^[0-9a-f]{3,8}$/i.test(cleaned)
}

function parseHexColorSpec(value) {
  let cleaned = String(value).trim().toLowerCase().replace(/^#/, '').replace(/^0x/, '')
  if (!/^[0-9a-f]+$/i.test(cleaned)) return null

  if (cleaned.length === 3) {
    let full = cleaned.split('').map(ch => ch + ch).join('')
    return { mode: 'hex', hex: parseInt(full, 16) }
  }

  if (cleaned.length === 4) {
    let full = cleaned.split('').map(ch => ch + ch).join('')
    let r = parseInt(full.slice(0, 2), 16) / 255
    let g = parseInt(full.slice(2, 4), 16) / 255
    let b = parseInt(full.slice(4, 6), 16) / 255
    let a = parseInt(full.slice(6, 8), 16) / 255
    return { mode: 'rgba', color: new Color(r, g, b, a) }
  }

  if (cleaned.length === 6) {
    return { mode: 'hex', hex: parseInt(cleaned, 16) }
  }

  if (cleaned.length === 8) {
    let r = parseInt(cleaned.slice(0, 2), 16) / 255
    let g = parseInt(cleaned.slice(2, 4), 16) / 255
    let b = parseInt(cleaned.slice(4, 6), 16) / 255
    let a = parseInt(cleaned.slice(6, 8), 16) / 255
    return { mode: 'rgba', color: new Color(r, g, b, a) }
  }

  return null
}

function parseRgbColorSpec(value) {
  let match = String(value).trim().toLowerCase().match(/^rgba?\(([^)]+)\)$/)
  if (!match) return null

  let parts = match[1].split(',').map(part => part.trim())
  if (parts.length !== 3 && parts.length !== 4) return null

  let r = toColorChannelFloat(parts[0])
  let g = toColorChannelFloat(parts[1])
  let b = toColorChannelFloat(parts[2])
  let a = parts.length === 4 ? toAlphaFloat(parts[3]) : 1
  if (r == null || g == null || b == null || a == null) return null

  return { mode: 'rgba', color: new Color(r, g, b, a) }
}

function resolveColorSpec(value) {
  if (value == null) return resolveColorSpec(DEFAULT_COLOR)

  if (typeof value === 'number') {
    let hex = Number(value)
    if (isNaN(hex)) return resolveColorSpec(DEFAULT_COLOR)
    return { mode: 'hex', hex: hex & 0xffffff }
  }

  if (value instanceof Color) {
    return { mode: 'rgba', color: value }
  }

  if (typeof value === 'object') {
    let r = toColorChannelFloat(value.r)
    let g = toColorChannelFloat(value.g)
    let b = toColorChannelFloat(value.b)
    let a = value.a == null ? 1 : toAlphaFloat(value.a)
    if (r == null || g == null || b == null || a == null) return resolveColorSpec(DEFAULT_COLOR)
    return { mode: 'rgba', color: new Color(r, g, b, a) }
  }

  let key = String(value).trim().toLowerCase()
  if (!key) return resolveColorSpec(DEFAULT_COLOR)

  if (key === 'random') {
    return { mode: 'hex', hex: Math.floor(Math.random() * 0x1000000) }
  }

  if (key === 'rainbow') {
    return { mode: 'rainbow', hue: Math.random() }
  }

  let named = GLOW_COLORS[key]
  if (named) {
    let namedSpec = parseHexColorSpec(named)
    if (namedSpec) return namedSpec
  }

  let rgbSpec = parseRgbColorSpec(key)
  if (rgbSpec) return rgbSpec

  let hexSpec = parseHexColorSpec(key)
  if (hexSpec) return hexSpec

  return resolveColorSpec(DEFAULT_COLOR)
}

function hsvToRgb(h, s, v) {
  let hue = ((h % 1) + 1) % 1
  let i = Math.floor(hue * 6)
  let f = hue * 6 - i
  let p = v * (1 - s)
  let q = v * (1 - f * s)
  let t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0: return { r: v, g: t, b: p }
    case 1: return { r: q, g: v, b: p }
    case 2: return { r: p, g: v, b: t }
    case 3: return { r: p, g: q, b: v }
    case 4: return { r: t, g: p, b: v }
    default: return { r: v, g: p, b: q }
  }
}

function applyColor(params, colorSpec) {
  if (!colorSpec || colorSpec.mode === 'hex') {
    params.colored(colorSpec ? colorSpec.hex : 0xff0000)
    return
  }

  if (colorSpec.mode === 'rgba') {
    params.colored(colorSpec.color)
    return
  }

  if (colorSpec.mode === 'rainbow') {
    colorSpec.hue = ((colorSpec.hue || 0) + 0.01) % 1
    let rgb = hsvToRgb(colorSpec.hue, 1, 1)
    params.colored(new Color(rgb.r, rgb.g, rgb.b, 1))
    return
  }

  params.colored(0xff0000)
}

function makeDefaultKey(x, y, z) {
  return `kubejs:block_outline:${x}:${y}:${z}`
}

function drawOutline(entry) {
  let outliner = Outliner.getInstance()
  let pos = new BlockPos(entry.x, entry.y, entry.z)
  let params = outliner
    .showCluster(entry.key, Collections.singleton(pos))
    .withFaceTexture(AllSpecialTextures.THIN_CHECKERED)
    .disableLineNormals()
    .lineWidth(OUTLINE_LINE_WIDTH)

  applyColor(params, entry.colorSpec)
}

function removeOutline(key) {
  if (key == null) return
  delete activeOutlines[String(key)]
  Outliner.getInstance().remove(String(key))
}

global.showRedBlockOutline = function (a, b, c, d, e, f) {
  let parsed = parseOutlineArgs(a, b, c, d, e, f)

  let x = toInt(parsed.x)
  let y = toInt(parsed.y)
  let z = toInt(parsed.z)
  if (x == null || y == null || z == null) return null

  // Legacy compatibility for array/object forms:
  // showRedBlockOutline([x,y,z], duration, key)
  // showRedBlockOutline({x,y,z}, duration, key)
  let colorInput = parsed.color
  let durationInput = parsed.durationTicks
  let keyInput = parsed.key
  if (typeof parsed.color === 'number') {
    durationInput = parsed.color
    keyInput = parsed.durationTicks
    colorInput = undefined
  } else if (typeof parsed.color === 'string' && parsed.durationTicks !== undefined && typeof parsed.durationTicks !== 'number') {
    if (!isLikelyColorString(parsed.color)) {
      keyInput = parsed.color
      colorInput = undefined
    }
  } else if (typeof parsed.color === 'string' && parsed.durationTicks === undefined && !isLikelyColorString(parsed.color)) {
    keyInput = parsed.color
    colorInput = undefined
  }

  let key = parsed.key != null ? String(parsed.key) : makeDefaultKey(x, y, z)
  if (keyInput != null) key = String(keyInput)

  let durationTicks = toDurationTicks(durationInput)
  let colorSpec = resolveColorSpec(colorInput)

  activeOutlines[key] = {
    key: key,
    x: x,
    y: y,
    z: z,
    ticksLeft: durationTicks,
    colorSpec: colorSpec
  }

  drawOutline(activeOutlines[key])
  return key
}

global.showBlockOutline = global.showRedBlockOutline


NetworkEvents.dataReceived('block_outline', event => {
    let data = event.data || {}
    global.showRedBlockOutline(data.x, data.y, data.z, data.color, data.durationTicks)
})




global.clearRedBlockOutline = function (key) {
  if (key == null) return
  removeOutline(key)
}

global.clearBlockOutline = global.clearRedBlockOutline

global.clearAllRedBlockOutlines = function () {
  for (let key in activeOutlines) {
    removeOutline(key)
  }
}

ClientEvents.tick(event => {
  if (!event.player) return

  for (let key in activeOutlines) {
    let entry = activeOutlines[key]
    if (!entry) continue

    if (entry.ticksLeft <= 0) {
      removeOutline(key)
      continue
    }

    drawOutline(entry)
    entry.ticksLeft -= 1
  }
})
