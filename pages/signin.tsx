import { Component } from 'react';
// import Router from 'next/router';
import Link from 'next/link';

import style from './../src/scss/pages/signin.module.scss';

import { getURL } from '../src/utils';
// import { URLS } from '../src/components/Routes';

import { API_REDIRECT, API_SCOPE, ACCESS_KEY } from './../src/constants';
import { URLS } from '../src/components/Routes';

let queryData = {
  client_id: ACCESS_KEY,
  redirect_uri: API_REDIRECT,
  response_type: 'code',
  scope: API_SCOPE
};

export default class Signin extends Component {
  render() {
    return (
      <div className={style.signin}>
        <p>
          login to{' '}
          <a href='https://unsplash.com' target='_blank'>
            https://unsplash.com
          </a>
        </p>
        <div>
          <a href={getURL('/oauth/authorize', queryData)}>Signin</a>
        </div>
        or signup
        <div>
          <Link href={URLS.SIGNUP}>
            <a className='cn'>https://unsplash.com</a>
          </Link>
        </div>
      </div>
    );
  }
}
