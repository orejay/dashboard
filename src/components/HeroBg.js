import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/heroBg1.png";
import Slider from "./Slider";

const HeroBg = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoaded) {
      const timer = setTimeout(() => {
        setIsPageLoaded(true);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isPageLoaded]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        backgroundColor: "#f4f4f4",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: "contain",
      }}
    >
      <div className="md:flex pt-5 md:px-0 items-center justify-between md:justify-between w-11/12">
        <div className="flex flex-col items-center w-full text-center md:text-left md:items-start justify-around my-auto lg:w-3/5 h-1/2">
          <div className={``}>
            <h1
              className="mb-3 text-3xl lg:text-6xl big-shoulder"
              style={{ lineHeight: "100%" }}
            >
              Your #1 Football Prediction Site – Free Predictions with Real Data
            </h1>
            <p
              className="mb-3 mx-auto md:mx-0 text-xs md:text-base lg:text-xl"
              style={{ maxWidth: "90%" }}
            >
              Get Today's Prediction and Free Betting Tips from Tips180 – Your
              Trusted Football Prediction Site.
            </p>
          </div>
          <div className="flex text-base">
            <Link to="/auth/signup">
              <div className="text-sm lg:text-base bg-gradient-to-r from-teal-400 to-blue-600 border-2 w-auto hover:shadow-lg hover:shadow-gray-400 cursor-pointer text-white px-2 py-2 rounded transition-all ease-in duration-100">
                Create a Free Account
              </div>
            </Link>
            <Link to="/contact-us">
              <div className="px-2 py-2 hover:shadow-lg hover:shadow-gray-400 bg-none border-gray-400 border-2 ml-5 rounded cursor-pointer hover:bg-white text-stone-900 hover:transition-all ease-in duration-100 text-sm lg:text-base">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
        <div className="flex mt-3 md:mt-0 justify-end h-4/6 md:w-3/5 aspect-auto lg:w-2/5">
          {isPageLoaded && <Slider />}
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
