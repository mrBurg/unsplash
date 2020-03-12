import { useStaticRendering } from 'mobx-react';

import { isServer } from '../utils';

import { AuthApi, UserApi, PhotosApi } from '../apis';

import AuthStore from './AuthStore';
import PhotosStore from './PhotosStore';
import UserStore from './UserStore';

export enum STORE_IDS {
  AUTH = 'authStore',
  PHOTOS = 'photosStore',
  USER = 'userStore'
}

export interface IStores {
  [STORE_IDS.AUTH]: AuthStore;
  [STORE_IDS.PHOTOS]: PhotosStore;
  [STORE_IDS.USER]: UserStore;
}

const authApi = new AuthApi();
const photosApi = new PhotosApi();
const userApi = new UserApi();

const authStore = new AuthStore(authApi);
const photosStore = new PhotosStore(authStore, photosApi);
const userStore = new UserStore(authStore, userApi);

let stores: IStores | null = null;

useStaticRendering(isServer);

//@ts-ignore
export default function initializeStores(initialData?: IStores) {
  // console.info(initialData, 'initializeStores');

  if (isServer) {
    return {
      [STORE_IDS.AUTH]: authStore,
      [STORE_IDS.PHOTOS]: photosStore,
      [STORE_IDS.USER]: userStore
    };
  }

  if (stores === null) {
    stores = {
      [STORE_IDS.AUTH]: authStore,
      [STORE_IDS.PHOTOS]: photosStore,
      [STORE_IDS.USER]: userStore
    };
  }

  return stores;
}
