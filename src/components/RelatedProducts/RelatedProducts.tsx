import React from "react";
import Container from "../shared/Container/Container";
import mushroom from "@/assets/mushroom.png";
import mustard from "@/assets/mustard.png";
import orange from "@/assets/orange.png";
import pomegranate from "@/assets/pomegranate.png";
import Image from "next/image";

const RelatedProducts = () => {
  const products = [
    { name: "Mushroom", price: 2.3, img: mushroom, category: "Vegetables" },
    { name: "Mustard", price: 1.3, img: mustard, category: "Vegetables" },
    { name: "Orange", price: 4.2, img: orange, category: "Fruits" },
    { name: "Pomegranate", price: 11.2, img: pomegranate, category: "Fruits" },
  ];

  return (
    <div className="mt-20">
      <Container>
        <div className="md:w-[500px] mx-auto text-center md:space-y-5 space-y-3">
          <span className="bg-[#f1f5ec] px-2 rounded-md text-[#749b3f] font-semibold">
            Our Products
          </span>
          <h1 className="md:text-4xl text-xl font-bold">Related Products</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-5 gap-3 my-10">
          {products.map((product, index) => (
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
      </Container>
    </div>
  );
};

export default RelatedProducts;
