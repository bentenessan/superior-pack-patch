Files here are copied ADDITIVELY into each client's  kubejs/assets  on update
(they overwrite matching files, never delete). Use ONLY when a patch adds or
changes a texture / model / lang file - this keeps the routine patch light.

Layout = whatever sits UNDER kubejs/assets. Example: to ship
   kubejs/assets/apotheosis/lang/en_us.json
put the file at
   assets-overlay/apotheosis/lang/en_us.json

Normally this folder is empty (just this note).
