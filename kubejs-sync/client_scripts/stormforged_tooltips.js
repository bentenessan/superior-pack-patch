// [Omega] Awakened Maelstrom — material tooltip. Any modular item built with kubejs.awakened_maelstrom
// shows what the material grants, by context: the Thunderstorm aura on a weapon, the Stormforged set
// bonuses on armor. Client-side render only; behavior lives server-side (omega_thunderstorm.js /
// stormforged_set.js). Covers the staff, the Stormforged armor, and any player-crafted Maelstrom item.
(function () {
    const SF_MAT = 'kubejs.awakened_maelstrom'
    const SF_PIECE_LINE = {
        'miapi:modular_helmet': '+25% Lightning SP, +30% Cooldown Reduction',
        'miapi:modular_chestplate': '+100% Max Health, +15 Armor Toughness',
        'miapi:modular_leggings': '+25% Lightning SP, +18% Dodge Chance',
        'miapi:modular_boots': '+30% Spell Power',
    }

    function sfHasMat(item) {
        try { return item.nbt && String(item.nbt.miapi_modules).indexOf(SF_MAT) >= 0 } catch (e) { return false }
    }

    ItemEvents.tooltip(function (event) {
        event.addAdvanced('@miapi', function (item, advanced, text) {
            if (!sfHasMat(item)) return
            let id = String(item.id)
            let pieceLine = SF_PIECE_LINE[id]
            let i = 1
            if (pieceLine) {
                text.add(i++, Text.of('⚡ Stormforged').aqua())
                text.add(i++, [Text.of('Piece: ').gray(), Text.of(pieceLine).white()])
                text.add(i++, Text.of('▣ Full Set — Overcharge').darkAqua())
                text.add(i++, Text.of('+100% Lightning SP; Thunderstorm aura → 10 targets, +50% dmg').gray())
                text.add(i++, Text.of('50 storm hits → Overcharged 20s: +40% Lightning SP + Ring of Storm').gray())
            } else {
                text.add(i++, Text.of('⚡ Awakened Maelstrom').aqua())
                text.add(i++, [Text.of('Grants ').gray(), Text.of('[Omega] Thunderstorm Aura').aqua(), Text.of(' while held').gray()])
            }
        })
    })
})()
