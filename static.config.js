import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
/*
* For Less Support
* */
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'

const path = require('path')
const fs = require('fs')

const lessToJs = require('less-vars-to-js')

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, 'src/themes/theme-ant-overwrite.less'), 'utf8'))

//
export default {
  siteRoot: 'https://loganpowell.github.io/census-academy/', // optional, for sitemap.xml
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        path: '/tutorials',
        component: 'src/pages/Tutorials',
      },
      {
        path: '/about',
        component: 'src/pages/About',
      },
      {
        path: '/blog',
        component: 'src/pages/Blog',
        getProps: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/pages/Post',
          getProps: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Change with react-helmet */}
            <meta title="Census Academy" />
            {renderMeta.styleTags}
          </Head>
          <Body>
            {children}
          </Body>
        </Html>
      )
    }
  },
  webpack: (config, { defaultLoaders, stage }) => {

    // Needed for momoent js resolution in React 16
    // See: https://github.com/moment/moment/issues/2979#issuecomment-332217206
    // config.resolve.alias.moment$ = 'moment/moment.js'

    /*
    * Less Support
    * */

    // Add .less & .css to resolver
    config.resolve.extensions.push('.less')
    config.resolve.extensions.push('.css')

    // Loader depending on stage. Same format as the default cssLoader.
    let lessLoader = {}

    if (stage === 'dev') {
      // In-Line with style-loader
      lessLoader =
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: false,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                sourceMap: true,
                ident: 'postcss',
                plugins: () => [
                  postcssFlexbugsFixes,
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                modifyVars: themeVariables,
              },
            },
          ],
        }
    } else {
      // Extract to style.css
      lessLoader =
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({
            fallback: {
              loader: 'style-loader',
              options: {
                hmr: false,
                sourceMap: false,
              },
            },
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  minimize: true,
                  sourceMap: false,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    postcssFlexbugsFixes,
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                  modifyVars: themeVariables,
                },
              },
            ],
          }),
        }
    }

    /*
    * Add new Loaders to default Loaders
    * */

    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          lessLoader,
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]

    // Update ExtractTextPlugin with current instance
    config.plugins[2] =
      new ExtractTextPlugin({
        filename: getPath => {
          process.env.extractedCSSpath = 'styles.css'
          return getPath('styles.css')
        },
        allChunks: true,
      })

    return config
  },
}
