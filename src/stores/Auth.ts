import { observable } from 'mobx';
import { APP_TOKEN } from './../constants';
import { getFromLocalStorage, setToLocalStorage } from '../utils';

type TToken = string | null;

export default class AuthStore {
  @observable
  public token: TToken = null;

  constructor() {
    this.readToken();
  }

  public readToken(): void {
    const token = getFromLocalStorage(APP_TOKEN);

    this.token = token;
  }

  public saveToken(token: string): void {
    setToLocalStorage(APP_TOKEN, token);

    this.token = token;
  }
}
