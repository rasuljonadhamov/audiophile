import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";

const SpeakerComponent = () => {
  return (
    <section className="p-4 bg-gray-100">
      <div className="lg:container flex flex-wrap mx-auto items-center gap-32 rounded-lg overflow-hidden ">
        <Image
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          alt="Speaker Image"
          width={600}
          height={400}
          className=" object-cover mb-4"
        />
        <div className="wrapper">
          <h2 className="text-2xl tracking-[2px] font-bold text-center mb-8">
            YX1 EARPHONES{" "}
          </h2>
          <Link href="/earphones">
            <Button
              className="btn btn-primary border text-black border-black"
              title={"SEE PRODUCT"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeakerComponent;
