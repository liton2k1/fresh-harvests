import Image from "next/image";
import bg from "@/assets/banner.png";
import HomeNavbar from "@/components/shared/HomeNavbar/HomeNavbar";
import BannerContent from "../BannerContent/BannerContent";

const Banner = () => {
  return (
    <div className="relative w-full lg:h-[900px] h-[600px]">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Banner background"
        className="w-full h-full"
        priority
      />

      {/* Home Navbar */}
      <HomeNavbar />

      {/* Banner content */}
      <BannerContent />
    </div>
  );
};

export default Banner;
