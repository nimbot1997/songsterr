#!/bin/bash

# Install dependencies
npm install

# Seed database if empty (check by trying to fetch songs, if empty, seed)
node seed.js

# Run the project in background and redirect output to server.log
node server.js > server.log 2>&1 &
