import axios from 'axios';

// import { makeUrl } from '../utils';

export class UserApi {
  public async fetchUser(accessToken: string): Promise<boolean | null> {
    // let url: string = makeUrl(`/me?client-ID=${accessToken}`);

    //let ACCESS_KEY =  '055022873d112aa5aa5ee75629932fe3b9211adf3c38faec47eda69a5bf919de'
    //let queryCode = 't4HaepTcilRMk0W06I2h78eosPTOLttyuxPCU4lK-RY'
    accessToken = 'epVvbwi8fW4yrVQZ-S1s5hyfR5WkfsxHrsjhYhObIGk';

    // let url: string = `https://api.unsplash.com/photos/?client_id=055022873d112aa5aa5ee75629932fe3b9211adf3c38faec47eda69a5bf919de`;
    let url: string = `https://unsplash.com/photos`;

    let requestData: any = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // Authorization: `Client-ID  ${accessToken}`,
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization'
      }
    };

    let requestParams: any = {
      'Client-ID': 'epVvbwi8fW4yrVQZ-S1s5hyfR5WkfsxHrsjhYhObIGk'
    };

    console.info(url, requestData);

    try {
      const response = await axios({
        method: 'get',
        url,
        params: { ...requestParams },
        data: { ...requestData }
      });

      return response.data;
    } catch (error) {
      console.info(error);
      return null;
    }
  }
}
