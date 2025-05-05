// "use client";
// import React from "react";
// import Image from "next/image";
// import { useGetProductsQuery } from "@/redux/api/baseApi";
// import { TProduct } from "@/types";

// const Products = () => {
//   const { data, error, isLoading } = useGetProductsQuery({});

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching products</div>;

//   return (
//     <div>
//       {data?.data?.map((product: TProduct) => (
//         <div key={product.id}>
//           <h3>{product.productName}</h3>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <p>Stock: {product.stock}</p>
//           <Image src={product.images[0]} alt={product.productName} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;

"use client";
import React, { useState } from "react";
import Container from "../shared/Container/Container";
import mushroom from "@/assets/mushroom.png";
// import mustard from "@/assets/mustard.png";
import orange from "@/assets/orange.png";
import pomegranate from "@/assets/pomegranate.png";
import kiwi from "@/assets/kiwi.png";
import coconut from "@/assets/coconut.png";
import guava from "@/assets/guava.png";
import eggplant from "@/assets/eggplant.png";
import lettuce from "@/assets/lettuce.png";
import leaf from "@/assets/leaf (7).png";
import leaf2 from "@/assets/leaf (6).png";
import Image from "next/image";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { name: "Mushroom", price: 2.3, img: mushroom, category: "Vegetables" },
    // { name: "Mustard", price: 1.3, img: mustard, category: "Vegetables" },
    { name: "Orange", price: 4.2, img: orange, category: "Fruits" },
    { name: "Pomegranate", price: 11.2, img: pomegranate, category: "Fruits" },
    { name: "Kiwi", price: 5.3, img: kiwi, category: "Fruits" },
    { name: "Coconut", price: 6.3, img: coconut, category: "Fruits" },
    { name: "Guava", price: 2.2, img: guava, category: "Fruits" },
    { name: "Eggplant", price: 1.2, img: eggplant, category: "Vegetables" },
    { name: "Lettuce", price: 1.2, img: lettuce, category: "Salad" },
  ];

  const categories = ["All", "Fruits", "Vegetables", "Salad"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="mt-20">
      <Container>
        {/* Decorative Leaves */}
        <div className="flex justify-between">
          <Image src={leaf2} alt="" />
          <Image src={leaf} alt="" />
        </div>

        {/* Header */}
        <div className="md:w-[500px] mx-auto text-center md:space-y-5 space-y-3">
          <span className="bg-[#f1f5ec] px-2 rounded-md text-[#749b3f] font-semibold">
            Our Products
          </span>
          <h1 className="md:text-5xl text-xl font-bold">Our Fresh Products</h1>
          <p className="md:text-sm text-xs text-gray-600">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center md:gap-5 gap-3 mt-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`md:px-4 px-3 md:py-2 py-1.5 rounded-md border transition-colors duration-200 text-xs md:text-base ${
                selectedCategory === category
                  ? "bg-[#749B3F] text-white"
                  : "text-gray-600 border-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-5 gap-3 my-10">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              className="bg-white rounded-lg"
            >
              <div className="md:p-4 p-2 md:space-y-4 space-y-1">
                <Image
                  src={product.img}
                  alt={product.name}
                  className="w-full bg-[#F4F6F6] rounded-md"
                />
                <h2 className="md:text-base text-sm text-center font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-xs text-center text-gray-600">
                  ${product.price}/kg
                </p>
                <button className="w-full border border-gray-200 hover:bg-[#ff6a19] hover:text-white text-gray-600 md:text-base text-xs font-medium md:py-2 py-1 rounded-md transition-colors duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <button className="border border-[#ff6a19] text-[#ff6a19] rounded-md px-4 py-2 md:text-base text-sm font-semibold">
            See All Products
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Products;
