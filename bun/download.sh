#!/bin/sh
set -e

BUN_VERSION="1.2.14"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$SCRIPT_DIR/bun"

if [ -f "$OUT" ] && [ "$("$OUT" --version)" = "$BUN_VERSION" ]; then
    echo "bun $BUN_VERSION already downloaded"
    exit 0
fi

OS="$(uname -s)"
ARCH="$(uname -m)"
case "${OS}-${ARCH}" in
    Darwin-arm64)   PLATFORM="bun-darwin-aarch64" ;;
    Darwin-x86_64)  PLATFORM="bun-darwin-x64" ;;
    Linux-aarch64)  PLATFORM="bun-linux-aarch64" ;;
    Linux-x86_64)   PLATFORM="bun-linux-x64" ;;
    *)
        echo "error: unsupported platform ${OS}-${ARCH}" >&2
        exit 1
        ;;
esac

TMP="$(mktemp -d)"
curl -fsSL "https://github.com/oven-sh/bun/releases/download/bun-v${BUN_VERSION}/${PLATFORM}.zip" -o "$TMP/bun.zip"
unzip -q "$TMP/bun.zip" -d "$TMP"
cp "$TMP/$PLATFORM/bun" "$OUT"
chmod +x "$OUT"
rm -rf "$TMP"

echo "bun $BUN_VERSION downloaded to $OUT"
