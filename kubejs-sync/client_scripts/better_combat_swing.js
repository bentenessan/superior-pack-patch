const CHANNEL = 'bettercombat:swing_start'

const PlayerAttackHelper = Java.loadClass('net.bettercombat.logic.PlayerAttackHelper')
const BetterCombatClientEvents = Java.loadClass('net.bettercombat.api.client.BetterCombatClientEvents')
const PlayerAttackStart = Java.loadClass('net.bettercombat.api.client.BetterCombatClientEvents$PlayerAttackStart')

BetterCombatClientEvents.ATTACK_START.register(JavaAdapter(PlayerAttackStart, {
  onPlayerAttackStart(player, attackHand) {
    const lengthTicks = Number(PlayerAttackHelper.getAttackCooldownTicksCapped(player))
    const upswingRate = Number(attackHand.upswingRate())
    const upswingTicks = Math.max(Math.round(lengthTicks * upswingRate), 1)

Client.player.sendData(CHANNEL, {
  offHand: !!attackHand.isOffHand(),
  animation: String(attackHand.attack().animation()),
  lengthTicks: lengthTicks,
  lengthSeconds: lengthTicks / 20,
  upswingRate: upswingRate,
  upswingTicks: upswingTicks
})
  }
}))
