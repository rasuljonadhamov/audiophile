import React from "react";
import products from "../../../data.json";

import { Product } from "../../types/Product";
import Image from "next/image";
import Header from "@/app/components/Header";

interface ProductDetailsProps {
  product: Product; // Interface for props passed to the component
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  params,
  searchParams,
}) => {
  const id = params.detail;

  const product = products.filter((product) => product.id == id)[0];
  console.log(product);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center text-black flex-col md:flex-row md:space-x-10">
          <Image
            width={440}
            height={460}
            src={product.image.desktop}
            alt={product.name}
            className="mb-7 h-auto object-contain md:w-1/3"
          />
          <div className="flex-grow md:w-1/2 px-4">
            {product.new ? (
              <p className="font-normal text-sm text-primary tracking-[10px] mb-4">
                NEW PRODUCT
              </p>
            ) : (
              <p></p>
            )}
            <h1 className="text-4xl font-medium mb-8 uppercase">
              {product.name}
            </h1>

            <p className="mb-8 max-w-[27.8rem]">{product.description}</p>
            <span className="text-lg font-bold uppercase tracking-[1.5px] block mb-8">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
