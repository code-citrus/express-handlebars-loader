const loaderUtils = require('loader-utils');

const _newTemplate = (context, options) => {
  var templateURL = path.resolve(process.cwd(), 'views', 'layouts', 'main.handlebars');
  var layout = fs.readFileSync(templateURL, { encoding: 'utf8' })
  var rendered = _template(context, options);
  return layout.replace(/{{{\s*body\s*}}}/, rendered);
};

module.exports = function(source) {
  // Assuming fs is not used already in source
  source = "var fs = require('fs'); var path = require('path');" + source;

  source += [
    "var _template = module.exports;",
    `module.exports = ${_newTemplate.toString()};`,
  ].join('\n');
  console.log(source);
  return source;
};