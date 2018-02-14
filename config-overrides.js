const path = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ruleChildren = (loader) => loader.use || loader.oneOf || Array.isArray(loader.loader) && loader.loader || []

const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result
  const rules = Array.isArray(rulesSource) ? rulesSource : ruleChildren(rulesSource)
  rules.some((rule, index) => result = ruleMatcher(rule) ? {index, rules} : findIndexAndRules(ruleChildren(rule), ruleMatcher))
  return result
}

const createLoaderMatcher = (loader) => (rule) => rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1
const fileLoaderMatcher = createLoaderMatcher('file-loader')
const addBeforeRule = (rulesSource, ruleMatcher, value) => {
  const {index, rules} = findIndexAndRules(rulesSource, ruleMatcher)
  rules.splice(index, 0, value)
}

/* config-overrides.js */

module.exports = function override (config, env) {
  const svgLoader = {
    test: /\.svg$/,
    exclude: /node_modules/,
    loader: require.resolve('svg-react-loader')
  }

  const productionScssLoader = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      Object.assign(
        {
          fallback: require.resolve('style-loader'),
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                importLoaders: 2,
                minimize: true,
                sourceMap: true
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
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9' // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009'
                  })
                ]
              }
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true
              }
            },
            {
              loader: require.resolve('sass-resources-loader'),
              options: {
                resources: './src/style/resources/*.scss'
              }
            }
          ]
        },
        {}
      )
    )
    // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.

  }

  const scssLoader = {
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

  addBeforeRule(config.module.rules, fileLoaderMatcher, svgLoader)
  if (env === 'development') {
    addBeforeRule(config.module.rules, fileLoaderMatcher, scssLoader)
  } else {
    addBeforeRule(config.module.rules, fileLoaderMatcher, productionScssLoader)
  }
  // do stuff with the webpack config...
  return config
}
