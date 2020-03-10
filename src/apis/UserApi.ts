import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { IUserData } from '../interfaces';
import { API_DOMAIN } from '../constants';

export class UserApi {
  public async fetchUser(token: string): Promise<IUserData | null> {
    let requestConfig: AxiosRequestConfig = {
      url: '/me',
      method: 'get',
      baseURL: API_DOMAIN,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
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
