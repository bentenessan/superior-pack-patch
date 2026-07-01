let hideItems = [
    'illusion_onslaught:spirit_dust',
    'samurai_dynasty:ruby_ore',
    'samurai_dynasty:deepslate_ruby_ore',
    'samurai_dynasty:jade_ore',
    'samurai_dynasty:deepslate_jade_ore',
    'samurai_dynasty:aquamarine_ore',
    'samurai_dynasty:deepslate_aquamarine_ore',
    //'iceandfire:sapphire_ore',
    //'iceandfire:deepslate_sapphire_ore',
	//'iceandfire:silver_ore',
	//'iceandfire:deepslate_silver_ore',
    //'call_of_yucutan:jade_ore',
    //'call_of_yucutan:deepslate_jade_ore',
    //'call_of_yucutan:jade',
    //'call_of_yucutan:jade_sword',
    //'call_of_yucutan:jade_pickaxe',
   // 'call_of_yucutan:jade_axe',
   // 'call_of_yucutan:jade_shovel',
   //// 'call_of_yucutan:jade_hoe',
   // 'call_of_yucutan:jade_helmet',
  //  'call_of_yucutan:jade_chestplate',
  //  'call_of_yucutan:jade_leggings',
 //   'call_of_yucutan:jade_boots',
    'scguns:anthralite_ore',
    'scguns:deepslate_anthralite_ore',
    'scguns:sulfur_ore',
    'scguns:deepslate_sulfur_ore',
    'scguns:nether_sulfur_ore',
    'scguns:vehement_coal_ore',
    'scguns:anthralite_ingot', 
    'scguns:scorched_ingot', 
    'scguns:treated_iron_ingot', 
    'scguns:treated_brass_ingot', 
    'scguns:diamond_steel_ingot',
    'kubejs:exalted_rune_of_the_soulbinder',
    'kubejs:insanity_orb',
	'magistuarmoryaddon:steel_bar_mace', 'magistuarmoryaddon:steel_battleaxe', 'magistuarmoryaddon:steel_round_mace', 'magistuarmoryaddon:steel_war_hammer', 'magistuarmoryaddon:steel_bollock_dagger', 'magistuarmoryaddon:steel_dagger', 'magistuarmoryaddon:steel_parrying_dagger', 'magistuarmoryaddon:steel_rondel_dagger', 'magistuarmoryaddon:steel_executioners_sword', 'magistuarmoryaddon:steel_german_greatsword', 'magistuarmoryaddon:steel_two_handed_messer', 'magistuarmoryaddon:steel_english_poleaxe', 'magistuarmoryaddon:steel_french_halberd', 'magistuarmoryaddon:steel_italian_poleaxe', 'magistuarmoryaddon:steel_swiss_halberd', 'magistuarmoryaddon:steel_lance', 'magistuarmoryaddon:steel_broadaxe', 'magistuarmoryaddon:steel_daneaxe', 'magistuarmoryaddon:steel_gallowglass_axe', 'magistuarmoryaddon:steel_hammer_spear', 'magistuarmoryaddon:steel_two_handed_evening_star', 'magistuarmoryaddon:steel_falchion', 'magistuarmoryaddon:steel_cutlass', 'magistuarmoryaddon:steel_longsword', 'magistuarmoryaddon:steel_rapier', 'magistuarmoryaddon:steel_scimitar', 'magistuarmoryaddon:steel_sidesword', 'magistuarmoryaddon:steel_glaive', 'magistuarmoryaddon:steel_scythe', 'magistuarmoryaddon:steel_short_spear',
    'kubejs:soulbinders_crow', 'kubejs:soulbinders_bald_eagle', 'kubejs:soulbinders_capuchin_monkey', 'kubejs:soulbinders_tarantula_hawk', 'kubejs:soulbinders_elephant', 'kubejs:soulbinders_komodo_dragon', 'kubejs:soulbinders_kangaroo', 'kubejs:soulbinders_gorilla', 'kubejs:soulbinders_crocodile', 'kubejs:feel_horn', 'kubejs:soulbinders_tremorsaurus', 'kubejs:soulbinders_vallumraptor', 'kubejs:soulbinders_subterranodon', 'kubejs:soulbinders_cockatrice', 'kubejs:soulbinders_hippogryph', 'kubejs:soulbinders_caiman', 'kubejs:soulbinders_grizzly_bear', 'kubejs:sing_horn', 'kubejs:admire_horn', 'kubejs:ponder_horn', 'kubejs:yearn_horn', 'kubejs:seek_horn', 'kubejs:dream_horn', 'kubejs:combat_dash_ability', 'kubejs:combatroll_recharge_ability', 'kubejs:combatroll_count_ability', 'kubejs:trapped_souls', 'kubejs:ammo_loot_box', 'kubejs:arcana_loot_box', 'kubejs:marksman','kubejs:throwing_knife', 'kubejs:exalted_rune_of_the_shinobi', 'kubejs:rune_of_the_shinobi', 'kubejs:warlock', 'kubejs:vanguard', 'kubejs:marksman', 'kubejs:beastmaster',
    'kubejs:essence_of_storms', 'kubejs:essence_of_whispers', 'kubejs:essence_of_aether', 'kubejs:essence_of_eternity', 'kubejs:essence_of_the_void', 'kubejs:essence_of_giants', 'kubejs:essence_of_sorrow', 'kubejs:essence_of_life', 'kubejs:essence_of_earth', 'kubejs:trial_blood_oath', 'kubejs:bloodlust', 'kubejs:frozen_prison', 'kubejs:reaper', 'kubejs:lich', 'kubejs:skybound', 'kubejs:zephyr', 'kubejs:epic_druid_totem', 'kubejs:common_druid_totem', 'kubejs:uncommon_druid_totem', 'kubejs:rare_druid_totem', Item.of('kubejs:shinobi_dagger', '{Damage:0,reinforce_level:0,reinforce_max:10}'), 'kubejs:return_home', 'kubejs:dragon_caller', 'kubejs:essence_of_cinders', 'kubejs:essence_of_darkness', 'kubejs:essence_of_light',
    'kubejs:subclass_elixir',
    'kubejs:cleansing_serum',
    'kubejs:head_hunter',
    'apotheosis:simple_reforging_table', 'apotheosis:reforging_table', 'apotheosis:augmenting_table',

    'kubejs:common_sentient_stone',
    'kubejs:uncommon_sentient_stone',
    'kubejs:rare_sentient_stone',
    'kubejs:sentient_stone',

    'kubejs:socketing_chip',
    'kubejs:common_socketing_chip',
    'kubejs:uncommon_socketing_chip',
    'kubejs:rare_socketing_chip',
    'kubejs:firewyrm_flask', 
    'kubejs:molten_sands', 
    'kubejs:raging_tempest', 
    'kubejs:dark_winds', 
    'kubejs:frostfire_dew', 
    'kubejs:serpents_tears', 
    'kubejs:stormheart_lullaby', 
    'kubejs:moonlit_mist', 
    'kubejs:captains_elixir', 
    'kubejs:elderwood_sap', 
    'kubejs:valkyries_blood', 
    'kubejs:forgotten_divinity', 
    'kubejs:psionic_volley', 
    'kubejs:essence_of_frost', 
    'kubejs:soulbinders_gate', 
    'kubejs:subclass_special', 
    'kubejs:subclass_armor',
    'kubejs:shinobi_dagger', 
    'kubejs:nightmare_orb', 
    'kubejs:respec_skills', 
    'kubejs:respec_exalted_skills',
    'apotheosis:sigil_of_socketing', 'apotheosis:gem_fused_slate', 'apotheosis:sigil_of_rebirth', 'apotheosis:sigil_of_enhancement', 'apotheosis:sigil_of_unnaming',
    'kubejs:rune_of_the_soulbinder',
    //'kubejs:purified_rune_of_the_soulbinder',
    'kubejs:rune_of_the_shinobi',
    'kubejs:rune_of_the_vampire',
    'kubejs:rune_of_the_trickster',
    'kubejs:rune_of_the_monk',
    'kubejs:rune_of_the_spellblade',
    'prefab:item_ski_lodge',
    'prefab:item_wind_mill',
    'prefab:item_modern_buildings',
    'prefab:item_modern_buildings_improved',
    'prefab:item_modern_buildings_advanced',
    'prefab:item_farm',
    'prefab:item_farm_improved',
    'prefab:item_house_advanced',
    'prefab:item_bulldozer',
    'prefab:item_farm_advanced',
    'prefab:item_creative_bulldozer',
    'prefab:item_machinery_tower',
    'prefab:item_ender_gateway',
    'prefab:item_magic_temple',
    'prefab:item_welcome_center',
    'prefab:item_jail',
    'prefab:item_saloon',




    'mythicupgrades:topaz_ore', 'mythicupgrades:deepslate_topaz_ore', 'mythicupgrades:peridot_ore', 'mythicupgrades:deepslate_peridot_ore', 'mythicupgrades:jade_ore', 'mythicupgrades:aquamarine_ore', 'mythicupgrades:deepslate_aquamarine_ore', 'mythicupgrades:sapphire_ore', 'mythicupgrades:ametrine_ore', 'mythicupgrades:necoium_ore','mythicupgrades:ruby_ore',
    'mythicupgrades:topaz_ingot', 'mythicupgrades:peridot_ingot', 'mythicupgrades:jade_ingot', 'mythicupgrades:aquamarine_ingot', 'mythicupgrades:sapphire_ingot', 'mythicupgrades:ametrine_ingot', 'mythicupgrades:necoium_ingot','mythicupgrades:ruby_ingot',
    'mythicupgrades:topaz', 'mythicupgrades:peridot', 'mythicupgrades:jade', 'mythicupgrades:aquamarine', 'mythicupgrades:sapphire', 'mythicupgrades:ametrine', 'mythicupgrades:necoium','mythicupgrades:ruby',
    'mythicupgrades:topaz_sword', 'mythicupgrades:peridot_sword', 'mythicupgrades:jade_sword', 'mythicupgrades:aquamarine_sword', 'mythicupgrades:sapphire_sword', 'mythicupgrades:ametrine_sword', 'mythicupgrades:necoium_sword','mythicupgrades:ruby_sword',
    'mythicupgrades:topaz_pickaxe', 'mythicupgrades:peridot_pickaxe', 'mythicupgrades:jade_pickaxe', 'mythicupgrades:aquamarine_pickaxe', 'mythicupgrades:sapphire_pickaxe', 'mythicupgrades:ametrine_pickaxe', 'mythicupgrades:necoium_pickaxe','mythicupgrades:ruby_pickaxe',
    'mythicupgrades:topaz_axe', 'mythicupgrades:peridot_axe', 'mythicupgrades:jade_axe', 'mythicupgrades:aquamarine_axe', 'mythicupgrades:sapphire_axe', 'mythicupgrades:ametrine_axe', 'mythicupgrades:necoium_axe','mythicupgrades:ruby_axe',
    'mythicupgrades:topaz_shovel', 'mythicupgrades:peridot_shovel', 'mythicupgrades:jade_shovel', 'mythicupgrades:aquamarine_shovel', 'mythicupgrades:sapphire_shovel', 'mythicupgrades:ametrine_shovel', 'mythicupgrades:necoium_shovel','mythicupgrades:ruby_shovel',
    'mythicupgrades:topaz_hoe', 'mythicupgrades:peridot_hoe', 'mythicupgrades:jade_hoe', 'mythicupgrades:aquamarine_hoe', 'mythicupgrades:sapphire_hoe', 'mythicupgrades:ametrine_hoe', 'mythicupgrades:necoium_hoe','mythicupgrades:ruby_hoe',
    'mythicupgrades:topaz_helmet', 'mythicupgrades:peridot_helmet', 'mythicupgrades:jade_helmet', 'mythicupgrades:aquamarine_helmet', 'mythicupgrades:sapphire_helmet', 'mythicupgrades:ametrine_helmet', 'mythicupgrades:necoium_helmet','mythicupgrades:ruby_helmet',
    'mythicupgrades:topaz_chestplate', 'mythicupgrades:peridot_chestplate', 'mythicupgrades:jade_chestplate', 'mythicupgrades:aquamarine_chestplate', 'mythicupgrades:sapphire_chestplate', 'mythicupgrades:ametrine_chestplate', 'mythicupgrades:necoium_chestplate','mythicupgrades:ruby_chestplate',
    'mythicupgrades:topaz_leggings', 'mythicupgrades:peridot_leggings', 'mythicupgrades:jade_leggings', 'mythicupgrades:aquamarine_leggings', 'mythicupgrades:sapphire_leggings', 'mythicupgrades:ametrine_leggings', 'mythicupgrades:necoium_leggings','mythicupgrades:ruby_leggings',
    'mythicupgrades:topaz_boots', 'mythicupgrades:peridot_boots', 'mythicupgrades:jade_boots', 'mythicupgrades:aquamarine_boots', 'mythicupgrades:sapphire_boots', 'mythicupgrades:ametrine_boots', 'mythicupgrades:necoium_boots','mythicupgrades:ruby_boots',
    'mythicupgrades:topaz_crystal_cluster', 'mythicupgrades:peridot_crystal_cluster', 'mythicupgrades:jade_crystal_cluster', 'mythicupgrades:aquamarine_crystal_cluster', 'mythicupgrades:sapphire_crystal_cluster', 'mythicupgrades:ametrine_crystal_cluster', 'mythicupgrades:necoium_crystal_cluster','mythicupgrades:ruby_crystal_cluster',
    'mythicupgrades:topaz_crystal_block', 'mythicupgrades:peridot_crystal_block', 'mythicupgrades:jade_crystal_block', 'mythicupgrades:aquamarine_crystal_block', 'mythicupgrades:sapphire_crystal_block', 'mythicupgrades:ametrine_crystal_block', 'mythicupgrades:necoium_crystal_block','mythicupgrades:ruby_crystal_block',
    'mythicupgrades:topaz_crystal_shard', 'mythicupgrades:peridot_crystal_shard', 'mythicupgrades:jade_crystal_shard', 'mythicupgrades:aquamarine_crystal_shard', 'mythicupgrades:sapphire_crystal_shard', 'mythicupgrades:ametrine_crystal_shard', 'mythicupgrades:necoium_crystal_shard','mythicupgrades:ruby_crystal_shard',
    'mythicupgrades:topaz_potion', 'mythicupgrades:peridot_potion', 'mythicupgrades:jade_potion', 'mythicupgrades:aquamarine_potion', 'mythicupgrades:sapphire_potion', 'mythicupgrades:ametrine_potion', 'mythicupgrades:necoium_potion','mythicupgrades:ruby_potion',
    'mythicupgrades:topaz_block', 'mythicupgrades:peridot_block', 'mythicupgrades:jade_block', 'mythicupgrades:aquamarine_block', 'mythicupgrades:sapphire_block', 'mythicupgrades:ametrine_block', 'mythicupgrades:necoium_block','mythicupgrades:ruby_block',
    'call_of_yucutan:hanging_vine_hook'

]
let skill_gems = global.skill_gems
let jeiSpells = global.spells
JEIEvents.hideItems(event => {
    hideItems.forEach(item => {
        event.hide(item)
    })
    skill_gems.forEach(gem => {
        event.hide(`kubejs:${gem}`)
    })

    Object.keys(jeiSpells).forEach(spell => {
        event.hide(`kubejs:${spell}`)
    })
})

JEIEvents.removeCategories(event => {
    console.log(event.getCategoryIds())
})



let weapon_unification = {
    items: [
        'spartanweaponry:battleaxe','spartanweaponry:glaive','spartanweaponry:flanged_mace','spartanweaponry:dagger','spartanweaponry:longsword','spartanweaponry:katana','spartanweaponry:rapier','spartanweaponry:greatsword','spartanweaponry:battle_hammer','spartanweaponry:spear','spartanweaponry:halberd','spartanweaponry:pike'
    ],
    materials: [
        'wooden','stone','iron','golden','diamond','netherite', 'copper', 'bronze', 'tin', 'silver', 'steel', 'lead', 'electrum', 'invar', 'platinum', 'aluminum', 'nickel', 'invar', 'constantan'
    ],
}

weapon_unification.items.forEach(item => {
    JEIEvents.hideItems(event => {
        let item_name = item.split(':')[1]
        let mod_name = item.split(':')[0]
        weapon_unification.materials.forEach(material => {
            event.hide(`${mod_name}:${material}_${item_name}`)
        })
    })
})


let epic_knights = {
	magistuarmory: {
		weapons: [
			'stylet', 
			'shortsword', 
			'katzbalger', 
			'pike', 
			'ranseur', 
			'ahlspiess', 
			'chivalrylance', 
			'bastardsword', 
			'estoc', 
			'claymore', 
			'zweihander', 
			'flamebladedsword', 
			'lochaberaxe', 
			'concavehalberd', 
			'heavymace', 
			'heavywarhammer', 
			'lucernhammer', 
			'morgenstern', 
			'chainmorgenstern', 
			'guisarme'
		],
		materials: [
			'wood',
			'stone',
			'iron',
			'gold',
			'diamond',
			'copper',
			'steel',
			'silver',
			'netherite',
			'tin',
			'bronze',
		]
	},
	epic_knights_ores_and_alloys: {
		tools: [
			'pickaxe',
			'axe',
			'shovel',
			'hoe',
			'sword',
		],
		materials: [
			'copper',
			'bronze',
			'tin',
			'silver',
			'steel',
		]
	}

	
}


JEIEvents.hideItems(event => {
	epic_knights.magistuarmory.weapons.forEach(weapon => {
		epic_knights.magistuarmory.materials.forEach(material => {
			event.hide(`magistuarmory:${material}_${weapon}`)
		})
	})
})

JEIEvents.hideItems(event => {
    epic_knights.epic_knights_ores_and_alloys.tools.forEach(tool => {
        epic_knights.epic_knights_ores_and_alloys.materials.forEach(material => {
            event.hide(`epic_knights_ores_and_alloys:${material}_${tool}`)
        })
    })
})


let skill_data = global.skillData


JEIEvents.hideItems(event => {
    Object.entries(skill_data.abilities).forEach(([ability, max_level]) => {
        event.hide(`kubejs:${ability}_ability`)
    })
    event.hide('kubejs:entity.celestial_glass')
    event.hide('kubejs:entity.corrupted_shard')
    event.hide('kubejs:entity.corrupted_gemstone')
    event.hide('kubejs:entity.powering')
    event.hide('kubejs:entity.echoing_void')
    event.hide('kubejs:entity.withered_wand')
    event.hide('kubejs:entity.pearls_of_the_moon')
    event.hide('kubejs:entity.throwing_knife_1')
    event.hide('kubejs:entity.throwing_knife_2')
    event.hide('kubejs:testing')
    event.hide('kubejs:max_hammer')
    event.hide('kubejs:mike_vick')
    event.hide('kubejs:mike_vick_wager')
    event.hide('kubejs:projectile')
})

