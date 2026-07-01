// priority: 900
// ============================================================================
// Muy Bien Infusion — shared spec (loads on BOTH client & server).
//
// Muy Bien Infusions are premium stat rolls (based on the Affinity Gems) added
// to affix GEAR by the Orb of Muy Bien Infusion. Stored in a dedicated NBT key
// (item.nbt.muy_bien_infusions = [{stat, level}, ...], max 2) so they co-exist
// with Apotheosis affixes. Applied by server_scripts/Mechanics/muy_bien_stats.js,
// re-rolled by Orb of Muy Bien Reforging, upgraded by Orb of Muy Bien Ascension.
// Values are the "premium ladder" (L1 = exalted-gem tier, L2/L3 beyond).
// ============================================================================

global.MUY_BIEN_MAX = 2        // max infusions per item
global.MUY_BIEN_MAX_LEVEL = 3  // max Ascension level

// The three orbs (used by the client classifier + server dispatch).
global.validMuyBienOrbs = [
    'kubejs:orb_of_muy_bien_infusion',
    'kubejs:orb_of_muy_bien_reforging',
    'kubejs:orb_of_muy_bien_ascension',
]

// school -> its spell-power attribute (mirrors affinity_gem_stats.js)
const MUY_BIEN_SCHOOLS = {
    blood: 'irons_spellbooks:blood_spell_power',
    ender: 'irons_spellbooks:ender_spell_power',
    fire: 'irons_spellbooks:fire_spell_power',
    ice: 'irons_spellbooks:ice_spell_power',
    lightning: 'irons_spellbooks:lightning_spell_power',
    nature: 'irons_spellbooks:nature_spell_power',
    holy: 'irons_spellbooks:holy_spell_power',
    evocation: 'irons_spellbooks:evocation_spell_power',
    aqua: 'traveloptics:aqua_spell_power',
    geo: 'gtbcs_geomancy_plus:geo_spell_power',
}

// statKey -> { name, attr, op, v:[L1,L2,L3], pct }
// pct=true  -> value is a fraction, shown as %; addition/% attrs base 0, multiply_base base 1.
global.muyBienStats = {
    melee:        { name: 'Melee Damage',  attr: 'minecraft:generic.attack_damage', op: 'addition',      v: [30, 45, 60],        pct: false },
    arrow:        { name: 'Arrow Damage',  attr: 'attributeslib:arrow_damage',       op: 'addition',      v: [30, 45, 60],        pct: false },
    mana:         { name: 'Max Mana',      attr: 'irons_spellbooks:max_mana',        op: 'addition',      v: [700, 1200, 2000],   pct: false },
    health:       { name: 'Max Health',    attr: 'minecraft:generic.max_health',     op: 'addition',      v: [30, 45, 60],        pct: false },
    overheal:     { name: 'Overheal',      attr: 'attributeslib:overheal',           op: 'addition',      v: [0.50, 0.65, 0.80],  pct: true  },
    lifesteal:    { name: 'Life Steal',    attr: 'attributeslib:life_steal',         op: 'addition',      v: [0.15, 0.22, 0.30],  pct: true  },
    spell_resist: { name: 'Spell Resist',  attr: 'irons_spellbooks:spell_resist',    op: 'multiply_base', v: [0.25, 0.40, 0.60],  pct: true  },
}
Object.keys(MUY_BIEN_SCHOOLS).forEach(school => {
    global.muyBienStats[`${school}_sp`] = {
        name: `${school.charAt(0).toUpperCase() + school.slice(1)} Spell Power`,
        attr: MUY_BIEN_SCHOOLS[school],
        op: 'multiply_base',
        v: [0.25, 0.40, 0.60],
        pct: true,
    }
}
)

global.muyBienStatKeys = Object.keys(global.muyBienStats)

// numeric value of a stat at a given level (1..3)
global.muyBienValue = function (statKey, level) {
    let spec = global.muyBienStats[statKey]
    if (!spec) return 0
    let idx = Math.max(1, Math.min(global.MUY_BIEN_MAX_LEVEL, Number(level) || 1)) - 1
    return spec.v[idx]
}

// display label for a value, e.g. "+50%" or "+30"
global.muyBienValueLabel = function (statKey, level) {
    let spec = global.muyBienStats[statKey]
    if (!spec) return ''
    let val = global.muyBienValue(statKey, level)
    return spec.pct ? `+${Math.round(val * 100)}%` : `+${val}`
}

// plain-text infusion line, e.g. "+50% Overheal (Lv 2)"  (colored by the caller)
global.muyBienInfusionText = function (statKey, level) {
    let spec = global.muyBienStats[statKey]
    if (!spec) return ''
    return `${global.muyBienValueLabel(statKey, level)} ${spec.name} (Lv ${Number(level) || 1})`
}

// ---------------------------------------------------------------------------
// NBT read/write for item.nbt.muy_bien_infusions = [{stat, level}].
// Defined here (startup) so BOTH the server (orbs + reconciler) and the client
// (tooltip) can use them — global is shared startup->server and startup->client,
// but NOT server<->client.
// ---------------------------------------------------------------------------
const MUY_BIEN_NBT_KEY = 'muy_bien_infusions'

global.readMuyBienInfusions = function (item) {
    let out = []
    if (!item || item.empty) return out
    let nbt = item.nbt
    if (!nbt) return out
    let list = nbt[MUY_BIEN_NBT_KEY]
    if (!list) return out
    let size = 0
    try { size = (list.length != null) ? list.length : list.size() } catch (e) { size = 0 }
    for (let i = 0; i < size; i++) {
        let entry = null
        try { entry = (list[i] != null) ? list[i] : list.get(i) } catch (x) { entry = null }
        if (!entry) continue
        let stat = null
        try { stat = entry.getString('stat') } catch (x) { stat = entry.stat }
        let level = 1
        try { level = entry.getInt('level') } catch (x) {
            try { level = Math.round(entry.getDouble('level')) } catch (y) { level = Number(entry.level) || 1 }
        }
        if (stat && global.muyBienStats[String(stat)]) {
            out.push({ stat: String(stat), level: Math.max(1, Math.min(global.MUY_BIEN_MAX_LEVEL, Number(level) || 1)) })
        }
    }
    return out
}

global.writeMuyBienInfusions = function (item, arr) {
    if (!item || item.empty) return
    let nbt = item.nbt || {}
    nbt[MUY_BIEN_NBT_KEY] = (arr || []).map(e => ({
        stat: String(e.stat),
        level: Math.max(1, Math.min(global.MUY_BIEN_MAX_LEVEL, Number(e.level) || 1)),
    }))
    item.nbt = nbt
}
