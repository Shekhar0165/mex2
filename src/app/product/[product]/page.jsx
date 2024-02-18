"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Box2 from "../../components/box/Box2";

export default async function page(props) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await fetch("https://dummyjson.com/products");
        let data = await resp.json();
        setProduct(data.products);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlebuynow = () => {
    router.push(`/product/buy/${product[detaile - 1].id}`);
  };

  if (loading) {
    return <>
    <div className="flex justify-center my-36">
     
        
     <div role="status">
         <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
         </svg>
         <span class="sr-only">Loading...</span>
     </div>
     
         </div>
    </>
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const detaile = props.params.product;
  return (
    <>
      {" "}
      <div className="flex flex-wrap">
        <div className="ml-36 mr-20 my-16">
          <img
            src={product[detaile - 1].thumbnail}
            alt={product[detaile - 1].title}
          />
        </div>
        <div className="my-16 w-60">
          <h1 className=" text-4xl font-bold text-gray-700">
            {product[detaile - 1].title}
          </h1>
          <div className="flex">
            <p className="my-2 pl-3 text-sm mr-3 bg-blue-500 p-1 text-white rounded-md w-16">
              {product[detaile - 1].rating} &#9733;
            </p>
            <p className="my-2 text-lg mx-2 font-bold text-blue-500">
              {product[detaile - 1].discountPercentage}% OFF
            </p>
          </div>
          <p className="my-2 mx-1 font-bold text-2xl text-gray-600">
            Price: ${product[detaile - 1].price}
          </p>
          <p className="my-2 mx-1 text-xl w-[450px] ">
            {product[detaile - 1].description}
          </p>
          <p className="my-2 mx-1 text-xl w-[450px] ">
            category :
            <span className="text-gray-600">
              {product[detaile - 1].category}
            </span>
          </p>
          <div className="flex w-96">
            <button
              type="submit"
              onClick={handlebuynow}
              className="my-2 bg-blue-500 text-white font-semibold px-6 py-[10px] rounded-sm hover:bg-gray-600 "
            >
              Checkout
            </button>
            <button className="my-2 bg-blue-500 text-white font-semibold px-4 py-[10px] rounded-sm hover:bg-gray-600 ml-6">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div></div>
      <hr />
      <div>
        {/* <p className="text-5xl font-bold mx-36 my-10 text-gray-800"></p> */}
        <Box2 heading={"Related products"} prono={4} />
      </div>
    </>
  );
}
