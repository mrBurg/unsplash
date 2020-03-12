import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  ACCESS_KEY as client_id,
  SECRET_KEY as client_secret,
  API_REDIRECT as redirect_uri,
  APP_DOMAIN
} from '../constants';
import { URLS } from '../components/Routes';

interface IrequestData {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  code: string | string[];
  grant_type: string;
}

interface IresponseParams {
  access_token: string;
  created_at: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export class AuthApi {
  public async fetchToken(code: string): Promise<IresponseParams | null> {
    let requestData: IrequestData = {
      client_id,
      client_secret,
      redirect_uri,
      code,
      grant_type: 'authorization_code'
    };

    let requestConfig: AxiosRequestConfig = {
      url: `${URLS.OAUTH}/token`,
      method: 'post',
      baseURL: APP_DOMAIN,
      data: requestData
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
