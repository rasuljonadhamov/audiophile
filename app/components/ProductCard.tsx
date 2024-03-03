import React from "react";
import Image from "next/image";
import { Product } from "../types/Product";
import Button from "./Button";
import Link from "next/link";

interface ProductListingProps {
  product: Product[];
  category: string;
}

const ProductCard: React.FC<ProductListingProps> = ({ product, category }) => {
  const { image, name, price, id } = product;

  return (
    <div className="mt-36 rounded overflow-hidden bg-gray-100">
      <div className="relative   h-48 w-full">
        <Image
          src={image.desktop}
          alt={name}
          width={300}
          height={400}
          className="w-full h-full object-contain absolute top-0 left-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 opacity-50"></div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <Link href={`/${category}/${id}`}>
          <Button title={"See Product"} className={"bg-primary text-white"} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
