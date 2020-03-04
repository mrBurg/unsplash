import { observable, toJS } from 'mobx';

import { UserApi } from '../apis';
import AuthStore from './AuthStore';
import { IUserData } from '../interfaces';

export default class UserStore {
  @observable user: IUserData | null = null;

  constructor(private _authStore: AuthStore, private _userApi: UserApi) {}

  public async fetchUser(callBack: Function): Promise<void> {
    let { token } = this._authStore;

    if (token) {
      const userData = await this._userApi.fetchUser(token);

      this.user = userData;

      callBack(toJS(this.user));
    }
  }

  public get userData(): IUserData {
    return toJS(this.user!);
  }
}
