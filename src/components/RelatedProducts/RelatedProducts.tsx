import React from "react";
import Container from "../shared/Container/Container";
import guava from "@/assets/guava.png";
import Image from "next/image";

const RelatedProducts = () => {
  const products = [
    { name: "Mushroom", price: 2.3, img: guava },
    { name: "Mustard", price: 1.3, img: guava },
    { name: "Orange", price: 4.2, img: guava },
    { name: "Pomegranate", price: 11.2, img: guava },
  ];

  return (
    <div className="my-20">
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
              <div className="md:p-4 p-2">
                <div className="md:mb-4 mb-1">
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="w-full"
                  />
                </div>
                <h2 className="md:text-base text-sm text-center font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-xs text-center text-gray-600 md:mb-4 mb-1">
                  ${product.price}/kg
                </p>
                <button className="w-full border border-gray-200 hover:bg-[#ff6a19] hover:text-white text-gray-600 md:text-base text-sm font-medium py-2 px-2 md:px-4 rounded-md transition-colors duration-300">
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
