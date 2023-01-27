export interface aboutMeItemsInterface {
  title: string;
  url: string;
  background: string;
  link: string;
  icon: any;
}
export interface experienceInterface {
  year: number | string;
  length?: string;
  company: string;
  description: string;
}
export interface contacts {
  imgLink: string;
  itemLink: string;
  title: string;
}
export interface selectionListItem {
  name: string;
  link: string;
}
export interface siteItemInterface {
  title: string;
  pageLink: string;
  description: string;
  images: string[];
  styles?: string;
  hostLink?: string;
  mobileImages: string[];
}
//mobile image 375 X 648
