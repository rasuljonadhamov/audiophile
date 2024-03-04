"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/app/store/productSlice";
import Image from "next/image";
import Header from "../components/Header";
import Button from "../components/Button";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const addedProducts = useSelector(
    (state) => state.product.addedProducts
  ) as CartItem[];
  console.log(addedProducts);

  const dispatch = useDispatch();

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    addedProducts.forEach((product) => {
      subtotal += product.price * product.quantity;
    });
    return subtotal;
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8 uppercase">Shopping Cart</h1>

        {addedProducts.length === 0 ? (
          <p className="text-lg mb-8">Your cart is currently empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addedProducts.length &&
              addedProducts.map((product) => (
                <div
                  key={product.id}
                  className="shadow-md rounded-lg overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={product.image.desktop}
                      alt={product.name}
                      width={400}
                      height={600}
                      className="absolute inset-0 w-full h-full object-contain rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                    <span className="text-gray-500 ">
                      Price: ${product.price.toFixed(2)}
                    </span>

                    <div className="flex items-center mt-4">
                      <span className="text-gray-500 mr-4">
                        Quantity: {product.quantity}
                      </span>
                      <Button
                        title={"Remove"}
                        onClick={() => handleRemoveItem(product.id)}
                        className="bg-red-600 hover:opacity-75 text-white font-bold py-2 px-2 "
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {addedProducts.length > 0 && (
          <div className="flex justify-end mt-8">
            <div className="text-right">
              <p className="text-lg font-medium mb-2">Subtotal:</p>
              <span className="text-xl font-bold">
                ${calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <Link href={"/checkout"}>
              <Button
                title={"Checkout"}
                className="bg-primary hover:opacity-70 text-white font-bold py-2 px-4 ml-4"
              />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
