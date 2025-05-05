"use client";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import img1 from "@/assets/coconut.png";
import img2 from "@/assets/coconut.png";
import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import { useState } from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import TabSection from "@/components/TabSection/TabSection";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";

const HotelGallery = () => {
  const images = [img1, img2];

  // Custom render function for images
  const renderCustomItem = (item: { original: string }) => (
    <div className="custom-image-wrapper">
      <Image
        src={item.original}
        alt="Hotel"
        height={500}
        width={500}
        className="w-full md:h-[500px] object-cover"
      />
    </div>
  );

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "inc" | "dec") => {
    setQuantity((prev) => {
      if (type === "inc") return prev + 1;
      if (type === "dec") return prev > 1 ? prev - 1 : 1;
      return prev;
    });
  };

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-40">
        <div className="border rounded-md">
          <ImageGallery
            items={images.map((image) => ({
              original: image.src,
            }))}
            renderItem={renderCustomItem}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={true}
          />
        </div>
        <div className="space-y-4">
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Fruits
          </span>
          <h2 className="text-2xl font-bold">Coconut</h2>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
            <span className="text-sm text-gray-600 ml-2">(1 review)</span>
          </div>
          <p className="text-xl text-orange-600 font-semibold">$6.3/kg</p>
          <p className="text-gray-700 text-sm">
            From our farm directly to your door, our fresh coconuts are
            harvested at the peak of ripeness, offering you a sweet, hydrating
            treat full of flavor...
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
              <span className="px-2">{quantity}</span>
              <button
                onClick={() => handleQuantity("inc")}
                className="px-2 text-lg"
              >
                +
              </button>
            </div>
            <span className="text-sm text-gray-500">/kg</span>
          </div>

          <div className="flex gap-2 pt-2">
            <button className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-md w-1/2 hover:bg-gray-100">
              <FaHeart className="text-gray-500" />
              Save as favorite
            </button>
            <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md w-1/2 hover:bg-orange-600">
              <FaShoppingCart />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <TabSection />
      <RelatedProducts />
    </Container>
  );
};

export default HotelGallery;
