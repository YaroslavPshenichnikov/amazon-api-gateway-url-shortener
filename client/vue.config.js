module.exports = {
  lintOnSave: false,
  transpileDependencies: [],
  configureWebpack: {
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['cache-loader']
        }
      ]
    }
  }
}
