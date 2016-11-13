'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaPluginsAddthis = require('./aurelia-plugins-addthis');

Object.keys(_aureliaPluginsAddthis).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaPluginsAddthis[key];
    }
  });
});