# aurelia-plugins-addthis

An AddThis plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-addthis --save
```

**JSPM**

```shell
jspm install aurelia-plugins-addthis
```

**Bower**

```shell
bower install aurelia-plugins-addthis
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-addthis', config => {
      config.options({
        lang: 'en', // set the language globally, see https://www.addthis.com/academy/localization
        pubid: 'ra-xxxxxxxxxxxxxxxx' // the pubid from your AddThis project
      });
    });

    await aurelia.start();
    aurelia.setRoot('app');
}
```

## Usage

Once the Addthis plugin is configured, to use it simply add the custom element `<aup-addthis></aup-addthis>` in your view.
 
There are 5 optional attributes defined for this custom element, `class`, `description`, `language`, `title` and `url`.

* Use `description`, `title` and `url` to define the description, title and url that AddThis uses to generate the sharing popup of Facebook, Twitter,&hellip;
* The `class` attribute adds an extra CSS class to the AddThis custom element.
* The `language` attribute overrides the globally set language to the language defined in this property. Useful if a user can change the interface language of your application and you want AddThis to change accordingly.  

```html
<aup-addthis description.bind="description" title.bind="title" url.bind="url"></aup-addthis>
```

```javascript
export class App {
  constructor() {}

  description = 'Please share the AddThis plugin from Aurelia Plugins!';
  title = 'Aurelia Plugins - AddThis';
  url = 'https://github.com/aurelia-plugins/aurelia-plugins-addthis';
}
```

### Template

By default the following buttons are shown:

* Share on `Facebook` button
* Share on `Twitter` button
* Share on `LinkedIn` button
* Share on `Google Plus` button
* The AddThis Compact button

You can easily change the default template with your own buttons by placing the AddThis button tags in the content block of the `<aup-addthis>` element. 

```html
<aup-addthis>
  <a class="addthis_button_facebook"></a>
  <a class="addthis_button_twitter"></a>
  <a class="addthis_button_linkedin"></a>
  <a class="addthis_button_google_plusone_share"></a>
  <a class="addthis_button_print"></a>
  <a class="addthis_button_email"></a>
  <a class="addthis_button_gmail"></a>
  <a class="addthis_button_messenger"></a>
  <a class="addthis_button_compact"></a>
</aup-addthis>
```