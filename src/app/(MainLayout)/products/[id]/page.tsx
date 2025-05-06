"use client";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import { useState } from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import TabSection from "@/components/TabSection/TabSection";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import Navbar from "@/components/shared/Navbar/Navbar";
import { useParams } from "next/navigation";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import Loader from "@/components/shared/Loader/Loader";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id as string);
  const product = data?.data;

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "inc" | "dec") => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : Math.max(1, prev - 1)));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Product not found.
      </div>
    );
  }

  const images =
    product.images?.map((img: string) => ({ original: img })) || [];

  const renderCustomItem = (item: { original: string }) => (
    <div className="custom-image-wrapper">
      <Image
        src={item.original}
        alt={product.name}
        height={500}
        width={500}
        className="w-full md:h-[500px] rounded-md"
      />
    </div>
  );

  return (
    <div>
      <Navbar />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20">
          <div className="border rounded-md">
            <ImageGallery
              items={images}
              renderItem={renderCustomItem}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
            />
          </div>

          <div className="space-y-4">
            <span className="bg-[#f1f5ec] text-[#749B3F] font-semibold px-2.5 py-0.5 rounded">
              {product.category?.categoryName || "Category"}
            </span>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <div className="flex items-center gap-1 text-[#FFB848]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
              <span className="text-sm text-gray-600 ml-2">(1 review)</span>
            </div>
            <p className="text-xl text-[#FF6A1A] font-semibold">
              ${product.price}/kg
            </p>
            <p className="text-gray-700 text-sm text-justify">
              {product.description}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center border rounded-md px-2 py-1">
                <button
                  onClick={() => handleQuantity("dec")}
                  className="px-2 text-lg"
                >
                  -
                </button>
                <span className="px-2 text-xl font-bold">{quantity}</span>
                <button
                  onClick={() => handleQuantity("inc")}
                  className="px-2 text-lg"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">/kg</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
              <button className="flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md hover:bg-gray-100">
                <FaHeart className="text-gray-500" />
                Save as favorite
              </button>
              <button className="flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-md hover:bg-[#FF6A1A]">
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <TabSection
          description={product.description}
          reviews={product.reviews || []}
        />
        <RelatedProducts />
      </Container>
    </div>
  );
};

export default ProductDetailPage;
