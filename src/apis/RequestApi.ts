import axios from 'axios';

import { jsonToQueryString } from '../utils';

export interface IQueryData {
  [key: string]: string;
}

export interface IRequestOptions {
  [key: string]: any;
}

export class RequestApi {
  public static async get(
    url: string,
    options?: IRequestOptions
  ): Promise<any> {
    try {
      const requestOptions: IRequestOptions = {
        // method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        /* headers: {
            Authorization: `Client-ID {ACCESS_KEY}`,
            // Authorization: `Bearer ${ACCESS_KEY}`
            Accept: 'application/json',
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }, */
        // redirect: 'follow', // manual, *follow, error
        // referrer: 'no-referrer', // no-referrer, *client
        // body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        ...options
      };

      const response = await axios({
        method: 'get',
        url: url + jsonToQueryString(requestOptions)
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public static async post(
    url: string,
    options?: IRequestOptions
  ): Promise<any> {
    try {
      const requestOptions: IRequestOptions = {
        /*headers: {
          // Authorization: `Client-ID ${ACCESS_KEY}`
          // Authorization: `Bearer ${ACCESS_KEY}`
        },*/
        ...options
      };

      const response = await axios({
        method: 'post',
        url,
        data: requestOptions
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
