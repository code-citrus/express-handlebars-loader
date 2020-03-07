import compiler from './compiler';

test('Inserts name and outputs Javascript', async() => {
  const stats = await compiler('example.txt');
  const output = stats.toJson();
  const src = output.modules[0].source;
  console.log(JSON.stringify(output.modules, null, '\t'));
  expect(src).toBe('export default "Hey Alice!"');
});