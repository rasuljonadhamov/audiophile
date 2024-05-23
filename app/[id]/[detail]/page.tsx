"use client";
import React, { useState } from "react";
import products from "../../../data.json";

import { Product } from "../../types/Product";
import Image from "next/image";
import Header from "@/app/components/Header";
import { useRouter } from "next/navigation";
import PageToShop from "@/app/components/Home/PageToShop";
import Button from "@/app/components/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/productSlice";
import store from "@/app/store/store";

interface PageParams {
  id: number;
  detail: string;
}
interface PageSearchParams {}

interface ProductDetailsProps {
  params: PageParams;
  searchParams?: PageSearchParams;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  params,
  searchParams,
}) => {
  const id = params.detail;

  const product = products.filter((product) => product.id.toString() === id)[0];
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleGoBack = () => {
    router.back();
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: quantity }));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 bg-slate-100">
        <button
          onClick={handleGoBack}
          className="font-normal  px-4 opacity-50 text-base mb-6"
        >
          Go Back
        </button>
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
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-4 text-sm font-medium">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-primary text-white font-bold py-2 px-4 mt-4"
              title={`Add to Cart ${quantity}`}
            />
          </div>
        </div>

        <div className="flex gap-32 flex-wrap mt-28">
          <div className="max-w-[44rem]">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <ul className="list-disc  mb-6">{product.features}</ul>
          </div>
          <div className="right">
            <h2 className="text-3xl font-bold mb-8 uppercase">In the Box</h2>
            <ul className="list-none text-base opacity-50  pl-4 mb-6">
              <li>
                <span className="text-primary mr-6 text-lg font-bold">
                  {" "}
                  {product.includes[0].quantity}x
                </span>{" "}
                Headphone Unit
              </li>
              <li>
                <span className="text-primary mr-6 text-lg font-bold">
                  {" "}
                  {product.includes[1].quantity}x
                </span>{" "}
                Replacement Earcups
              </li>
              <li>
                <span className="text-primary mr-6 text-lg font-bold">
                  {" "}
                  {product.includes[2].quantity}x
                </span>{" "}
                User Manual
              </li>
              <li>
                <span className="text-primary mr-6 text-lg font-bold">
                  {" "}
                  {product.includes[3].quantity}x
                </span>{" "}
                3.5mm 5m Audio Cable
              </li>
              <li>
                <span className="text-primary mr-6 text-lg font-bold">
                  {" "}
                  {product.includes[0].quantity}x
                </span>{" "}
                Travel Bag
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PageToShop />
    </>
  );
};

export default ProductDetails;
