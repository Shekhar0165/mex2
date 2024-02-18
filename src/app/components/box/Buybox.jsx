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

  return (
   <>
   {products.id}
   </>
  );
};

export default Box2;
