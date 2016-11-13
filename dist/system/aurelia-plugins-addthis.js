'use strict';

System.register(['./aurelia-plugins-addthis-config'], function (_export, _context) {
  "use strict";

  var Config;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-plugins-addthis-element');
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPluginsAddthisConfig) {
      Config = _aureliaPluginsAddthisConfig.Config;
    }],
    execute: function () {}
  };
});