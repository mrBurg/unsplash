import { Component, ReactElement } from 'react';
import Link from 'next/link';

import ui from './../src/scss/ui.scss';
import style from './../src/scss/pages/signin.scss';

import { makeUrl } from '../src/utils';
import { URLS } from '../src/components/Routes';

import {
  API_DOMAIN,
  API_REDIRECT as redirect_uri,
  API_SCOPE as scope,
  ACCESS_KEY as client_id
} from './../src/constants';

let queryData = {
  client_id,
  redirect_uri,
  response_type: 'code',
  scope
};

export default class Signin extends Component {
  public render(): ReactElement {
    return (
      <div className={style.container}>
        <div className={style.form}>
          <div className={style.signin}>
            <span>Login or confirm your authorization on the site</span>{' '}
            <a href={API_DOMAIN} target='_blank'>
              {API_DOMAIN}
            </a>
            <div className={style.button}>
              <a
                className={ui.linkButton}
                href={makeUrl(`${URLS.OAUTH}/authorize`, queryData)}
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
