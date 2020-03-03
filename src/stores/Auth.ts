import Router from 'next/router';
import { observable } from 'mobx';

import { APP_TOKEN } from './../constants';
import { URLS } from '../components/Routes';
import {
  getFromLocalStorage,
  setToLocalStorage,
  removeItemFromLocalStorage
} from '../utils';
import { AuthApi } from '../apis';

export default class AuthStore {
  @observable
  public token: string | null = null;

  constructor(private _authApi: AuthApi) {}

  public async fetchToken(): Promise<boolean> {
    let {
      query: { code }
    } = Router;

    if (code) {
      const tokenData = await this._authApi.fetchToken(code as string);

      if (tokenData) {
        let { access_token } = tokenData;

        if (access_token) {
          this.saveToken(access_token);

          return Router.push(URLS.HOME);
        }
      }
    }

    return Router.push(URLS.SIGNIN);
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
    removeItemFromLocalStorage(APP_TOKEN);

    this.token = null;
  }

  public get hasToken(): boolean {
    return this.token ? true : false;
  }
}
