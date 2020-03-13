import { observable, toJS, computed, action } from 'mobx';

import { PhotosApi } from '../apis';
import AuthStore from './AuthStore';
import { IPhotoData } from '../interfaces';
import { IphotosParams, PHOTOS_ORDERS } from '../apis/PhotosApi';

import photosData from './photos.json';

export interface IPhotosStore {
  photosStore: PhotosStore;
}

type Tphotos = Array<IPhotoData> | null;

export default class PhotosStore {
  @observable
  public photos: Tphotos = null;
  @observable
  public page: number = 2;
  @observable
  public per_page: number = 30;
  @observable
  public order_by: PHOTOS_ORDERS = PHOTOS_ORDERS.LATEST;
  //@ts-ignore
  constructor(private _authStore: AuthStore, private _photosApi: PhotosApi) {}

  @action
  public async fetchPhotos(callBack?: Function): Promise<void> {
    let { token } = this._authStore;

    if (token) {
      /* const photosData = await this._photosApi.fetchPhotos(
        token,
        this.photosParams
      ); */

      this.photos = photosData;

      if (callBack) {
        callBack(this.photosData);
      }
    }
  }

  @computed
  public get photosParams(): IphotosParams {
    return {
      page: this.page,
      per_page: this.per_page,
      order_by: this.order_by
    };
  }

  public set photosData(photos: Array<IPhotoData>) {
    this.photos = photos;
  }

  @computed
  public get photosData(): Array<IPhotoData> {
    return toJS(this.photos!);
  }
}
