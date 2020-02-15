#!/bin/sh

IMG_DIR="/Users/you/git/PokeParty/src/assets/icon/poke"
ICON_URL="https://www.serebii.net/pokedex-swsh/icon"

function fileCheckAndDownload() {
  echo "Target [${IMG_DIR}/$1]"
  if [ ! -e ${IMG_DIR}/$1 ]; then
    wget ${ICON_URL}/$1
  else
    echo "$1 is exist."
  fi
}

cd ${IMG_DIR}

for idx in `seq -w 890`; do
  file="${idx}.png"
  fileCheckAndDownload ${file}
done

# form change list

## 479 Rotom

fileCheckAndDownload "479s.png"
fileCheckAndDownload "479f.png"
fileCheckAndDownload "479h.png"
fileCheckAndDownload "479c.png"
fileCheckAndDownload "479w.png"

## 800 Necrozma
fileCheckAndDownload "800-dm.png"
fileCheckAndDownload "800-dw.png"

# region form

## 052
fileCheckAndDownload "052-g.png"

## 077
fileCheckAndDownload "077-g.png"

## 078
fileCheckAndDownload "078-g.png"

## 079
fileCheckAndDownload "079-g.png"

## 083
fileCheckAndDownload "083-g.png"

## 110
fileCheckAndDownload "110-g.png"

## 122
fileCheckAndDownload "122-g.png"

## 222
fileCheckAndDownload "222-g.png"

## 263
fileCheckAndDownload "263-g.png"

## 264
fileCheckAndDownload "264-g.png"

## 554
fileCheckAndDownload "554-g.png"

## 555
fileCheckAndDownload "555-g.png"

## 562
fileCheckAndDownload "562-g.png"

## 618
fileCheckAndDownload "618-g.png"

echo "download done..."
