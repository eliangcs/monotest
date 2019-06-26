#!/usr/bin/env bash

if [ -z $NPM_REGISTRY ]; then
    (>&2 echo 'NPM_REGISTRY is undefined')
    exit 1
fi

if [ -z $NPM_TOKEN ]; then
    (>&2 echo 'NPM_TOKEN is undefined')
    exit 1
fi

# Split PackageName@x.y.z into 'PackageName' and 'x.y.z'
PKG_NAME=`echo $TRAVIS_TAG | grep '@' | cut -d '@' -f 1`
PKG_VERSION=`echo $TRAVIS_TAG | grep '@' | cut -d '@' -f 2`

if [ -z "$PKG_NAME" ] || [ -z "$PKG_VERSION" ]; then
    (>&2 echo "Error: Invalid TRAVIS_TAG '$TRAVIS_TAG'")
    exit 1
fi

NPMRC_PATH="$HOME/.npmrc"

NPM_REGISTRY_NO_PROTO=`echo $NPM_REGISTRY | sed -E 's/^https?://'`
echo "$NPM_REGISTRY_NO_PROTO/:_authToken=\"$NPM_TOKEN\"" > $NPMRC_PATH

lerna run --stream --scope $PKG_NAME publish -- --registry $NPM_REGISTRY
