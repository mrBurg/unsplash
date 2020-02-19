import { observable } from 'mobx';
import { APP_TOKEN } from './../constants';
import { getFromLocalStorage, setToLocalStorage } from '../utils';

export default class AuthStore {
  @observable
  public token: string = '';

  constructor() {
    this.readToken();
  }

  public readToken(): void {
    const token = getFromLocalStorage(APP_TOKEN);

    this.token = token ? token : '';
  }

  public set saveToken(token: string) {
    setToLocalStorage(APP_TOKEN, token);

    this.token = token;
  }
}
