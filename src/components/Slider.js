import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const properties = {
  arrows: false,
};
const base = import.meta.env.BASE_URL;
const fadeImages = [
  `${base}slide1.webp`,
  `${base}slide2.webp`,
  `${base}slide3.webp`,
];

const Slider = () => {
  return (
    <div
      className="slide-container rounded-3xl overflow-hidden w-full"
      style={{ aspectRatio: "700/577" }}
    >
      <Fade {...fadeImages} {...properties}>
        {fadeImages.map((each, index) => {
          return (
            <div className="each-fade" key={index} style={{ height: "100%" }}>
              <img
                src={each}
                alt={`tips180-slide${index + 1}`}
                width="700"
                height="577"
                fetchpriority={index === 0 ? "high" : "auto"}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Slider;
