const dotenv = require('dotenv');
const withSass = require('@zeit/next-sass');

dotenv.config({ path: './.env' });

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]___[hash:base64:5]'
  },
  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    APP_DOMAIN: process.env.APP_DOMAIN,
    APP_TOKEN: process.env.APP_TOKEN,
    API_DOMAIN: process.env.API_DOMAIN,
    API_REDIRECT: process.env.API_REDIRECT,
    API_SCOPE: process.env.API_SCOPE,
    ACCESS_KEY: process.env.ACCESS_KEY,
    SECRET_KEY: process.env.SECRET_KEY
  }
});
