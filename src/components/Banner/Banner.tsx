import Image from "next/image";
import bg from "@/assets/Bg.png";
import Container from "../shared/Container/Container";
import offer from "@/assets/Special Offer.png";
import plate from "@/assets/Plate.png";
import app from "@/assets/Download App_.png";
import frame from "@/assets/Special Offer (2).png";

const Banner = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="relative">
        <Image src={bg} alt="" className="w-full lg:h-[800px] h-[500px]" />
        <div className="absolute top-24 lg:w-[600px] lg:pl-20">
          <span className="bg-[#eaeee5] px-2 rounded text-[#749b3f] font-semibold">
            Welcome to Fresh Harvest
          </span>
          <h1 className="md:text-5xl text-2xl font-bold leading-snug">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-sm mt-5">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>
          <button className="bg-[#ff6a19] px-4 py-1.5 rounded text-white font-semibold mt-5">
            Shop Now
          </button>
        </div>
        <div className="absolute top-[400px]">
          <Image src={frame} alt="" className="lg:w-60 w-36" />
        </div>
        <div className="absolute top-[600px] left-24">
          <p className="mb-3">Download App:</p>
          <Image src={app} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
