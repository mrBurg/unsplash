const dotenv = require('dotenv');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

dotenv.config();

module.exports = withSass({
  cssModules: true,
  env: {
    HOST: process.env.HOST,
    POST: process.env.POST
  }
});
