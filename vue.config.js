module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/payment-shield-pwa/' // note the trailing slash
    : '/',
}
