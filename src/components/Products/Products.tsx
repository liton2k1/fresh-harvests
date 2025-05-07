"use client";
import React, { useState } from "react";
import Image from "next/image";
import leaf from "../../assets/leaf7.png";
import leaf2 from "../../assets/leaf6.png";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import Container from "../shared/Container/Container";
import Link from "next/link";
import Loader from "../shared/Loader/Loader";

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery({});
  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery({});

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (isLoading || categoriesError) return <Loader />;

  if (error || isCategoriesLoading)
    return <div className="text-center text-red-500">Error fetching data</div>;

  const products: TProduct[] = data?.data || [];
  const categories = categoriesData?.data || [];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.categoryId === selectedCategory);

  return (
    <div className="mt-20">
      <Container>
        <div className="flex justify-between">
          <Image src={leaf2} alt="Decorative leaf" />
          <Image src={leaf} alt="Decorative leaf" />
        </div>

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

        <div className="flex justify-center md:gap-5 gap-3 mt-10 flex-wrap">
          <button
            className={`md:px-4 px-3 md:py-2 py-1.5 capitalize rounded-md border transition-colors duration-200 text-xs md:text-base ${
              selectedCategory === "All"
                ? "bg-[#749B3F] text-white"
                : "text-gray-600 border-gray-300"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>

          {categories.map((category: any) => (
            <button
              key={category.id}
              className={`md:px-4 px-3 md:py-2 py-1.5 capitalize rounded-md border transition-colors duration-200 text-xs md:text-base ${
                selectedCategory === category.id
                  ? "bg-[#749B3F] text-white"
                  : "text-gray-600 border-gray-300"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.categoryName}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-5 gap-3 my-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: TProduct) => (
              <div
                key={product.id}
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
                className="bg-white rounded-md"
              >
                <div className="md:p-4 p-2 md:space-y-4 space-y-1">
                  <div className="md:h-64 h-36 w-full relative bg-[#F4F6F6] rounded-md">
                    <Image
                      src={product.images[0]}
                      alt={product.productName}
                      fill
                      className="w-full h-full rounded-md"
                    />
                  </div>

                  <h2 className="md:text-base text-sm text-center font-semibold text-gray-800">
                    {product.productName}
                  </h2>
                  <p className="text-xs text-center text-gray-600">
                    ${product.price}/kg
                  </p>
                  <button className="w-full border border-gray-200 hover:bg-[#ff6a19] hover:text-white text-gray-600 md:text-base text-xs font-medium md:py-2 py-1 rounded-md transition-colors duration-300">
                    <Link href={`/products/${product.id}`}>Add to cart</Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-sm md:text-base">
              No products found for this category.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Products;
