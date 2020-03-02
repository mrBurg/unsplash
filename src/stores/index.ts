import { useStaticRendering } from 'mobx-react';

import { isServer } from '../utils';
import { AuthApi, UserApi } from '../apis';
import AuthStore from './Auth';
import UserStore from './User';

export enum STORE_IDS {
  AUTH = 'authStore',
  USER = 'userStore'
}

export interface IStores {
  [STORE_IDS.AUTH]: AuthStore;
  [STORE_IDS.USER]: UserStore;
}

const authApi = new AuthApi();
const userApi = new UserApi();

const authStore = new AuthStore(authApi);
const userStore = new UserStore(authStore, userApi);

let stores: IStores | null = null;

useStaticRendering(isServer);

//@ts-ignore
export default function initializeStores(initialData?: IStores) {
  // console.info(initialData, 'initializeStores');

  if (isServer) {
    return {
      [STORE_IDS.AUTH]: authStore,
      [STORE_IDS.USER]: userStore
    };
  }

  if (stores === null) {
    stores = {
      [STORE_IDS.AUTH]: authStore,
      [STORE_IDS.USER]: userStore
    };
  }

  return stores;
}
