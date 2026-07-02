// Tooltips for the [Omega] armor sets — shows each piece's bonus + the full-set "Omega Ascendance"
// ability (behavior lives server-side in server_scripts/Mechanics/omega_armor_sets.js). Gated on the
// omega_set NBT marker (read via property access, like the staff), so it auto-covers every school.
(function () {
    const OATIP_NAME = {
        fire: 'Fire', ice: 'Ice', lightning: 'Lightning', blood: 'Blood', ender: 'Ender',
        nature: 'Nature', holy: 'Holy', evocation: 'Evocation', aqua: 'Aqua', geo: 'Geo', eldritch: 'Eldritch',
    }
    const OATIP_PIECE = {
        'miapi:modular_helmet': function (s) { return '+15% ' + s + ' Spell Power, +8% Cooldown Reduction' },
        'miapi:modular_chestplate': function (s) { return '+15% Max Health, +2 Armor Toughness' },
        'miapi:modular_leggings': function (s) { return '+10% ' + s + ' Spell Power, +10% Knockback Resist' },
        'miapi:modular_boots': function (s) { return '+10% Movement Speed, +10% ' + s + ' Spell Power' },
    }

    function oatipReadSet(item) {
        try { let v = item.nbt.omega_set; if (v != null) { v = String(v); if (v && v !== 'undefined') return v } } catch (e) {}
        return null
    }

    ItemEvents.tooltip(event => {
        Object.keys(OATIP_PIECE).forEach(function (itemId) {
            event.addAdvanced(itemId, function (item, advanced, text) {
                let school = oatipReadSet(item)
                if (!school) return
                let name = OATIP_NAME[school] || (school.charAt(0).toUpperCase() + school.slice(1))
                let i = 1
                text.add(i++, Text.of('▣ [Omega] ' + name + ' Set').gold())
                text.add(i++, [Text.of('Piece: ').gray(), Text.of(OATIP_PIECE[itemId](name)).white()])
                text.add(i++, Text.of('▣ Full Set — Omega Ascendance').aqua())
                text.add(i++, Text.of('+25% ' + name + ' Spell Power, +10% melee & arrow damage.').gray())
                text.add(i++, Text.of('Taking damage builds Rage; at full: +30% ' + name + ' Spell').gray())
                text.add(i++, Text.of('Power + melee/arrow damage for 15s (25s cooldown).').gray())
                text.add(i++, Text.of('Below 50% HP the bonus rises to +60%.').gray())
            })
        })
    })
})()
