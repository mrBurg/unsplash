import Router from 'next/router';
import { observable, action, computed } from 'mobx';

import { APP_TOKEN } from '../constants';
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

  @action
  public async fetchToken(): Promise<boolean | void> {
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

    Router.push(URLS.SIGNIN);
  }

  @action
  public readToken(): void {
    const token = getFromLocalStorage(APP_TOKEN);

    this.token = token;
  }

  @action
  public saveToken(token: string): void {
    setToLocalStorage(APP_TOKEN, token);

    this.token = token;
  }

  @action
  public removeToken(): void {
    removeItemFromLocalStorage(APP_TOKEN);

    this.token = null;
  }

  @computed
  public get hasToken(): boolean {
    return this.token ? true : false;
  }
}
