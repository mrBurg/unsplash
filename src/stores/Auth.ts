import { observable } from 'mobx';
import { APP_TOKEN } from './../constants';
import { getFromLocalStorage, isBrowser, setToLocalStorage } from '../utils';

export default class AuthStore {
  @observable
  public token?: string;

  constructor() {
    this.readToken();
  }

  private readToken(): void {
    if (isBrowser) {
      const token = getFromLocalStorage(APP_TOKEN);

      if (token) {
        this.token = token;
      }
    }
  }

  public set saveToken(token: string) {
    if (isBrowser) {
      setToLocalStorage(APP_TOKEN, token);

      this.token = token;
    }
  }
}
