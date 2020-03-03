import { observable, runInAction, action } from 'mobx';

import { UserApi } from '../apis';
import AuthStore from './Auth';

export default class UserStore {
  @observable
  public user: any = null;

  constructor(private _authStore: AuthStore, private _userApi: UserApi) {}

  public async fetchUser(): Promise<any> {
    let { token } = this._authStore;

    if (token) {
      const userData = await this._userApi.fetchUser(token);

      runInAction(() => {
        this.saveData(userData);
      });

      // this.user = userData;

      // console.info(userData);
      // console.info(this.user);

      return userData;
    }
  }

  @action.bound
  private saveData(data: any) {
    this.user = data;
  }
}
