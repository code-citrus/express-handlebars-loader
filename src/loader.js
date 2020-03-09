const loaderUtils = require('loader-utils');

/**
 * @param source output of 'handlebars-loader'
 * @return a template function that applies layout as well.
 */
module.exports = function(source) {
  source += [
    "var _template = module.exports;",
    "module.exports = (context, options) => {",
      "var layout = '<html><body>{{{ body }}}</body></html>';",
      "var rendered = _template(context, options);",
      "return layout.replace(/{{{\\s*body\\s*}}}/, rendered);",
    "};",
  ].join('');
  return source;
};