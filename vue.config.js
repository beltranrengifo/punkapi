module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            'src/scss/settings/_mixins.scss',
            'src/scss/base/_inputs.scss',
          ],
        })
        .end()
    })
  },
}
