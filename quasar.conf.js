/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: true,
          files: './src/**/*.{ts,tsx,js,jsx,vue}',
        },
      }
    },

    boot: [
    ],

    css: [
    ],

    extras: [
      'roboto-font',
      'material-icons',
    ],

    build: {
      vueRouterMode: 'history',

      chainWebpack (/* chain */) {
        //
      },
    },

    devServer: {
      https: false,
      port: 8080,
      open: true
    },

    framework: {
      config: {},

      plugins: []
    },

    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {},

      chainWebpackCustomSW (/* chain */) {
        //
      },

      manifest: {
        name: 'Quasar App',
        short_name: 'Quasar App',
        description: 'A Quasar Framework app',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: []
      }
    },

    cordova: {
    },

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      bundler: 'packager',

      packager: {
      },

      builder: {
        appId: 'todo'
      },

      chainWebpack (/* chain */) {
        // do something with the Electron main process Webpack cfg
        // extendWebpackMain also available besides this chainWebpackMain
      },

      chainWebpackPreload (/* chain */) {
        // do something with the Electron main process Webpack cfg
        // extendWebpackPreload also available besides this chainWebpackPreload
      },
    }
  }
});
