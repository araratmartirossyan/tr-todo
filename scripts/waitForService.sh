#!/bin/bash

PORT=$1
SERVICE=$2
RET=1
TRIES=0
while [ $RET -ne 0 ]; do
    echo "=> Waiting for $SERVICE to be ready"
    curl "http://localhost:$PORT" &> /dev/null
    RET=$?
    if [ $RET -ne 0 ]; then
      TRIES=$[TRIES + 1]
      if [ $TRIES -gt 24 ]; then
        echo "=> Timeout!"
        exit 1
      fi
      sleep 5
    fi
done

echo "=> $SERVICE is up"
