import { IQueryData } from '.';
import { IPhotoData } from '../interfaces';

type Tid = string | number;

export const jsonToQueryString = (json: IQueryData, encode?: boolean): string =>
  '?' +
  Object.keys(json)
    .map(key =>
      encode
        ? `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`
        : `${key}=${json[key]}`
    )
    .join('&');

export const getPhotoIndex = (photos: Array<IPhotoData>, id: Tid): number =>
  photos.findIndex((photo: IPhotoData) => photo.id == id);
