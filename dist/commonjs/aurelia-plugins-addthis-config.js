'use strict';

exports.__esModule = true;
let Config = exports.Config = class Config {
  constructor() {
    this._config = { lang: 'en', pubid: '' };
  }

  get(key) {
    return this._config[key];
  }

  options(obj) {
    Object.assign(this._config, obj);
  }

  set(key, value) {
    this._config[key] = value;
    return this._config[key];
  }
};