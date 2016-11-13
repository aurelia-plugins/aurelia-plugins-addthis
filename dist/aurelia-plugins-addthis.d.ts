import {
  inject
} from 'aurelia-dependency-injection';
import {
  bindable,
  customElement
} from 'aurelia-templating';

// PUBLIC CLASS
export declare class Config {
  
  // CONSTRUCTOR
  constructor();
  
  // PUBLIC METHODS
  get(key?: any): any;
  options(obj?: any): any;
  set(key?: any, value?: any): any;
}

// PUBLIC CLASS

// IMPORTS
// CLASS ATTRIBUTES
export declare class Recaptcha {
  class: any;
  description: any;
  language: any;
  title: any;
  url: any;
  
  // CONSTRUCTOR
  constructor(element?: any, config?: any);
  
  // LIFECYCLE HANDLERS
  bind(): any;
}

// IMPORTS
// PUBLIC METHODS
export declare function configure(aurelia?: any, configCallback?: any): any;