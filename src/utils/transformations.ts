import { IQueryData } from '.';

export const jsonToQueryString = (json: IQueryData): string =>
  '?' +
  Object.keys(json)
    .map(key => key + '=' + json[key])
    .join('&');
