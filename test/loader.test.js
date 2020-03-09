import compiler from './compiler';
var requireFromString = require('require-from-string');

test('Inserts name and outputs Javascript', async() => {
  const stats = await compiler('simple.handlebars');
  const output = stats.toJson();
  const src = output.modules.find((e) => e.name === './simple.handlebars').source;
  const template = requireFromString(src);
  const result = template({ user: 'test' });
  expect(result).toBe('<html><body><h1>Hello test</h1></body></html>');
});