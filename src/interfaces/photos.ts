import { IUserData } from '.';

interface Ilinks {
  self?: string;
  html?: string;
  download?: string;
  download_location?: string;
}

interface Iurls {
  full?: string;
  raw?: string;
  small?: string;
  thumb?: string;
}

export interface IPhotosData {
  alt_description?: string;
  categories?: Array<any>;
  color?: string;
  created_at?: string;
  current_user_collections?: Array<any>;
  description?: string;
  height?: number;
  id?: string;
  liked_by_user?: boolean;
  likes?: number;
  links?: Ilinks;
  promoted_at?: string;
  updated_at?: string;
  urls?: Iurls;
  user?: IUserData;
  width?: number;
}
