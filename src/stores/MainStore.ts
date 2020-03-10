import { observable, toJS, computed } from 'mobx';

import { MainApi } from '../apis';
import AuthStore from './AuthStore';
import { IPhotosData } from '../interfaces';
import { IphotosParams, PHOTOS_ORDERS } from '../apis/MainApi';

export default class MainStore {
  @observable photos: IPhotosData | null = null;
  @observable page: number = 1;
  @observable per_page: number = 10;
  @observable order_by: PHOTOS_ORDERS = PHOTOS_ORDERS.LATEST;

  constructor(private _authStore: AuthStore, private _mainApi: MainApi) {}

  public async fetchPhotos(callBack: Function): Promise<void> {
    let { token } = this._authStore;

    if (token) {
      const photosData = await this._mainApi.fetchPhotos(
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

  public get photosData(): IPhotosData {
    return toJS(this.photos!);
  }
}
