export enum ViewState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  ARTICLES = 'ARTICLES',
  VIDEOS = 'VIDEOS',
  PRODUCTS = 'PRODUCTS'
}

export interface Article {
  id: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  image: string;
}

export interface Video {
  id: string;
  title: string;
  duration: string;
  platform: 'Bilibili' | 'YouTube';
  views: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  status: 'Released' | 'In Progress';
}
