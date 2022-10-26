export interface INewsItem {
  id: number;
  title: string;
  by: string;
  descendants: number;
  kids: number[];
  time: number;
  score: number;
  type: string;
  url: string;
}

export interface IFooterData {
  text: string;
  link: string;
}
