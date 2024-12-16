import React from "react";
import StoreCards from "../components/StoreCards";

const TipsStore = () => {
  return (
    <div
      className="w-full min-h-screen py-5 lg:py-10 "
      style={{ background: "#F2F2F2" }}
    >
      <h2 className="font-bold text-6xl big-shoulder text-center bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text lg:mb-8 -mt-3">
        Tips Store
      </h2>
      <div className="flex items-center shadow-md shadow-gray-300 py-5 lg:py-auto  px-5 lg:px-14  mx-auto rounded-lg bg-white w-full lg:w-5/6">
        <StoreCards />
      </div>
    </div>
  );
};

export default TipsStore;
