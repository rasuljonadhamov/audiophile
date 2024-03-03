import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto w-full px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-8 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-bold text-white">Audiophile</h2>
          <p className="text-gray-400 text-center">
            Your one-stop shop for premium audio equipment.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap ">
          <div className="w-full md:w-1/2 mb-4">
            <ul className="list-none w-full uppercase flex items-center gap-8">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/headphones"
                  className="text-gray-400 hover:text-white"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  href="/speakers"
                  className="text-gray-400 hover:text-white"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/earphones"
                  className="text-gray-400 hover:text-white"
                >
                  Earphones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center pt-4">
        <p className="text-gray-400">
          Copyright © 2024 Audiophile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
