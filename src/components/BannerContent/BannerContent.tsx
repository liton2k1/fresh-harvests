import Container from "../shared/Container/Container";
import arrow from "@/assets/arrow.png";
import offer from "@/assets/offer.png";
import app from "@/assets/app.png";
import Image from "next/image";

const BannerContent = () => {
  return (
    <Container>
      <div className="absolute lg:top-40 md:top-36 top-28 lg:w-[600px] md:w-[450px] md:space-y-5 space-y-3">
        <span className="bg-[#eaeee5] px-2 rounded text-[#749b3f] md:text-base text-sm font-semibold">
          Welcome to Fresh Harvest
        </span>
        <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold lg:leading-tight md:leading-[1.2]">
          Fresh Fruits and Vegetables
        </h1>

        <p className="md:text-sm text-xs">
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables
        </p>
        <button className="bg-[#ff6a19] px-4 py-1.5 rounded text-white font-semibold">
          Shop Now
        </button>
        <div className="lg:pl-20 md:pl-20 hidden md:block">
          <Image src={arrow} alt="" />
        </div>
        <div className="absolute lg:pl-44 md:pl-40 lg:top-80 md:top-64 top-60">
          <Image src={offer} alt="" className="lg:w-64 md:w-44 w-40" />
        </div>
        <div className="absolute lg:-bottom-44 md:-bottom-20 -bottom-48">
          <p className="md:mb-3 mb-2 md:text-base text-xs">Download App : </p>
          <Image src={app} alt="" className="lg:w-60 md:w-44 w-40" />
        </div>
      </div>
    </Container>
  );
};

export default BannerContent;
