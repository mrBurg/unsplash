import { IUserData } from '.';

interface Ilinks {
  self?: any;
  html?: any;
  download?: any;
  download_location?: any;
}

interface Iurls {
  raw?: any;
  full?: any;
  regular?: any;
  small?: any;
  thumb?: any;
}

interface IsponsorLinks {
  self?: any;
  html?: any;
  photos?: any;
  likes?: any;
  portfolio?: any;
  following?: any;
  followers?: any;
}

interface IsponsorProfile_image {
  small?: any;
  medium?: any;
  large?: any;
}

interface Isponsor {
  id?: any;
  updated_at?: any;
  username?: any;
  name?: any;
  first_name?: any;
  last_name?: any;
  twitter_username?: any;
  portfolio_url?: any;
  bio?: any;
  location?: any;
  links?: IsponsorLinks;
  profile_image?: IsponsorProfile_image;
  instagram_username?: any;
  total_collections?: number;
  total_likes?: number;
  total_photos?: number;
  accepted_tos?: boolean;
}

interface Isponsorship {
  impression_urls?: Array<any>;
  tagline?: any;
  sponsor?: Isponsor;
}

export interface IPhotoData {
  id?: any;
  created_at?: any;
  updated_at?: any;
  promoted_at?: any;
  width?: number;
  height?: number;
  color?: any;
  description?: any;
  alt_description?: any;
  urls?: Iurls;
  links?: Ilinks;
  categories?: Array<any>;
  likes?: number;
  liked_by_user?: boolean;
  current_user_collections?: Array<any>;
  user?: IUserData;
  sponsorship?: Isponsorship;
}
