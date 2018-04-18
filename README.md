# aurelia-plugins-addthis

An AddThis plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-addthis --save
```

When using Aurelia CLI add the following dependency to `aurelia.json`:

```json
{
  "name": "aurelia-plugins-addthis",
  "path": "../node_modules/aurelia-plugins-addthis/dist/amd",
  "main": "aurelia-plugins-addthis"
}
```

Add `node_modules/babel-polyfill/dist/polyfill.min.js` to the prepend list in `aurelia.json`. Do not forgot to add `babel-polyfill` to the dependencies in `package.json`.

For projects using Webpack, please add `babel-polyfill` to your `webpack.config.js` as documented by [babeljs.io](https://babeljs.io/docs/usage/polyfill/#usage-in-node--browserify--webpack).

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
 
There are 6 (optional) attributes defined for this custom element, `class`, `description`, `language`, `pubid`, `title` and `url`.

* Use `description`, `title` and `url` to define the description, title and url that AddThis uses to generate the sharing popup of Facebook, Twitter,&hellip;
* The `class` attribute adds an extra CSS class to the AddThis custom element.
* The `language` attribute overrides the globally set language to the language defined in this property. Useful if a user can change the interface language of your application and you want AddThis to change accordingly.
* The `pubid` attribute can be used to override the `pubid` value set in the config and use a different `pubid` for each AddThis instance.   

```html
<aup-addthis description.bind="description" pubid.bind="pubid" title.bind="title" url.bind="url"></aup-addthis>
```

```javascript
export class App {
  constructor() {}

  description = 'Please share the AddThis plugin from Aurelia Plugins!';
  pubid = 'ra-xxxxxxxxxxxxxxxx';
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