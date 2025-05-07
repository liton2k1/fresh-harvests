import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  user: string;
  rating: number;
  comment: string;
}

interface TabSectionProps {
  description: string;
  reviews: Review[];
}

const TabSection: React.FC<TabSectionProps> = ({ description, reviews }) => {
  const [activeTab, setActiveTab] = useState<"description" | "review">(
    "description"
  );

  return (
    <div className="max-w-[900px]">
      <div className="flex gap-3 my-10">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-2 text-sm font-medium rounded-md ${
            activeTab === "description"
              ? "bg-[#FF6A1A] text-white"
              : "border text-gray-600"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`px-6 py-2 text-sm font-medium rounded-md ${
            activeTab === "review"
              ? "bg-[#FF6A1A] text-white"
              : "border text-gray-600"
          }`}
        >
          Review
        </button>
      </div>

      {activeTab === "description" && (
        <div className="text-gray-700 leading-relaxed bg-[#F4F6F6] p-8 rounded-md text-justify">
          {description || "No description available."}
        </div>
      )}

      {activeTab === "review" && (
        <div className="bg-[#F4F6F6] p-5 rounded-md text-gray-700 text-sm space-y-4">
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{review.user}</p>
                <div className="flex items-center gap-1 text-[#FFB848]">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TabSection;
