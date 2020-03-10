import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { IPhotosData } from '../interfaces';
import { API_DOMAIN } from '../constants';

export enum PHOTOS_ORDERS {
  LATEST = 'latest',
  OLDEST = 'oldest',
  POPULAR = 'popular'
}

export interface IphotosParams {
  page: number;
  per_page: number;
  order_by: PHOTOS_ORDERS;
}

export class MainApi {
  public async fetchPhotos(
    token: string,
    params: IphotosParams
  ): Promise<IPhotosData | null> {
    let requestConfig: AxiosRequestConfig = {
      url: '/photos',
      method: 'get',
      baseURL: API_DOMAIN,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      params
    };

    try {
      const { data }: AxiosResponse = await axios(requestConfig);

      return data;
    } catch (error) {
      console.info(error);

      return null;
    }
  }
}
