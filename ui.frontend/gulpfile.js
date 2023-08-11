/* gulpfile.js */

/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

/**
* Path settings
* Set as many as you need
*/
uswds.paths.src.projectSass = './src/main/webpack/site/styles';
uswds.paths.dist.theme = './src/main/webpack/site';
uswds.paths.dist.img = './src/main/webpack/resources/images';
uswds.paths.dist.fonts = './src/main/webpack/resources/fonts';
uswds.paths.dist.css = './dist/clientlib-site';
uswds.paths.dist.js = './dist/clientlib-site';

/**
* Exports
* Add as many as you need
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
