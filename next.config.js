const dotenv = require('dotenv');
const withSass = require('@zeit/next-sass');

dotenv.config();

module.exports = withSass({
  cssModules: true,
  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  }
});
