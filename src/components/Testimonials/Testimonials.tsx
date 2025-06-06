"use client";
import Image from "next/image";
import img1 from "../../../src/assets/user.png";
import img2 from "../../../src/assets/user.png";
import img3 from "../../../src/assets/user.png";
import img4 from "../../../src/assets/user.png";
import leafLeft from "../../../src/assets/leaf6.png";
import leafRight from "../../../src/assets/leaf7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Professional Chef",
      image: img1,
      rating: 5,
      feedback:
        "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    },
    {
      name: "John Doe",
      role: "Professional Chef",
      image: img2,
      rating: 5,
      feedback:
        "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    },
    {
      name: "John Doe",
      role: "Professional Chef",
      image: img3,
      rating: 5,
      feedback:
        "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    },
    {
      name: "John Doe",
      role: "Professional Chef",
      image: img4,
      rating: 5,
      feedback:
        "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    },
    {
      name: "John Doe",
      role: "Professional Chef",
      image: img4,
      rating: 5,
      feedback:
        "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    },
  ];
  return (
    <div className="mt-20">
      <div className="max-w-[1000px] mx-auto px-3">
        <div className="relative text-center my-20">
          <div className="absolute left-0 md:top-[140px] top-10 transform -translate-y-1/2">
            <Image src={leafLeft} alt="Leaf Left" className="w-12 md:w-16" />
          </div>
          <div className="absolute right-0 md:top-[200px] transform -translate-y-1/2">
            <Image src={leafRight} alt="Leaf Right" className="w-12 md:w-16" />
          </div>

          <div className="inline-block">
            <p className="bg-[#f1f5ec] text-[#749b3f] font-semibold inline-block px-4 py-1 rounded-md text-sm mb-4">
              Testimonial
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Don’t just take our word for it—here’s what some of our customers
              have to say about their experience with Fresh Harvest:
            </p>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={true}
          autoplay={true}
          speed={5000}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper custom-swiper-pagination"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-12 items-center justify-center gap-10">
                <div className="md:col-span-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="md:col-span-8 bg-[#f4f6f6] p-10 rounded-xl">
                  <p className="text-sm mb-3 text-justify">
                    {testimonial.feedback}
                  </p>
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    {testimonial.name} -{" "}
                    <span className="text-xs text-gray-600">
                      {testimonial.role}
                    </span>{" "}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
