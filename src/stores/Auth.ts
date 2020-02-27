import { observable } from 'mobx';

import { APP_TOKEN } from './../constants';
import {
  getFromLocalStorage,
  setToLocalStorage,
  removeItemFromLocalStorage
} from '../utils';
import { AuthApi } from '../apis';
import Router from 'next/router';
import { URLS } from '../components/Routes';

export type TToken = string | null;

export default class AuthStore {
  @observable
  public token: TToken = null;

  constructor(private _authApi: AuthApi) {}

  public async fetchToken(): Promise<boolean | void> {
    const tokenData = await this._authApi.fetchToken();

    if (tokenData) {
      let { access_token } = tokenData;

      if (access_token) {
        this.saveToken(access_token);

        return Router.push(URLS.HOME);
      }
    }

    Router.push(URLS.SIGNIN);
  }

  public readToken(): void {
    const token = getFromLocalStorage(APP_TOKEN);

    this.token = token;
  }

  public saveToken(token: string): void {
    setToLocalStorage(APP_TOKEN, token);

    this.token = token;
  }

  public removeToken(): void {
    this.token = null;

    removeItemFromLocalStorage(APP_TOKEN);
  }

  public get hasToken(): TToken {
    this.readToken();

    return this.token;
  }
}
