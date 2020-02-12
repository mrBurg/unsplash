import axios from 'axios';

const UNSPLASH_API = process.env.UNSPLASH_API;
const ACCESS_KEY = process.env.ACCESS_KEY;

interface RequestOptions {
  headers?: any;
  client_id?: string;
  client_secret?: string; //bearer
  redirect_uri?: string;
  code?: any;
  grant_type?: any;
  //'public read_photos write_photos';
  // created_at: 1436544465;
}

/*
Accept: 'application/json',
      'Content-Type': 'application/json'
      // ...(authRequired && token ? { Authorization: `Bearer ${token}` } : {}),
*/

export class ApiRequest {
  public static async get<T>(
    url: string,
    options?: RequestOptions
  ): Promise<any> {
    try {
      const requestOptions: RequestOptions = {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
          // Authorization: `Bearer ${ACCESS_KEY}`
        },
        ...options
      };

      console.info(url);

      /*
      fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
    .then(response => response.json());
      */

      const response = await axios.get<T>(url, requestOptions);

      console.info(response.data);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public static async post<T>(uri: string, options?: RequestOptions) {
    try {
      const requestOptions: RequestOptions = {
        /*headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
          // Authorization: `Bearer ${ACCESS_KEY}`
        },*/
        ...options
      };

      console.info(UNSPLASH_API, options);

      const response = await axios.post<T>(uri, requestOptions);

      console.info(response.data);

      return response.data;
    } catch (e) {
      throw e;
    }
  }
  /* public static get = async <T>(uri: string, _options: RequestOptions = {}) => {
    try {
      // const { token } = options;
      const requestOptions = {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
        }
      };

      const response = await axios.get<T>(UNSPLASH_API + uri, requestOptions);
      return response.data;
    } catch (e) {
      throw e;
    }
  }; */

  /* public static post = async <T>(uri: string) => {
    try {
      const requestOptions = {};

      const response = await axios.post<T>(UNSPLASH_API + uri, requestOptions);

      return response.data;
    } catch (e) {
      throw e;
    }
  }; */
}