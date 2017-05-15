'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _aureliaPluginsAddthisConfig = require('./aurelia-plugins-addthis-config');

function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(_aureliaPluginsAddthisConfig.Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources('./aurelia-plugins-addthis-element');
}