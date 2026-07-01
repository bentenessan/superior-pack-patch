// Silences repeated FamiliarsLib WARN spam, e.g.:
//   "Tag alshanex_familiars:druid/attack is not known/registered!"
// Cause: alshanex_familiars ships these as irons_spellbooks:spells tags, but the
// Iron's Spellbooks SpellRegistry tag-manager does not register them in this
// mod-version combo, so FamiliarsLib's HelperMethods.getSpellsFromTag logs a WARN
// on every familiar spell lookup (~1x/sec per active familiar).
//
// This raises ONLY the net.alshanex.familiarslib.FamiliarsLib logger to ERROR, so
// real errors from it still show. Purely cosmetic log change; no gameplay effect.
// Reversible: delete this file and restart.
try {
    let Configurator = Java.loadClass('org.apache.logging.log4j.core.config.Configurator')
    let Level = Java.loadClass('org.apache.logging.log4j.Level')
    Configurator.setLevel('net.alshanex.familiarslib.FamiliarsLib', Level.ERROR)
    console.log('[superior] Silenced FamiliarsLib tag-spam logger (level -> ERROR)')
} catch (err) {
    console.log('[superior] Failed to silence FamiliarsLib logger: ' + err)
}
