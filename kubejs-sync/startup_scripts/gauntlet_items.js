// [Gauntlet] custom items — the Ultima Ingot, a rare drop from the endless-mode super boss (wave.js).
// Startup script → registers on client + server, so it needs a server RESTART (not /reload) and clients
// must have the pack update (item + texture) or they'll hit a registry mismatch.
StartupEvents.registry('item', event => {
    event.create('ultima_ingot', 'basic')
        .texture('kubejs:item/ultima_ingot')
        .displayName('§bUltima Ingot')
        .rarity('epic')
})
