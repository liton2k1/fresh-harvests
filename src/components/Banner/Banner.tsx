import Image from "next/image";
import bg from "@/assets/Bg.png";
import Container from "../shared/Container/Container";
import offer from "@/assets/Special Offer.png";
import plate from "@/assets/Plate.png";
import app from "@/assets/Download App_.png";

const Banner = () => {
  return (
    <Container>
      <div className="relative">
        <Image src={bg} alt="" className="w-full h-[800px]" />
        <div className="absolute top-24 w-[600px] pl-20">
          <span className="bg-[#eaeee5] px-2 rounded text-[#749b3f] font-semibold">
            Welcome to Fresh Harvest
          </span>
          <h1 className="text-5xl font-bold leading-snug">
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
        <div className="bg-[#ebebeb] p-3 rounded-md absolute top-[400px] left-60">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-[#176d38] font-semibold">
                Special Offer
              </span>
              <Image src={offer} alt="" />
              <h5 className="bg-[#176d38] p-2 rounded-full text-center text-[#fac714] mt-3">
                <span className="text-white">CODE : </span>FRESH25
              </h5>
            </div>
            <Image src={plate} alt="" />
          </div>
        </div>
        <div className="absolute top-[600px] left-24">
          <p className="mb-3">Download App:</p>
          <Image src={app} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
