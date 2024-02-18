"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const fetchData = async () => {
  let resp = await fetch("https://dummyjson.com/products");
  let data = await resp.json();
  return data.products;
};

const Box2 = (props) => {
  const { prono, heading } = props;
  const [products, setProducts] = useState([]);
  const [next, setNext] = useState(0);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const productData = await fetchData();
      setProducts(productData);
    };

    fetchDataFromApi();
  }, []);
  const visibleProducts = products.slice(next, next + prono);
  if (!visibleProducts) {
    return <p>Loading...</p>;
  }

  if (visibleProducts.error) {
    return <p>Error: {products.error}</p>;
  }

  const handleNextClick = () => {
    if (next < products.length - prono) {
      setNext(next + prono);
    }
  };

  const handlePrevClick = () => {
    if (next > 0) {
      setNext(next - prono);
    }
  };

  return (
    <div className="w-[95%] mx-8 mr-4 my-6 py-4 pl-4">
      <span className="text-4xl py-4 mx-4 font-bold">{heading}</span>
      <div className="flex flex-wrap">
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div className="bg-white h-[370px] w-[285px] my-4 p-1 mx-2 ml-3 box1">
                <div className="ml-2">
                  <img
                    className="my-4 mr-4 ml-4 pl-2 w-56 h-44"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>
                <h3 className="my-1 mx-8 font-bold text-xl hover:text-blue-600">
                  {product.title.slice(0, 18)}
                </h3>
                <p className="my-2 mx-8 text-gray-600 text-base w-[230px]">
                  {product.description.slice(0, 42) + "..."}
                </p>
                <div className="flex">
                  <p className="my-1 px-2 text-sm ml-8 mr-3 bg-blue-500 p-1 text-white rounded-md">
                    {product.rating} &#9733;
                  </p>
                  <p className="my-1 mx-4 font-bold text-lg text-gray-600">
                    Price: ${product.price}
                  </p>
                </div>
                <div className="flex">
                  <p className="my-[6px] text-sm mx-8 text-blue-500">
                    {product.discountPercentage}% OFF
                  </p>
                  <p className="text-red-500 text-lg">
                    <span className="text-gray-500">stock : </span>
                    {product.stock}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mx-6">
        <button
          className="hover:bg-[#0a9103df] my-1 text-sm ml-4 mr-3 bg-blue-500 p-1 text-white rounded-md"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          className="hover:bg-[#0a9103df] my-1 text-sm ml-4 mr-16 bg-blue-500 p-1 text-white rounded-md"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Box2;
