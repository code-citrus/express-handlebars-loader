import webpack from 'webpack';
import config from './webpack.config';

export default (fixture, options = {}) => {
  config.entry = `./${fixture}`;
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors));
      resolve(stats);
    });
  });
}