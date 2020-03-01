import Router from 'next/router';
import axios from 'axios';

import {
  ACCESS_KEY as client_id,
  SECRET_KEY as client_secret,
  API_REDIRECT as redirect_uri
} from '../constants';
import { URLS } from '../components/Routes';
import { makeUrl } from '../utils';

interface IrequestData {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  code: string | string[];
  grant_type: string;
}

export interface IresponseParams {
  access_token: string;
  created_at: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export class AuthApi {
  public async fetchToken(): Promise<IresponseParams | null> {
    let { query } = Router;
    console.log(
      `%c query.code:%c ${query.code} `,
      'background: #0f0; color: #000',
      'background: #fff; color: #000'
    );

    if (query.code) {
      let url: string = makeUrl(`${URLS.OAUTH}/token`);

      let requestData: IrequestData = {
        client_id,
        client_secret,
        redirect_uri,
        code: query.code,
        grant_type: 'authorization_code'
      };

      try {
        const response = await axios({
          method: 'post',
          url,
          data: requestData
        });

        return response.data;
      } catch (error) {
        console.info(error);
      }
    }

    return null;
  }
}
