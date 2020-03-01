import { observable } from 'mobx';

import { UserApi } from '../apis';

export default class UserStore {
  @observable
  public user: any = null;

  constructor(private _userApi: UserApi, private _authStore: any) {}

  public async fetchUser(): Promise<boolean | void> {
    let { token, hasToken } = this._authStore;

    if (hasToken) {
      const userData = await this._userApi.fetchUser(token);
      console.info(userData);
    }
  }
}
