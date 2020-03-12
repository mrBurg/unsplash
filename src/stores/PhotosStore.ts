import { observable, toJS, computed, action } from 'mobx';

import { PhotosApi } from '../apis';
import AuthStore from './AuthStore';
import { IPhotoData } from '../interfaces';
import { IphotosParams, PHOTOS_ORDERS } from '../apis/PhotosApi';

export default class PhotosStore {
  @observable photos: Array<IPhotoData> | null = null;
  @observable page: number = 2;
  @observable per_page: number = 30;
  @observable order_by: PHOTOS_ORDERS = PHOTOS_ORDERS.LATEST;

  constructor(private _authStore: AuthStore, private _photosApi: PhotosApi) {}

  @action
  public async fetchPhotos(callBack: Function): Promise<void> {
    let { token } = this._authStore;

    if (token) {
      const photosData = await this._photosApi.fetchPhotos(
        token,
        this.photosParams
      );

      this.photos = photosData;

      callBack(toJS(this.photos));
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

  public get photosData(): Array<IPhotoData> {
    return toJS(this.photos!);
  }
}
