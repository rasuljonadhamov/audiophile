import React from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../../data.json";
import BootomSection from "../components/Home/BootomSection";
import PageToShop from "../components/Home/PageToShop";
import Header from "../components/Header";
import { Category, Product } from "../types/Product";

interface PageParamsType {
  id: string;
  detail: string;
}

interface PageParams {
  params: PageParamsType;
}

const products: Product[] = productsData.map((product: any) => ({
  id: product.id,
  slug: product.slug,
  name: product.name,
  image: product.image,
  category: product.category as Category,
  categoryImage: product.categoryImage,
  new: product.isNew,
  price: product.price,
  description: product.description,
  features: product.features,
  includes: product.includedItems,
  gallery: product.gallery,
  others: product.others,
}));
const ProductListing: React.FC<PageParams> = ({ params }) => {
  const category: Category = params.id as Category;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="bg-gray-100">
      <Header />
      <h1 className="bg-black py-24 text-center text-whiteSecondary uppercase text-4xl font-bold">
        {category}
      </h1>
      <div className="lg:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} category={category} product={product} />
        ))}
      </div>
      <PageToShop />
      <BootomSection />
    </section>
  );
};

export default ProductListing;
