#!/bin/bash
export NODE_PATH=/tmp/mattrwebsite_nm
cd /tmp/mattrwebsite
exec node /tmp/mattrwebsite_nm/vite/bin/vite.js --port 5177
