let $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
let $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");

// Only create these once. KubeJS will handle registration so they show in Controls.
// Recreating on /reload can lead to mismatched instances vs the Controls UI.
if (!global.hKeySpecial) global.hKeySpecial = new $KeyMapping("key.kubejs.hKeySpecial", $GLFWkey.GLFW_KEY_H, "Superior: Ability Slot 1");
if (!global.jKeySpecial) global.jKeySpecial = new $KeyMapping("key.kubejs.jKeySpecial", $GLFWkey.GLFW_KEY_J, "Superior: Ability Slot 2");
if (!global.gKeySpecial) global.gKeySpecial = new $KeyMapping("key.kubejs.gKeySpecial", $GLFWkey.GLFW_KEY_G, "Superior: Ability Slot 3");
if (!global.kKeySpecial) global.kKeySpecial = new $KeyMapping("key.kubejs.kKeySpecial", $GLFWkey.GLFW_KEY_K, "Superior: Ability Slot 4");
if (!global.lKeySpecial) global.lKeySpecial = new $KeyMapping("key.kubejs.lKeySpecial", $GLFWkey.GLFW_KEY_L, "Superior: Ability Slot 5");

