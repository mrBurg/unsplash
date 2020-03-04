import { useStaticRendering } from 'mobx-react';

import { isServer } from '../utils';

import { AuthApi, UserApi, MainApi } from '../apis';

import AuthStore from './AuthStore';
import MainStore from './MainStore';
import UserStore from './UserStore';

export enum STORE_IDS {
  AUTH = 'authStore',
  MAIN = 'mainStore',
  USER = 'userStore'
}

export interface IStores {
  [STORE_IDS.AUTH]: AuthStore;
  [STORE_IDS.MAIN]: MainStore;
  [STORE_IDS.USER]: UserStore;
}

const authApi = new AuthApi();
const mainApi = new MainApi();
const userApi = new UserApi();

const authStore = new AuthStore(authApi);
const mainStore = new MainStore(authStore, mainApi);
const userStore = new UserStore(authStore, userApi);

let stores: IStores | null = null;

useStaticRendering(isServer);

//@ts-ignore
export default function initializeStores(initialData?: IStores) {
  // console.info(initialData, 'initializeStores');

  if (isServer) {
    return {
      [STORE_IDS.AUTH]: authStore,
      [STORE_IDS.MAIN]: mainStore,
      [STORE_IDS.USER]: userStore
    };
  }

  if (stores === null) {
    stores = {
      [STORE_IDS.AUTH]: authStore,
      [STORE_IDS.MAIN]: mainStore,
      [STORE_IDS.USER]: userStore
    };
  }

  return stores;
}
