"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/productSlice";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <section className="hero-section bg-[#0E0E0E]">
      <div className="lg:container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="sm:px-8  hero-content space-y-6 max-w-96 ">
          <p className="text-white  opacity-65 text-sm tracking-[10px]">
            NEW PRODUCT
          </p>
          <h1 className="text-6xl tracking-[2px] font-bold text-white">
            XX99 Mark II Headphones
          </h1>
          <p className="text-xl mb-10 text-white">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            onClick={() => dispatch(addToCart("dwjdj"))}
            title={"SEE PRODUCT"}
            className="btn btn-primary mt-2 py-4 px-8 text-whiteSecondary bg-primary"
          />
        </div>
        <div className="hero-image relative lg:ml-10">
          <Image
            className="max-w-[700px]"
            src="/hero.png"
            alt="Audiophile Headphones"
            layout="responsive"
            width={700}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
