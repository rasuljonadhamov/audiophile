"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import createOrder from "@/app/store/createOrder";
import Button from "../components/Button";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Checkout: React.FC = () => {
  const addedProducts = useSelector(
    (state) => state.product.addedProducts
  ) as CartItem[];
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("e-Money");

  const calculateSubtotal = () => {
    let subtotal = 0;
    addedProducts.forEach((product) => {
      subtotal += product.price * product.quantity;
    });
    return subtotal;
  };

  const handleOrderSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const order = {
      products: addedProducts,
      customer: {
        name,
        email,
        phone,
        address,
      },
      paymentMethod,
    };

    dispatch(createOrder(order)); // Dispatch action to create order
  };

  const handleUserInfoUpdate = (data: {
    name: string;
    email: string;
    phone: string;
    address: string;
  }) => {
    // Update state or perform actions with user information here (optional)
    console.log("Updated user information:", data);
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 uppercase">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-medium mb-4">Billing Details</h2>
          <form onSubmit={handleOrderSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-2"
              >
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8 uppercase">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-medium mb-4">Billing Details</h2>
            {/* <UserInfo onUpdate={handleUserInfoUpdate} />{" "} */}
            {/* Pass handleUserInfoUpdate as a prop */}
            <div className="mb-4">
              <label
                htmlFor="paymentMethod"
                className="block text-sm font-medium mb-2"
              >
                Payment Method:
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="e-Money">e-Money</option>
                <option value="creditCard">Credit Card</option>
              </select>
            </div>
          </div>
        </div>

        <Button
          title={"Place Order"}
          className="bg-primary hover:bg-emerald-700 text-white font-bold py-2 px-4  ml-4"
          onClick={handleOrderSubmit}
        />
      </div>
    </div>
  );
};

export default Checkout;
