#!/usr/bin/env bash
# ============================================================================
# Publish the current kubejs scripts to the friend patch repo + GitHub.
#
#   Usage:  ./push_patch.sh "short message describing the change"
#
# Ships ONLY the client-needed folders (startup_scripts = item registration,
# client_scripts = tooltips/HUD) into kubejs-sync/ and pushes. server_scripts +
# data are server-authoritative (they go to the live server via SFTP; friends on
# the shared server don't need them). When a patch adds a texture/model/lang,
# drop just those files into assets-overlay/ (see its READ_ME); client configs
# go in config-overlay/.
# ============================================================================
set -euo pipefail

REPO_DIR="/mnt/a/Work/Minecrafty/Superior/superior-pack-patch"
SRC="/mnt/a/Work/Minecrafty/Superior/Mod Files/kubejs"
MSG="${1:-patch}"
STAMP="$(date '+%Y-%m-%d %H:%M')"

# 1. mirror the client-needed script folders (removes deleted scripts)
for f in startup_scripts client_scripts; do
  mkdir -p "$REPO_DIR/kubejs-sync/$f"
  rsync -a --delete --exclude='*.bak*' "$SRC/$f/" "$REPO_DIR/kubejs-sync/$f/"
done

# 2. prepend a changelog line
TMP="$(mktemp)"
{ echo "[$STAMP] $MSG"; echo; cat "$REPO_DIR/VERSION.txt" 2>/dev/null || true; } > "$TMP"
mv "$TMP" "$REPO_DIR/VERSION.txt"

# 3. commit + push
cd "$REPO_DIR"
git add -A
if git commit -m "$MSG" >/dev/null 2>&1; then
  git push origin main
  echo "Published: $MSG"
  echo "Tell friends: double-click Superior-Update.bat"
else
  echo "No changes to publish."
fi
