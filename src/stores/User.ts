import { observable, action } from 'mobx';

import { UserApi } from '../apis';
import AuthStore from './Auth';

export default class UserStore {
  @observable
  public user: any = null;

  constructor(private _authStore: AuthStore, private _userApi: UserApi) {}

  @action
  public async fetchUser(): Promise<boolean | null | any> {
    let { token } = this._authStore;

    if (token) {
      const userData = await this._userApi.fetchUser(token);

      if (userData) {
        console.info(this);
        // this.user.set(userData);
      }
    }

    return null;
  }
}
