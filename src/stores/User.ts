import { observable } from 'mobx';

import { UserApi } from '../apis';

export default class UserStore {
  @observable
  public user: any = null;

  constructor(private _userApi: UserApi) {}

  public async fetchUser(): Promise<boolean | void> {
    const userData = await this._userApi.fetchUser();

    console.info(userData);
  }
}
