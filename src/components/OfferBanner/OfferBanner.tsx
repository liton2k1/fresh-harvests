import Image from "next/image";
import fruitImage from "@/assets/fruits.png";
import bgLeaf from "@/assets/leaf (3).png";
import bgCorner from "@/assets/leaf (4).png";
import mask from "@/assets/leaf (2).png";
import mask2 from "@/assets/leaf (1).png";
import clipPath from "@/assets/leaf (5).png";
import Container from "../shared/Container/Container";

export default function OfferBanner() {
  return (
    <Container>
      <div className="bg-[#f9f9f9] py-28 relative overflow-hidden mb-20">
        {/* Background Shapes */}
        <div className="absolute bottom-0 left-0 z-0">
          <Image src={bgLeaf} alt="green shape" width={500} height={500} />
        </div>
        <div className="absolute bottom-0 left-0 z-0">
          <Image src={clipPath} alt="green shape" width={110} height={100} />
        </div>

        <div className="absolute top-0 right-0 z-0">
          <Image src={bgCorner} alt="leaf" width={500} height={500} />
        </div>
        <div className="absolute bottom-0 right-0 z-0">
          <Image src={mask} alt="mask" width={100} height={100} />
        </div>

        <div className="lg:px-10 px-3">
          <div className="flex flex-col lg:flex-row items-center justify-between md:gap-8 gap-3 relative z-10">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <span className="bg-[#f1f5ec] text-[#749b3f] text-xs font-semibold px-3 py-1 rounded-md inline-block mb-3">
                Special Offer
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
                Seasonal Fruit Bundle
              </h2>
              <p className="md:text-3xl text-base font-bold text-gray-700 mb-6">
                Discount up to{" "}
                <span className="text-[#ff6a19] font-bold">80% OFF</span>
              </p>

              {/* Countdown */}
              <div className="flex lg:justify-start justify-center gap-3 mb-6">
                {["03 Days", "18 Hour", "54 Min", "21 Second"].map(
                  (item, index) => {
                    const [num, label] = item.split(" ");
                    return (
                      <div
                        key={index}
                        className="w-16 bg-white shadow-md px-4 py-2 rounded text-center"
                      >
                        <p className="text-2xl font-bold text-gray-800">
                          {num}
                        </p>
                        <p className="md:text-xs text-[10px] text-gray-500 mt-1">
                          {label}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>

              {/* Promo code */}
              <div className="inline-block bg-[#176d38] text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide">
                CODE : <span className="text-[#fac714]">FRESH28</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[50%] relative">
              <Image
                src={fruitImage}
                alt="Seasonal fruits"
                className="w-full max-w-md mx-auto"
                priority
              />
            </div>
            <div className="absolute right-60 -top-28">
              <Image
                src={mask2}
                alt="Seasonal fruits"
                className="w-full max-w-md mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
