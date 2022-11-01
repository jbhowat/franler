const path = require('path');
// eslint-disable-next-line import/no-unresolved
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // define entry point for webpack to use to begin its build
  entry: './src/index.jsx',
  // define output file and folder for the prodcution uglified and minified pack
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  /* uses the HTML Webpack Plugin, which allows webpack to add the created bundle.js file to the
      HTML file that it creates when in production mode.
  */
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  // defines which modules are used and for what file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
