// import { observable } from 'mobx';

/* import { APP_TOKEN } from './../constants';
import {
  getFromLocalStorage,
  setToLocalStorage,
  removeItemFromLocalStorage
} from '../utils'; */
import { UserApi } from '../apis';
import AuthStore from './Auth';
// import Router from 'next/router';
// import { URLS } from '../components/Routes';

export type TToken = string | null;

export default class UserStore {
  /* @observable
  public token: TToken = null; */

  constructor(private _auth: AuthStore, private _userApi: UserApi) {}

  public async fetchUser(): Promise<boolean | void> {
    const userData = await this._userApi.fetchUser();

    console.info(this._auth, userData);

    /* if (userData) {
      let { access_token } = userData;

      if (access_token) {
        // this.saveToken(access_token);

        return Router.push(URLS.HOME);
      }
    } */

    // Router.push(URLS.SIGNIN);
  }
}
