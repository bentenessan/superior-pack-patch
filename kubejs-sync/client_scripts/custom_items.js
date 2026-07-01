

/**
 * let ItemBonusDeclarations = {
    'minecraft:diamond_sword': {
      effects: ['minecraft:strength', 'minecraft:resistance'],
      attributes: [
        {
          attribute: 'minecraft:generic.attack_speed',
          amount: 1.5,
          operation: 'MULTIPLY_BASE',
          uuid: 'ae52d3b7-7b8e-4d5f-9e9b-41f8c6f43bd7',
        },
        {
          attribute: 'minecraft:generic.movement_speed',
          amount: 0.1,
          operation: 'ADDITION',
          uuid: 'c3fcf9b1-d2e3-4820-8ad2-04ffb69027d4',
        },
      ],
    },
    'minecraft:golden_apple': {
      effects: ['minecraft:regeneration'],
      attributes: [],
    },
  };
  
  let validBonusItems = Object.keys(ItemBonusDeclarations);
  
  let INFINITE = Java.loadClass('java.lang.Integer').MAX_VALUE;
  
ItemEvents.tooltip((event) => {
    validBonusItems.forEach((itemId) => {
      event.addAdvanced(Item.of(itemId), (stack, advanced, tooltip) => {
        let bonus = ItemBonusDeclarations[itemId];
        if (!bonus) return;
  
        // Add effects to tooltip
        tooltip.add(
          Text.of('Bonus Effects:').gold()
        );
        bonus.effects.forEach((effect) => {
          tooltip.add(Text.of(` \u2507 ${effect}`).green());
        });
  
        // Add attributes to tooltip
        tooltip.add(
          Text.of('Bonus Attributes:').gold()
        );
        bonus.attributes.forEach((attr) => {
          let operationText =
            attr.operation === 'ADDITION'
              ? ' (Add)'
              : attr.operation === 'MULTIPLY_BASE'
              ? ' (Mult Base)'
              : ' (Mult Total)';
          tooltip.add(
            Text.of(
              ` \u2507 ${attr.attribute}: ${attr.amount}${operationText}`
            ).aqua()
          );
        });
      });
    });
  });
 * 
 */
