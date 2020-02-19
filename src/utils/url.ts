import { API_DOMAIN } from '../constants';
import { jsonToQueryString } from '.';

export interface IQueryData {
  [key: string]: string;
}

export const getURL = (path: string, queryData?: IQueryData): string =>
  API_DOMAIN + path + (queryData ? jsonToQueryString(queryData) : '');
