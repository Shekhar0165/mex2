"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Box1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await fetch(
          "https://dummyjson.com/products/search?q=Laptop"
        );
        let data = await resp.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>
            <div className="bg-white h-[460px] w-[380px] my-6 mx-3 py-1 box1">
              <div className="mx-1 ml-6">
                <img
                  className="my-1 ml-6 w-80 h-56"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
              {/* this is title */}
              <h3 className="my-1 mx-8 font-bold text-xl hover:text-blue-600">
                {product.title}
              </h3>
              <p className="my-2 mx-8 text-gray-600 text-base w-[280px]">
                {product.description.slice(0, 42)}
              </p>
              <div className="flex">
                <p className="my-1 text-sm px-2 ml-8 mr-6 bg-blue-500 p-1 text-white rounded-md">
                  {product.rating} &#9733;
                </p>
                <p className="my-1 mx-4 font-bold text-lg text-gray-600">
                  Price: ${product.price}
                </p>
              </div>
              <div className="flex ml-4">
                <p className="my-1 text-sm mx-4 text-blue-500">
                  {product.discountPercentage}% OFF
                </p>
                <p className="text-red-500 text-lg">
                  <span className="text-gray-500">stock: </span>
                  {product.stock}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Box1;
