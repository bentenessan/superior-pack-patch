// [Omega] signature-set material tooltips. Any modular item built with a school's kubejs.<sig> material
// shows the set name + a one-line summary. Client render only; effects in omega_signature_sets.js.
(function () {
    const SETS = {
        'kubejs.cinderbrute': ['Cinderbrute', '§cBrute force — +melee, Ragnarok fire shockwaves, low-HP resilience'],
        'kubejs.reaver':      ['Crimson Reaver', '§4Attack speed + HP-scaling drain; Blood Frenzy at max Bloodlust'],
        'kubejs.tidewarden':  ['Tidewarden', '§bSupport — Wellspring heals & buffs nearby allies'],
        'kubejs.voidwrought': ['Voidwrought', '§5Plasma & gravity — Event Horizon pulls and melts foes'],
        'kubejs.permafrost':  ['Permafrost', '§3Piercing frost — Glacial Volley freezes lines of enemies'],
        'kubejs.thornward':   ['Thornward', '§2Tank — Retribution reflects damage; spike nova at low HP'],
    }
    function modsOf(item) { try { return item.nbt ? String(item.nbt.miapi_modules) : null } catch (e) { return null } }
    ItemEvents.tooltip(function (event) {
        event.addAdvanced('@miapi', function (item, advanced, text) {
            let m = modsOf(item); if (!m) return
            for (let key in SETS) {
                if (m.indexOf(key) >= 0) {
                    let s = SETS[key], i = 1
                    text.add(i++, Text.of('⚡ [Omega] ' + s[0] + ' Set').gold())
                    text.add(i++, Text.of(s[1]))
                    break
                }
            }
        })
    })
})()
