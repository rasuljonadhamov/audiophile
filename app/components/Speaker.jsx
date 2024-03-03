import Image from "next/image";
import React from "react";
import Button from "./Button";

const Speaker = () => {
  return (
    <section className="  py-16 px-4 bg-gray-100">
      <div className="lg:container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-evenly bg-primary">
        <div className="mr-8 md:mr-0">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="Speaker Image"
            width={410}
            height={493}
            className="rounded-lg "
          />
        </div>
        <div className="max-w-[21.813rem]  text-white">
          <h2 className="text-2xl font-bold mb-4">ZX9 Speaker</h2>
          <p className="text-whiteSecondary mb-4">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            className="bg-black text-white"
            title={"SEE PRODUCT"}
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default Speaker;

// /assets/shared/desktop/image-category-thumbnail-speakers.png
