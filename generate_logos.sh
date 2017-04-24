#!/usr/bin/env bash
# Converts the Inkscape icon file to png files.

INPUT="logo.svg"
MAIN="src/assets/img/fav/"

apple_sizes=(57 60 72 76 114 120 144 152 180)
icon_sizes=(32 96 16 60 400)
android_sizes=(192)

mkdir -p ${MAIN}

for s in $(seq 0 $((${#apple_sizes[@]} - 1)))
do
    size=${apple_sizes[$s]}
    inkscape --export-png "${MAIN}apple-icon-${size}x${size}.png" -w ${size} "${INPUT}"
done
for s in $(seq 0 $((${#icon_sizes[@]} - 1)))
do
    size=${icon_sizes[$s]}
    inkscape --export-png "${MAIN}favicon-${size}x${size}.png" -w ${size} "${INPUT}"
done
for s in $(seq 0 $((${#android_sizes[@]} - 1)))
do
    size=${android_sizes[$s]}
    inkscape --export-png "${MAIN}android-icon-${size}x${size}.png" -w ${size} "${INPUT}"
done
