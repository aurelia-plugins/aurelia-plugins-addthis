define(['exports', './aurelia-plugins-addthis'], function (exports, _aureliaPluginsAddthis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaPluginsAddthis).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPluginsAddthis[key];
      }
    });
  });
});