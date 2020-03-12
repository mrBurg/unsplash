interface Ilinks {
  followers?: string;
  following?: string;
  html?: string;
  likes?: string;
  photos?: string;
  portfolio?: string;
  self?: string;
}

interface Iprofile_image {
  large?: string;
  medium?: string;
  small?: string;
}

interface Itags {
  aggregated?: Array<any>;
  custom?: Array<any>;
}

export interface IUserData {
  accepted_tos?: boolean;
  allow_messages?: boolean;
  badge?: any;
  bio?: any;
  confirmed?: boolean;
  downloads?: number;
  email?: string;
  first_name?: string;
  followed_by_user?: boolean;
  followers_count?: number;
  following_count?: number;
  id?: string;
  instagram_username?: any;
  last_name?: any;
  links?: Ilinks;
  location?: any;
  name?: string;
  numeric_id?: number;
  photos?: Array<any>;
  portfolio_url?: any;
  profile_image?: Iprofile_image;
  tags?: Itags;
  total_collections?: number;
  total_likes?: number;
  total_photos?: number;
  twitter_username?: any;
  uid?: string;
  unlimited_uploads?: boolean;
  updated_at?: string;
  uploads_remaining?: number;
  username?: string;
}
