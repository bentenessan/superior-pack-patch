let bone_effigy = [
    `crow`,
    `sugar_glider`,
    `bald_eagle`,
    `mantis_shrimp`,
    `capuchin_monkey`,
    `flutter`,
    `mimic_octopus`,
    `tarantula_hawk`,
    `elephant`,
    `komodo_dragon`,
    `kangaroo`,
    `gorilla`,
    `crocodile`,
    `grizzly_bear`,
]

ItemEvents.tooltip(event => {


	event.add(`blocky_siege:roaster_stand`,`Load with Fire Charges and power with a Redstone Signal`)

	event.add(`kubejs:progression_sync`,`§7Using this item will §afix§7 your progress on quests if they are broken.`)

	  event.addAdvanced(`supplementaries:quiver`, (item, advanced, text) => {
		text.add(1, [Text.of(`Hover this item over Arrows and`).gray(), Text.of(` Right-Click `).gold(), Text.of(`To put Arrows in the Quiver.`).gray(), ]), 
		text.add(2, Text.gold(` `)) 
		text.add(3, [Text.of(`Hold`).gray(), Text.of(` CAPS LOCK `).gold(), Text.of(`to view the Arrows and cycle between them`).gray()])
	  })

	
	event.addAdvanced(`kubejs:inventory_upgrade`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-Click `).gold(), Text.of(`with this item in your hand to add §a+1§7 to your inventory tabs`).gray()])
	  })

	  event.addAdvanced('apotheosis:sigil_of_withdrawal', (item, advanced, text) => {
		text.add(1, [Text.of(`Place in a `).gray(), Text.of(`Smithing Table`).gold(), Text.of(` with the item you wish to remove the gems from.`).gray()])
		text.add(2, [Text.of(` `).gray()])
	  })

	  

	event.addAdvanced(`kubejs:breakfall`, (item, advanced, text) => {
		text.add(1, [Text.of(`Unlock Parkour Skill:`).gold().underlined()])
		text.add(2, [Text.of(` • Break Fall`).lightPurple().italic()])
		text.add(3, [Text.of(` `).gray().italic()])
		text.add(4, [Text.of(`Tip: Read your`).gray(), Text.of(` ParCool Guidebook`).aqua(), Text.of(` to learn about this skill.`).gray()])
	});

	event.addAdvanced(`kubejs:catleap`, (item, advanced, text) => {
		text.add(1, [Text.of(`Unlock Parkour Skill:`).gold().underlined()])
		text.add(2, [Text.of(` • Cat Leap`).lightPurple().italic()])
		text.add(3, [Text.of(` `).gray().italic()])
		text.add(4, [Text.of(`Tip: Read your`).gray(), Text.of(` ParCool Guidebook`).aqua(), Text.of(` to learn about this skill.`).gray()])
		
	});

	event.addAdvanced(`kubejs:ledgegrab`, (item, advanced, text) => {
		text.add(1, [Text.of(`Unlock Parkour Skills:`).gold().underlined()])
		text.add(2, [Text.of(` • Ledge Grab`).lightPurple().italic()])
		text.add(3, [Text.of(` • Climb Up`).lightPurple().italic()])
		text.add(4, [Text.of(` `).gray().italic()])
		text.add(5, [Text.of(`Tip: Read your`).gray(), Text.of(` ParCool Guidebook`).aqua(), Text.of(` to learn about these skills.`).gray()])
	});
	event.addAdvanced(`kubejs:wall_jump`, (item, advanced, text) => {
		text.add(1, [Text.of(`Unlock Parkour Skill:`).gold().underlined()])
		text.add(2, [Text.of(` • Wall Slide`).lightPurple().italic()])
		text.add(3, [Text.of(` • Wall Jump`).lightPurple().italic()])
		text.add(4, [Text.of(` `).gray().italic()])
		text.add(5, [Text.of(`Tip: Read your`).gray(), Text.of(` ParCool Guidebook`).aqua(), Text.of(` to learn about this skill.`).gray()])
	});

	event.addAdvanced(`kubejs:crawl`, (item, advanced, text) => {
		text.add(1, [Text.of(`Unlock Parkour Skills:`).gold().underlined()])
		text.add(2, [Text.of(` • Crawl`).lightPurple().italic()])
		text.add(3, [Text.of(` `).gray().italic()])
		text.add(4, [Text.of(`Tip: Read your`).gray(), Text.of(` ParCool Guidebook`).aqua(), Text.of(` to learn about these skills.`).gray()])
	});

	event.addAdvanced(`kubejs:slide`, (item, advanced, text) => {
		text.add(1, [Text.of(`Unlock Parkour Skill:`).gold().underlined()])
		text.add(2, [Text.of(` • Slide`).lightPurple().italic()])
		text.add(3, [Text.of(` `).gray().italic()])
		text.add(4, [Text.of(`Tip: Read your`).gray(), Text.of(` ParCool Guidebook`).aqua(), Text.of(` to learn about this skill.`).gray()])
	});

	event.addAdvanced(`kubejs:vertical_wallrun`, (item, advanced, text) => {
		text.add(1, [Text.of(`Unlock Parkour Skill:`).gold().underlined()])
		text.add(2, [Text.of(` • Vertical Wallrun`).lightPurple().italic()])
		text.add(3, [Text.of(` `).gray().italic()])
		text.add(4, [Text.of(`Tip: Read your`).gray(), Text.of(` ParCool Guidebook`).aqua(), Text.of(` to learn about this skill.`).gray()])
	});


	event.addAdvanced(`kubejs:horizontal_wallrun`, (item, advanced, text) => {
		text.add(1, [Text.of(`Unlock Parkour Skill:`).gold().underlined()])
		text.add(2, [Text.of(` • Horizontal Wallrun`).lightPurple().italic()])
		text.add(3, [Text.of(` `).gray().italic()])
		text.add(4, [Text.of(`Tip: Read your`).gray(), Text.of(` ParCool Guidebook`).aqua(), Text.of(` to learn about this skill.`).gray()])
	});

	event.addAdvanced(`kubejs:cleansing_serum`, (item, advanced, text) => {
		text.add(1, [Text.of(`Removes `).yellow(), Text.of(`all`).red().underlined(), Text.of(` Main Class`).gray(), Text.of(` and `).yellow(), Text.of(`Subclass`).gold(), Text.of(` effects and bonuses.`).yellow()])
	});

	event.addAdvanced(`kubejs:reset_skills`, (item, advanced, text) => {
		text.add(1, [Text.of(`Resets your `).gray(), Text.of(`Skill Tree`).yellow(), Text.of(` and refunds your points`).gray()])
	});

	event.addAdvanced(`kubejs:essence_of_frost`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Hit an enemy with a projectile to make them float. Upon successfuly hitting them, 1.5 seconds later you will cast a Ray of Frost. The Ray of Frost will insta-kill them.`).white()])
		text.add(2, [Text.of(`Duration: 30 Seconds`).gray()])
		text.add(3, [Text.of(`Cooldown: 3 Minutes`).gray()])
	});
	/// Essence of storms: 
	/// Casts shockwave when crouching (this applies the the chilled effect to enemies)
	/// jumping casts the ray of frost

	event.addAdvanced(`kubejs:essence_of_cinders`, (item, advanced, text) => { //// Beastmaster gets this essence
		text.add(1, [Text.of(`Ability: Press <SHIFT> to activate Heat Surge which lights nearby enemies on fire and gives them the REND effect. When a Summoned Pet hits an enemy affected by REND, you will cast a powerful spell.`).white()])
		text.add(2, [Text.of(`Duration: 1 Minute to activate once`).gray()])
		text.add(3, [Text.of(`Cooldown: 3 Minutes`).gray()])
	});

	event.addAdvanced(`kubejs:essence_of_darkness`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Crouch while jumping to shoot Void Arrows. Upon hitting an enemy with a Void Arrow, you will teleport to them, use Divine Smite, then teleport back to your original position.`).white()])
		text.add(2, [Text.of(`Duration: 30 Seconds`).gray()])
		text.add(3, [Text.of(`Cooldown: 3 Minutes`).gray()])
	})

	event.addAdvanced(`kubejs:essence_of_light`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Crouch to give nearby entities the Guided effect. Holding <SHIFT> will rapidly cast Guiding Bolt. Guiding Bolts seek out enemies with the Guided Effect`).white()])
		text.add(2, [Text.of(`Duration: 10 Seconds`).gray()])
		text.add(3, [Text.of(`Cooldown: 1 Minute`).gray()])
	})

	event.addAdvanced(`kubejs:essence_of_storms`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Ascend into the air and hover for 5 seconds. While in this state, hold <SHIFT> to rapidly cast Lightning Bolts.`).white()])
		text.add(2, [Text.of(`Duration: 5 seconds`).gray()])
		text.add(3, [Text.of(`Cooldown: 3 Minutes`).gray()])
	})

	event.addAdvanced(`kubejs:essence_of_earth`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Upon being hit, you stomp the earth. Anything hit by this stomp will be stunned for 8 seconds`).white()])
		text.add(2, [Text.of(`Duration: 45 seconds`).gray()])
		text.add(3, [Text.of(`Cooldown: 3 Minutes`).gray()])
	})

	event.addAdvanced(`kubejs:essence_of_aether`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: None yet`).white()])
		text.add(2, [Text.of(`Duration: N/A`).gray()])
		text.add(3, [Text.of(`Cooldown: N/A`).gray()])
	})

	event.addAdvanced(`kubejs:essence_of_life`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: None yet`).white()])
		text.add(2, [Text.of(`Duration: N/A`).gray()])
		text.add(3, [Text.of(`Cooldown: N/A`).gray()])
	})

	event.addAdvanced(`kubejs:essence_of_sorrow`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: None yet`).white()])
		text.add(2, [Text.of(`Duration: N/A`).gray()])
		text.add(3, [Text.of(`Cooldown: N/A`).gray()])
	})

	event.addAdvanced(`kubejs:vaporize`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Shoot an enemy with an arrow to cause it and surrounding enemies to be vaporized`).white()])
		text.add(2, [Text.of(`Duration: 1 shot`).gray()])
		text.add(3, [Text.of(`Cooldown: 4 Minutes`).gray()])
	})
	event.addAdvanced(`kubejs:primal_call`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Summon a Tremorsaurus to fight with you.`).white()])
		text.add(2, [Text.of(`Duration: 1 Minute`).gray()])
		text.add(3, [Text.of(`Cooldown: 8 Minutes`).gray()])
	})
	event.addAdvanced(`kubejs:singularity`, (item, advanced, text) => {
		text.add(1, [Text.of(`Requirements: Must be Insane`).white()])
		text.add(1, [Text.of(`Ability: Shoot an enemy to summon a Black Hole where it stands. After a few seconds, a barrage of Lightning Bolts will strike there.`).white()])
		text.add(2, [Text.of(`Duration: 1 shot`).gray()])
		text.add(3, [Text.of(`Cooldown: 10 Minutes`).gray()])
	})
	event.addAdvanced(`kubejs:blitz`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Grants a stacking haste effect upon successfully hitting enemies`).white()])
		text.add(2, [Text.of(`Duration: 1 Minute`).gray()])
		text.add(3, [Text.of(`Cooldown: 3 Minutes`).gray()])
	})

	event.addAdvanced(`kubejs:shadow_strike`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Hit an enemy with a projectile to teleport to them. Hit that enemy with a melee attack to insta-kill them. Shoot up to 3 more enemies to insta-kill them at the cost of 50 mana each`).white()])
		text.add(2, [Text.of(`Cooldown: 5 Minutes`).gray()])
	})

	event.addAdvanced(`kubejs:lilliputian_retreat`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Shrink to an impossibly small size`).white()])
		text.add(2, [Text.of(`Duration: 15 Seconds`).gray()])
		text.add(3, [Text.of(`Cooldown: 5 Minutes`).gray()])
	})

	event.addAdvanced(`kubejs:voltage`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: None yet`).white()])
		text.add(2, [Text.of(`Duration: N/A`).gray()])
		text.add(3, [Text.of(`Cooldown: N/A`).gray()])
	})

	event.addAdvanced(`kubejs:eldritch_inferno`, (item, advanced, text) => {
		text.add(1, [Text.of(`Ability: Hold <SHIFT> to fly through the air, enrobed in flame. Hitting enemies while using this will strike them with lightning.`).white()])
		text.add(2, [Text.of(`Duration: 12 Seconds`).gray()])
		text.add(3, [Text.of(`Cooldown: 3 Minutes`).gray()])
		text.add(3, [Text.of(` `).gray()])
		text.add(3, [Text.of(`Tip: Set your camera to 3rd-Person view when using this`).gray()])
	})

	event.addAdvanced(`kubejs:boss_effigy`, (item, advanced, text) => {
		text.add(1, [Text.of(`SHIFT + RIGHT-CLICK:`).yellow(), Text.of(` Cycle forward through defeated Bosses`).gray()])
		text.add(2, [Text.of(` `).gray()])
		text.add(3, [Text.of(`SHIFT + LEFT-CLICK:`).yellow(), Text.of(` Cycle back through defeated Bosses`).gray()])
		text.add(4, [Text.of(` `).gray()])
	})



	event.addAdvanced(`iceandfire:dragon_horn`, (item, advanced, text) => {
		text.add(1, [Text.of(`As the Dragonlord Class:`).gold()])
		text.add(2, [Text.of(` - Place the Dragon Horn on a Summoning Altar to resummon a dead Dragon`).yellow()])
		text.add(3, [Text.of(` - SHIFT + LEFT CLICK (x2) to reset your Bound Dragons size`).yellow()])
		
	})

	/**
	 * 	event.addAdvanced(`iceandfire:dragon_stick`, (item, advanced, text) => {
		text.add(1, [Text.of(`As the Dragonlord Class:`).gold()])
		text.add(2, [Text.of(` - SHIFT + LEFT CLICK to teleport your Dragon to you`).yellow()])
		text.add(3, [Text.of(` - SHIFT + RIGHT CLICK to shrink your Bound Dragon by 50%. Lasts for 2 Minutes`).yellow()])
	})
	 * 
	 */

	event.addAdvanced('kubejs:player_waystone', (item, advanced, text) => {
		text.add(1, [Text.of(`Usage:`).gold()])
		text.add(2, [Text.of(` - Left-click to choose a player to teleport to`).gray()])
		text.add(3, [Text.of(` - Right-click send a TP request to the chosen player`).gray()])
	})


	event.addAdvanced('kubejs:journey_waystone', (item, advanced, text) => {
		text.add(1, [Text.of(`To put back into your slot:`).gold()])
		text.add(2, [Text.of(`  SHIFT + RIGHT-CLICK`).gray()])
	})

	event.addAdvanced('kubejs:home_waystone', (item, advanced, text) => {
		text.add(1, [Text.of(`To put back into your slot:`).gold()])
		text.add(2, [Text.of(`  SHIFT + RIGHT-CLICK`).gray()])
	})

	// Boss Variant Modifiers:

	event.addAdvanced(`kubejs:time_turner`, (item, advanced, text) => {
		text.add(1, [Text.of(`Switches the time between day and night.`).darkAqua()])
		text.add(2, [Text.of(` `).gray().italic()])
		text.add(3, [Text.of(`10% chance to warp the mind of the user, causing them to go`).gray(), Text.of(` Insane`).darkRed(), Text.of(` for 60s`).gray()])
	})
	// Summoner Mods
	event.addAdvanced(`iceandfire:fire_dragon_blood`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier`).gold()])
		text.add(2, [Text.of(` • The Boss Variant gains Spellcasting access to 1 random Spell School `).aqua()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` • `).gray(), Text.of(`+10`).green().italic()])
	})

	event.addAdvanced(`iceandfire:fire_dragon_heart`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier`).gold()])
		text.add(2, [Text.of(` • The Boss Variant gains Spellcasting access to 3 random Spell Schools `).aqua()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` • `).gray(), Text.of(`+20`).green().italic()])
	})


	event.addAdvanced(`iceandfire:ice_dragon_blood`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier:`).gold()])
		text.add(2, [Text.of(` • The Boss Variant gains Spellcasting access to 6 random Spell Schools`).aqua()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` • `).gray(), Text.of(`+40`).green().italic()])
	})

	event.addAdvanced(`iceandfire:ice_dragon_heart`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier:`).gold()])
		text.add(2, [Text.of(` • The Boss Variant becomes a Superior Spellcaster`).aqua()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` • `).gray(), Text.of(`+75`).green().italic()])
	})


	event.addAdvanced(`iceandfire:lightning_dragon_blood`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier:`).gold()])
		text.add(2, [Text.of(` • The Boss Variant gains Spellcasting access to all 9 Spell Schools `).aqua()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` • `).gray(), Text.of(`+60`).green().italic()])
	})

	event.addAdvanced(`iceandfire:lightning_dragon_heart`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier:`).gold()])
		text.add(2, [Text.of(` • The Boss Variant becomes an Exalted Spellcaster`).aqua()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` • `).gray(), Text.of(`+100`).green().italic()])
	})




    //_____________________________________________________________________________________
    // Ciphers

	// Ciphers
	event.addAdvanced(`kubejs:sunstrike`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Sunstrike Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+20`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:echoing_strike`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Echoing Strike Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+15`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:berserk`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Berserk Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+30`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:blazing`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Blazing Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+20`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:thorns`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Thorns Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+25`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:adrenaline`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Adrenaline Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+40`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:glacial_grasp`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Glacial Grasp Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+20`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:gusting`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Gusting Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+30`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:soulsteal`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Soulsteal Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+50`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:thunderstorm`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Thunderstorm Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+25`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:strength`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Strength Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+50`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:resistance`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Resistance Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+65`).green().italic(), Text.of(` per Cipher`).gray()])
	})
	event.addAdvanced(`kubejs:charged`, (item, advanced, text) => {
		text.add(1, [Text.of(`Boss Variant Modifier: Cipher`).white()])
		text.add(2, [Text.of(` • Applies a permanent Charged Effect to the summoned Boss Variant`).gray()])
		text.add(3, [Text.of(` • The level of the effect is equal to the number of Ciphers added`).gray()])
		text.add(4, [Text.of(`  `).yellow()])
		text.add(5, [Text.of(`Power Level Bonus:`).gray()])
		text.add(6, [Text.of(` • `).gray(), Text.of(`+30`).green().italic(), Text.of(` per Cipher`).gray()])
	})

	
	event.addAdvanced(`kubejs:beastmaster_totem`, (item, advanced, text) => {
		text.add(1, [Text.of(`RIGHT-CLICK:`).yellow(), Text.of(` Summons the selected Pet`).gray()])
		text.add(2, [Text.of(` `).gray()])
		text.add(3, [Text.of(`LEFT-CLICK:`).yellow(), Text.of(` Teleports all Summoned Pets to you`).gray()])
		text.add(4, [Text.of(` `).gray()])
		text.add(5, [Text.of(`SHIFT + RIGHT-CLICK:`).yellow(), Text.of(` Opens the Pets radial menu`).gray()])
		text.add(6, [Text.of(` `).gray()])
	})

	event.addAdvanced(`rats:rat_flute`, (item, advanced, text) => {
		text.add(1, [Text.of(`SHIFT + LEFT-CLICK:`).darkAqua(), Text.of(` Teleports all of your Plague Doctor Rats to you`).gray()])
		text.add(2, [Text.of(` `).gray()])
	})

	event.addAdvanced(`kubejs:starlit_orb`, (item, advanced, text) => {
		text.add(1, [Text.of(`Gives the user 2 minutes of the`).gray(), Text.of(` Arcane Luck`).aqua(), Text.of(` effect`).gray()])
		text.add(2, [Text.of(` `).gray()])
		text.add(3, [Text.of(`[Arcane Luck]`).aqua(), ])
		text.add(4, [Text.of(` • Modification Orbs drop more often and have better outcomes`).gray()])
		text.add(5, [Text.of(` • Boss Variant drop rates are`).gray(),Text.of(` DOUBLED`).green(), Text.of(` and the chance`).gray(), Text.of(` STACKS`).red(), Text.of(` with other players who have Arcane Luck`).gray()])

	
	})

	event.addAdvanced(`kubejs:common_socketing_chip`, (item, advanced, text) => {
		text.add(1, [Text.of(`Use this to modify an item and add `).gray(), Text.of(`+1`).green(), Text.of(` to its total `).gray(), Text.of(`Gem Sockets`).lightPurple()])
		text.add(2, [Text.of(` `).gold()])
		text.add(3, [Text.of(`[How to use]:`).gold().underlined()])
		text.add(4, [Text.of(`1. `).gray(),Text.of(`RIGHT-CLICK `).darkAqua(), Text.of(`while holding a Socketing Chip`).gray()])
		text.add(5, [Text.of(`2. `).gray(),Text.of(`Drop `).red(), Text.of(`the item you want to modify onto the ground`).gray()])
		text.add(6, [Text.of(`3. `).gray(),Text.of(`Pick up the item after the lightning strikes it`).gray()])
		text.add(7, [Text.of(` `).gold()])
	})


	event.addAdvanced(`kubejs:uncommon_socketing_chip`, (item, advanced, text) => {
		text.add(1, [Text.of(`Use this to modify an item and add `).gray(), Text.of(`+2`).green(), Text.of(` to its total `).gray(), Text.of(`Gem Sockets`).lightPurple()])
		text.add(2, [Text.of(` `).gold()])
		text.add(3, [Text.of(`[How to use]:`).gold().underlined()])
		text.add(4, [Text.of(`1. `).gray(),Text.of(`RIGHT-CLICK `).darkAqua(), Text.of(`while holding a Socketing Chip`).gray()])
		text.add(5, [Text.of(`2. `).gray(),Text.of(`Drop `).red(), Text.of(`the item you want to modify onto the ground`).gray()])
		text.add(6, [Text.of(`3. `).gray(),Text.of(`Pick up the item after the lightning strikes it`).gray()])
		text.add(7, [Text.of(` `).gold()])
	})

	event.addAdvanced(`kubejs:rare_socketing_chip`, (item, advanced, text) => {
		text.add(1, [Text.of(`Use this to modify an item and add `).gray(), Text.of(`+3`).green(), Text.of(` to its total `).gray(), Text.of(`Gem Sockets`).lightPurple()])
		text.add(2, [Text.of(` `).gold()])
		text.add(3, [Text.of(`[How to use]:`).gold().underlined()])
		text.add(4, [Text.of(`1. `).gray(),Text.of(`RIGHT-CLICK `).darkAqua(), Text.of(`while holding a Socketing Chip`).gray()])
		text.add(5, [Text.of(`2. `).gray(),Text.of(`Drop `).red(), Text.of(`the item you want to modify onto the ground`).gray()])
		text.add(6, [Text.of(`3. `).gray(),Text.of(`Pick up the item after the lightning strikes it`).gray()])
		text.add(7, [Text.of(` `).gold()])
	})


	event.addAdvanced(`kubejs:common_sentient_stone`, (item, advanced, text) => {
		text.add(1, [Text.of(`Use this to give an item  `).gray(), Text.of(`Common Affixes`).white()])
		text.add(2, [Text.of(` `).gold()])
		text.add(3, [Text.of(`[How to use]:`).gold().underlined()])
		text.add(4, [Text.of(`1. `).gray(),Text.of(`RIGHT-CLICK `).darkAqua(), Text.of(`while holding a Sentient Stone`).gray()])
		text.add(5, [Text.of(`2. `).gray(),Text.of(`Drop `).red(), Text.of(`the item you want to modify onto the ground`).gray()])
		text.add(6, [Text.of(`3. `).gray(),Text.of(`Pick up the item after the lightning strikes it`).gray()])
		text.add(7, [Text.of(` `).gold()])
		text.add(8, [Text.of(`WARNING:`).red(), Text.of(` This will overwrite any existing Affixes`).gray()])
	})

	event.addAdvanced(`kubejs:uncommon_sentient_stone`, (item, advanced, text) => {
		text.add(1, [Text.of(`Use this to give an item  `).gray(), Text.of(`Uncommon Affixes`).green()])
		text.add(2, [Text.of(` `).gold()])
		text.add(3, [Text.of(`[How to use]:`).gold().underlined()])
		text.add(4, [Text.of(`1. `).gray(),Text.of(`RIGHT-CLICK `).darkAqua(), Text.of(`while holding a Sentient Stone`).gray()])
		text.add(5, [Text.of(`2. `).gray(),Text.of(`Drop `).red(), Text.of(`the item you want to modify onto the ground`).gray()])
		text.add(6, [Text.of(`3. `).gray(),Text.of(`Pick up the item after the lightning strikes it`).gray()])
		text.add(7, [Text.of(` `).gold()])
		text.add(8, [Text.of(`WARNING:`).red(), Text.of(` This will overwrite any existing Affixes`).gray()])
	})

	event.addAdvanced(`kubejs:rare_sentient_stone`, (item, advanced, text) => {
		text.add(1, [Text.of(`Use this to give an item  `).gray(), Text.of(`Rare Affixes`).aqua()])
		text.add(2, [Text.of(` `).gold()])
		text.add(3, [Text.of(`[How to use]:`).gold().underlined()])
		text.add(4, [Text.of(`1. `).gray(),Text.of(`RIGHT-CLICK `).darkAqua(), Text.of(`while holding a Sentient Stone`).gray()])
		text.add(5, [Text.of(`2. `).gray(),Text.of(`Drop `).red(), Text.of(`the item you want to modify onto the ground`).gray()])
		text.add(6, [Text.of(`3. `).gray(),Text.of(`Pick up the item after the lightning strikes it`).gray()])
		text.add(7, [Text.of(` `).gold()])
		text.add(8, [Text.of(`WARNING:`).red(), Text.of(` This will overwrite any existing Affixes`).gray()])
	})

	event.addAdvanced(`sophisticatedbackpacks:backpack`, (item, advanced, text) => {
		text.add(1, [Text.of(`Press `).gray(), Text.of(`B`).gold(), Text.of(` to open the Backpack GUI`).gray()])
		text.add(2, [Text.of(` `).gray()])
	})

	event.addAdvanced(`sophisticatedbackpacks:iron_backpack`, (item, advanced, text) => {
		text.add(1, [Text.of(`Press `).gray(), Text.of(`B`).gold(), Text.of(` to open the Backpack GUI`).gray()])
		text.add(2, [Text.of(` `).gray()])
	})

		event.addAdvanced(`sophisticatedbackpacks:copper_backpack`, (item, advanced, text) => {
		text.add(1, [Text.of(`Press `).gray(), Text.of(`B`).gold(), Text.of(` to open the Backpack GUI`).gray()])
		text.add(2, [Text.of(` `).gray()])
	})

	event.addAdvanced(`sophisticatedbackpacks:gold_backpack`, (item, advanced, text) => {
		text.add(1, [Text.of(`Press `).gray(), Text.of(`B`).gold(), Text.of(` to open the Backpack GUI`).gray()])
		text.add(2, [Text.of(` `).gray()])
	})

	event.addAdvanced(`sophisticatedbackpacks:diamond_backpack`, (item, advanced, text) => {
		text.add(1, [Text.of(`Press `).gray(), Text.of(`B`).gold(), Text.of(` to open the Backpack GUI`).gray()])
		text.add(2, [Text.of(` `).gray()])
	})

	event.addAdvanced(`sophisticatedbackpacks:netherite_backpack`, (item, advanced, text) => {
		text.add(1, [Text.of(`Press `).gray(), Text.of(`B`).gold(), Text.of(` to open the Backpack GUI`).gray()])
		text.add(2, [Text.of(` `).gray()])
	})

	event.addAdvanced(`kubejs:murky_potion`, (item, advanced, text) => {
		text.add(1, [Text.of(`The milky-white substance within bubbles and swirls, gradually revealing… a Greg Heffley figurine?`).gray()])
	})

	event.addAdvanced(`alexsmobs:straddleboard`, (item, advanced, text) => {
		text.add(1, [Text.of(`The Straddleboard can be used to ride on Lava`).gold()])
	})

	event.addAdvanced(`networked_chests:chest_interface`, (item, advanced, text) => {
		text.add(1, [Text.of(`SHIFT + RIGHT-CLICK`).gold(), Text.of(` a Chest to link it to this item`).gray()])
		text.add(2, [Text.of(` `).gold()])
		text.add(3, [Text.of(`RIGHT-CLICK`).gold(), Text.of(` with this item in your hand to open the linked chest from anywhere in the world`).gray()])
		text.add(4, [Text.of(` `).gold()])
	})

	event.addAdvanced(`zipline:zipline`, (item, advanced, text) => {
		text.add(1, [Text.of(`Gold Wire`).yellow(), Text.of(` lines linked to `).gray(), Text.of(`Large Connectors`).gold(), Text.of(` are rideable with this Zipline Hook`).gray()])
	})

	event.addAdvanced(`kubejs:dragons_wisdom`, (item, advanced, text) => {
		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` `).gold()])
		text.add(3, [Text.of(` • Effect:`).gold(), Text.of(` 30s of Levitation & Angel Wings`).gray()])
		text.add(4, Text.white(` `))
		text.add(5, Text.yellow(`Special Abilities:`).underlined(true))
		text.add(6, [Text.of(` • Flight Attack:`).gold(), Text.of(` Hold Shift while flying to shoot a fireball`).gray()])
		text.add(7, [Text.of(` • Boost:`).gold(), Text.of(` Right-click with this in your hand to gain a huge levitation boost`).gray()])
	})
	event.addAdvanced(`kubejs:frozen_memory`, (item, advanced, text) => {
		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • 10% Chance`).gold(), Text.of(` upon being attacked to gain 15s of the Glacial Grasp effect`).gray()])
		text.add(3, Text.white(``))
		text.add(4, Text.aqua(`GLACIAL GRASP`))
		text.add(5, [Text.of(` • Attackers freeze when they hit you`).gray()])
	})
	event.addAdvanced(`kubejs:echoing_void`, (item, advanced, text) => {
		text.add(1, [Text.of(`Hold this item and`).gray(), Text.of(` LEFT-CLICK`).gold(), Text.of(` to fire a Void Arrow that explodes on impact`).gray()])
		text.add(2, Text.white(` `))
		text.add(3, Text.yellow(`[Attributes]`))
		text.add(4, [Text.of(` • Cooldown:`).gold(), Text.of(` 30 seconds`).gray()])
		text.add(5, [Text.of(` • Projectile:`).gold(), Text.of(` Void Arrow`).gray()])
	})
	event.addAdvanced(`kubejs:blaze_core`, (item, advanced, text) => {
		text.add(1, [Text.of(`Hold this item in your offhand and`).gray(), Text.of(` RIGHT-CLICK`).gold(), Text.of(` to consume 50 mana instantly to cast a `).gray(), Text.of(`FIREBALL`).red()])
		text.add(2, [Text.of(` • Refunds 50% of the mana cost if the `).gray(), Text.of(`FIREBALL`).red(), Text.of(` hits an enemy`).gray()])
		text.add(3, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:contained_void`, (item, advanced, text) => {
		text.add(1, [Text.of(`Hold this item in your main hand and`).gray(), Text.of(` RIGHT-CLICK`).gold(), Text.of(` to consume 50 mana to instantly cast a `).gray(), Text.of(`MAGIC ARROW`).darkPurple()])
		text.add(2, [Text.of(` • Refunds 50% of the mana cost if the `).gray(), Text.of(`MAGIC ARROW`).darkPurple(), Text.of(` hits an enemy`).gray()])
		text.add(3, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:eternal_flame`, (item, advanced, text) => {
		text.add(1, [Text.of(`Hold SHIFT and RIGHT-CLICK with this item in your hand to charge up FIREBALLS. Once charged, release the SHIFT key and RIGHT-CLICK to cast the FIREBALLS`).gray()])
		text.add(2, [Text.of(` • Each charge consumes hurts you for 5% of your max HP`).gray()])
		text.add(3, Text.yellow(`[Attributes]`))
		text.add(4, [Text.of(` • Cooldown:`).gold(), Text.of(` 7.5 seconds`).gray()])
		text.add(5, Text.white(` `))

	})
	
	event.addAdvanced(`kubejs:heart_of_darkness`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 30 seconds`).gray()])
		text.add(3, [Text.of(` • Effects:`).gold(), Text.of(` Blindness, Speed III, Haste II, Strength II`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Triggers upon:`).underlined(true))
		text.add(6, [Text.of(` • `).white(), Text.of(`Right-clicking to activate`).red()])
		text.add(7, Text.white(` `))
	
		text.add(8, Text.yellow(`Special Traits:`).underlined(true))
		text.add(9, [Text.of(` • Dark Pact:`).gold(), Text.of(` Reduces sanity to 0 upon activation`).gray()])
		text.add(10, [Text.of(` • Shadow Bind:`).gold(), Text.of(` Nearby entities are slowed in time and glow`).gray()])
		text.add(11, [Text.of(` • Abyssal Release:`).gold(), Text.of(` Sanity is restored after 30 seconds`).gray()])
	})

	event.addAdvanced(`kubejs:imprisoned_star`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 3 minutes`).gray()])
		text.add(3, [Text.of(` • Effect:`).gold(), Text.of(` Sun\`s Blessing`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Triggers upon:`).underlined(true))
		text.add(6, [Text.of(` • `).white(), Text.of(`Right-clicking to activate`).red()])
		text.add(7, Text.white(` `))
	
		text.add(8, Text.yellow(`Special Traits:`).underlined(true))
		text.add(9, [Text.of(` • Solar Rejuvenation:`).gold(), Text.of(` Effect refreshes automatically if lost`).gray()])
		text.add(10, [Text.of(` • Solar Wrath:`).gold(), Text.of(` Bonus damage for Solar Beam, Sunstrike, and Supernova`).gray()])
		text.add(11, [Text.of(` • Nova Sacrifice:`).gold(), Text.of(` Supernova deals 40 damage and triggers a fireball before killing the user`).gray()])
	})
	
	event.addAdvanced(`kubejs:imprisoned_embers`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Cooldown:`).gold(), Text.of(` 1 minute`).gray()])
		text.add(3, [Text.of(` • Charge Mechanic:`).gold(), Text.of(` Builds up to 5 levels of charge`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Triggers upon:`).underlined(true))
		text.add(6, [Text.of(` • `).white(), Text.of(`Holding Shift to charge`).red()])
		text.add(7, [Text.of(` • `).white(), Text.of(`Right-clicking to release burning dashes`).red()])
		text.add(8, Text.white(` `))
	
		text.add(9, Text.yellow(`Special Traits:`).underlined(true))
		text.add(10, [Text.of(` • Ember Surge:`).gold(), Text.of(` Each charge level fires an additional dash`).gray()])
	})
	
	event.addAdvanced(`kubejs:bloody_inferno`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 20 seconds`).gray()])
		text.add(3, [Text.of(` • Cooldown:`).gold(), Text.of(` 3 minutes`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Triggers upon:`).underlined(true))
		text.add(6, [Text.of(` • `).white(), Text.of(`Right-clicking to activate`).red()])
		text.add(7, [Text.of(` • `).white(), Text.of(`Shifting while idle to burn enemies`).red()])
		text.add(8, Text.white(` `))
	
		text.add(9, Text.yellow(`Special Traits:`).underlined(true))
		text.add(10, [Text.of(` • Bloodfire Surge:`).gold(), Text.of(` Activating the effect allows for multiple burning dashes`).gray()])
		text.add(11, [Text.of(` • Sanguine Wrath:`).gold(), Text.of(` Attacking while active inflicts bleeding on enemies`).gray()])
	})
	

	event.addAdvanced(`kubejs:electric_inferno`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 30 seconds`).gray()])
		text.add(3, [Text.of(` • Cooldown:`).gold(), Text.of(` 3 minutes`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Triggers upon:`).underlined(true))
		text.add(6, [Text.of(` • `).white(), Text.of(`Right-clicking to activate`).red()])
		text.add(7, [Text.of(` • `).white(), Text.of(`Shifting while idle to unleash lightning dashes`).red()])
		text.add(8, [Text.of(` • `).white(), Text.of(`Attacking while active summons lightning`).red()])
		text.add(9, Text.white(` `))
	
		text.add(10, Text.yellow(`Special Traits:`).underlined(true))
		text.add(11, [Text.of(` • Stormcall:`).gold(), Text.of(` Attacking an enemy summons a lightning strike`).gray()])
	})
	
	event.addAdvanced(`kubejs:eldritch_inferno`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 10 seconds`).gray()])
		text.add(3, [Text.of(` • Cooldown:`).gold(), Text.of(` 3 minutes`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Triggers upon:`).underlined(true))
		text.add(6, [Text.of(` • `).white(), Text.of(`Right-clicking to activate`).red()])
		text.add(7, [Text.of(` • `).white(), Text.of(`Shifting while idle to cast burning dashes`).red()])
		text.add(8, Text.white(` `))
	
		text.add(9, Text.yellow(`Special Traits:`).underlined(true))
		text.add(10, [Text.of(` • Eldritch Flames:`).gold(), Text.of(` Each dash creates eldritch fire on impact`).gray()])
		text.add(11, [Text.of(` • Armor of the Old Gods:`).gold(), Text.of(` Taking damage while dashing negates the attack`).red()])
	})
	
	event.addAdvanced(`kubejs:pearls_of_the_moon`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 15 seconds`).gray()])
		text.add(3, [Text.of(` • Cooldown:`).gold(), Text.of(` 3 minutes`).gray()])
		text.add(4, [Text.of(` • Effect:`).gold(), Text.of(` Slowness III`).gray()])
		text.add(5, Text.white(` `))
	
		text.add(6, Text.yellow(`Triggers upon:`).underlined(true))
		text.add(7, [Text.of(` • `).white(), Text.of(`Right-clicking to activate`).red()])
		text.add(8, Text.white(` `))
	
		text.add(9, Text.yellow(`Special Traits:`).underlined(true))
		text.add(10, [Text.of(` • Lunar Wrath:`).gold(), Text.of(` Enemies that hit you are lifted by levitation`).gray()])
		text.add(11, [Text.of(` • Moon’s Judgment:`).gold(), Text.of(` Enemies below 100 HP are instantly executed`).gray()])
	})
	
	event.addAdvanced(`kubejs:pulsating_artifact`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Mana Cost:`).gold(), Text.of(` Strong Attack: 30 (Right-Click) / Weak Attack: 5 (Left-Click)`).gray()])
		text.add(3, [Text.of(` • Element:`).gold(), Text.of(` Randomly cycles between Void, Fire, and Lightning`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Special Traits:`).underlined(true))
		text.add(6, [Text.of(` • Targeting Lock:`).gold(), Text.of(` Elemental Projectiles seek out targets`).gray()])
		text.add(7, [Text.of(` → Triggers upon:`).green(), Text.of(` Hitting an enemy with an Elemental Projectile`).gray()])
		text.add(8, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:purification_totem`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Cooldown:`).gold(), Text.of(` 10 minutes`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Reset Cycle:`).gold(), Text.of(` Instantly refreshes the cooldown of the offhand item`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking while holding the totem`).gray()])
		text.add(7, Text.white(` `))
	})
	event.addAdvanced(`kubejs:whispers_of_the_elderwood`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 30 seconds`).gray()])
		text.add(3, [Text.of(` • Effects:`).gold(), Text.of(` Speed II, True Invisibility`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Special Traits:`).underlined(true))
		text.add(6, [Text.of(` • Vanishing Step:`).gold(), Text.of(` Become invisible and immune to damage for the duration`).gray()])
		text.add(7, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking to activate`).gray()])
		text.add(8, Text.white(` `))
	
		text.add(9, [Text.of(` • Eldritch Mark:`).gold(), Text.of(` Marks an entity`).gray()])
		text.add(10, [Text.of(` → Triggers upon:`).green(), Text.of(` Interacting with an entity while active`).gray()])
		text.add(11, Text.white(` `))
	
		text.add(12, [Text.of(` • Final Silence:`).gold(), Text.of(` When a marked entity dies, all other marked targets perish`).gray()])
		text.add(13, [Text.of(` → Triggers upon:`).green(), Text.of(` Killing a marked entity`).gray()])
		text.add(14, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:windwalkers_talisman`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 30 seconds of flight, followed by 30 seconds of gliding`).gray()])
		text.add(3, [Text.of(` • Cooldown:`).gold(), Text.of(` 5 minutes`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Special Traits:`).underlined(true))
		text.add(6, [Text.of(` • Windborne Grace:`).gold(), Text.of(` Grants temporary creative flight`).gray()])
		text.add(7, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking to activate`).gray()])
		text.add(8, Text.white(` `))
	
		text.add(9, [Text.of(` • Feathered Descent:`).gold(), Text.of(` After flight ends, gain angelic wings to glide`).gray()])
		text.add(10, [Text.of(` → Triggers upon:`).green(), Text.of(` Flight duration expiring`).gray()])
		text.add(11, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:withered_wand`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Cooldown:`).gold(), Text.of(` 2 minutes (after 5 casts)`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Decaying Barrage:`).gold(), Text.of(` Fires a withered projectile that lasts 30 seconds`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Left-clicking to cast`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Curse of the Hollow:`).gold(), Text.of(` On impact, summons sculk bombs over time`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` The projectile hitting a surface or entity`).gray()])
		text.add(10, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:cursed_necklace`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Effect Chance:`).gold(), Text.of(` 50%`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Cursed Might:`).gold(), Text.of(` Grants Strength II and Regeneration I`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Attacking an enemy`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Cursed Burden:`).gold(), Text.of(` Inflicts Blindness and Slowness`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` Taking damage`).gray()])
		text.add(10, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:phantoms_twilight`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Effect Chance:`).gold(), Text.of(` 5%`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Phantom’s Veil:`).gold(), Text.of(` Grants Strength II and True Invisibility`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Taking damage`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Twilight’s Grasp:`).gold(), Text.of(` Stuns and knocks back nearby enemies`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` Taking damage`).gray()])
		text.add(10, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:empyrean_scarab`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Effect Chance:`).gold(), Text.of(` 50%`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Arcane Rebirth:`).gold(), Text.of(` Refunds the mana cost of your last spell`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Casting an Irons Spellbooks spell`).gray()])
		text.add(7, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:phalanx_ring`, (item, advanced, text) => {
		text.add(1, Text.yellow(` `))
		text.add(2, [Text.of(`Phalanx Retaliation:`).green(), Text.of(` 10% chance upon being hit to stun the attacker`).gray()])
	})
	
	event.addAdvanced(`kubejs:specters_boon`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 10 seconds`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Spectral Resurgence:`).gold(), Text.of(` Restores full HP but binds you to the killer`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Taking fatal damage`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Wraith’s Vengeance:`).gold(), Text.of(` Can only damage the enemy who killed you`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` Attacking any enemy while under Specter’s Boon`).gray()])
		text.add(10, [Text.of(` → Ends upon:`).green(), Text.of(` Killing the enemy who killed you`).gray()])
		text.add(11, Text.white(` `))
	})

	event.addAdvanced(`kubejs:tears_of_the_aether`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Effect Chance:`).gold(), Text.of(` 5%`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Temporal Lock:`).gold(), Text.of(` Slows time for nearby enemies`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Taking damage`).gray()])
		text.add(7, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:sufficiently_advanced_technology`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Cooldown:`).gold(), Text.of(` 15 seconds`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Containment Protocol:`).gold(), Text.of(` Traps enemies in a glass prison`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Hitting an enemy with a potato from the Potato Cannon`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Experimental Warfare:`).gold(), Text.of(` Drops TNT around the trapped enemy`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` Enemy being trapped by Containment Protocol`).gray()])
		text.add(10, Text.white(` `))
	})

	event.addAdvanced(`kubejs:indistinguishable_magic`, (item, advanced, text) => {
		text.add(1, [Text.of(`Starchy Arcana:`).yellow(), Text.of(` Potato Canons fire TNT when you left-click`).gray()])
		text.add(2, Text.white(` `))
		text.add(3, [Text.of(`Cooldown`).red(), Text.of(` 5 seconds`).gray()])
		text.add(4, [Text.of(`Requirements:`).red(), Text.of(` TNT in your inventory`).gray()])
	})
	
	event.addAdvanced(`kubejs:twilight_codex`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Cooldown:`).gold(), Text.of(` 10 minutes`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Event Horizon:`).gold(), Text.of(` Summons a temporary black hole`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking while sneaking`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Heat Death:`).gold(), Text.of(` Summons a nuclear bomb after the black hole dissipates`).gray()])
		text.add(9, Text.white(` `))
	})

	event.addAdvanced(`kubejs:aethereal_gemstone`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Duration:`).gold(), Text.of(` 5 seconds`).gray()])
		text.add(3, [Text.of(` • Cooldown:`).gold(), Text.of(` 3 minutes`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Special Traits:`).underlined(true))
		text.add(6, [Text.of(` • Temporal Stasis:`).gold(), Text.of(` Slows all nearby enemies`).gray()])
		text.add(7, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking to activate`).gray()])
		text.add(8, Text.white(` `))
	
		text.add(9, [Text.of(` • Kinetic Detonation:`).gold(), Text.of(` Launches and then explodes affected enemies`).gray()])
		text.add(10, [Text.of(` → Triggers upon:`).green(), Text.of(` Hitting an affected enemy`).gray()])
		text.add(11, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:celestial_glass`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Uses Before Cooldown:`).gold(), Text.of(` 3`).gray()])
		text.add(3, [Text.of(` • Cooldown:`).gold(), Text.of(` 3 minutes`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Special Traits:`).underlined(true))
		text.add(6, [Text.of(` • Divine Lance:`).gold(), Text.of(` Fires a powerful energy projectile`).gray()])
		text.add(7, [Text.of(` → Triggers upon:`).green(), Text.of(` Left-clicking to fire`).gray()])
		text.add(8, Text.white(` `))
	
		text.add(9, [Text.of(` • Celestial Blessing:`).gold(), Text.of(` Grants powerful buffs near the glass`).gray()])
		text.add(10, [Text.of(` → Triggers upon:`).green(), Text.of(` Standing near the celestial glass entity`).gray()])
		text.add(11, Text.white(` `))
	})

	event.addAdvanced(`kubejs:enslaved_celestial_hammer`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Mana Drain:`).gold(), Text.of(` 2 per second`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Gravity Well:`).gold(), Text.of(` Pulls nearby enemies toward a focal point`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking to activate`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Absolute Judgement:`).gold(), Text.of(` Summons a nuclear strike upon ensnared enemies`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` Striking a target affected by Gravity Well`).gray()])
		text.add(10, Text.white(` `))
	})

	event.addAdvanced(`kubejs:elderwood_wand`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Effect Radius:`).gold(), Text.of(` 10 blocks`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Skyborne Smite:`).gold(), Text.of(` Launches enemies and slams them back down`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking an enemy`).gray()])
		text.add(7, Text.white(` `))
	})

	event.addAdvanced(`kubejs:corrupted_elderwood_wand`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Mana Cost:`).gold(), Text.of(` 10`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Levitation Curse:`).gold(), Text.of(` Causes enemies to float helplessly`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking an enemy`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Eldritch Barrage:`).gold(), Text.of(` Launches and bombards the enemy with fireballs`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` Left Clicking in the direction you want to launch the enemy`).gray()])
		text.add(10, Text.white(` `))
	})
	event.addAdvanced(`kubejs:pet_killer`, (item, advanced, text) => {
		text.add(1, Text.gray(`Kills all owned Pets and resets your Pet Data`))
		text.add(2, Text.white(` `))
		text.add(3, Text.red(`Only use this item if a Pet is bugged or broken`))
	})
	event.addAdvanced(`kubejs:archangel_wand`, (item, advanced, text) => {
		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Mana Cost:`).gold(), Text.of(` 5 per second`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Angelic Domain:`).gold(), Text.of(` Lifts and pulls entities toward your aim`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking to activate`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Arcane Singularity:`).gold(), Text.of(` Fires Ball Lightning`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` Left Clicking while activated`).gray()])
		text.add(10, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:corrupted_gemstone`, (item, advanced, text) => {
		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Uses Before Cooldown:`).gold(), Text.of(` 3`).gray()])
		text.add(3, [Text.of(` • Cooldown:`).gold(), Text.of(` 3 minutes`).gray()])
		text.add(4, Text.white(` `))
		text.add(5, Text.yellow(`Special Traits:`).underlined(true))
		text.add(6, [Text.of(` • Void Shackles:`).gold(), Text.of(` Weakens and slows all enemies near the gemstone`).gray()])
		text.add(7, [Text.of(` → Triggers upon:`).green(), Text.of(` Enemies being near a Corrupted Gemstone`).gray()])
		text.add(8, Text.white(` `))
	})

	event.addAdvanced(`kubejs:cultists_gauntlet`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Mana Cost:`).gold(), Text.of(` 5 every 10 ticks`).gray()])
		text.add(3, Text.white(` `))
	
		text.add(4, Text.yellow(`Special Traits:`).underlined(true))
		text.add(5, [Text.of(` • Dark Binding:`).gold(), Text.of(` Tethers an enemy and drags them towards your crosshair`).gray()])
		text.add(6, [Text.of(` → Triggers upon:`).green(), Text.of(` Right-clicking an enemy`).gray()])
		text.add(7, Text.white(` `))
	
		text.add(8, [Text.of(` • Abyssal Hurl:`).gold(), Text.of(` Throws the enemy with immense force`).gray()])
		text.add(9, [Text.of(` → Triggers upon:`).green(), Text.of(` Attacking a tethered enemy`).gray()])
		text.add(10, Text.white(` `))
	})
	
	event.addAdvanced(`kubejs:nebulous_flux`, (item, advanced, text) => {

		text.add(1, Text.yellow(`[Attributes]`))
		text.add(2, [Text.of(` • Cooldown:`).gold(), Text.of(` 5 seconds`).gray()])
		text.add(3, [Text.of(` • Extra Arrows:`).gold(), Text.of(` Shoots 2-4 arrows at once`).gray()])
		text.add(4, Text.white(` `))
	
		text.add(5, Text.yellow(`Special Traits:`).underlined(true))
		text.add(6, [Text.of(` • Volatile Barrage:`).gold(), Text.of(` Fires multiple arrows with unique effects`).gray()])
		text.add(7, [Text.of(` → Triggers upon:`).green(), Text.of(` Left-Clicking with a loaded Crossbow in your hand while wearing Nebulous Flux`).gray()])
		text.add(8, Text.white(` `))
	
		text.add(9, [Text.of(`Elemental Arrows:`).gold(), Text.of(` Arrows have a chance to apply elemental effects`).gray()])
		text.add(10, Text.white(` `))
	
		text.add(11, [Text.of(`- Lightning Arrow:`).aqua(), Text.of(` Calls down a lightning strike on impact`).gray()])
		text.add(12, [Text.of(`- Poison Arrow:`).green(), Text.of(` Applies Poison to the target`).gray()])
		text.add(13, [Text.of(`- Slow Arrow:`).darkPurple(), Text.of(` Slows the target on hit`).gray()])
		text.add(14, [Text.of(`- Explosive Arrow:`).red(), Text.of(` Spawns TNT or a fireball on impact`).gray()])
		text.add(15, [Text.of(`- Launch Arrow:`).blue(), Text.of(` Knocks the target into the air`).gray()])
		text.add(16, [Text.of(`- Stun Arrow:`).yellow(), Text.of(` Stuns the target on hit`).gray()])
	})


 	event.addAdvanced(`kubejs:devils_deal`, (item, advanced, text) => {
		text.add(1, [Text.of(`[Deal with the Devil]`).darkRed()])
		text.add(2, [Text.of(`- Instantly reduces your sanity to zero`).gray()])
		text.add(3, [Text.of(` `).gold()])
		text.add(4, [Text.of(`Cooldown:`).gold(), Text.of(` 30 seconds`).gray()])
	})
	
	event.addAdvanced(`kubejs:class_loot_box`, (item, advanced, text) => {
		text.add(1, Text.gray(`Drops the starter gear for the class you are playing`))
	})


	event.addAdvanced(`kubejs:skill_point`, (item, advanced, text) => {
		text.add(1, [Text.of(`RIGHT-CLICK`).gold(), Text.of(` to use`).gray()])
		text.add(2, Text.white(` `))
		text.add(3, [Text.of(`Grants`).gray(), Text.of(` +1 `).green(), Text.of(`Skill Point`).gray()])
	})


	

	event.addAdvanced(`kubejs:nightmare_orb`, (item, advanced, text) => {
		text.add(1, [Text.of(`RIGHT-CLICK`).yellow(), Text.of(` to`).gray(), Text.of(` activate`).green(), Text.of(` or `).gray(), Text.of(`deactivate`).red(), Text.of(` Nightmare Mode`)])
	})


	  
	global.mage_effects.forEach(gem => {
		// Base Affinity Gem
		event.addAdvanced(`kubejs:${gem}_affinity_gem`, (item, advanced, text) => {
			text.add(1, [Text.of(`Spell Power`).blue()])
			text.add(2, [Text.of(` | `).darkGreen(), Text.of(`Grants +10%`).gray(), Text.of(` ${gem.toUpperCase()}`).lightPurple(), Text.of(` Spell Power`).gray()])
			text.add(3, Text.white(` `))
			text.add(4, [Text.of(`Arcane Beasts`).yellow()])
			text.add(5, [Text.of(` | `).darkGreen(), Text.of(`Summoned Beasts gain spellcasting abilities for the`).gray(), Text.of(` ${gem.toUpperCase()}`).lightPurple(), Text.of(` school`).gray()])
			text.add(6, Text.white(` `))
		});

		// Superior Affinity Gem
		event.addAdvanced(`kubejs:superior_${gem}_affinity_gem`, (item, advanced, text) => {
			text.add(1, [Text.of(`Spell Power`).blue()])
			text.add(2, [Text.of(` | `).darkGreen(), Text.of(`Grants +15%`).gray(), Text.of(` ${gem.toUpperCase()}`).lightPurple(), Text.of(` Spell Power`).gray()])
			text.add(3, Text.white(` `))
			text.add(4, [Text.of(`Superior Arcane Beasts`).green()])
			text.add(5, [Text.of(` | `).darkGreen(), Text.of(`Summoned Beasts become`).gray(), Text.of(` Superior `).green(), Text.of(`spellcasters`).gray()])
			text.add(6, Text.white(` `))
			text.add(7, [Text.of(`Spell Boost`).gold()])
			text.add(8, [Text.of(` | `).darkGreen(), Text.of(`Grants +1 Level to all`).gray(), Text.of(` ${gem.toUpperCase()}`).lightPurple(), Text.of(` spells upon casting them`).gray()])
			text.add(9, Text.white(` `))
		});

		// Exalted Affinity Gem
		event.addAdvanced(`kubejs:exalted_${gem}_affinity_gem`, (item, advanced, text) => {
			text.add(1, [Text.of(`Spell Power`).blue()])
			text.add(2, [Text.of(` | `).darkGreen(), Text.of(`Grants +25%`).gray(), Text.of(` ${gem.toUpperCase()}`).lightPurple(), Text.of(` Spell Power`).gray()])
			text.add(3, Text.white(` `))
			text.add(4, [Text.of(`Exalted Arcane Beasts`).gold()])
			text.add(5, [Text.of(` | `).darkGreen(), Text.of(`Summoned Beasts become`).gray(), Text.of(` Exalted `).gold(), Text.of(`spellcasters`).gray()])
			text.add(6, Text.white(` `))
			text.add(7, [Text.of(`Spell Boost`).gold()])
			text.add(8, [Text.of(` | `).darkGreen(), Text.of(`Grants +2 Level to all`).gray(), Text.of(` ${gem.toUpperCase()}`).lightPurple(), Text.of(` spells upon casting them`).gray()])
			text.add(9, Text.white(` `))
		});
	});

	
	// Affinity stat gems (combat + utility). Tooltip values mirror affinity_gem_stats.js.
	;[
		{ id: 'melee_gem',        label: 'Melee Damage',      vals: ['+15', '+20', '+30'] },
		{ id: 'projectile_gem',   label: 'Projectile Damage', vals: ['+15', '+20', '+30'] },
		{ id: 'mana_gem',         label: 'Mana',              vals: ['+100', '+300', '+700'] },
		{ id: 'health_gem',       label: 'Health',            vals: ['+5', '+15', '+30'] },
		{ id: 'overheal_gem',     label: 'Overheal',          vals: ['+20%', '+30%', '+50%'] },
		{ id: 'lifesteal_gem',    label: 'Lifesteal',         vals: ['+5%', '+10%', '+15%'] },
		{ id: 'spell_resist_gem', label: 'Spell Resist',      vals: ['+10%', '+15%', '+25%'] },
	].forEach(c => {
		event.addAdvanced(`kubejs:${c.id}`, (item, advanced, text) => {
			text.add(1, [Text.of(c.label).red()])
			text.add(2, [Text.of(` | `).darkGreen(), Text.of(`Grants ${c.vals[0]}`).gray(), Text.of(` ${c.label}`).lightPurple()])
			text.add(3, Text.white(` `))
		})
		event.addAdvanced(`kubejs:superior_${c.id}`, (item, advanced, text) => {
			text.add(1, [Text.of(`Superior `).green(), Text.of(c.label).red()])
			text.add(2, [Text.of(` | `).darkGreen(), Text.of(`Grants ${c.vals[1]}`).gray(), Text.of(` ${c.label}`).lightPurple()])
			text.add(3, Text.white(` `))
		})
		event.addAdvanced(`kubejs:exalted_${c.id}`, (item, advanced, text) => {
			text.add(1, [Text.of(`Exalted `).gold(), Text.of(c.label).red()])
			text.add(2, [Text.of(` | `).darkGreen(), Text.of(`Grants ${c.vals[2]}`).gray(), Text.of(` ${c.label}`).lightPurple()])
			text.add(3, Text.white(` `))
		})
	})

	event.addAdvanced(`kubejs:armored1`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Armor:`).gold(), Text.of(` +8`).lightPurple()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +15`).green().italic()])
		
	})

	event.addAdvanced(`kubejs:armored2`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Armor:`).gold(), Text.of(` +16`).lightPurple()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +30`).green().italic()])
	})

	event.addAdvanced(`kubejs:demonic1`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Critical Chance:`).gold(), Text.of(` +15%`).darkRed()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +50`).green().italic()])
	})

	event.addAdvanced(`kubejs:demonic2`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Critical Chance:`).gold(), Text.of(` +30%`).darkRed()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +75`).green().italic()])
	})

	event.addAdvanced(`kubejs:blessed1`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Dodge Chance:`).gold(), Text.of(` +10%`).darkAqua()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +25`).green().italic()])
	})

	event.addAdvanced(`kubejs:blessed2`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Dodge Chance:`).gold(), Text.of(` +20%`).darkAqua()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +50`).green().italic()])
	})


	event.addAdvanced(`kubejs:focused1`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Critical Damage:`).gold(), Text.of(` +25%`).red()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +50`).green().italic()])
	})

	event.addAdvanced(`kubejs:focused2`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Critical Damage:`).gold(), Text.of(` +50%`).red()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +75`).green().italic()])
	})

	event.addAdvanced(`kubejs:gifted1`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Spell Power:`).gold(), Text.of(` +15%`).darkPurple()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +25`).green().italic()])
	})

	event.addAdvanced(`kubejs:gifted2`, (item, advanced, text) => {
		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Spell Power:`).gold(), Text.of(` +30%`).darkPurple()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +50`).green().italic()])
	})

	event.addAdvanced(`kubejs:swift1`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Movement Speed:`).gold(), Text.of(` +25%`).green()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +50`).green().italic()])
	})

	event.addAdvanced(`kubejs:swift2`, (item, advanced, text) => {

		text.add(1, Text.gray(`Modifies Attributes of Boss Variants:`))
		text.add(2, [Text.of(` • Movement Speed:`).gold(), Text.of(` +50%`).green()])
		text.add(3, [Text.of(`  `).yellow()])
		text.add(4, [Text.of(`Power Level Bonus:`).gray()])
		text.add(5, [Text.of(` +75`).green().italic()])
		
	})


	event.addAdvanced(`kubejs:tome_of_death`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` with this item in your hand to teleport back to where you died last`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
		text.add(3, [Text.of(`Buyable from the `).gray(), Text.of(`Shop`).yellow()])
	})


	event.addAdvanced(`kubejs:effigy_of_the_undying`, (item, advanced, text) => {
		text.add(1, [Text.of(`Taking lethal damage will revive you and heal you to`).gray(), Text.of(` 25% `).green(), Text.of(`health. However, this item breaks upon reviving you.`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
		text.add(3, [Text.of(`Buyable from the `).gray(), Text.of(`Shop`).yellow()])
	})



	let curios_slot_exp = [
		`kubejs:ring_slot_expansion`,
		`kubejs:necklace_slot_expansion`,
		`kubejs:belt_slot_expansion`,
		`kubejs:charm_slot_expansion`, 
		`kubejs:talent_slot_expansion`,
		`kubejs:augment_slot_expansion`,
	]

	event.addAdvanced(`kubejs:ring_slot_expansion`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click to add`).gray(), Text.of(` +1`).green(), Text.of(` to your`).gray(), Text.of(` Ring`).gold().italic(), Text.of(` slots`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:necklace_slot_expansion`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click to add`).gray(), Text.of(` +1`).green(), Text.of(` to your`).gray(), Text.of(` Necklace`).gold().italic(), Text.of(` slots`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:belt_slot_expansion`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click to add`).gray(), Text.of(` +1`).green(), Text.of(` to your`).gray(), Text.of(` Belt`).gold().italic(), Text.of(` slots`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:charm_slot_expansion`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click to add`).gray(), Text.of(` +1`).green(), Text.of(` to your`).gray(), Text.of(` Charm`).gold().italic(), Text.of(` slots`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:talent_slot_expansion`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click to add`).gray(), Text.of(` +1`).green(), Text.of(` to your`).gray(), Text.of(` Talent`).gold().italic(), Text.of(` slots`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:augment_slot_expansion`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click to add`).gray(), Text.of(` +1`).green(), Text.of(` to your`).gray(), Text.of(` Augment`).gold().italic(), Text.of(` slots`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:abyssal_wayfinder`, (item, advanced, text) => {
		text.add(1, [Text.of(`Used to find the`).gray(), Text.of(` Abyssal Chasm`).darkAqua(), Text.of(` biome`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
		text.add(3, [Text.of(`[How to use]:`).gold()])
		text.add(4, [Text.of(`Right Click with an`).gray(), Text.of(` Abyssal Chasm`).darkAqua(), Text.of(` Cave Map in your Main Hand while holding the Wayfinder in your Off Hand`).gray()])
	})

	event.addAdvanced(`kubejs:primordial_wayfinder`, (item, advanced, text) => {
		text.add(1, [Text.of(`Used to light the`).gray(), Text.of(` Primordial Caves`).darkGreen(), Text.of(` Portal`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:magnetic_wayfinder`, (item, advanced, text) => {
		text.add(1, [Text.of(`Used to light the`).gray(), Text.of(` Magnetic Caves`).lightPurple(), Text.of(` Portal`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:toxic_wayfinder`, (item, advanced, text) => {
		text.add(1, [Text.of(`Used to light the`).gray(), Text.of(` Toxic Caves`).green(), Text.of(` Portal`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})

	event.addAdvanced(`kubejs:forlorn_wayfinder`, (item, advanced, text) => {
		text.add(1, [Text.of(`Used to light the`).gray(), Text.of(` Forlorn Hollows`).darkRed(), Text.of(` Portal`).gray()])
		text.add(2, [Text.of(`  `).yellow()])
	})



	event.addAdvanced(`kubejs:artifacts_loot_box`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` to open`).gray()])
		text.add(2, [Text.of(`• Max items per roll:`).gray(), Text.of(` 1`).green()])
		text.add(3, [Text.of(`• Max rolls: `).gray(), Text.of(` 2`).green()])
		text.add(4, [Text.of(`• Reroll chance: `).gray(), Text.of(` 5%`).green()])
	})

	event.addAdvanced(`kubejs:starter_artifacts_loot_box`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` to open`).gray()])
		text.add(2, [Text.of(`• Max items per roll:`).gray(), Text.of(` 1`).green()])
		text.add(3, [Text.of(`• Max rolls: `).gray(), Text.of(` 2`).green()])
		text.add(4, [Text.of(`• Reroll chance: `).gray(), Text.of(` 5%`).green()])
	})

	event.addAdvanced(`kubejs:food_loot_box`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` to open`).gray()])
		text.add(2, [Text.of(`• Max items per roll:`).gray(), Text.of(` 4`).green()])
		text.add(3, [Text.of(`• Max rolls: `).gray(), Text.of(` 5`).green()])
		text.add(4, [Text.of(`• Reroll chance: `).gray(), Text.of(` 25%`).green()])
	})

	event.addAdvanced(`kubejs:bookshelf_loot_box`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` to open`).gray()])
		text.add(2, [Text.of(`• Max items per roll:`).gray(), Text.of(` 3`).green()])
		text.add(3, [Text.of(`• Max rolls: `).gray(), Text.of(` 3`).green()])
		text.add(4, [Text.of(`• Reroll chance: `).gray(), Text.of(` 15%`).green()])
	})

	event.addAdvanced(`kubejs:create_parts_loot_box`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` to open`).gray()])
		text.add(2, [Text.of(`• Max items per roll:`).gray(), Text.of(` 5`).green()])
		text.add(3, [Text.of(`• Max rolls: `).gray(), Text.of(` 3`).green()])
		text.add(4, [Text.of(`• Reroll chance: `).gray(), Text.of(` 25%`).green()])
	})

	event.addAdvanced(`kubejs:create_gears_loot_box`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` to open`).gray()])
		text.add(2, [Text.of(`• Max items per roll:`).gray(), Text.of(` 8`).green()])
		text.add(3, [Text.of(`• Max rolls: `).gray(), Text.of(` 4`).green()])
		text.add(4, [Text.of(`• Reroll chance: `).gray(), Text.of(` 25%`).green()])
	})

	event.addAdvanced(`kubejs:create_switches_loot_box`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` to open`).gray()])
		text.add(2, [Text.of(`• Max items per roll:`).gray(), Text.of(` 8`).green()])
		text.add(3, [Text.of(`• Max rolls: `).gray(), Text.of(` 4`).green()])
		text.add(4, [Text.of(`• Reroll chance: `).gray(), Text.of(` 25%`).green()])
	})

	event.addAdvanced(`kubejs:create_machines_loot_box`, (item, advanced, text) => {
		text.add(1, [Text.of(`Right-click`).gold(), Text.of(` to open`).gray()])
		text.add(2, [Text.of(`• Max items per roll:`).gray(), Text.of(` 8`).green()])
		text.add(3, [Text.of(`• Max rolls: `).gray(), Text.of(` 4`).green()])
		text.add(4, [Text.of(`• Reroll chance: `).gray(), Text.of(` 25%`).green()])
	})





	
})
ItemEvents.tooltip(event => {

  function orbTooltip(id, descriptionLines) {
    event.addAdvanced(id, (stack, advanced, text) => {

      // ▸ 1  Short description (always)
      for (let i = 0; i < descriptionLines.length; i++) {
        text.add(i + 1, descriptionLines[i])
      }

      // ▸ 2  Collapsible usage
      if (!event.shift) {
        text.add(descriptionLines.length + 1, Text.white(` `))
        text.add(descriptionLines.length + 2,
          Text.gray(`Hold `)
            .append(Text.aqua(`SHIFT `))
            .append(Text.gray(`for usage`)))
      } else {
        let base = descriptionLines.length + 1
        text.add(base, Text.white(` `))
        text.add(base + 1, Text.aqua(`[How to use]:`))
        text.add(base + 2, [
          Text.white(` • `),
          Text.gray(`While your inventory is open, click on this orb and hover it over the item you want to modify and press `),
          Text.yellow(`SHIFT`)
        ])
      }
    })
  }

  function tooltipHasNbtKey(nbt, key) {
    if (!nbt) return false

    try {
      if (typeof nbt.contains === 'function') return !!nbt.contains(key)
    } catch (e) {}

    try {
      return Object.prototype.hasOwnProperty.call(nbt, key)
    } catch (e2) {}

    try {
      return nbt[key] != null
    } catch (e3) {
      return false
    }
  }

  function tooltipNbtNumber(nbt, key) {
    if (!tooltipHasNbtKey(nbt, key)) return 0

    try {
      if (typeof nbt.getLong === 'function') return Number(nbt.getLong(key))
    } catch (e) {}

    try {
      if (typeof nbt.getInt === 'function') return Number(nbt.getInt(key))
    } catch (e2) {}

    try {
      let value = Number(nbt[key])
      return isNaN(value) ? 0 : value
    } catch (e3) {
      return 0
    }
  }

  function tooltipNbtString(nbt, key) {
    if (!tooltipHasNbtKey(nbt, key)) return ''

    try {
      if (typeof nbt.getString === 'function') return String(nbt.getString(key))
    } catch (e) {}

    try {
      return nbt[key] != null ? String(nbt[key]) : ''
    } catch (e2) {
      return ''
    }
  }

  event.addAdvanced('kubejs:orb_of_knowledge', (stack, advanced, text) => {
    let lines = [
      Text.yellow(`[Orb Type]: `).append(Text.green(`Equipment`)),
      Text.of([Text.yellow(` • `), Text.gray(`Extracts Lukas Weapon Leveling level and XP from a weapon`)]),
      Text.of([Text.yellow(` • `), Text.gray(`Applies the stored level and XP to another valid weapon`)]),
    ]

    let charged = stack.nbt && (
      tooltipHasNbtKey(stack.nbt, 'wl_transfer_level') ||
      tooltipHasNbtKey(stack.nbt, 'wl_transfer_levelprogress')
    )

    if (charged) {
      let level = Math.max(0, Math.floor(tooltipNbtNumber(stack.nbt, 'wl_transfer_level')))
      let progress = Math.max(0, Math.floor(tooltipNbtNumber(stack.nbt, 'wl_transfer_levelprogress')))
      let sourceItem = tooltipNbtString(stack.nbt, 'wl_transfer_source_item')
      lines.push(Text.of([Text.yellow(`[Stored]: `), Text.green(`Level ${level}`), Text.gray(` / XP ${progress}`)]))
      if (sourceItem) lines.push(Text.of([Text.darkGray(`Source: ${sourceItem}`)]))
    } else {
      lines.push(Text.of([Text.yellow(`[Stored]: `), Text.darkGray(`Empty`)]))
    }

    for (let i = 0; i < lines.length; i++) {
      text.add(i + 1, lines[i])
    }

    if (!event.shift) {
      text.add(lines.length + 1, Text.white(` `))
      text.add(lines.length + 2,
        Text.gray(`Hold `)
          .append(Text.aqua(`SHIFT `))
          .append(Text.gray(`for usage`)))
    } else {
      let base = lines.length + 1
      text.add(base, Text.white(` `))
      text.add(base + 1, Text.aqua(`[How to use]:`))
      text.add(base + 2, [
        Text.white(` • `),
        Text.gray(`Use once on a weapon to extract its Weapon Leveling progress, then use the charged orb on another valid weapon.`)
      ])
    }
  })

  orbTooltip('kubejs:orb_of_renewal', [
    Text.yellow(`[Orb Type]: `).append(Text.green(`Equipment`)), [
    Text.yellow(` • `), Text.gray(`Completely repairs a damaged or broken item`)
  ]
  ])

  orbTooltip('kubejs:orb_of_reflection', [
    Text.yellow(`[Orb Type]: `).append(Text.green(`Item`)),
    Text.of([Text.yellow(` • `), Text.gray(`Creates one copy of the hovered item`)]),
    Text.of([Text.yellow(` • `), Text.gray(`The orb is replaced by the copied item`)]),
  ])

  // ▸ Orb Tooltips
	  orbTooltip(`kubejs:orb_of_exaltation`, [
	Text.yellow(`[Orb Type]: `).append(Text.green(`Equipment / Curio Item`)),
	Text.of([Text.yellow(` • `), Text.gray(`Upgrades gear to the next rarity level`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Higher rarities require unique boss kill milestones`)]),
  ])

    orbTooltip(`kubejs:orb_of_severing`, [
		Text.yellow(`[Orb Type]: `).append(Text.green(`Equipment`)), [
		Text.yellow(` • `), Text.gray(`Removes a random spell from a piece of equipment`)
		]
	])

  	orbTooltip(`kubejs:orb_of_dissonance`, [
	Text.of([Text.yellow(`[Orb Type]: `), Text.green(`Equipment`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Replaces a random Imbued Spell with a new one`)]),
	])


	orbTooltip(`kubejs:orb_of_sorcery`, [
	Text.of([Text.yellow(`[Orb Type]: `), Text.green(`Equipment`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Upgrades a random spell imbued on a gear item`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Adds +1 to a random Spell\`s Level (Max Level: 5)`)]),
	])


  orbTooltip(`kubejs:orb_of_ascension`, [
	Text.yellow(`[Orb Type]: `).append(Text.green(`Equipment / Curio Item`)),
	Text.of([Text.yellow(` • `), Text.gray(`On gear, upgrades a random Affix on the item`)]),
	Text.of([Text.yellow(` • `), Text.gray(`On Curio items, upgrades a random Curios Skill by 1 level`)]),
  ])

  orbTooltip(`kubejs:orb_of_imbuement`, [
	Text.yellow(`[Orb Type]: `).append(Text.green(`Equipment`)), [
    Text.yellow(` • `), Text.gray(`Imbues equipment with a Spell`)
	]
  ])

  orbTooltip(`kubejs:orb_of_infusion`, [
	Text.yellow(`[Orb Type]: `).append(Text.green(`Equipment / Curio Item`)),
	Text.of([Text.yellow(` • `), Text.gray(`On gear, adds a new affix to the item`)]),
	Text.of([Text.yellow(` • `), Text.gray(`On Curio items, adds 1 new Curios Skill`)]),
  ])

  orbTooltip(`kubejs:orb_of_reforging`, [
	Text.yellow(`[Orb Type]: `).append(Text.green(`Equipment / Curio Item`)),
	Text.of([Text.yellow(` • `), Text.gray(`On gear, removes a random Affix and adds a new one`)]),
	Text.of([Text.yellow(` • `), Text.gray(`On Curio items, removes 1 random Curios Skill and adds 1 new one`)]),
  ])

	orbTooltip(`kubejs:orb_of_socketing`, [
	Text.of([Text.yellow(`[Orb Type]: `), Text.green(`Equipment`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Adds a Gem Socket to a piece of gear`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Socket cap is 2 at`), Text.darkGray(` Common Rarity`), Text.gray(`. Each level increases the cap by 1`)]),
	])

	orbTooltip(`kubejs:orb_of_fate`, [
	Text.of([Text.yellow(`[Orb Type]: `), Text.green(`Equipment / Curio Item`)]),
	Text.of([Text.yellow(` • `), Text.gray(`On gear, locks a random Affix on the item`)]),
	Text.of([Text.yellow(` • `), Text.gray(`On Curio items, locks 1 random Curios Skill`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Locked affixes and Curios Skills cannot be removed or downgraded`)]),
	])

	orbTooltip(`kubejs:orb_of_rebirth`, [
	Text.of([Text.yellow(`[Orb Type]: `), Text.green(`Equipment`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Removes all Affixes from a piece of gear`)]),
	Text.of([Text.yellow(` • `), Text.gray(`Also removes Locked Affix status while preserving rarity and sockets`)]),
	])

	orbTooltip(`kubejs:orb_of_binding`, [
		Text.of([Text.yellow(`[Orb Type]: `), Text.green(`Equipment`)]),
		Text.of([Text.yellow(` • `), Text.gray(`Locks a random Imbued Spell on a gear item`)]),
		Text.of([Text.yellow(` • `), Text.gray(`Locked spells cannot be replaced, removed, or downgraded`)]),
		])




})


ItemEvents.tooltip(event => {

  function orbTooltipCuriosSkills(id, descriptionLines) {
    event.addAdvanced(id, (stack, advanced, text) => {

      // ▸ 1  Short description (always)
      for (let i = 0; i < descriptionLines.length; i++) {
        text.add(i + 1, descriptionLines[i])
      }

      // ▸ 2  Collapsible usage
      if (!event.shift) {
        text.add(descriptionLines.length + 1, Text.white(` `))
        text.add(descriptionLines.length + 2,
          Text.gray(`Hold `)
            .append(Text.aqua(`SHIFT `))
            .append(Text.gray(`for usage`)))
      } else {
        let base = descriptionLines.length + 1
        text.add(base, Text.white(` `))
        text.add(base + 1, Text.aqua(`[How to use]:`))
        text.add(base + 2, [
          Text.white(` • `),
          Text.gray(`While your inventory is open, click on this orb and hover it over the Curio item you want to modify and press `),
          Text.yellow(`SHIFT`)
        ])
      }
    })
  }

	orbTooltipCuriosSkills(`kubejs:orb_of_divinity`, [
		Text.yellow(`[Orb Type]: `).append(Text.green(`Curio Item`)),
		Text.of([Text.yellow(` • `), Text.gray(`Raises 1-3 random eligible Curios Skills by 1-2 levels each`)])
	])

})

function curiosTooltipList(raw) {
  let out = []
  if (!raw) return out

  if (Array.isArray(raw)) {
    for (let i = 0; i < raw.length; i++) out.push(String(raw[i]))
    return out
  }

  try {
    if (typeof raw.length === 'number') {
      for (let i = 0; i < raw.length; i++) out.push(String(raw[i]))
    }
  } catch (e) {}

  return out
}

function curiosTooltipMap(raw) {
  let out = {}
  if (!raw) return out

  try {
    if (typeof raw.getAllKeys === 'function') {
      let keys = raw.getAllKeys()
      if (keys && typeof keys.forEach === 'function') {
        keys.forEach(key => {
          out[String(key)] = Number(raw.getInt(String(key))) || 1
        })
        return out
      }
    }
  } catch (e) {}

  let keys = Object.keys(raw || {})
  for (let i = 0; i < keys.length; i++) {
    out[String(keys[i])] = Number(raw[keys[i]]) || 1
  }

  return out
}

function getCuriosTooltipInsertIndex(text) {
  try {
    return Math.max(1, Number(text.size()) || 1)
  } catch (e) {}

  try {
    return Math.max(1, Number(text.length) || 1)
  } catch (e) {}

  return 1
}

function buildCuriosSkillLoreLine(skillId, level) {
  let spec = global.getSkillTotemSpec ? global.getSkillTotemSpec(skillId) : null
  if (!spec) return null

  let lore = String(spec.lore || '')
  if (!lore) return null

  let replacements = global.getCuriosSkillLoreReplacements
    ? global.getCuriosSkillLoreReplacements(skillId, level)
    : {}
  let tokenRegex = /(TIME|PERCENT|HITS|ENTITY_COUNT|AMPLIFIER|COOLDOWN)/g
  let out = [Text.gray('    ↳ ')]
  let lastIndex = 0
  let match = null

  while ((match = tokenRegex.exec(lore)) != null) {
    let token = String(match[0])
    let plain = lore.slice(lastIndex, match.index)
    if (plain) out.push(Text.darkGray(plain))

    let replacement = replacements && Object.prototype.hasOwnProperty.call(replacements, token)
      ? String(replacements[token])
      : token
    out.push(Text.green(replacement))
    lastIndex = match.index + token.length
  }

  let tail = lore.slice(lastIndex)
  if (tail) out.push(Text.darkGray(tail))

  return out
}

ItemEvents.tooltip(event => {
  event.addAdvanced(/.*/, (stack, advanced, text) => {
    let key = global.curiosSkillDataKey || 'kubejs_curios_skill_data'
    let raw = stack.nbt ? stack.nbt[key] : null
    if (!raw) return

    let skills = curiosTooltipList(raw.skills).map(global.normalizeSkillTotemKey)
    if (skills.length === 0) return

    let levels = curiosTooltipMap(raw.levels)
    let locked = curiosTooltipList(raw.locked).map(global.normalizeSkillTotemKey)
    let line = getCuriosTooltipInsertIndex(text)

    text.add(line++, Text.white(` `))
    text.add(line++, Text.gold(`[Curios Skills]`))

    for (let i = 0; i < skills.length; i++) {
      let skillId = skills[i]
      let level = Math.max(1, Number(levels[skillId]) || 1)
      if (!global.isCuriosSkillLevelable(skillId)) level = 1
      let icon = global.getCuriosSkillIcon ? global.getCuriosSkillIcon(skillId) : '⚚'

      let header = [
        Text.gray(` ${icon} `),
        Text.aqua(global.getSkillTotemDisplayName(skillId)),
        Text.gold(` Lv. ${level}`)
      ]

      if (locked.indexOf(skillId) !== -1) {
        header.push(Text.darkRed(` [Locked]`))
      }

      text.add(line++, header)

      let loreLine = buildCuriosSkillLoreLine(skillId, level)
      if (loreLine) {
        text.add(line++, loreLine)
      }

      if (i < skills.length - 1) {
        text.add(line++, Text.white(` `))
      }
    }
  })
})

let gameplay_modifiers = global.superiorGameplayModifiers || {}
let isGameplayModifierAvailable = global.isGameplayModifierAvailable || function (id) {
  let spec = gameplay_modifiers[id]
  return spec != null && spec.available === true && spec.implemented === true
}

// Derived in gameplay_modifier_specs.js (startup) from the health/damage/coin targets,
// so this shop tooltip preview matches the real effect. Fallback 1 = original tuning.
const GM_HEALTH_BONUS_SCALE = global.GM_HEALTH_BONUS_SCALE || 1
const GM_DAMAGE_BONUS_SCALE = global.GM_DAMAGE_BONUS_SCALE || 1
const GM_COIN_BONUS_SCALE = global.GM_COIN_BONUS_SCALE || 1

ItemEvents.tooltip(event => {
	let addTooltip = function(id, desc, modId, synergies) {
	  let spec = gameplay_modifiers[modId]
	  if (!spec) return
	  synergies = (spec.synergies || synergies || []).filter(s => isGameplayModifierAvailable(s))
  
	  // Format synergy list from snake_case → Capitalized Words
	  let formatted = synergies.map(s =>
		s.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
	  )
  
	  let baseMult = spec.multiplier
	  let coinMult = Math.round((1 + (baseMult - 1) * GM_COIN_BONUS_SCALE) * 100) / 100
	  let healthMult = Math.round((1 + (baseMult - 1) / 2 * GM_HEALTH_BONUS_SCALE) * 100) / 100
	  let damageMult = Math.round((1 + (baseMult - 1) / 3 * GM_DAMAGE_BONUS_SCALE) * 100) / 100
  
	  event.addAdvanced(id, (item, advanced, text) => {
		let line = 1
		text.add(line++, [Text.of(`[Gameplay Modifier]`).red()])
		text.add(line++, [Text.of(` • `).white(), Text.of(`${desc}`).gray()])
		if (!isGameplayModifierAvailable(modId)) {
		  text.add(line++, [Text.of(` • `).white(), Text.of(`Currently unavailable`).darkRed()])
		}
		text.add(line++, Text.white(` `))
		text.add(line++, Text.aqua(`[Modifier Stats]:`))
		text.add(line++, [Text.of(` • `).white(), Text.of(`Multipliers:`).gray()])
		text.add(line++, [Text.of(`  | `).green(), Text.of(`Coins: `).gray(), Text.of(`${coinMult}×`).gold()])
		text.add(line++, [Text.of(`  | `).green(), Text.of(`Monster Health: `).gray(), Text.of(`${healthMult}×`).gold()])
		text.add(line++, [Text.of(`  | `).green(), Text.of(`Monster Damage: `).gray(), Text.of(`${damageMult}×`).gold()])
		if (formatted.length > 0) {
		  text.add(line++, [Text.of(` • `).white(), Text.of(`Synergies:`).gray()])
		  formatted.forEach(s => {
			text.add(line++, [Text.of(`  | `).green(), Text.of(`${s}`).lightPurple()])
		  })
		}
	  })
	}
  
	addTooltip(`kubejs:beastriders`, `Vanilla monsters have a chance to spawn with a Mount`, `beastriders`, [`arcane_ascension`])
	addTooltip(`kubejs:arcane_ascension`, `100% chance for Monsters to spawn as spellcasters and cast spells more often`, `arcane_ascension`, [`unending_horde`])
	addTooltip(`kubejs:ironclad`, `THIS MECHANIC DOES NOTHING AT THE MOMENT`, `ironclad`)
	addTooltip(`kubejs:arachnophobia`, `When a Spider dies it will summon small Cave Spiders that have increased movement speed`, `arachnophobia`, [`veiled_broodlings`])
	addTooltip(`kubejs:monstrosities`, `Mutants spawn with more life and special abilities`, `monstrosities`, [`shroudwalkers`, `undead_feast`, `death_snare`, `corrupted_kin`])
	addTooltip(`kubejs:ravenous_horde`, `Hitting a zombie empowers nearby zombies with Speed, Strength, and Haste`, `ravenous_horde`, [`deep_abyss`])
	addTooltip(`kubejs:undead_feast`, `Zombies spawn with life steal`, `undead_feast`, [`deep_abyss`])
	addTooltip(`kubejs:icebound`, `Strays have a high chance to freeze you`, `icebound`, [`death_snare`])
	addTooltip(`kubejs:death_snare`, `Arrows pull you and apply slowness`, `death_snare`)
	addTooltip(`kubejs:piglin_rage`, `Nearby Zombified Piglins gain speed when one is attacked`, `piglin_rage`, [`brute_force`])
	addTooltip(`kubejs:brute_force`, `Piglin Brutes deal more damage and knockback`, `brute_force`)
	addTooltip(`kubejs:tempestborn`, `All Creeper types spawn charged`, `tempestborn`, [`vexsplosion`])
	addTooltip(`kubejs:vexsplosion`, `Vex will drop a lit TNT block on death`, `vexsplosion`, [`tempestborn`])
	addTooltip(`kubejs:shroudwalkers`, `Endermen give darkness and teleport more`, `shroudwalkers`, [`veiled_broodlings`, `screeching_shadows`])
	addTooltip(`kubejs:corrupted_kin`, `Mutants spawn in place of their counterparts 50% of the time`, `corrupted_kin`)
	addTooltip(`kubejs:veiled_broodlings`, `Cave spiders spawn invisible until they attack`, `veiled_broodlings`)
	addTooltip(`kubejs:deep_abyss`, `Drowned spawn with Tridents that pull you`, `deep_abyss`)
	addTooltip(`kubejs:mob_menagerie`, `When a pillager spawns, a powerful pillager variant has a chance to spawn with it`, `mob_menagerie`)
	addTooltip(`kubejs:screeching_shadows`, `Phantoms are smaller, faster, and duplicate on hit`, `screeching_shadows`)
	addTooltip(`kubejs:event_horizon`, `Mob deaths have a small chance to create a blackhole that lasts 10s`, `event_horizon`)
	addTooltip(`kubejs:weeping_fate`, `Ghasts teleport away when hit, avoiding damage`, `weeping_fate`)
	addTooltip(`kubejs:unending_horde`, `Low-health monsters frequently summon allies`, `unending_horde`)
	addTooltip(`kubejs:critical_mass`, `Creepers have a 0.1% chance to spawn a nuke on death`, `critical_mass`)
	addTooltip(`kubejs:bone_brigade`, `Skeletons sometimes spawn as five special skeletons`, `bone_brigade`)
	addTooltip(`kubejs:blood_moon`, `At night, mobs gain Speed, Strength, and Regeneration`, `blood_moon`)
	addTooltip(`kubejs:glass_bones`, `Fall damage is increased by 5x`, `glass_bones`)
	addTooltip(`kubejs:pyromania`, `You are ignited for 3 seconds when hit`, `pyromania`)
	addTooltip(`kubejs:glancing_blows`, `Bosses spawn with an infinite §cResistance III§7 and §aKnockback Resistance I§7 effect`, `glancing_blows`)
  
  })
  

ItemEvents.tooltip(event => {
  let addTooltip = function(id, desc) {
    event.addAdvanced(id, (item, advanced, text) => {
      text.add(1, [Text.of(`[Infused Skill]`).red()])
      text.add(2, [Text.of(` • `).white(), Text.of(desc).gray()])
    })
  }

  addTooltip(`kubejs:ice_beam`, `Enemies hit by Ray of Frost are marked. Marked enemies freeze when hit with a projectile`)
  addTooltip(`kubejs:frost_repulse`, `5% chance to freeze enemies around you when you are hit`)
  addTooltip(`kubejs:aegis`, `Block and look at the ground while falling to negate fall damage`)
  addTooltip(`kubejs:bulwark`, `Blocked physical projectiles will be reflected back at the enemy`)
  //addTooltip(`kubejs:lava_dancer`, `Gain a permanent lava walker effect`)
  addTooltip(`kubejs:speed_runner`, `Gives you a speed boost after performing a ParCool move`)
  addTooltip(`kubejs:blacksmith`, `Crafted gear has a chance to have apotheosis affixes`)
  addTooltip(`kubejs:merchant`, `Items sell for 50% more`)
  addTooltip(`kubejs:bounty_hunter`, `Money earned from monster kills is doubled`)
  addTooltip(`kubejs:woods_walker`, `Quantity of item drops from animals is doubled`)
  addTooltip(`kubejs:tunnel_vision`, `If you have the §6Gungnir§7 skill, the max amplifier levels are doubled`)
  addTooltip(`kubejs:head_hunter`, `Enemies under 10% health have a 50% chance to be Culled. Player gains 5% max health as healing`)
  addTooltip(`kubejs:momentum`, `Gain a haste and strength effect after dodge rolling`)
  addTooltip(`kubejs:shattering_blow`, `Combat rolling into an enemy will stun them for 3 seconds`)
  addTooltip(`kubejs:cloaked_blade`, `Hitting a mob while invisible has a 10% chance to apply Venom`)
  addTooltip(`kubejs:hexblood`, `Killing a mob with a spell while they have Venom applies Hex to the next 5 enemies you hit`)
  addTooltip(`kubejs:witchglass`, `Using a Spell to kill a mob that has the HEXED effect applies Venom to a random nearby enemy`)
  addTooltip(`kubejs:poisonous_rot`, `Killing a mob with Venom has a 15% chance per level of Venom to give nearby enemies Venom and Plague for 5s per level`)
  addTooltip(`kubejs:bloodshroud`, `Gain invisibility and speed while bleeding. Hitting a mob consumes bleeding and removes effects`)
  addTooltip(`kubejs:plague_of_rust`, `Hitting a mob with Plague has a 50% chance to apply Rend (reduced armor)`)
  addTooltip(`kubejs:final_gasp`, `Killing a mob has a 25% chance to give YOU Venom, Bleeding, Chilled, or Slowness for 15 seconds`)
  addTooltip(`kubejs:frost_wraith`, `Hitting a mob while invisible has a 15% chance to apply Chilled`)
  addTooltip(`kubejs:shattered`, `Killing a frozen mob has a 20% chance per level of Frozen to apply Bleeding to nearby enemies`)
  addTooltip(`kubejs:dreadmark`, `Permafrost charges work with any projectile`)
  addTooltip(`kubejs:death_grip`, `Hitting with a projectile costs 10 mana and adds 1 level of Chilled. Each level adds a 5% freeze chance`)
  addTooltip(`kubejs:frost_surge`, `Killing a mob with Chilled has a 50% chance to give you Speed`)
  addTooltip(`kubejs:lucky_hex`, `Hitting a mob while you have Luck has a 10% chance to give them Hexed`)
  addTooltip(`kubejs:sanguine`, `Hitting a bleeding mob has a 25% chance to apply Marked for Death`)
  addTooltip(`kubejs:bloodhunt`, `Killing a slowed mob applies Bleeding to your next 5 hits`)
  addTooltip(`kubejs:grim_reaper`, `Hitting a Hexed mob has a 10% chance per level of Hex to apply Marked for Death to nearby mobs (4s per level)`)
  addTooltip(`kubejs:blood_splatter`, `Using Blood Harvest has a 10% chance to apply Bleeding to ALL enemies in a 15 block radius`)
  addTooltip(`kubejs:sacrifice`, `Killing while Charged has a 50% chance per enemy to apply Hexed within 20 blocks`)
  addTooltip(`kubejs:esoteric_poison`, `Killing while Charged has a 25% chance per enemy to apply Plague within 20 blocks`)
  addTooltip(`kubejs:synapse`, `Killing a stunned mob with a ranged attack stuns a random nearby mob`)
  addTooltip(`kubejs:aftershock`, `Killing a stunned mob with melee applies Rend to a random nearby mob`)
  addTooltip(`kubejs:temporal_chains`, `Killing a stunned mob with a spell has a 25% chance per enemy to apply Slowness for 10s within 15 blocks`)
  addTooltip(`kubejs:ghost_draw`, `Lethal Shadows works with charged bows instead of only crossbows`)
  addTooltip(`kubejs:stoneform`, `Blocking has a 25% chance to give +5s Resistance`)
  addTooltip(`kubejs:spectral_splinter`, `25% chance to spawn 2 spectral arrows that target nearby enemies when hitting with an arrow`)
  addTooltip(`kubejs:slipstream`, `Hitting enemies with projectiles gives stacking Speed. Getting hit removes it`)
  addTooltip(`kubejs:phantom_step`, `Temporary invisibility and speed boost after dodging`)
  addTooltip(`kubejs:dripping_maw`, `Killing a Hexed mob has a 25% chance to make nearby mobs cast fire breath at each other, based on Hex level`)
  addTooltip(`kubejs:ancestral_strength`, `Melee kill has a 25% chance to give 3s Strength. If already active, extends duration by 3s`)
  addTooltip(`kubejs:giants_blood`, `Melee killing a mob while slowed grants stacking Strength amplifier`)
  addTooltip(`kubejs:mana_veil`, `Upon taking fatal damage, consume all mana and regain 1% of your health for every 40 mana consumed. You must have at least 200 mana to use this`)
  addTooltip(`kubejs:wounding_strike`, `Hitting a mob that has Rend has a 25% chance to apply Bleeding to them`)
  addTooltip(`kubejs:gravemark`, `Killing a slowed enemy with a projectile has a 25% chance to give you a projectile damage buff`)
  addTooltip(`kubejs:shock_transfer`, `Killing a mob with a spell while you have the Charged effect has a 25% chance to consume your Charged effect and make mobs cast Ball Lightning at each other`)
  addTooltip(`kubejs:siphoning_steel`, `25% chance to gain mana equal to 1% of damage from melee attacks`)
  addTooltip(`kubejs:arcane_bargain`, `Killing a Hexed mob recharges 5% of your health and 5% of your mana per level of Hexed consumed. Each level consumed adds a 10% chance to apply a negative effect to you`)
  addTooltip(`kubejs:arcane_dash`, `Gain a short but stackable speed boost after casting a spell.`)
  addTooltip(`kubejs:sprint_shot`, `Hitting a mob with a projectile while sprinting has a 50% chance to apply a stacking speed effect to you.`)
  addTooltip(`kubejs:scouring_winds`, `Using a dodge roll near a Hexed mob consumes Hexed and applies a 5 second speed effect with an amplifier equal to the level of Hex consumed.`)
  addTooltip(`kubejs:dead_rush`, `Killing an enemy that has Hexed, Chilled, Bleeding, or Plague will transfer the effect to you but apply a speed boost for 5 seconds.`)
  addTooltip(`kubejs:second_wind`, `Upon taking damage below 20% health, gain a Speed 3 effect for 5 seconds. 30 second cooldown.`)
  addTooltip(`kubejs:last_stand`, `Upon taking damage below 10% health, gain a Strength 4 effect for 10 seconds. 1 minute cooldown.`)


})
