import Link from "next/link";
import React from "react";
import Button from "../Button";

const FullImg = () => {
  return (
    <section className="py-10 px-6 pt-14 bg-gray-100">
      <div
        className="lg:container mx-auto flex flex-col pl-32  justify-center rounded-lg  overflow-hidden h-[28.125rem] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("/assets/home/desktop/image-speaker-zx7.jpg")`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <h2 className="text-3xl uppercase tracking-[2px]  text-black font-bold text-left mb-8">
          ZX9 Speaker
        </h2>
        <Link href="/headphones">
          <Button
            className="btn btn-primary border text-black border-black"
            title={"SEE PRODUCT"}
          />
        </Link>
      </div>
    </section>
  );
};

export default FullImg;
