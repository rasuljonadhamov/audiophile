import React from "react";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import products from "../../data.json";
import BootomSection from "../components/Home/BootomSection";
import PageToShop from "../components/Home/PageToShop";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../store/store";

interface ProductListingProps {
  category: string;
  products: Product[];
}

const ProductListing: React.FC<ProductListingProps> = ({ params }) => {
  const category = params.id;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    // <Provider store={store}>
    <section className="bg-gray-100">
      <Header />
      <h1 className="bg-black py-24 text-center text-whiteSecondary uppercase text-4xl font-bold">
        {category}
      </h1>
      <div className="lg:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} category={category} product={product} />
        ))}
      </div>
      <PageToShop />
      <BootomSection />
    </section>
    // </Provider>
  );
};

export default ProductListing;
