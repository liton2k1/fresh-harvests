"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import fruitImage from "../../assets/fruits.png";
import bgLeaf from "../../assets/leaf3.png";
import bgCorner from "../../assets/leaf4.png";
import mask from "../../assets/leaf2.png";
import mask2 from "../../assets/leaf1.png";
import clipPath from "../../assets/leaf5.png";
import Container from "../shared/Container/Container";

const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownLabels = [
    { label: "Days", value: timeLeft.days },
    { label: "Hour", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Second", value: timeLeft.seconds },
  ];

  return (
    <div>
      <div className="bg-[#f9f9f9] md:py-32 py-28 relative overflow-hidden mt-20">
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

        <Container>
          <div className="lg:px-10 px-3">
            <div className="flex flex-col lg:flex-row items-center justify-between md:gap-8 gap-3 relative z-10">
              <div className="text-center lg:text-left">
                <span className="bg-[#f1f5ec] text-[#749b3f] text-xs font-semibold px-3 py-1 rounded-md inline-block mb-3">
                  Special Offer
                </span>
                <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-3">
                  Seasonal Fruit Bundle
                </h2>
                <p className="md:text-3xl text-base font-bold text-gray-700 mb-6">
                  Discount up to{" "}
                  <span className="text-[#ff6a19] font-bold">80% OFF</span>
                </p>

                <div className="flex lg:justify-start justify-center gap-3 mb-6">
                  {countdownLabels.map((item, index) => (
                    <div
                      key={index}
                      className="w-16 bg-white shadow-md px-4 py-2 rounded text-center"
                    >
                      <p className="text-2xl font-bold text-gray-800">
                        {item.value}
                      </p>
                      <p className="md:text-xs text-[10px] text-gray-500 mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="inline-block bg-[#176d38] text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide">
                  CODE : <span className="text-[#fac714]">FRESH28</span>
                </div>
              </div>

              <div className="w-full lg:w-[50%] relative hidden md:block">
                <Image
                  src={fruitImage}
                  alt="Seasonal fruits"
                  className="w-full max-w-md mx-auto"
                  priority
                />
              </div>
              <div className="absolute -top-20 md:top-[-90px] left-60 md:left-auto md:right-96">
                <Image src={mask2} alt="Seasonal fruits" priority />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OfferBanner;
