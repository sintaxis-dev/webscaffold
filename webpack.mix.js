let mix = require("laravel-mix");
require("laravel-mix-tailwind");

mix
  .js("src/js/app.js", "dist/js")
  .react()
  .sass("src/scss/app.scss", "dist/css")
  .options({
    processCssUrls: false,
  })
  .tailwind();
