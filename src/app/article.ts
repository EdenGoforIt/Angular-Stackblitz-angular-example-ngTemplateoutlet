export class Article {
  type: MediaType;
  contents: { title: string; description: string; img: string }[];
}
export enum MediaType {
  medium,
  linkedIn,
  scoop,
}
