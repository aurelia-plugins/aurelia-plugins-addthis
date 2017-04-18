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
  config;
  element;

  // PRIVATE PROPERTIES (CUSTOM)
  scriptPromise = null;

  // BINDABLE PROPERTIES
  @bindable class;
  @bindable description;
  @bindable language;
  @bindable title;
  @bindable url;

  // CONSTRUCTOR
  constructor(element, config) {
    this.config = config;
    this.element = element;
    if (!this.config.get('pubid')) return console.error('No pubid has been specified.');
    this.loadApiScript();
  }

  // LIFECYCLE HANDLERS
  bind() {
    this.initialize();
  }

  // PRIVATE METHODS
  async initialize() {
    await this.scriptPromise;
    window.addthis_config = window.addthis_config || {};
    window.addthis_config.lang = this.language || this.config.get('lang');
    window.addthis_config.pubid = this.config.get('pubid');
    window.addthis.update('share', 'description', this.description);
    window.addthis.update('share', 'title', this.title);
    window.addthis.update('share', 'url', this.url);
    if (window.addthis.layers && window.addthis.layers.refresh) window.addthis.layers.refresh();
    window.addthis.toolbox(this.element, window.addthis_config, window.addthis_share);
  }

  loadApiScript() {
    if (this.scriptPromise) return;
    if (window.addthis === undefined) {
      const script = document.createElement('script');
      script.async = false;
      script.defer = false;
      script.src = 'https://s7.addthis.com/js/300/addthis_widget.js';
      script.type = 'text/javascript';
      document.head.appendChild(script);
      this.scriptPromise = new Promise(resolve => {
        const interval = setInterval(() => {
          if (window.addthis !== undefined) { clearInterval(interval); resolve(); }
        });
      });
    }
    else if (window.addthis)
      this.scriptPromise = new Promise(resolve => resolve());
  }
}