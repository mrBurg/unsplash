import { APP_DOMAIN, API_DOMAIN } from '../constants';
import { IQueryData } from '../apis/RequestApi';
import { jsonToQueryString } from '.';

const makePath = (
  domain: string,
  path: string,
  queryData?: IQueryData
): string => domain + path + (queryData ? jsonToQueryString(queryData) : '');

export const makeApiUrl = (path: string, queryData?: IQueryData): string =>
  makePath(API_DOMAIN, path, queryData);

export const makeUrl = (path: string, queryData?: IQueryData): string =>
  makePath(APP_DOMAIN, path, queryData);
