import { ReactNode } from "react";

export interface CardItem {
  description: ReactNode;
  id: number;
  src: string;
  alt: string;
  title: string;
  oldPrice: string;
  price: string;
}