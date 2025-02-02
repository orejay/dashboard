import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const properties = {
  arrows: false,
};
const fadeImages = [
  `${process.env.PUBLIC_URL}/slide1.webp`,
  `${process.env.PUBLIC_URL}/slide2.webp`,
  `${process.env.PUBLIC_URL}/slide3.webp`,
];

const Slider = () => {
  return (
    <div className="slide-container rounded-3xl overflow-hidden w-full">
      <Fade {...fadeImages} {...properties}>
        {fadeImages.map((each, index) => {
          return (
            <div className="each-fade h-full" key={index}>
              <img
                src={each}
                alt={`tips180-slide${index + 1}`}
                className="w-full"
              />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Slider;
