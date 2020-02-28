import axios from 'axios';

import { makeUrl } from '../utils';

export class UserApi {
  public async fetchUser(): Promise<boolean | null> {
    let url: string = makeUrl('/me');

    let requestParams: any = {
      headers: {
        Authorization: `Bearer`
      }
    };

    console.info(url, requestParams);

    try {
      const response = await axios({
        method: 'get',
        url,
        data: requestParams
      });

      return response.data;
    } catch (error) {
      console.info(error);
      return null;
    }
  }
}
