#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)

(cd $SCRIPT_DIR/scripts && node index.js $SCRIPT_DIR/tweets.yaml ) | jq . > $SCRIPT_DIR/src/assets/tweets.json  