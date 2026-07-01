// priority: 110
global.tooltipModifiers = [];

/**
 * ItemEvents.tooltip((event) => {
    global.tooltipModifiers.forEach((modifier) => {
        event.addAdvanced(modifier.stack, (stack, advanced, tooltip) => {
            let uniqueLines = new Set(); // To track unique tooltip lines
            tooltip.removeIf((line) => !uniqueLines.add(line.getString())); // Deduplicate existing tooltips

            // Debug: Log current tooltip lines
            tooltip.forEach((line) => {
                console.log("Tooltip Line:", line.getString());
            });

            if (modifier.shouldRemoveEmpty) {
                tooltip.removeIf((line) => line.getString().isEmpty());
            }
            modifier.toRemove.forEach((toRemove) => {
                tooltip.removeIf((line) => line.getString().includes(toRemove));
            });
            modifier.predicates.forEach((predicate) => {
                tooltip.removeIf((line) => predicate(line));
            });
            modifier.linesToRemove.forEach((lineNumber) => {
                tooltip.remove(lineNumber);
            });
            Object.keys(modifier.simpleDescription).forEach((index) => {
                let text = modifier.simpleDescription[index];
                if (modifier.isLast) index = tooltip.size();
                if (text instanceof Function) text = text();
                tooltip.add(index, text);
            });
            Object.keys(modifier.simpleFunction).forEach((index) => {
                let text = modifier.simpleFunction[index](event.shift);
                if (modifier.isLast) index = tooltip.size();
                let i = index;
                text.forEach((line) => {
                    tooltip.add(i, line);
                    i++;
                });
            });
            if (event.shift) {
                Object.keys(modifier.advancedDescription).forEach((index) => {
                    if (modifier.isLast) index = tooltip.size();
                    tooltip.add(index, modifier.advancedDescription[index]);
                });
                Object.keys(modifier.advancedFunction).forEach((index) => {
                    let text = modifier.advancedFunction[index]();
                    let i = index;
                    if (modifier.isLast) index = tooltip.size();
                    text.forEach((line) => {
                        tooltip.add(i, line);
                        i++;
                    });
                });
            }
        });
    });
});

function TooltipModifier(stack) {
    this.stack = [stack]; // Initialize the stack as an array
    this.simpleDescription = {};
    this.advancedDescription = {};
    this.toRemove = [];
    this.predicates = [];
    this.linesToRemove = [];
    this.simpleFunction = {};
    this.advancedFunction = {};
    this.isLast = false;
    this.shouldRemoveEmpty = false;
}

TooltipModifier.prototype = {
    addSimple: function (index, text) {
        this.simpleDescription[index] = text;
        return this;
    },
    addAdvanced: function (index, text) {
        this.advancedDescription[index] = text;
        return this;
    },
    remove: function (text) {
        this.toRemove.push(text);
        return this;
    },
    removeIf: function (callback) {
        this.predicates.push(callback);
        return this;
    },
    removeLine: function (lineNumber) {
        this.linesToRemove.push(lineNumber);
        return this;
    },
    addStack: function (stack) {
        if (!this.stack.includes(stack)) {
            this.stack.push(stack); // Avoid duplicate stacks
        }
        return this;
    },
    addSimpleFunction: function (startIndex, list) {
        this.simpleFunction[startIndex] = list;
        return this;
    },
    addAdvancedFunction: function (startIndex, list) {
        this.advancedFunction[startIndex] = list;
        return this;
    },
    last: function () {
        this.isLast = true;
        return this;
    },
    removeEmpty: function () {
        this.shouldRemoveEmpty = true;
        return this;
    },
};

let $Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
let $Style = Java.loadClass("net.minecraft.network.chat.Style");
let $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting");

function addArmorSetTooltip(stacks, validPieces, setName, setBonus) {
    return new TooltipModifier(stacks)
        .addAdvancedFunction(3, () => {
            let missingList = () => {
                let player = $Minecraft.getInstance().player;
                if (player == null) return [];
                let missingPieces = [];
                let helmetPieces = validPieces.helmet;
                let chestplatePieces = validPieces.chestplate;
                let leggingsPieces = validPieces.leggings;
                let bootsPieces = validPieces.boots;
                if (!helmetPieces.some((piece) => player.headArmorItem.getItem().id === piece)) missingPieces.push("Helmet");
                if (!chestplatePieces.some((piece) => player.chestArmorItem.getItem().id === piece)) missingPieces.push("Chestplate");
                if (!leggingsPieces.some((piece) => player.legsArmorItem.getItem().id === piece)) missingPieces.push("Leggings");
                if (!bootsPieces.some((piece) => player.feetArmorItem.getItem().id === piece)) missingPieces.push("Boots");
                return missingPieces;
            };
            missingList = missingList();
            let possiblePieces = ["Helmet", "Chestplate", "Leggings", "Boots"];
            let missingPieces = [];
            let gameTime = Math.ceil($Minecraft.getInstance().level.time / 40);
            possiblePieces.forEach((piece) => {
                let text = Text.of(` \u2507 ${piece}`);
                if (missingList.includes(piece)) {
                    text = text.darkGray();
                    if (validPieces[piece.toLowerCase()] !== undefined) {
                        text = text.append(Item.of(validPieces[piece.toLowerCase()][gameTime % validPieces[piece.toLowerCase()].length]).displayName);
                    }
                } else {
                    text = text.green();
                }
                missingPieces.push(text);
            });
            missingPieces.push(Text.of("Set Bonus: ").gold());
            setBonus.forEach((line) => {
                missingPieces.push(line);
            });
            return missingPieces;
        })
        .addSimpleFunction(1, (shift) => {
            let shiftText = shift ? Text.of("Shift").white() : Text.of("Shift").gray();
            let arr = [
                Text.of(`Hold [`).darkGray().append(shiftText).darkGray().append(Text.of(`] for Set Bonus summary.`).darkGray()),
            ];
            if (shift) {
                arr.push(Text.of(`Part of the ${setName} set.`).gold());
            }
            return arr;
        })
        .last();
}

global.tooltipModifiers.push(
    addArmorSetTooltip(
        [
            Item.of("minecraft:leather_helmet"),
            Item.of("minecraft:leather_chestplate"),
            Item.of("minecraft:leather_leggings"),
            Item.of("minecraft:leather_boots"),
        ],
        {
            helmet: ["minecraft:leather_helmet"],
            chestplate: ["minecraft:leather_chestplate"],
            leggings: ["minecraft:leather_leggings"],
            boots: ["minecraft:leather_boots"],
        },
        "Winemaker's Desire",
        [Text.of(" \u2507 Bonemeal won't be consumed upon use.").green()]
    )
        .remove("Winemaker's Desire")
        .remove("[S")
        .remove("[W")
        .remove("set bonus")
        .remove("Bonemeal")
        .removeEmpty()
);

 * 
 */
// priority: 0
