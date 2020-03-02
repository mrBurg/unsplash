import { observable, action } from 'mobx';

import { UserApi } from '../apis';
import AuthStore from './Auth';

export default class UserStore {
  @observable
  public user: any = null;

  constructor(private _authStore: AuthStore, private _userApi: UserApi) {}

  @action.bound
  public async fetchUser(): Promise<boolean | null | any> {
    let { token } = this._authStore;

    if (token) {
      const userData = await this._userApi.fetchUser(token);

      this.user = userData;

      console.info(userData);
      console.info(this.user);

      return userData;
    }

    return null;
  }
}
