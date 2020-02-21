import { IQueryData } from '.';

export const jsonToQueryString = (json: IQueryData, encode?: boolean): string =>
  '?' +
  Object.keys(json)
    .map(key =>
      encode
        ? `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`
        : `${key}=${json[key]}`
    )
    .join('&');
