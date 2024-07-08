import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";

const Loader = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="w-1/3 lg:w-1/5">
        <Lottie animationData={loader} />
      </div>
    </div>
  );
};

export default Loader;
