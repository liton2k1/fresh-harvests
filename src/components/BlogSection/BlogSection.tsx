"use client";
import Image from "next/image";
import blog1 from "@/assets/blog (1).png";
import blog2 from "@/assets/blog (2).png";
import blog3 from "@/assets/blog (3).png";
import leaf from "@/assets/leaf (7).png";
import { IoArrowForward } from "react-icons/io5";

const blogPosts = [
  {
    id: 1,
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    date: "May 23, 2024",
    image: blog1,
    link: "#",
  },
  {
    id: 2,
    title:
      "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    date: "May 23, 2024",
    image: blog2,
    link: "#",
  },
  {
    id: 3,
    title:
      "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    date: "May 23, 2024",
    image: blog3,
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="mt-20 px-4">
      <div className="text-center max-w-3xl mx-auto relative">
        <Image
          src={leaf}
          alt="Leaf"
          className="absolute top-0 right-0 w-8 md:w-10"
        />
        <p className="bg-[#f1f5ec] text-[#749b3f] font-semibold inline-block px-4 py-1 rounded-md text-sm mb-3">
          Our Blog
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Fresh Harvest Blog
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <div key={post.id} className="rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="mt-4 px-2">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h3 className="text-base font-semibold mt-2 text-gray-800">
                {post.title}
              </h3>
              <a
                href={post.link}
                className="text-[#FF6A1A] font-semibold mt-3 inline-flex items-center gap-1 hover:underline"
              >
                Read More <IoArrowForward />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
