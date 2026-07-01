==================================================
  SUPERIOR Modpack - Client Updater  (READ ME)
==================================================

WHAT THIS IS
------------
A one-click updater that pulls the latest SUPERIOR pack scripts into your
game folder. Works no matter how you launch the pack (CurseForge, TLauncher,
etc.) - it just copies files into your Minecraft folder.

You only need to run this when the host says "there's a CLIENT update."
Most patches are server-side and need nothing from you (just reconnect).


HOW TO USE
----------
1. Fully CLOSE Minecraft.
2. Double-click  Superior-Update.bat
3. The FIRST time, it asks where your Minecraft folder is:
      - CurseForge:  it usually auto-detects it. Press Y.
      - TLauncher / other: if it can't find it, paste the full path to the
        folder that contains your "mods" and "kubejs" folders, e.g.
            C:\Users\YOU\AppData\Roaming\.minecraft
        (Tip: in the launcher, "Open Game Folder" shows you this path.)
      It remembers your answer, so next time it's truly one click.
4. When it says UPDATE COMPLETE, start Minecraft again.


IS IT SAFE?
-----------
Yes. It only touches the pack's script folders (kubejs) and, when included,
specific texture/config files. It does NOT change your keybinds, options,
worlds, screenshots, or your mods list.


REQUIREMENTS
------------
Windows 10 or 11 (both include the 'curl' and 'tar' tools it uses).
No accounts, no Git, nothing to install.


TROUBLESHOOTING
---------------
- "Download failed": check your internet, then re-run.
- Wrong folder saved: delete this file and run the bat again -
      %LOCALAPPDATA%\SuperiorPatch\instance.txt
- Still stuck: send the host a screenshot of the black window.
