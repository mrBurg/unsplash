import { useStaticRendering } from 'mobx-react';

import { isServer } from '../utils';
import { AuthApi, UserApi } from '../apis';
import AuthStore from './Auth';
import UserStore from './User';
import Counter from './Counter';

export enum STORE_IDS {
  AUTH = 'auth',
  USER = 'user',
  COUNTER = 'counter'
}

export interface IStores {
  [STORE_IDS.AUTH]: AuthStore;
  [STORE_IDS.USER]: UserStore;
  [STORE_IDS.COUNTER]: Counter;
}

const authApi = new AuthApi();
const userApi = new UserApi();

const auth = new AuthStore(authApi);
const user = new UserStore(auth, userApi);
const counter = new Counter();

let stores: IStores | null = null;

useStaticRendering(isServer);

//@ts-ignore
export default function initializeStores(initialData?: IStores) {
  // console.info(initialData, 'initializeStores');

  if (isServer) {
    return {
      [STORE_IDS.AUTH]: auth,
      [STORE_IDS.USER]: user,
      [STORE_IDS.COUNTER]: counter
    };
  }

  if (stores === null) {
    stores = {
      [STORE_IDS.AUTH]: auth,
      [STORE_IDS.USER]: user,
      [STORE_IDS.COUNTER]: counter
    };
  }

  return stores;
}
