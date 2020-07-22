import { Component, ReactElement } from 'react';
// import Link from 'next/link';

import ui from './../src/scss/ui.scss';
import style from './../src/scss/pages/signin.scss';

import { makeUrl } from '../src/utils';
import { URLS } from '../src/components/Routes';

import {
  APP_DOMAIN,
  API_REDIRECT as redirect_uri,
  API_SCOPE as scope,
  ACCESS_KEY as client_id,
} from './../src/constants';

interface IqueryData {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
}

export default class Signin extends Component {
  private queryData: IqueryData = {
    client_id,
    redirect_uri,
    response_type: 'code',
    scope,
  };

  public render(): ReactElement {
    return (
      <div className={style.page}>
        <div className={style.form}>
          <div className={style.signin}>
            <span>Login or confirm your authorization on the site</span>{' '}
            <a href={APP_DOMAIN} target='_blank'>
              {APP_DOMAIN}
            </a>
            <div className={style.button}>
              <a
                className={ui.linkButton}
                href={makeUrl(`${URLS.OAUTH}/authorize`, this.queryData)}
              >
                Sign In
              </a>
            </div>
          </div>

          {/* <div className={style.signup}>
            <span>or</span>{' '}
            <Link href={URLS.SIGNUP}>
              <a>Sign Up</a>
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}
