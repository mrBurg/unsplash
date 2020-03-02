import { observable } from 'mobx';

import { UserApi } from '../apis';
import AuthStore from './Auth';

export default class UserStore {
  @observable
  public user: any = null;

  constructor(private _authStore: AuthStore, private _userApi: UserApi) {}

  public async fetchUser(): Promise<boolean | null | any> {
    let { token } = this._authStore;

    if (token) {
      const userData = this._userApi.fetchUser(token);

      if (userData) {
        userData
          .then((data: any) => {
            this.user = data;
          })
          .then(data => {
            console.info(data);
          });
        // console.info(userData);
      }
    }

    return null;
  }
}
