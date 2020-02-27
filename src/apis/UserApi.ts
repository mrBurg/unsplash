// import Router from 'next/router';
// import axios from 'axios';

/* import {
  ACCESS_KEY as client_id,
  SECRET_KEY as client_secret,
  API_REDIRECT as redirect_uri
} from '../constants'; */
// import { URLS } from '../components/Routes';
// import { makeUrl } from '../utils';

export class UserApi {
  public async fetchUser(): Promise<void> {
    // let { query } = Router;
    // let url: string = makeUrl(`${URLS.OAUTH}/token`);
    /* let requestParams: IrequestParams = {
      client_id,
      client_secret,
      redirect_uri,
      code: query.code,
      grant_type: 'authorization_code'
    }; */
    /* try {
      const response = await axios({
        method: 'post',
        url,
        data: requestParams
      });

      return response.data;
    } catch (error) {
      console.info(error);
      return null;
    } */
  }
}
