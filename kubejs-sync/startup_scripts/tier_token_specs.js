// priority: 950
// ============================================================================
// Boss Token economy — shared spec (loads on BOTH client & server).
//
// Tiered bosses drop Tier Tokens (killer-only, amount = tier). Tokens buy tiered
// loot boxes (Gem / Weapon / Armor / Materials) in the Superior Shop, SILOED by tier
// (a Tier-N token only buys Tier-N boxes). 6 box tiers, assigned per boss by FTB-QUEST
// PROGRESSION (re-tier 2026-07-03): Box I-IV = general bosses (early -> endgame), Box V =
// Ender Guardian ONLY, Box VI = Ender Dragon ONLY (the two deepest quests in the pack).
// The boss `tier` field in startupBossData.js IS the box tier; bossCoarseTier returns it.
// ============================================================================

global.TIER_TOKEN_TIERS = 6
global.TIER_ROMAN = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI' }
global.TIER_TOKEN_COLOR = { 1: '§a', 2: '§b', 3: '§d', 4: '§6', 5: '§c', 6: '§5' }  // per-tier name color

// The boss `tier` field is now the box tier directly (1..TIER_TOKEN_TIERS), assigned by
// FTB progression — so a boss just grants its own tier's token (clamped to range).
global.bossCoarseTier = function (inGameTier, entityId) {
    let t = Math.round(Number(inGameTier) || 1)
    if (t < 1) t = 1
    if (t > global.TIER_TOKEN_TIERS) t = global.TIER_TOKEN_TIERS
    return t
}

// tokens a killer earns from a boss of coarse tier N (currently = N; tunable)
global.tierTokenReward = function (coarse) { return Math.max(1, Number(coarse) || 1) }

// Box categories per tier (placeholder token costs — tunable). Add more here later.
// NOTE: the WEAPON box keeps the internal cat key 'gear' (so its item id stays
// kubejs:tier_N_gear_box — no migration for boxes already in the economy) but now
// DISPLAYS as "Weapon". 'armor' is the split-out box: regular tier-scaled modular armor
// + rare [Omega] armor on T4/T5 (mirrors the weapon box). Kept in sync with the parallel
// list in startup_scripts/item_registry.js (TIER_BOX_CATS_R).
// 'minTier' (optional) restricts a category to tiers >= that value (e.g. Boss Materials T4/T5 only).
global.TIER_BOX_CATEGORIES = [
    { key: 'gem',       name: 'Gem',            cost: 5, texture: 'kubejs:item/boxes/rare' },
    { key: 'gear',      name: 'Weapon',         cost: 8, texture: 'kubejs:item/boxes/diamond' },
    { key: 'armor',     name: 'Armor',          cost: 8, texture: 'kubejs:item/boxes/netherite' },
    { key: 'materials', name: 'Boss Materials', cost: 30, texture: 'kubejs:item/boxes/mythical', minTier: 4 },
]

// Flattened box definitions (used by item registry, box handlers, and shop trades).
// Built in an IIFE so the loop vars never leak into KubeJS's shared startup scope.
global.TIER_BOXES = (function () {
    let out = []
    for (let t = 1; t <= global.TIER_TOKEN_TIERS; t++) {
        global.TIER_BOX_CATEGORIES.forEach(function (c) {
            if (c.minTier && t < c.minTier) return   // e.g. Boss Materials: T4/T5 only
            out.push({
                tier: t,
                cat: c.key,
                item: `kubejs:tier_${t}_${c.key}_box`,
                token: `kubejs:tier_${t}_token`,
                cost: c.cost,
                category: `tier_${t}_rewards`,
                display: `Tier ${global.TIER_ROMAN[t]} ${c.name} Box`,
                texture: c.texture,
            })
        })
    }
    return out
})()
