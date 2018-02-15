var webpack = require('webpack');
var path = require('path');
var config = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
   devServer: {
      inline: true,
      port: 8080
   },
  module: {
          loaders: [

              {
                  test: /\.jsx?$/,
                  exclude: /node_modules/,
                  loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          },
      ],
  }
}
module.exports = config;

//
// var DIST_DIR = path.resolve(__dirname, 'dist');
// var SRC_DIR = path.resolve(__dirname, 'src');
//
// var config = {
//   entry: SRC_DIR + '/app/index.jsx',
//   output: {
//     path: DIST_DIR+'/app',
//     filename: 'bundle.js',
//     publicPath: '/app/'
//   },
//   modules: {
//     loaders: [
//         {
//           test: /\.js?/,
//           include: SRC_DIR,
//           loader: "babel-loader",
//           query: {
//             presets: ['react', 'es2015', 'stage-2']
//           }
//       }
//     ]
//   }
// };
