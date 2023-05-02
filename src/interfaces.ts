export interface dataItem {
  id: number;
  name: string;
  size: string;
  type: string;
  image: string;
  width: number;
  height: number;
  date: string;
  base: string;
  frame: string;
}

export interface PageLayoutInterface {
  children: React.ReactNode;
}