import React from "react";
import Container from "../shared/Container/Container";
import Image from "next/image";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import Link from "next/link";
import Loader from "../shared/Loader/Loader";

const RelatedProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching products</div>;

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
          {data?.data?.slice(0, 4).map((product: TProduct) => (
            <div
              key={product.id}
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              className="bg-white rounded-lg"
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
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RelatedProducts;
