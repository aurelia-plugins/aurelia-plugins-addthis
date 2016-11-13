// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';

import {Config} from './aurelia-plugins-addthis-config';


// CLASS ATTRIBUTES
@customElement('aup-addthis')
@inject(Element, Config)


// PUBLIC CLASS
export class Recaptcha {
  // PRIVATE PROPERTIES (DI)
  _config;
  _element;

  // PRIVATE PROPERTIES (CUSTOM)
  _scriptPromise = null;

  // BINDABLE PROPERTIES
  @bindable class;
  @bindable description;
  @bindable language;
  @bindable title;
  @bindable url;

  // CONSTRUCTOR
  constructor(element, config) {
    this._config = config;
    this._element = element;
    if (!this._config.get('pubid')) return console.error('No pubid has been specified.');
    this._loadApiScript();
  }

  // LIFECYCLE HANDLERS
  bind() {
    this._initialize();
  }

  // PRIVATE METHODS
  async _initialize() {
    await this._scriptPromise;
    window.addthis_config = window.addthis_config || {};
    window.addthis_config.lang = this.language || this._config.get('lang');
    window.addthis_config.pubid = this._config.get('pubid');
    window.addthis.update('share', 'description', this.description);
    window.addthis.update('share', 'title', this.title);
    window.addthis.update('share', 'url', this.url);
    if (window.addthis.layers && window.addthis.layers.refresh) window.addthis.layers.refresh();
    window.addthis.toolbox(this._element, window.addthis_config, window.addthis_share);
  }

  _loadApiScript() {
    if (this._scriptPromise) return;
    if (window.addthis === undefined) {
      var script = document.createElement('script');
      script.async = false;
      script.defer = false;
      script.src = `https://s7.addthis.com/js/300/addthis_widget.js`;
      script.type = 'text/javascript';
      document.head.appendChild(script);
      this._scriptPromise = new Promise(resolve => {
        var interval = setInterval(() => {
          if (window.addthis !== undefined) { clearInterval(interval); resolve(); }
        });
      });
    }
    else if (window.addthis)
      this._scriptPromise = new Promise(resolve => { resolve(); });
  }
}
