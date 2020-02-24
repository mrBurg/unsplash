import React, { ReactElement, Component } from 'react';
import Link from 'next/link';

import style from './../src/scss/pages/signup.scss';

import { URLS } from '../src/components/Routes';

export default class Signup extends Component {
  render(): ReactElement {
    return (
      <div className={style.container}>
        <form className={style.form} action=''>
          <fieldset className={style.fieldset}>
            <legend>SignIn</legend>
            <div className={style.name}>
              <input
                type='text'
                className={`${style.input} ${style.name__input}`}
                placeholder='Login'
                defaultValue=''
              />
              <div className={style.name__description}>
                Enter email or login
              </div>
            </div>
            <div className={style.pass}>
              <input
                type='text'
                className={`${style.input} ${style.pass__input}`}
                placeholder='Password'
                defaultValue=''
              />
              <input
                type='text'
                className={`${style.input} ${style.pass__input}`}
                placeholder='Re-password'
                defaultValue=''
              />
            </div>
          </fieldset>
        </form>
        <div className={style.signin}>
          <span>or</span>{' '}
          <Link href={URLS.SIGNIN}>
            <a>Sign In</a>
          </Link>
        </div>
      </div>
    );
  }
}
