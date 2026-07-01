@echo off
setlocal EnableDelayedExpansion
title SUPERIOR Modpack - Client Updater
color 0b
echo ==================================================
echo    SUPERIOR Modpack - Client Updater
echo ==================================================
echo.

REM ---- config ----
set "REPO=bentenessan/superior-pack-patch"
set "BRANCH=main"
set "ZIPURL=https://github.com/%REPO%/archive/refs/heads/%BRANCH%.zip"
set "WORK=%LOCALAPPDATA%\SuperiorPatch"
set "CFG=%WORK%\instance.txt"
if not exist "%WORK%" mkdir "%WORK%"

REM ---- 1. find the Minecraft instance folder (contains 'mods' + 'kubejs') ----
set "INSTANCE="
if exist "%CFG%" set /p INSTANCE=<"%CFG%"
if defined INSTANCE if exist "!INSTANCE!\" (
  echo Using your saved game folder:
  echo    !INSTANCE!
  echo.
  echo    ^(To pick a different folder, delete this file and re-run:^)
  echo    %CFG%
  echo.
  goto :have_instance
)

echo Looking for your Minecraft folder...
set "FOUND="
set "C1=%USERPROFILE%\curseforge\minecraft\Instances\SUPERIOR - RPG"
set "C2=%APPDATA%\.minecraft"
if exist "%C1%\" set "FOUND=%C1%"
if not defined FOUND if exist "%C2%\mods\" set "FOUND=%C2%"

if defined FOUND (
  echo Found: !FOUND!
  set /p OK="Is this your SUPERIOR game folder? (Y/N): "
  if /I "!OK!"=="Y" set "INSTANCE=!FOUND!"
)
if not defined INSTANCE (
  echo.
  echo Paste the FULL path to your Minecraft game folder
  echo  ^(the one that contains the 'mods' and 'kubejs' folders^):
  set /p INSTANCE="Path: "
)
set INSTANCE=!INSTANCE:"=!
if not exist "!INSTANCE!\" ( echo. & echo  [X] Folder not found: !INSTANCE! & echo. & pause & exit /b 1 )
> "%CFG%" echo !INSTANCE!

:have_instance

REM ---- 2. download + extract the latest patch ----
echo Downloading latest patch...
set "ZIP=%WORK%\patch.zip"
if exist "%ZIP%" del /q "%ZIP%"
curl -L --fail -o "%ZIP%" "%ZIPURL%"
if not exist "%ZIP%" ( echo. & echo  [X] Download failed - check your internet connection. & echo. & pause & exit /b 1 )

echo Extracting...
if exist "%WORK%\extract" rmdir /s /q "%WORK%\extract"
mkdir "%WORK%\extract"
tar -xf "%ZIP%" -C "%WORK%\extract"
set "SRC=%WORK%\extract\superior-pack-patch-%BRANCH%"
if not exist "%SRC%\" ( echo. & echo  [X] Could not extract the patch. & echo. & pause & exit /b 1 )

REM ---- 3. apply ----
echo Applying update to:
echo    !INSTANCE!
set "KJS=!INSTANCE!\kubejs"
if not exist "!KJS!\" mkdir "!KJS!"

REM client-needed script folders are MIRRORED (so removed/renamed scripts are cleaned up)
for %%F in (startup_scripts client_scripts) do (
  if exist "%SRC%\kubejs-sync\%%F\" robocopy "%SRC%\kubejs-sync\%%F" "!KJS!\%%F" /MIR /NFL /NDL /NJH /NJS /NP >nul
)
REM overlays are ADDITIVE (never delete the player's files) - used only when textures/configs change
if exist "%SRC%\assets-overlay\" robocopy "%SRC%\assets-overlay" "!KJS!\assets"      /E /NFL /NDL /NJH /NJS /NP >nul
if exist "%SRC%\config-overlay\" robocopy "%SRC%\config-overlay" "!INSTANCE!\config" /E /NFL /NDL /NJH /NJS /NP >nul

echo.
echo ==================================================
echo    UPDATE COMPLETE
echo ==================================================
if exist "%SRC%\VERSION.txt" (
  echo.
  echo Latest changes:
  echo.
  type "%SRC%\VERSION.txt"
  echo.
)
echo ==================================================
echo    Now fully close Minecraft and start it again.
echo ==================================================
echo.
pause
