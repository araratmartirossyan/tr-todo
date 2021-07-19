#!/usr/bin/env bash

BASEDIR=$( dirname "${BASH_SOURCE[0]}" )
SCRIPT=$( basename "${BASH_SOURCE[0]}" )
PROJECTDIR="$BASEDIR/.."
source $BASEDIR/shared.sh

function pullChanges {
  DIRTY=$( dirtyWorkdir )
  [ $DIRTY -ne 0 ] && git stash -u > /dev/null
  echo "=> Pulling changes"
  git pull
  [ $DIRTY -ne 0 ] && git stash pop > /dev/null
}

function offerChoice {
  TARGET=master
  DIRTY=$( dirtyWorkdir )
  HAS_DEVELOP=$( expr `git branch | awk '/develop$/' | wc -l` )
  if [ $HAS_DEVELOP -ne 0 ]; then
    TARGET=develop
  fi
  BRANCH=$( getCurrentBranch )
  SUFFIX=""
  if [ $DIRTY -ne 0 ]; then
    SUFFIX="(stashing current changes on $BRANCH)"
  fi
  while true; do
    echo ""
    echo "You're currently on a feature branch, what do you want to do?"
    echo "s) Skip updating this repository"
    echo "c) Checkout $TARGET and pull $SUFFIX"
    echo "m) Update $TARGET and merge into $BRANCH"
    echo "r) Update $TARGET and rebase $BRANCH"
    [ $DIRTY -ne 0 ] && echo "?) View current changes"
    echo "q) Quit"
    read -p "Pick one: " OPTION
    case $OPTION in
      [sS]* ) return 0;;
      [cC]* )
        [ $DIRTY -ne 0 ] && git stash -u
        git checkout $TARGET
        git pull
        return 0
        ;;
      [mM]* )
        [ $DIRTY -ne 0 ] && git stash -u
        git checkout $TARGET
        git pull
        git checkout $BRANCH
        git merge $TARGET
        [ $DIRTY -ne 0 ] && git stash pop
        return 0
        ;;
      [rR]* )
        [ $DIRTY -ne 0 ] && git stash -u
        git checkout $TARGET
        git pull
        git checkout $BRANCH
        git rebase $TARGET
        [ $DIRTY -ne 0 ] && git stash pop
        return 0
        ;;
      [?]* )
        git status
        read -p "Press enter to continue..." noop
        git diff
        ;;
      [qQ]* ) exit 0;;
      * ) echo "Please give a valid answer";;
    esac
  done
}

function updateRepo {
  DIR=$1
  if [ ! -d "$DIR" ] || [ ! -d "$DIR/.git" ]; then continue; fi

  pushd "$DIR" > /dev/null

  REPO=$( basename `pwd` )
  BRANCH=$( getCurrentBranch )

  echo ""
  echo "=> $REPO / $BRANCH"
  case $BRANCH in
    master) pullChanges;;
    develop ) pullChanges;;
    * ) offerChoice;;
  esac
  popd > /dev/null
}

pushd "$PROJECTDIR" > /dev/null
updateRepo $PROJECTDIR
for DIR in $PROJECTDIR/*; do
  updateRepo "$DIR"
done
popd > /dev/null
