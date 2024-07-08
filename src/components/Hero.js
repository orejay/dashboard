import React, { useState } from "react";
import HeroBg from "./HeroBg";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";

const properties = {
  arrows: false,
};
const fadeImages = [slide1, slide2, slide3];

const Hero = () => {
  const [loading, setLoading] = useState(true);

  const Slider = () => {
    return (
      <div className="slide-container rounded-3xl overflow-hidden w-full">
        <Fade {...fadeImages} {...properties}>
          {fadeImages.map((each, index) => {
            return (
              <div className="each-fade h-full" key={index}>
                <img src={each} alt={`slide${index + 1}`} className="w-full" />
              </div>
            );
          })}
        </Fade>
      </div>
    );
  };

  return <HeroBg Slider={Slider} />;
};

export default Hero;
