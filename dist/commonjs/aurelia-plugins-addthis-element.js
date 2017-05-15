'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddThis = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaPluginsAddthisConfig = require('./aurelia-plugins-addthis-config');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AddThis = exports.AddThis = (_dec = (0, _aureliaTemplating.customElement)('aup-addthis'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaPluginsAddthisConfig.Config), _dec(_class = _dec2(_class = (_class2 = function () {
  function AddThis(element, config) {
    _classCallCheck(this, AddThis);

    this._scriptPromise = null;

    _initDefineProp(this, 'class', _descriptor, this);

    _initDefineProp(this, 'description', _descriptor2, this);

    _initDefineProp(this, 'language', _descriptor3, this);

    _initDefineProp(this, 'title', _descriptor4, this);

    _initDefineProp(this, 'url', _descriptor5, this);

    this._config = config;
    this._element = element;
    if (!this._config.get('pubid')) return console.error('No pubid has been specified.');
    this._loadApiScript();
  }

  AddThis.prototype.bind = function bind() {
    this._initialize();
  };

  AddThis.prototype._initialize = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._scriptPromise;

            case 2:
              window.addthis_config = window.addthis_config || {};
              window.addthis_config.lang = this.language || this._config.get('lang');
              window.addthis_config.pubid = this._config.get('pubid');
              window.addthis.update('share', 'description', this.description);
              window.addthis.update('share', 'title', this.title);
              window.addthis.update('share', 'url', this.url);
              if (window.addthis.layers && window.addthis.layers.refresh) window.addthis.layers.refresh();
              window.addthis.toolbox(this._element, window.addthis_config, window.addthis_share);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _initialize() {
      return _ref.apply(this, arguments);
    }

    return _initialize;
  }();

  AddThis.prototype._loadApiScript = function _loadApiScript() {
    if (this._scriptPromise) return;
    if (window.addthis === undefined) {
      var script = document.createElement('script');
      script.async = false;
      script.defer = false;
      script.src = 'https://s7.addthis.com/js/300/addthis_widget.js';
      script.type = 'text/javascript';
      document.head.appendChild(script);
      this._scriptPromise = new Promise(function (resolve) {
        var interval = setInterval(function () {
          if (window.addthis !== undefined) {
            clearInterval(interval);resolve();
          }
        });
      });
    } else if (window.addthis) this._scriptPromise = new Promise(function (resolve) {
      return resolve();
    });
  };

  return AddThis;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'class', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'language', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'url', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);