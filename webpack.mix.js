let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .setPublicPath('./build')
    .sourceMaps()
    .options({
        processCssUrls: false,
    })
    .copy('node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/*.*', 'build/fonts')
    .js('src/js/app.js', 'build/js')
    .sass('src/scss/app.scss', 'build/css');
