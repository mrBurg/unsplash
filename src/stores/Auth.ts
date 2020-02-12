import { observable } from 'mobx';
import { APP_TOKEN } from './../constants';
import { getFromLocalStorage, isBrowser } from '../utils';

export default class AuthStore {
  @observable
  public token?: string;

  constructor() {
    this.readToken();
  }

  private readToken() {
    if (isBrowser) {
      const token = getFromLocalStorage(APP_TOKEN);

      if (token) {
        this.token = token;
      }
    }
  }
}
