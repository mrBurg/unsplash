import { AxiosRequestConfig } from 'axios';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { makeApiUrl } from '../utils';

export class UserApi {
  public async fetchUser(token: string): Promise<boolean | null> {
    let url: string = makeApiUrl('/me');

    let requestConfig: AxiosRequestConfig = {
      method: 'get',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    const failFetch: Function = async () => {
      return { data: { ...requestConfig } };
    };

    try {
      // const response: AxiosResponse = await axios(requestConfig);
      const response = await failFetch(requestConfig);

      return response.data;
    } catch (error) {
      console.info(error);

      return null;
    }
  }
}
