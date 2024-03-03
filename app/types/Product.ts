type Category = "headphones" | "speakers";

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: Category;
  categoryImage: string;
  isNew: boolean;
  price: number;
};
