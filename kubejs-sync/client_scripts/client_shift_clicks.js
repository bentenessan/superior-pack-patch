function isSkillTotemOrb(item) {
  let valid = global.validCurioSkillOrbs || global.validSkillTotemOrbs || []
  return valid.includes(item.id)
}

function isAffixOrb(item) {
  return global.validAffixOrbs.includes(item.id)
}

function isSpellContainerOrb(item) {
  return global.validSpellContainerOrbs && global.validSpellContainerOrbs.includes(item.id)
}

function isMiscOrb(item) {
  return global.validMiscOrbs && global.validMiscOrbs.includes(item.id)
}

function isMuyBienOrb(item) {
  return global.validMuyBienOrbs && global.validMuyBienOrbs.includes(item.id)
}

function isEmptyStack(stack) {
  if (!stack) return true
  if (stack.empty) return true
  try {
    return typeof stack.isEmpty === 'function' ? stack.isEmpty() : false
  } catch (e) {
    return false
  }
}

function getSlotItem(slot) {
  if (!slot) return null

  try {
    if (typeof slot.getItem === 'function') {
      let stack = slot.getItem()
      if (!isEmptyStack(stack)) return stack
    }
  } catch (e) {}

  try {
    if (slot.item != null && !isEmptyStack(slot.item)) {
      return slot.item
    }
  } catch (e) {}

  return null
}


function shouldBlockCreative(player) {
  if (!player.isCreative()) return false

  // same debounce behavior as your code
  if (player.persistentData.getBoolean('creative_message') !== true) {
    player.tell('§7You need to be in §cSurvival mode§7 to use this.')
    player.persistentData.putBoolean('creative_message', true)
    Utils.server.scheduleInTicks(10, () => {
      player.persistentData.putBoolean('creative_message', false)
    })
  }
  return true
}

function getHoveredItem(screen) {
  let hovered = screen.hoveredSlot
  if (!hovered) return null
  return getSlotItem(hovered)
}

function getHoveredSlotId(screen) {
  if (!screen || !screen.hoveredSlot) return -1
  try {
    if (typeof screen.hoveredSlot.index === 'function') return Number(screen.hoveredSlot.index())
    if (screen.hoveredSlot.index != null) return Number(screen.hoveredSlot.index)
  } catch (e) {
  }

  try {
    return Number(screen.hoveredSlot.slot)
  } catch (e2) {
    return -1
  }
}

function getHoveredRawSlotId(screen) {
  if (!screen || !screen.hoveredSlot) return -1
  try {
    return Number(screen.hoveredSlot.slot)
  } catch (e) {
    return -1
  }
}

function makeMenuSlotTarget(mouseItem, orbType, screen, hoveredItem) {
  return {
    mouseItem: mouseItem,
    orbType: orbType,
    targetMode: 'menu_slot',
    itemSlot: getHoveredSlotId(screen),
    rawItemSlot: getHoveredRawSlotId(screen),
    targetItemId: hoveredItem ? String(hoveredItem.id) : ''
  }
}

function isCollectionEmpty(value) {
  if (value == null) return true
  try {
    if (typeof value.isEmpty === 'function') return value.isEmpty()
  } catch (e) {}
  try {
    if (typeof value.size === 'function') return value.size() <= 0
  } catch (e) {}
  try {
    return value.length <= 0
  } catch (e) {}
  return false
}

function getStackItemObject(stack) {
  if (!stack) return null
  try {
    if (typeof stack.getItem === 'function') return stack.getItem()
  } catch (e) {}
  try {
    if (stack.item != null) return stack.item
  } catch (e) {}
  return null
}

let ClientCuriosApi = null
let ClientCuriosHelper = null
try {
  ClientCuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')
  ClientCuriosHelper = ClientCuriosApi.getCuriosHelper()
} catch (e) {
  ClientCuriosApi = null
  ClientCuriosHelper = null
}

function isCurioTargetItem(stack) {
  if (isEmptyStack(stack)) return false
  if (ClientCuriosApi == null && ClientCuriosHelper == null) return false

  try {
    if (ClientCuriosApi != null) {
      let slots = ClientCuriosApi.getItemStackSlots(stack)
      if (!isCollectionEmpty(slots)) return true
    }
  } catch (e) {}

  try {
    if (ClientCuriosHelper != null) {
      let curio = ClientCuriosHelper.getCurio(stack)
      if (curio != null && curio.isPresent()) return true
    }
  } catch (e) {}

  try {
    if (ClientCuriosHelper != null) {
      let rawItem = getStackItemObject(stack)
      if (rawItem != null) {
        let slotTypes = ClientCuriosHelper.getCurioTags(rawItem)
        if (!isCollectionEmpty(slotTypes)) return true
      }
    }
  } catch (e) {}

  return false
}

function logDiscoveryClient(step, message) {
  console.info(`[curio_discovery_client] ${step}: ${message}`)
}

// ---------- main ----------
const GLFW = Java.loadClass('org.lwjgl.glfw.GLFW')
let wasShiftDown = false

ClientEvents.tick(event => {
  let screen = Client.screen
  if (!screen) return

  let screenClass = screen.class.toString()
  let isInventoryScreen =
    screenClass.includes('client.gui.screens.inventory') ||
    screenClass.includes('CuriosScreenV2')

  if (!isInventoryScreen) return
  let windowPtr = Client.getWindow().getWindow()
  let isShiftDown =
    GLFW.glfwGetKey(windowPtr, GLFW.GLFW_KEY_LEFT_SHIFT) === GLFW.GLFW_PRESS ||
    GLFW.glfwGetKey(windowPtr, GLFW.GLFW_KEY_RIGHT_SHIFT) === GLFW.GLFW_PRESS

  // only act on up -> down
  if (!isShiftDown || wasShiftDown) {
    wasShiftDown = isShiftDown
    return
  }

  let player = event.player
  let mouseItem = player.mouseItem
  if (!mouseItem) return
  let hoveredItem = getHoveredItem(screen)
  if (!hoveredItem) return

  // Rule list (easy to extend later)
  // Each rule returns { type, item } or null
  let rules = [
    () => (isCurioTargetItem(hoveredItem) && isSkillTotemOrb(mouseItem))
      ? makeMenuSlotTarget(mouseItem, 'curio_skill', screen, hoveredItem)
      : null,

    () => (isSpellContainerOrb(mouseItem) && !isCurioTargetItem(hoveredItem))
      ? makeMenuSlotTarget(mouseItem, 'spell_container', screen, hoveredItem)
      : null,

    () => (isAffixOrb(mouseItem) && !isCurioTargetItem(hoveredItem) && isValidEquipmentAffixTarget(hoveredItem))
      ? makeMenuSlotTarget(mouseItem, 'affix', screen, hoveredItem)
      : null,

    () => (isMuyBienOrb(mouseItem) && !isCurioTargetItem(hoveredItem) && isValidEquipmentAffixTarget(hoveredItem))
      ? makeMenuSlotTarget(mouseItem, 'muy_bien', screen, hoveredItem)
      : null,

    () => (isMiscOrb(mouseItem))
      ? makeMenuSlotTarget(mouseItem, 'misc', screen, hoveredItem)
      : null,
  ]

  let data = null
  for (let rule of rules) {
    data = rule()
    if (data) break
  }

  if (mouseItem.id === 'kubejs:orb_of_infusion') {
    logDiscoveryClient('evaluate', `hovered=${hoveredItem.id} hoveredSlot=${screen.hoveredSlot ? screen.hoveredSlot.slot : 'null'} hoveredIsCurio=${isCurioTargetItem(hoveredItem)} data=${data ? data.orbType : 'null'}`)
  }

  if (!data) {
    wasShiftDown = isShiftDown
    return
  }

  // creative block shared for both paths (same behavior)
  if (shouldBlockCreative(player)) {
    wasShiftDown = isShiftDown
    return
  }
  //player.tell(screen.hoveredSlot.slot)
  // data is now guaranteed populated and valid
  if (mouseItem.id === 'kubejs:orb_of_infusion') {
    logDiscoveryClient('sendData', `orbType=${data.orbType} slot=${data.itemSlot} mouseItem=${mouseItem.id} hovered=${hoveredItem.id}`)
  }
  player.sendData('kubejs:modify_item', data)

  wasShiftDown = isShiftDown
})


const LootCategory = Java.loadClass("dev.shadowsoffire.apotheosis.adventure.loot.LootCategory");

/**
 * @param stack ItemStack
 * @return boolean – true if this equipment item can have Apotheosis affixes
 */
function isValidEquipmentAffixTarget (stack) {
  if (isEmptyStack(stack)) return false;

  const cat = LootCategory.forItem(stack); // figures out sword/bow/armor/etc.
  return !cat.isNone(); // NONE = not affix-compatible
};
