import AboutSection from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import BlogSection from "@/components/BlogSection/BlogSection";
import OfferBanner from "@/components/OfferBanner/OfferBanner";
import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <AboutSection />
      <OfferBanner />
      <Testimonials />
      <BlogSection />
    </div>
  );
};

export default Home;
