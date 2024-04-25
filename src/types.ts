export interface ModalPhoto {
  url: string;
  alt: string;
}
export interface Photo {
  alt_description: string;
  alternative_slugs?: { [key: string]: string };
  asset_type?: string;
  blur_hash?: string;
  breadcrumbs?: any[];
  color?: string;
  created_at?: string;
  current_user_collections?: any[];
  description?: string;
  height?: number;
  id: string;
  liked_by_user?: boolean;
  likes?: number;
  links?: { [key: string]: string };
  promoted_at?: any;
  slug?: string;
  sponsorship?: any;
  tags?: { type: string; title: string }[];
  topic_submissions?: {
    [key: string]: { status: string; approved_on: string };
  };
  updated_at?: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  user?: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name?: string;
    last_name?: string;
    twitter_username?: string;
    portfolio_url?: string;
    bio?: string;
    location?: string;
    links?: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    };
    profile_image?: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username?: string;
    total_collections?: number;
    total_likes?: number;
    total_photos?: number;
    accepted_tos?: boolean;
  };
  width?: number;
}
