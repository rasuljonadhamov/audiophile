import React from "react";
import Image from "next/image";

const BootomSection = () => {
  return (
    <section className="pb-28 pt-16 bg-gray-100">
      <div className="lg:container flex flex-wrap mx-auto items-center justify-between rounded-lg overflow-hidden px-4">
        <div className="max-w-[27.813rem] text-left">
          <h2 className="text-3xl text-black uppercase  tracking-[2px] font-bold mb-8">
            Bringing you the <br /> <span className="text-primary">best</span>{" "}
            audio gear
          </h2>
          <p className="text-sm mb-5">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="Speaker Image"
          width={600}
          height={400}
          className=" object-cover mb-4"
        />
      </div>
    </section>
  );
};

export default BootomSection;
