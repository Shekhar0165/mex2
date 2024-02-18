"use client";

import Buybox from "@/app/components/box/Buybox";

export default async function page(props) {
  const prodet = props.params.buy;
  return (
    <div className="flex">
      <div>
        <h1 className="font-bold mx-20 my-10 text-4xl text-gray-800">
          Checkout
        </h1>
        <h2 className="font-bold mx-20 mt-10 text-2xl text-gray-700">
          Customer information
        </h2>
        <div>
          <input
            className="border border-gray-400 text-black px-4 py-6 rounded-lg w-4/6 mx-20 my-4"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <h1 className="font-bold mx-20 my-4 text-2xl text-gray-700">
            Billing details
          </h1>
          <div className="flex">
            <input
              className="border border-gray-400 text-black px-4 py-6 rounded-lg w-1/3 ml-20 my-4"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border border-gray-400 text-black px-4 py-6 rounded-lg w-1/3 mx-1 my-4"
              type="text"
              placeholder="First Name"
            />
          </div>
          <input
            className="border border-gray-400 text-black px-4 py-6 rounded-lg w-4/6 mx-20 my-4"
            type="text"
            placeholder="Company Name"
          />
          <input
            className="border border-gray-400 text-black px-4 py-6 rounded-lg w-4/6 mx-20 my-4"
            type="text"
            placeholder="Country and Region"
          />
          <div className="flex">
            <input
              className="border border-gray-400 text-black px-4 py-6 rounded-lg w-[22%] ml-20 my-4"
              type="text"
              placeholder="Town/City"
            />
            <input
              className="border border-gray-400 text-black px-4 py-6 rounded-lg w-[22%] mx-1 my-4"
              type="text"
              placeholder="State"
            />
            <input
              className="border border-gray-400 text-black px-4 py-6 rounded-lg w-[22%] mx-1 my-4"
              type="text"
              placeholder="Zip Code"
            />
          </div>
          <input
            className="border border-gray-400 text-black px-4 py-6 rounded-lg w-4/6 mx-20 my-4"
            type="text"
            placeholder="Phone No."
          />
        </div>
      </div>
      <div>
        <h1 className="font-bold mx-20 my-10 text-4xl text-gray-800">
          Your order
        </h1>
        <div className="my-4">
          <h2 className="border border-gray-400 p-4 rounded-t-lg text-lg text-gray-600">
            Product
          </h2>
          <div className=" flex border border-gray-400 p-4  text-lg text-gray-600">
            <Buybox/>
          </div>
        </div>
      </div>
    </div>
  );
}
