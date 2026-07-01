// Renders Muy Bien Infusions as gold tooltip lines on any item that carries the
// muy_bien_infusions NBT (written by the Orb of Muy Bien Infusion). Isolated in its
// own file so the wildcard tooltip can't affect the main tooltips.js. The NBT reader
// + value ladder come from startup_scripts/muy_bien_specs.js (shared with the server).

ItemEvents.tooltip(event => {
  event.addAdvanced('*', (item, advanced, text) => {
    if (!item || item.empty || !item.nbt || !item.nbt.muy_bien_infusions) return
    let infusions = global.readMuyBienInfusions ? global.readMuyBienInfusions(item) : []
    if (!infusions || infusions.length === 0) return
    text.add(Text.of('✦ Muy Bien Infusions').gold().bold())
    infusions.forEach(inf => {
      text.add(Text.of(' ' + global.muyBienInfusionText(inf.stat, inf.level)).gold())
    })
  })
})
