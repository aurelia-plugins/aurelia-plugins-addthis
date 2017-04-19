define(['exports', './aurelia-plugins-addthis-config'], function (exports, _aureliaPluginsAddthisConfig) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    const instance = aurelia.container.get(_aureliaPluginsAddthisConfig.Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-plugins-addthis-element');
  }
});