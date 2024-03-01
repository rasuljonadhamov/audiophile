import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageToShop = () => {
  const categoriesData = [
    {
      imageSrc:
        "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      altText: "Category 1 Image",
      title: "Headphones",
      description: "Lorem ipsum dolor sit amet.",
      linkTo: "/headphones",
    },
    {
      imageSrc: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      altText: "Category 2 Image",
      title: "Speakers",
      description: "Lorem ipsum dolor sit amet.",
      linkTo: "/speakers",
    },
    {
      imageSrc: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      altText: "Category 3 Image",
      title: "Earphones",
      description: "Lorem ipsum dolor sit amet.",
      linkTo: "/earphones",
    },
  ];
  return (
    <section className="bottom-section bg-whiteSecondary text-black py-16">
      <div className="container mx-auto px-4 flex gap-4 text-center">
        {categoriesData.map((category) => (
          <div
            key={category.title}
            className="w-full md:w-1/3 mb-8 flex flex-col items-center"
          >
            <Image
              src={category.imageSrc}
              alt={category.altText}
              width={200}
              height={200}
              className="rounded-lg object-fill mb-9"
            />
            <h3 class="text-xl uppercase font-bold mb-4">{category.title}</h3>
            <Link
              href={category.linkTo}
              className="btn btn-primary flex gap-2 items-center justify-center text-sm font-bold uppercase opacity-50"
            >
              Shop{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M1.3219 1L6.3219 6L1.3219 11"
                  stroke="#D87D4A"
                  stroke-width="2"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PageToShop;
