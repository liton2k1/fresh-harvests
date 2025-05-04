import AboutSection from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import OfferBanner from "@/components/OfferBanner/OfferBanner";
import Products from "@/components/Products/Products";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Products />
      <AboutSection />
      <OfferBanner />
    </div>
  );
};

export default Home;
