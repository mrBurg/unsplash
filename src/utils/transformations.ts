import { IQueryData } from '.';
import { IPhotoData } from '../interfaces';

export const jsonToQueryString = (json: IQueryData, encode?: boolean): string =>
  '?' +
  Object.keys(json)
    .map(key =>
      encode
        ? `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`
        : `${key}=${json[key]}`
    )
    .join('&');

export const searchPhotoData = (arr: Array<IPhotoData>, value: any) => {
  return arr.find((photo: IPhotoData, index: number) => {
    if (photo.id == value) {
      return {
        index,
        photo
      };
    }
  });
};
