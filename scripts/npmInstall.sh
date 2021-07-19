#!/usr/bin/env bash

BASEDIR=$( dirname "${BASH_SOURCE[0]}" )
SCRIPT=$( basename "${BASH_SOURCE[0]}" )
PROJECTDIR="$BASEDIR/.."
source $BASEDIR/shared.sh

function npmInstall {
  DIR=$1
  if [ ! -d "$DIR" ] || [ ! -f "$DIR/package.json" ]; then continue; fi

  pushd "$DIR" > /dev/null
  REPO=$(basename `pwd`)
  echo "==> Installing dependencies for $REPO 💡"
  if [ -f yarn.lock ]; then
    yarn install;
  else
    npm install;
  fi
  popd > /dev/null
}

pushd "$PROJECTDIR" > /dev/null
npmInstall $PROJECTDIR
for DIR in $PROJECTDIR/*; do
  npmInstall "$DIR"
done
popd > /dev/null
