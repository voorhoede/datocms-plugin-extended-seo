# :no_entry: [DEPRECATED] DatoCMS plugin: Extended Seo

> Use [Extended SEO v2](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-extended-seo-v2)

**This DatoCMS plugin is deprecated and will NOT be updated anymore. It should still work but we recommend to use our [Extended SEO v2](https://www.datocms.com/marketplace/plugins/i/datocms-plugin-extended-seo-v2) plugin**

This DatoCMS plugin extends the DatoCMS SEO meta field. It allows you to see a preview of different sources generated from [Heads Up](https://github.com/voorhoede/heads-up).

![](https://github.com/voorhoede/datocms-plugin-extended-seo/raw/master/docs/plugin.png)

## Features

* See extended seo previews
* Use data from the model you are working on
* Edit fields and save it as a seo data
* Using the Voorhoede Heads Up

## Configuration

First add this plugin via DatoCMS Settings > Plugins > Add (`/admin/plugins/new`).

Secondly add an API token to the global settings of the plugin.

### Plugin settings

When adding the plugin there are a few settings that are configurable.

#### *Editor can edit field*
When you turn this function off the button for editing fields won't be shown. When this function is on it will show the *configure* button.

![](https://github.com/voorhoede/datocms-plugin-extended-seo/raw/master/docs/plugin-configure.png)

#### *Default fields*

**Default title field**
This field has to be a string value and will be shown as the title.

**Default description field**
This field has to be a string value and will be shown as the description.

**Default image field**
This field has to be a image. This is an object with the upload_id of the image. By adding this third variable there will be an image added to the preview.

![](https://github.com/voorhoede/datocms-plugin-extended-seo/raw/master/docs/plugin-settings.png)

When you edit the description or title field it will always show that value. When those fields are empty it will try and show fields from the model you are editing.

![](https://github.com/voorhoede/datocms-plugin-extended-seo/raw/master/docs/plugin-over-rule.png)

## Contributing

See [contributing.md](https://github.com/voorhoede/datocms-plugin-extended-seo/blob/master/contributing.md).

## Credits

Scaffolded using [DatoCMS plugin Yeoman generator](https://github.com/datocms/generator-datocms-plugin).

## License

*MIT Licensed* by [De Voorhoede](https://www.voorhoede.nl).
