import { API_DOMAIN } from '../constants';
import { IQueryData } from '../apis/ApiRequest';
import { jsonToQueryString } from '.';

export const makeUrl = (path: string, queryData?: IQueryData): string =>
  API_DOMAIN + path + (queryData ? jsonToQueryString(queryData) : '');
