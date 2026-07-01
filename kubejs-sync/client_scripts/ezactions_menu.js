let EZA_EzActions = null
let EZA_MenuPath = null
let EZA_RadialMenu = null
let EZA_IconSpec = null
let EZA_CustomIconManager = null
let EZA_Ready = false
let ABILITY_SYNC_CHANNELS = ['ability_menu_sync', 'superior:ability_menu_sync']
let BEASTMASTER_PET_SYNC_CHANNEL = 'superior:beastmaster_pet_menu_sync'
let BEASTMASTER_PET_OPEN_CHANNEL = 'superior:beastmaster_pet_menu_open'

try {
  EZA_EzActions = Java.loadClass('org.z2six.ezactions.api.EzActions')
  EZA_MenuPath = Java.loadClass('org.z2six.ezactions.api.MenuPath')
  EZA_RadialMenu = Java.loadClass('org.z2six.ezactions.data.menu.RadialMenu')
  EZA_IconSpec = Java.loadClass('org.z2six.ezactions.data.icon.IconSpec')
  EZA_CustomIconManager = Java.loadClass('org.z2six.ezactions.util.CustomIconManager')
  EZA_Ready = true
} catch (e) {
  EZA_Ready = false
}

function toIconId(iconId) {
  return String(iconId || 'minecraft:book')
}

function isCustomIconId(iconId) {
  let id = String(iconId || 'minecraft:book')
  return id.startsWith('custom:') || id.includes(':textures/') || id.endsWith('.png')
}

function toRuntimeIconSpec(iconId, fallbackId) {
  if (!EZA_IconSpec) return null
  let id = String(iconId || fallbackId || 'minecraft:book')
  if (isCustomIconId(id)) {
    try {
      return EZA_IconSpec.custom(id)
    } catch (e) {}
  }
  return EZA_IconSpec.item(id)
}

function reloadEzActionCustomIconsForPayload(payload) {
  if (!EZA_CustomIconManager || !payload) return
  let needsCustom = false
  try {
    if (payload.menu && isCustomIconId(payload.menu.icon)) needsCustom = true
    ;(payload.pets || []).forEach(pet => {
      if (pet && isCustomIconId(pet.icon)) needsCustom = true
    })
  } catch (e) {}
  if (!needsCustom) return
  try {
    EZA_CustomIconManager.reload()
  } catch (e) {
    console.warn('[superior] Beastmaster EZActions custom icon reload failed: ' + e)
  }
}

function normalizeCommand(command) {
  if (command == null) return ''
  let out = String(command).trim()
  // Some sources include leading '/', but EZActions uses sendCommand() which expects none.
  if (out.startsWith('/')) out = out.substring(1)
  return out.trim()
}

function asBool(value) {
  if (value === true) return true
  if (value === 1) return true
  if (value === '1') return true
  if (String(value).toLowerCase() === 'true') return true
  return false
}

function buildAbilityNote(ability) {
  if (!asBool(ability.unlocked)) return 'Locked'

  if (ability.mode === 'toggle') {
    return asBool(ability.enabled) ? 'Enabled' : 'Disabled'
  }

  if (ability.mode === 'activate') {
    if (!asBool(ability.enabled)) return 'Disabled'
    return asBool(ability.active) ? 'Active' : 'Ready'
  }

  return asBool(ability.enabled) ? 'Ready' : 'Disabled'
}

function getAbilityCommand(ability) {
  if (ability.mode === 'toggle') return ability.commandToggle
  if (ability.mode === 'activate') return ability.commandUse
  return ability.commandUse
}

function getAbilityTitleColor(ability) {
  if (!asBool(ability.unlocked)) return 'dark_gray'

  // Show current state, not next action:
  // enabled -> green, disabled -> red
  return asBool(ability.enabled) ? 'green' : 'red'
}

function getAbilityActionPrefix(ability) {
  if (ability.mode === 'toggle') {
    return asBool(ability.enabled) ? 'Deactivate' : 'Activate'
  }

  return 'Activate'
}

function getAbilityActionSymbol(ability) {
  // Show current state.
  return asBool(ability.enabled) ? '✓' : '✖'
}

function getAbilityActionSymbolColor(ability) {
  // Match current state.
  return asBool(ability.enabled) ? 'green' : 'red'
}

function toTitleComponent(ability) {
  let statusPrefix = {
    text: 'Status: ',
    color: 'gray',
    italic: false
  }

  if (!asBool(ability.unlocked)) {
    return [
      statusPrefix,
      {
        text: String(ability.title || ''),
        color: 'dark_gray',
        italic: false
      }
    ]
  }

  // Use a multi-part component so the symbol can be colored independently.
  let color = getAbilityTitleColor(ability)
  return [
    statusPrefix,
    {
      text: getAbilityActionSymbol(ability) + ' ',
      color: getAbilityActionSymbolColor(ability),
      italic: false
    },
    {
      text: String(ability.title || ''),
      color: color,
      italic: false
    }
  ]
}

function toBundleUpsertJson(id, title, icon, menuMeta) {
  return {
    type: 'BUNDLE',
    id: id,
    title: title,
    note: '',
    icon: toIconId(icon),
    hideFromMainRadial: asBool(menuMeta.hideFromMainRadial),
    bundleKeybindEnabled: asBool(menuMeta.bundleKeybindEnabled),
    children: []
  }
}

function toAbilityUpsertJson(ability) {
  return {
    type: 'ACTION',
    id: ability.menuItemId,
    title: toTitleComponent(ability),
    note: buildAbilityNote(ability),
    icon: toIconId(ability.icon || 'minecraft:book'),
    action: {
      type: 'COMMAND',
      command: normalizeCommand(getAbilityCommand(ability)),
      delayTicks: 0,
      cycleCommands: false
    }
  }
}

function toPetTitleComponent(pet) {
  if (asBool(pet.selected)) {
    return [
      {
        text: '✓ ',
        color: 'green',
        italic: false
      },
      {
        text: String(pet.title || pet.petKey || ''),
        color: 'green',
        italic: false
      }
    ]
  }

  return {
    text: String(pet.title || pet.petKey || ''),
    color: 'white',
    italic: false
  }
}

function toPetBundleUpsertJson(menuMeta) {
  return {
    type: 'BUNDLE',
    id: menuMeta.bundleId,
    title: menuMeta.title,
    note: '',
    icon: toIconId(menuMeta.icon || 'kubejs:beastmaster_totem'),
    hideFromMainRadial: asBool(menuMeta.hideFromMainRadial),
    bundleKeybindEnabled: asBool(menuMeta.bundleKeybindEnabled),
    children: []
  }
}

function toPetActionUpsertJson(pet) {
  return {
    type: 'ACTION',
    id: pet.menuItemId,
    title: toPetTitleComponent(pet),
    note: asBool(pet.selected) ? 'Selected' : 'Set pet',
    icon: toIconId(pet.icon || 'kubejs:beastmaster_totem'),
    action: {
      type: 'COMMAND',
      command: normalizeCommand(pet.command),
      delayTicks: 0,
      cycleCommands: false
    }
  }
}

function isBlockedMenuAbility(ability) {
  return !!ability && asBool(ability.keySlotOwned)
}

function sortAbilities(list) {
  list.sort((a, b) => {
    let sa = Number(a.sort || 0)
    let sb = Number(b.sort || 0)
    if (sa !== sb) return sa - sb
    return String(a.id).localeCompare(String(b.id))
  })
}

function tryUpsert(menuWrite, path, jsonObj, label) {
  let raw = JSON.stringify(jsonObj)
  let shouldLog = String(label || '').startsWith('beastmaster:')

  try {
    let result = menuWrite.upsertFromJson(path, raw)
    if (result && result.isPresent && result.isPresent()) {
      let id = String(result.get())
      if (id === 'invalid') {
        if (shouldLog) console.warn('[superior] EZActions upsert invalid [' + label + ']: payload=' + raw)
        return false
      }
      //console.info('[superior] Class EZActions upsert[' + label + ']: ' + id)
      return true
    }

    if (shouldLog) console.warn('[superior] EZActions upsert empty [' + label + ']: payload=' + raw)
    return false
  } catch (e) {
    if (shouldLog) console.warn('[superior] EZActions upsert failed [' + label + ']: ' + e + ' payload=' + raw)
    return false
  }
}

function removeInvalidMenuEntries(menuWrite) {
  if (!menuWrite) return 0

  let removed = 0
  for (let i = 0; i < 128; i++) {
    if (!menuWrite.removeById('invalid')) break
    removed++
  }

  return removed
}

function removeDuplicateTitleBundles(list, title, keepId) {
  if (!list) return

  for (let i = list.size() - 1; i >= 0; i--) {
    let item = list.get(i)
    if (!item) continue
    if (!item.isCategory()) continue
    if (String(item.title()) !== String(title)) continue
    if (String(item.id()) === String(keepId)) continue
    list.remove(i)
  }
}

function patchMenuItemsRecursive(list, patchById) {
  if (!list) return

  for (let i = 0; i < list.size(); i++) {
    let item = list.get(i)
    if (!item) continue

    let kids = null
    try {
      kids = item.childrenMutable()
    } catch (e) {}
    patchMenuItemsRecursive(kids, patchById)

    let id = String(item.id())
    let patch = patchById[id]
    if (!patch) continue

    let next = item
    if (patch.icon != null && EZA_IconSpec != null) next = next.withIcon(toRuntimeIconSpec(patch.icon, 'minecraft:book'))
    if (patch.hideFromMainRadial != null) next = next.withHideFromMainRadial(asBool(patch.hideFromMainRadial))
    if (patch.bundleKeybindEnabled != null) next = next.withBundleKeybindEnabled(asBool(patch.bundleKeybindEnabled))

    list.set(i, next)
  }
}

function applyBeastmasterPetIconPatch(payload) {
  if (!EZA_RadialMenu) return
  if (!payload || !payload.menu) return

  let rootList = EZA_RadialMenu.rootMutable()
  if (!rootList) return

  let patchById = {}
  if (payload.menu.bundleId) {
    patchById[payload.menu.bundleId] = {
      icon: payload.menu.icon || 'kubejs:beastmaster_totem',
      hideFromMainRadial: payload.menu.hideFromMainRadial,
      bundleKeybindEnabled: payload.menu.bundleKeybindEnabled
    }
  }

  ;(payload.pets || []).forEach(pet => {
    if (!pet || !pet.menuItemId) return
    patchById[pet.menuItemId] = {
      icon: pet.icon || 'kubejs:beastmaster_totem'
    }
  })

  patchMenuItemsRecursive(rootList, patchById)
}

function menuContainsIdRecursive(list, id) {
  if (!list) return false
  let target = String(id)

  for (let i = 0; i < list.size(); i++) {
    let item = list.get(i)
    if (!item) continue
    if (String(item.id()) === target) return true

    let kids = null
    try {
      kids = item.childrenMutable()
    } catch (e) {}
    if (menuContainsIdRecursive(kids, target)) return true
  }

  return false
}

function applyRuntimeIconAndLabelPatch(payload) {
  if (!EZA_RadialMenu) return
  if (!payload || !payload.menu) return

  let menuMeta = payload.menu
  let rootList = EZA_RadialMenu.rootMutable()
  if (!rootList) return

  // Keep class bundles at radial root; remove stale duplicates there.
  removeDuplicateTitleBundles(rootList, menuMeta.classBundleTitle, menuMeta.classBundleId)

  let patchById = {}
  patchById[menuMeta.classBundleId] = {
    title: menuMeta.classBundleTitle,
    note: '',
    icon: menuMeta.classBundleIcon || 'minecraft:book',
    hideFromMainRadial: menuMeta.hideFromMainRadial,
    bundleKeybindEnabled: menuMeta.bundleKeybindEnabled
  }

  payload.abilities.forEach(ability => {
    if (isBlockedMenuAbility(ability)) return
    if (!asBool(ability.unlocked) && !asBool(payload.showLockedInMenu)) return
    patchById[ability.menuItemId] = {
      title: ability.title,
      note: buildAbilityNote(ability),
      icon: ability.icon || 'minecraft:book'
    }
  })

  patchMenuItemsRecursive(rootList, patchById)
}

function syncClassEzActions(payload) {
  if (!EZA_Ready) return
  if (!payload || !payload.menu || !payload.classId) return

  let api = null
  try {
    api = EZA_EzActions.get()
  } catch (e) {
    return
  }
  if (!api) return

  let menuWrite = null
  try {
    menuWrite = api.menuWrite()
  } catch (e) {
    return
  }
  if (!menuWrite) return

  let rootPath = EZA_MenuPath.root()
  let menuMeta = payload.menu

  let unlockedCount = 0
  payload.abilities.forEach(ability => {
    if (ability.unlocked) unlockedCount++
  })

  let removedInvalid = removeInvalidMenuEntries(menuWrite)
  if (removedInvalid > 0) {
    //console.info('[superior] Class EZActions cleanup: removed invalid entries=' + removedInvalid)
  }

  // Always clear known class actions first so note/icon updates are deterministic.
  menuWrite.removeById(menuMeta.rootBundleId)
  menuWrite.removeById(menuMeta.classBundleId)
  ;(payload.removedMenuItemIds || []).forEach(id => {
    menuWrite.removeById(String(id))
  })
  payload.abilities.forEach(ability => {
    menuWrite.removeById(ability.menuItemId)
  })

  if (!asBool(payload.classActive)) {
    // Class is not active: remove class bundle and any orphan action items.
    //console.info('[superior] Class EZActions sync: classActive=false class=' + payload.classId + ' unlocked=' + unlockedCount)
    applyRuntimeIconAndLabelPatch(payload)
    api.persist()
    return
  }

  let classPath = rootPath.child(menuMeta.classBundleTitle)

  tryUpsert(
    menuWrite,
    rootPath,
    toBundleUpsertJson(menuMeta.classBundleId, menuMeta.classBundleTitle, menuMeta.classBundleIcon || 'minecraft:book', menuMeta),
    'class:' + payload.classId
  )

  let entries = []
  payload.abilities.forEach(ability => {
    entries.push(ability)
  })
  sortAbilities(entries)

  entries.forEach(ability => {
    if (isBlockedMenuAbility(ability)) {
      menuWrite.removeById(ability.menuItemId)
      return
    }

    if (!asBool(ability.unlocked) && !asBool(payload.showLockedInMenu)) {
      menuWrite.removeById(ability.menuItemId)
      return
    }

    tryUpsert(menuWrite, classPath, toAbilityUpsertJson(ability), 'ability:' + ability.id)
  })

  applyRuntimeIconAndLabelPatch(payload)
  api.persist()
}

function syncBeastmasterPetEzActions(payload) {
  if (!EZA_Ready) {
    console.warn('[superior] Beastmaster EZActions sync skipped: EZActions bridge is not ready')
    return
  }
  if (!payload || !payload.menu) return
  reloadEzActionCustomIconsForPayload(payload)

  let api = null
  try {
    api = EZA_EzActions.get()
  } catch (e) {
    console.warn('[superior] Beastmaster EZActions API lookup failed: ' + e)
    return
  }
  if (!api) return

  let menuWrite = null
  try {
    menuWrite = api.menuWrite()
  } catch (e) {
    console.warn('[superior] Beastmaster EZActions menuWrite lookup failed: ' + e)
    return
  }
  if (!menuWrite) return

  let rootPath = EZA_MenuPath.root()
  let menuMeta = payload.menu

  removeInvalidMenuEntries(menuWrite)
  menuWrite.removeById(menuMeta.bundleId)
  ;(payload.removedMenuItemIds || []).forEach(id => {
    menuWrite.removeById(String(id))
  })
  ;(payload.pets || []).forEach(pet => {
    menuWrite.removeById(String(pet.menuItemId))
  })

  if (!payload.pets || payload.pets.length <= 0) {
    api.persist()
    return
  }

  removeDuplicateTitleBundles(EZA_RadialMenu.rootMutable(), menuMeta.title, menuMeta.bundleId)

  let bundleOk = tryUpsert(
    menuWrite,
    rootPath,
    toPetBundleUpsertJson(menuMeta),
    'beastmaster:pets'
  )
  if (!bundleOk) {
    console.warn('[superior] Beastmaster EZActions failed to upsert bm_pets bundle')
  }

  let petPath = rootPath.child(menuMeta.title)
  payload.pets.forEach(pet => {
    if (!asBool(pet.unlocked)) return
    let petOk = tryUpsert(menuWrite, petPath, toPetActionUpsertJson(pet), 'beastmaster:pet:' + pet.petKey)
    if (!petOk) {
      console.warn('[superior] Beastmaster EZActions failed to upsert pet action ' + pet.petKey + ' id=' + pet.menuItemId)
    }
  })

  applyBeastmasterPetIconPatch(payload)
  api.persist()

  if (!menuContainsIdRecursive(EZA_RadialMenu.rootMutable(), menuMeta.bundleId)) {
    console.warn('[superior] Beastmaster EZActions sync completed without bm_pets in the radial model')
  }
}

function openBeastmasterPetEzActions(payload) {
  syncBeastmasterPetEzActions(payload)
  if (!EZA_Ready || !payload || !payload.menu) return

  try {
    EZA_EzActions.get().openRadialAtBundle(String(payload.menu.bundleId))
  } catch (e) {
    console.warn('[superior] Beastmaster EZActions open by bundle id failed: ' + e)
    try {
      EZA_EzActions.get().openRadialAtBundle(String(payload.menu.title))
    } catch (ignored) {
      console.warn('[superior] Beastmaster EZActions open by title failed: ' + ignored)
    }
  }
}

ABILITY_SYNC_CHANNELS.forEach(channel => {
  NetworkEvents.dataReceived(channel, event => {
    if (!event || !event.data) return

    let payload = event.data
    if (!payload.classId || !payload.menu) return

    let unlockedCount = 0
    payload.abilities.forEach(ability => {
      if (ability.unlocked) unlockedCount++
    })

    //console.info('[superior] Class EZActions packet[' + channel + ']: class=' + payload.classId + ', classActive=' + payload.classActive + ', unlocked=' + unlockedCount)

    try {
      syncClassEzActions(payload)
    } catch (e) {
      //console.warn('[superior] Class EZActions sync crash [' + channel + ']: ' + e)
    }
  })
})

NetworkEvents.dataReceived(BEASTMASTER_PET_SYNC_CHANNEL, event => {
  if (!event || !event.data) return
  try {
    syncBeastmasterPetEzActions(event.data)
  } catch (e) {
    console.warn('[superior] Beastmaster EZActions sync crash: ' + e)
  }
})

NetworkEvents.dataReceived(BEASTMASTER_PET_OPEN_CHANNEL, event => {
  if (!event || !event.data) return
  try {
    openBeastmasterPetEzActions(event.data)
  } catch (e) {
    console.warn('[superior] Beastmaster EZActions open crash: ' + e)
  }
})
