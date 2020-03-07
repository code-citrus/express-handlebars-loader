const path = require('path');

module.exports = {
  context: __dirname,
  entry: `./example.txt`,
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
    ] // end rules
  } // end module
}; // end module.exports