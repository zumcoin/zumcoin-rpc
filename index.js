// Copyright (c) 2019, ZumCoin Development Team
//
// Please see the included LICENSE file for more information.

'use strict'

module.exports.ZumCoind = require('./lib/zumcoind-rpc.js')
module.exports.ZumService = require('./lib/service-rpc.js')

// These exports will be deprecated in a future version.
// Continue to use them at your own risk.
module.exports.Walletd = require('./lib/service-rpc.js')
module.exports.Service = require('./lib/service-rpc.js')
module.exports.Client = require('./lib/zumcoind-rpc.js')
