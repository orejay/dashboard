import React from "react";
import heroBgd from "../assets/hero-bg.webp";
import heroBgm from "../assets/hero-mb.webp";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const HeroBg = ({ Slider }) => {
  const isMobile = useMediaQuery("(max-width:450px)");
  return (
    <div
      className="w-full bg-black flex justify-center items-center"
      style={{
        height: isMobile ? "800px" : "100vh",
        backgroundImage: isMobile ? `url(${heroBgm})` : `url(${heroBgd})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="md:flex pt-5 md:px-0 items-center justify-between md:justify-between text-white w-11/12">
        <div className="flex flex-col items-center w-full text-center md:text-left md:items-start justify-around my-auto lg:w-3/5 md:2/5 h-3/6">
          <div className={``}>
            <div
              className="mb-3 font-bold text-3xl md:text-4xl lg:text-6xl leading-102 font-sans"
              style={{ lineHeight: "100%" }}
            >
              Free Football Predictions and Tips
            </div>
            <p
              className="mb-3 mx-auto md:mx-0 text-xs md:text-base lg:text-xl"
              style={{ maxWidth: "90%" }}
            >
              Get the best free football predictions and tips. It is our passion
              to help punters around the world win!
            </p>
          </div>
          <div className="flex text-base">
            <Link to="/auth/signup">
              <button className="hover:border-2 text-sm lg:text-base bg-white border-2 w-auto hover:shadow-lg hover:shadow-emerald-700 cursor-pointer text-stone-900 px-2 py-2 rounded transition-all ease-in duration-100">
                Create a Free Account
              </button>
            </Link>
            <Link to="/contact-us">
              <button className="px-2 py-2 hover:shadow-lg hover:shadow-emerald-700 bg-none border-2 ml-5 rounded cursor-pointer hover:bg-white hover:text-stone-900 hover:transition-all ease-in duration-100 text-sm lg:text-base">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex mt-3 md:mt-0 justify-end h-4/6 md:w-3/5 aspect-auto lg:w-2/5">
          {Slider()}
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
