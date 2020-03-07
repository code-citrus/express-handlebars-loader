import path, { dirname } from 'path';
import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: {
            loader: path.resolve(__dirname, '../src/loader.js'),
            options: {
              name: 'Alice',
            }
          }
        }
      ]
    }
  });

  // compiler.outputFileSystem = createFsFromVolume(new Volume());

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors));
      resolve(stats);
    });
  });
}