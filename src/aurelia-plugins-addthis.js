// IMPORTS
import {Config} from './aurelia-plugins-addthis-config';


// PUBLIC METHODS
export function configure(aurelia, configCallback) {
  const instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof(configCallback) === 'function')
    configCallback(instance);
  aurelia.globalResources('./aurelia-plugins-addthis-element');
}