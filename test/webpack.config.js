const path = require('path');

module.exports = {
  context: __dirname,
  entry: `./simple.handlebars`,
  output: { 
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.handlebars$/,
        use: [
          {
            loader: path.resolve(__dirname, '../src/loader.js'),
          },
          {
            loader: 'handlebars-loader'
          },
        ]
      }
    ] // end rules
  } // end module
}; // end module.exports