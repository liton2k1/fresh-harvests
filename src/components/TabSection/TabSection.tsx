"use client";
import { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-3 mt-10">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-2 text-sm font-medium rounded-md ${
            activeTab === "description"
              ? " bg-[#FF6A1A] text-white"
              : "border text-gray-600"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`px-6 py-2 text-sm font-medium rounded-md ${
            activeTab === "review"
              ? " bg-[#FF6A1A] text-white"
              : "border text-gray-600"
          }`}
        >
          Review
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-600 text-justify">
        {activeTab === "description" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Hotel Description</h3>
            <p>
              Our coconuts are sustainably grown, ensuring the best quality and
              taste. Each coconut is handpicked and carefully prepared, offering
              you the freshest product possible. Rich in healthy fats,
              electrolytes, and essential nutrients, coconuts provide both
              hydration and nourishment. Whether you’re using the water, flesh,
              or milk, our coconuts bring versatility to your kitchen while
              supporting healthy living. Perfect for smoothies, desserts,
              curries, and more — let the natural sweetness of the coconut
              elevate your recipes. Enjoy the tropical goodness in its purest
              form, directly from nature.
            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
            <ul className="space-y-4">
              <li className="border p-4 rounded-md">
                <p className="font-semibold">⭐️⭐️⭐️⭐️⭐️ John D.</p>
                <p>
                  Great stay! Very clean and close to the beach. Will come
                  again!
                </p>
              </li>
              <li className="border p-4 rounded-md">
                <p className="font-semibold">⭐️⭐️⭐️⭐️ Sarah W.</p>
                <p>
                  The service was excellent. Loved the food and view from the
                  room.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSection;
