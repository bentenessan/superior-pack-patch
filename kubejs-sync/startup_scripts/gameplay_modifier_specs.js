// priority: 930

global.superiorGameplayModifierOrder = [
    'beastriders',
    'arcane_ascension',
    'ironclad',
    'arachnophobia',
    'monstrosities',
    'undead_feast',
    'ravenous_horde',
    'icebound',
    'death_snare',
    'piglin_rage',
    'brute_force',
    'tempestborn',
    'vexsplosion',
    'shroudwalkers',
    'corrupted_kin',
    'veiled_broodlings',
    'deep_abyss',
    'mob_menagerie',
    'screeching_shadows',
    'event_horizon',
    'weeping_fate',
    'unending_horde',
    'critical_mass',
    'bone_brigade',
    'blood_moon',
    'glass_bones',
    'pyromania',
    'glancing_blows',
]

global.superiorGameplayModifiers = {
    beastriders: {
        multiplier: 1.15,
        synergies: ['arcane_ascension'],
        available: true,
        implemented: true,
        description: 'Vanilla monsters have a chance to spawn with a mount',
    },
    arcane_ascension: {
        multiplier: 1.10,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Monsters spawn as spellcasters and cast spells more often',
    },
    ironclad: {
        multiplier: 1.05,
        synergies: [],
        available: false,
        implemented: false,
        description: 'Unavailable: gear behavior is not currently implemented',
    },
    arachnophobia: {
        multiplier: 1.10,
        synergies: ['veiled_broodlings'],
        available: true,
        implemented: true,
        description: 'Spiders summon small fast cave spiders on death',
    },
    monstrosities: {
        multiplier: 1.15,
        synergies: ['shroudwalkers', 'undead_feast', 'death_snare', 'corrupted_kin'],
        available: true,
        implemented: true,
        description: 'Mutants spawn with more life and special abilities',
    },
    undead_feast: {
        multiplier: 1.15,
        synergies: ['deep_abyss'],
        available: true,
        implemented: true,
        description: 'Zombies spawn with life steal',
    },
    ravenous_horde: {
        multiplier: 1.15,
        synergies: ['deep_abyss'],
        available: true,
        implemented: true,
        description: 'Hitting a zombie empowers nearby zombies',
    },
    icebound: {
        multiplier: 1.05,
        synergies: ['death_snare'],
        available: true,
        implemented: true,
        description: 'Strays have a high chance to freeze you',
    },
    death_snare: {
        multiplier: 1.10,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Skeleton arrows pull you and apply slowness',
    },
    piglin_rage: {
        multiplier: 1.05,
        synergies: ['brute_force'],
        available: true,
        implemented: true,
        description: 'Nearby Zombified Piglins gain speed when one is attacked',
    },
    brute_force: {
        multiplier: 1.05,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Piglin Brutes deal more damage and knockback',
    },
    tempestborn: {
        multiplier: 1.15,
        synergies: ['vexsplosion'],
        available: true,
        implemented: true,
        description: 'All creeper types spawn charged',
    },
    vexsplosion: {
        multiplier: 1.10,
        synergies: ['tempestborn'],
        available: true,
        implemented: true,
        description: 'Vexes drop lit TNT on death',
    },
    shroudwalkers: {
        multiplier: 1.10,
        synergies: ['veiled_broodlings', 'screeching_shadows'],
        available: true,
        implemented: true,
        description: 'Endermen give darkness and teleport more',
    },
    corrupted_kin: {
        multiplier: 1.20,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Mutants replace their normal counterparts',
    },
    veiled_broodlings: {
        multiplier: 1.10,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Cave spiders spawn invisible until they attack',
    },
    deep_abyss: {
        multiplier: 1.05,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Drowned spawn with tridents that pull you',
    },
    mob_menagerie: {
        multiplier: 1.15,
        synergies: [],
        available: true,
        implemented: true,
        description: 'When a pillager spawns, a powerful pillager variant has a chance to spawn with it',
    },
    screeching_shadows: {
        multiplier: 1.05,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Phantoms are smaller, faster, and duplicate on hit',
    },
    event_horizon: {
        multiplier: 1.05,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Mob deaths can create a temporary black hole',
    },
    weeping_fate: {
        multiplier: 1.02,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Ghasts teleport away when hit, avoiding damage',
    },
    unending_horde: {
        multiplier: 1.15,
        synergies: [],
        available: false,
        implemented: false,
        description: 'Unavailable: summon behavior is currently disabled',
    },
    critical_mass: {
        multiplier: 1.025,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Creepers have a tiny chance to spawn a nuke on death',
    },
    bone_brigade: {
        multiplier: 1.05,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Skeletons sometimes spawn as five special skeletons',
    },
    blood_moon: {
        multiplier: 1.10,
        synergies: [],
        available: true,
        implemented: true,
        description: 'At night, mobs gain Speed, Strength, and Regeneration',
    },
    glass_bones: {
        multiplier: 1.05,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Fall damage is increased',
    },
    pyromania: {
        multiplier: 1.05,
        synergies: [],
        available: true,
        implemented: true,
        description: 'You are ignited for 3 seconds when hit',
    },
    glancing_blows: {
        multiplier: 1.10,
        synergies: [],
        available: true,
        implemented: true,
        description: 'Bosses spawn with an infinite §cResistance III§7 and §aKnockback Resistance I§7 effect',
    },
}

// --- Output scaling --------------------------------------------------------
// Target AGGREGATE multipliers when ALL available modifiers are active. Each
// modifier's effect is spread proportionally (by its own multiplier weight) so
// these totals are reached. Change a target and the spread re-derives itself.
const GM_HEALTH_TARGET = 50   // monster health ×50 with everything active
const GM_DAMAGE_TARGET = 30   // monster damage ×30 with everything active
const GM_COIN_TARGET = 10     // coins         ×10 with everything active

let __gmSumBonus = 0   // Σ(multiplier - 1) over available modifiers (health/damage are summed)
let __gmProduct = 1    // Π multiplier over available modifiers (coins are a product)
global.superiorGameplayModifierOrder.forEach(id => {
    let spec = global.superiorGameplayModifiers[id]
    if (!spec || spec.available !== true || spec.implemented !== true) return
    __gmSumBonus += (spec.multiplier - 1)
    __gmProduct *= spec.multiplier
})

const GM_HEALTH_BONUS_SCALE = __gmSumBonus > 0 ? (GM_HEALTH_TARGET - 1) / (__gmSumBonus / 2) : 1
const GM_DAMAGE_BONUS_SCALE = __gmSumBonus > 0 ? (GM_DAMAGE_TARGET - 1) / (__gmSumBonus / 3) : 1
const GM_COIN_BONUS_SCALE = __gmProduct > 1 ? (GM_COIN_TARGET - 1) / (__gmProduct - 1) : 1

// Expose for the client tooltip (client_scripts/tooltips.js) so its preview matches the real effect.
global.GM_HEALTH_BONUS_SCALE = GM_HEALTH_BONUS_SCALE
global.GM_DAMAGE_BONUS_SCALE = GM_DAMAGE_BONUS_SCALE
global.GM_COIN_BONUS_SCALE = GM_COIN_BONUS_SCALE

global.getGameplayModifier = function (id) {
    return global.superiorGameplayModifiers[String(id)] || null
}

global.getAllGameplayModifierIds = function () {
    return global.superiorGameplayModifierOrder.slice()
}

let __availableGameplayModifierIds = null
let __gameplayModifierCacheVersion = 0
let __gameplayModifierMultiplierCache = {
    version: -1,
    tick: -1,
    active: null,
    activeSet: null,
    coin: null,
    health: null,
    damage: null,
}

const GAMEPLAY_MODIFIER_CACHE_TICKS = 20

function getGameplayModifierCacheTick(server) {
    try {
        let tick = Number(server.tickCount)
        if (Number.isFinite(tick)) return tick
    } catch (e) {}

    try {
        let tick = Number(Utils.server.tickCount)
        if (Number.isFinite(tick)) return tick
    } catch (e) {}

    return -1
}

function buildActiveGameplayModifiers(server) {
    if (!server || !server.persistentData) return []

    let active = []
    let available = global.getAvailableGameplayModifierIds()
    for (let i = 0; i < available.length; i++) {
        let id = String(available[i])
        if (server.persistentData.getBoolean(id) === true) active.push(id)
    }

    return active
}

function getGameplayModifierRuntimeCache(server) {
    if (!server || !server.persistentData) return null

    let tick = getGameplayModifierCacheTick(server)
    let expired = tick >= 0
        && __gameplayModifierMultiplierCache.tick >= 0
        && tick - __gameplayModifierMultiplierCache.tick >= GAMEPLAY_MODIFIER_CACHE_TICKS

    if (
        __gameplayModifierMultiplierCache.version != __gameplayModifierCacheVersion
        || !__gameplayModifierMultiplierCache.active
        || expired
    ) {
        let active = buildActiveGameplayModifiers(server)
        __gameplayModifierMultiplierCache = {
            version: __gameplayModifierCacheVersion,
            tick: tick,
            active: active,
            activeSet: new Set(active),
            coin: null,
            health: null,
            damage: null,
        }
    }

    return __gameplayModifierMultiplierCache
}

global.invalidateGameplayModifierMultiplierCache = function (server) {
    __gameplayModifierCacheVersion++
    __gameplayModifierMultiplierCache.version = -1
    __gameplayModifierMultiplierCache.tick = -1
    __gameplayModifierMultiplierCache.active = null
    __gameplayModifierMultiplierCache.activeSet = null
    __gameplayModifierMultiplierCache.coin = null
    __gameplayModifierMultiplierCache.health = null
    __gameplayModifierMultiplierCache.damage = null
}

global.invalidateGameplayModifierCache = global.invalidateGameplayModifierMultiplierCache

global.isGameplayModifierAvailable = function (id) {
    let spec = global.getGameplayModifier(id)
    return spec != null && spec.available === true && spec.implemented === true
}

global.getAvailableGameplayModifierIds = function () {
    if (!__availableGameplayModifierIds) {
        __availableGameplayModifierIds = global.getAllGameplayModifierIds().filter(id => global.isGameplayModifierAvailable(id))
    }
    return __availableGameplayModifierIds.slice()
}

global.isGameplayModifierActive = function (server, id) {
    if (!server || !server.persistentData) return false
    if (!global.isGameplayModifierAvailable(id)) return false
    let cache = getGameplayModifierRuntimeCache(server)
    return cache ? cache.activeSet.has(String(id)) : false
}

global.getActiveGameplayModifiers = function (server) {
    let cache = getGameplayModifierRuntimeCache(server)
    return cache ? cache.active.slice() : []
}

global.getGameplayModifierCoinMultiplier = function (server) {
    let cache = getGameplayModifierRuntimeCache(server)
    if (!cache) return 1
    if (cache.coin != null) return cache.coin

    let active = cache.active
    let remaining = new Set(active)
    let factors = []

    for (let id of active) {
        if (!remaining.has(id)) continue
        let spec = global.getGameplayModifier(id)
        let partner = (spec.synergies || []).find(other => remaining.has(other))

        if (partner) {
            remaining.delete(id)
            remaining.delete(partner)
            factors.push(spec.multiplier * global.getGameplayModifier(partner).multiplier)
        }
    }

    for (let id of remaining) {
        factors.push(global.getGameplayModifier(id).multiplier)
    }

    let coinProduct = factors.reduce((acc, multiplier) => acc * multiplier, 1)
    cache.coin = 1 + (coinProduct - 1) * GM_COIN_BONUS_SCALE
    return cache.coin
}

global.getGameplayModifierHealthMultiplier = function (server) {
    let cache = getGameplayModifierRuntimeCache(server)
    if (!cache) return 1
    if (cache.health != null) return cache.health

    let healthMult = 1
    cache.active.forEach(id => {
        healthMult += (global.getGameplayModifier(id).multiplier - 1) / 2 * GM_HEALTH_BONUS_SCALE
    })
    cache.health = healthMult
    return cache.health
}

global.getGameplayModifierDamageMultiplier = function (server) {
    let cache = getGameplayModifierRuntimeCache(server)
    if (!cache) return 1
    if (cache.damage != null) return cache.damage

    let damageMult = 1
    cache.active.forEach(id => {
        damageMult += (global.getGameplayModifier(id).multiplier - 1) / 3 * GM_DAMAGE_BONUS_SCALE
    })
    cache.damage = damageMult
    return cache.damage
}
