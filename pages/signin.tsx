import { Component, ReactElement } from 'react';
// import Router from 'next/router';
import Link from 'next/link';

import ui from './../src/scss/ui.scss';
import style from './../src/scss/pages/signin.scss';

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
  render(): ReactElement {
    return (
      <div className={style.container}>
        <div className={style.form}>
          <div className={style.signin}>
            <span>Login or confirm your authorization on the site</span>{' '}
            <a href='https://unsplash.com' target='_blank'>
              https://unsplash.com
            </a>
            <div className={style.button}>
              <a
                className={ui.linkButton}
                href={getURL('/oauth/authorize', queryData)}
              >
                Sign In
              </a>
            </div>
          </div>

          <div className={style.signup}>
            <span>or</span>{' '}
            <Link href={URLS.SIGNUP}>
              <a>Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
