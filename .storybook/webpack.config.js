const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// This File copies the config-overrides in the project root to ensure that storybooks loads correctly.

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: require.resolve('svg-react-loader')
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 3,
              sourceMap: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              sourceMap: true,
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          },
          {
            loader: require.resolve('sass-resources-loader'),
            options: {
              resources: './src/style/resources/*.scss'
            }
          }
        ]
      }
    ]
  }
}