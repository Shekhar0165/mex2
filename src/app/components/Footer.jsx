import React from "react";
import Image from "next/image";
// import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white">
      <hr />
      <div className="grid grid-cols-3 my-10">
        <div className="grid grid-rows-5 text-start justify-evenly h-44 m-1 p-1">
          <div className="">
            <span className=" font-bold text-2xl">Shop</span>{" "}
          </div>
          <br />
          <div className="text-blue-600 cursor-pointer">Hot deals</div>
          <div className="text-blue-600 cursor-pointer">Categories</div>
          <div className="text-blue-600 cursor-pointer">Brands</div>
          <div className="text-blue-600 cursor-pointer">Rebates</div>
        </div>
        <div className="grid grid-rows-5 text-start justify-evenly h-44 m-1 p-1">
          <div className="">
            <span className="my-12 font-bold text-2xl">
              Need help?
            </span>{" "}
          </div>
          <br />
          <div className="text-blue-600 cursor-pointer">Order tracking</div>
          <div className="text-blue-600 cursor-pointer">FAQs</div>
          <div className="text-blue-600 cursor-pointer">Return policy</div>
          <div className="text-blue-600 cursor-pointer">Privacy policy</div>
        </div>
        <div className="grid grid-rows-5 text-start justify-evenly h-44 m-1 p-1">
          <div className="">
            <span className="my-12 font-bold text-2xl">
              Contact
            </span>{" "}
          </div>
          <br />
          <div className="text-blue-600 cursor-pointer">
            123 Fifth Avenue, New York, NY
          </div>
          <div className="text-blue-600 cursor-pointer">10160</div>
          <div className="text-blue-600 cursor-pointer">contact@info.com</div>
          <div className="text-blue-600 cursor-pointer">929-242-6868</div>
        </div>
      </div>
      <div className="bg-[#1B203F] flex justify-between">
        <p className=" mx-6 text-gray-500 my-16">
          © 2024 Electronic Store. Powered by Trontmart Store
        </p>
        <Image
          className="mx-8 my-16"
          src="/cards.svg"
          width={500}
          height={200}
        />
      </div>
      
    </div>
  );
}
