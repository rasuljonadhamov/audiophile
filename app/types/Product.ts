export interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

export type Category = "headphones" | "speakers" | "earphones";

export interface IncludeItem {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
}

export interface OtherProduct {
  slug: string;
  name: string;
  image: ImageSet;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: Gallery;
  others: OtherProduct[];
}
