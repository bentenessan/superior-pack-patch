// ============================================================================
// [Ultima] JEI visibility — the craftable [Ultima] pieces are NBT variants of OTHER mods' items,
// and JEI's ingredient list only shows registered items, so searching "ultima" found nothing.
// This adds the 8 craftable pieces as browsable JEI entries + an info page on the Ultima Ingot.
// The crafting recipes themselves (kubejs:ultima/*) are normal synced recipes and already render
// under the base items / ingot uses — this file is DISCOVERY only, it grants nothing.
// NAME/BASE tables + rainbow-name builder are DUPLICATED from server_scripts/Ultima/ultima_gear.js
// (client scripts can't read server-script globals) — keep them in sync when a base changes there.
// ============================================================================
(function () {
    const BASES = {
        helmet:     'fantasy_armor:dark_lord_helmet',
        chestplate: 'fantasy_armor:dark_lord_chestplate',
        leggings:   'fantasy_armor:dark_lord_leggings',
        boots:      'fantasy_armor:dark_lord_boots',
        sanguine:   'minecells:blood_sword',
        gloom:      'minecells:balanced_blade',
        bow:        'alexscaves:dreadbow',
        staff:      'iceandfire:dread_queen_staff',
    }
    const NAMES = {
        helmet: "Dark Lord's Crown", chestplate: "Dark Lord's Cuirass", leggings: "Dark Lord's Greaves", boots: "Dark Lord's Sabatons",
        sanguine: 'Sanguine', gloom: 'Gloom', bow: 'Ultima Longbow', staff: "Dark Lord's Cadence",
    }
    // static rainbow display name (verbatim from ultima_gear.js)
    function uHsvHex(h, s, v) {
        let c = v * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = v - c, r = 0, g = 0, b = 0
        if (h < 60) { r = c; g = x } else if (h < 120) { r = x; g = c } else if (h < 180) { g = c; b = x }
        else if (h < 240) { g = x; b = c } else if (h < 300) { r = x; b = c } else { r = c; b = x }
        function hh(z) { let n = Math.round((z + m) * 255); if (n < 0) n = 0; if (n > 255) n = 255; let t = n.toString(16); return t.length < 2 ? '0' + t : t }
        return '#' + hh(r) + hh(g) + hh(b)
    }
    function uRainbow(text) {
        let n = text.length, parts = []
        for (let i = 0; i < n; i++) {
            let hue = (n <= 1) ? 280 : (i / (n - 1)) * 300
            let ch = text.charAt(i); if (ch === "'") ch = "\\'"   // escape ' so it can't close the single-quoted SNBT Name
            parts.push('{"text":"' + ch + '","color":"' + uHsvHex(hue, 0.9, 1.0) + '","italic":false,"bold":true}')
        }
        return '[' + parts.join(',') + ']'
    }
    // JEI display NBT: marker + Unbreakable + rainbow name, plus one hint Lore line. The full stat
    // Lore lives server-side (applied on craft/give) — not duplicated here, the hint line stands in.
    function jeiNBT(key) {
        let ench = (key === 'bow') ? ',Enchantments:[{id:"minecraft:infinity",lvl:1s}]' : ''
        let lore = "'" + '{"text":"Forged from Ultima Ingots","color":"#9d4edd","italic":false}' + "'"
        return '{ultima:"' + key + '",Unbreakable:1b' + ench + ',display:{Name:' + "'" + uRainbow('[Ultima] ' + NAMES[key]) + "'" + ',Lore:[' + lore + ']}}'
    }

    JEIEvents.addItems(function (event) {
        Object.keys(BASES).forEach(function (k) {
            let st = Item.of(BASES[k], jeiNBT(k))
            if (!st.empty) event.add(st)
        })
    })

    JEIEvents.information(function (event) {
        if (Item.of('kubejs:ultima_ingot').empty) return
        event.addItem('kubejs:ultima_ingot', [
            Text.of('Dropped by the Nightwarden — the every-5th-wave super boss of the Endless Gauntlet (Tier IV).'),
            Text.of('Armor crafts from Ultima Ingots alone in the standard helmet/chest/leggings/boots shapes.'),
            Text.of('Weapons craft shapeless from 3 Ingots + a catalyst: Netherite Sword → Sanguine, Echo Shard → Gloom, Bow → Ultima Longbow, Book → Dark Lord\'s Cadence.'),
        ])
    })
})()
