'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  creditUrl: '"http://192.168.3.217:7575/#/mycreditdiamond"' //本地信钻
})