'use strict';

require('react-server-dom-webpack/node-register')()
require('module-alias').addAliases(require('../aliases'))

require('./app')
