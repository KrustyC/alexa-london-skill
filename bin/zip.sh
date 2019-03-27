#!/bin/bash
set -eux

if [ -f london-routes.zip ]; then
  rm -f london-routes.zip
fi

yarn install
yarn build

zip -r london-routes.zip  dist/* package.json node_modules