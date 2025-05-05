import Image from "next/image";
import about from "@/assets/about.png";
import Container from "../shared/Container/Container";
import logo from "@/assets/Logo.png";
import guava from "@/assets/guava.png";
import group from "@/assets/leaf (7).png";
import group2 from "@/assets/group.png";

export default function AboutSection() {
  return (
    <Container>
      <div className="bg-white flex flex-col lg:flex-row items-center md:gap-8 gap-12 mb-20">
        {/* Left side content */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src={about}
            alt="Farmer with vegetables"
            width={500}
            height={500}
            className="rounded-xl w-[80%] md:w-[70%] lg:w-full"
          />

          <Image
            src={group}
            alt="Leaf icon"
            width={60}
            height={60}
            className="absolute right-6 top-6 lg:right-14 lg:top-20 w-10 md:w-[60px]"
          />
          <Image
            src={group2}
            alt="Leaf 2 icon"
            width={50}
            height={50}
            className="absolute right-12 top-32 md:right-[70px] md:top-[350px] w-8 md:w-[50px]"
          />

          <div className="absolute top-[65%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 lg:top-[365px] lg:left-[360px]">
            <Image
              src={logo}
              alt="Fresh Harvest logo"
              className="w-[65px] md:w-32 bg-white md:px-3 px-2 md:py-2 py-1 rounded shadow"
            />
          </div>

          {/* Product Card */}
          <div className="absolute bottom-[-40px] right-6 md:right-28 bg-white shadow-lg rounded-md p-2 text-center w-20 md:w-32 leading-none">
            <Image
              src={guava}
              alt="Mushroom"
              width={80}
              height={70}
              className="w-full md:h-auto h-10"
            />
            <p className="md:text-xs text-[8px] font-semibold mt-1">Mushroom</p>
            <p className="md:text-xs text-[7px] text-gray-500 mt-1">$2.1/kg</p>
            <button className="border border-gray-200 md:text-xs text-[7px] text-gray-600 px-2 rounded !mt-0">
              Add to cart
            </button>
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 px-4">
          <span className="bg-[#f1f5ec] text-[#749b3f] text-xs font-semibold px-3 py-1 rounded-md inline-block mb-3">
            About us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            About Fresh Harvest
          </h2>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed text-justify">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <button className="border border-[#ff6a19] text-[#ff6a19] px-6 py-2 rounded-md hover:bg-[#ff6a19] hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </Container>
  );
}
