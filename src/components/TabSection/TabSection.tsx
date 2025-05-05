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
              ? " bg-orange-500 text-white"
              : "border text-gray-300"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`px-6 py-2 text-sm font-medium rounded-md ${
            activeTab === "review"
              ? " bg-orange-500 text-white"
              : "border text-gray-300"
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
              Whether you&apos;re at Hotel Coastal Peace for business or
              leisure, our rooms offer everything you need for a comfortable
              stay. Located along the world’s longest sandy beach in Cox’s
              Bazar, just 5 minutes from the airport. Enjoy luxury at an
              affordable price.
            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
            <ul className="space-y-4">
              <li className="border p-4 rounded shadow">
                <p className="font-semibold">⭐️⭐️⭐️⭐️⭐️ John D.</p>
                <p>
                  Great stay! Very clean and close to the beach. Will come
                  again!
                </p>
              </li>
              <li className="border p-4 rounded shadow">
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
