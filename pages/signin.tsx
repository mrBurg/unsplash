import React, { Component } from 'react';
// import Router from 'next/router';
import { isBrowser, jsonToQueryString } from '../src/utils';
// import { URLS } from '../src/components/Routes';
import {
  API_DOMAIN,
  API_REDIRECT,
  API_SCOPE,
  ACCESS_KEY
} from './../src/constants';

let queryStr = {
  client_id: ACCESS_KEY,
  redirect_uri: API_REDIRECT,
  response_type: 'code',
  scope: API_SCOPE
};

export default class Signin extends Component {
  render() {
    /* setTimeout(() => {
      console.info('redirect to /');*/
    if (isBrowser) {
      // Router.push(URLS.USER);
      console.info(API_DOMAIN);
      /* console.info(
        `https://unsplash.com/oauth/authorize${jsonToQueryString(queryStr)}`
      ); */
    }
    /*}, 3000); */
    console.info('Page Signin');
    return (
      <a href={`${API_DOMAIN}/oauth/authorize${jsonToQueryString(queryStr)}`}>
        Signin
      </a>
    );
  }
}
