#!/usr/bin/env node

let config = require('./config')

let remoteAddress = process.argv[2]

if (remoteAddress) {
    config.remoteAddress = remoteAddress
    console.log('redirect server running in http://127.0.0.1:' + config.port + ' and redirect for ' + remoteAddress)
} else {
    console.log('redirect server running in http://127.0.0.1:' + config.port)
}

require('./app')