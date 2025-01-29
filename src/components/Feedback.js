import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
  const [results, setResults] = useState([]);
  const api = process.env.REACT_APP_BASE_API;
  useEffect(() => {
    fetch(`${api}/postendpoints/feedbacks`)
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
      });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "2px",
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const feedbacks = results.map((feed, index) => {
    return (
      <div
        key={index}
        className="bg-white w-full mb-5 rounded-lg p-3 h-104 overflow-y-scroll flex flex-col justify-between shadow-md shadow-gray-300 mobilee-card"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="">
            <div
              className="flex justify-start text-2xl lg:text-4xl font-medium mx-auto mona-head"
              style={{ maxWidth: "95%" }}
            >
              "
            </div>
            <div className="flex justify-center text-sm lg:text-base">
              <p style={{ maxWidth: "85%" }} className="text-center break-all">
                {feed.message.length < 80
                  ? feed.message
                  : feed.message.slice(0, 80) + "..."}
              </p>
            </div>
            <div
              className="flex justify-end text-2xl lg:text-4xl font-medium mx-auto mona-head"
              style={{ maxWidth: "95%" }}
            >
              "
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold">{feed.name}</p>
            <p className="text-xs">{feed.country}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div
      style={{ backgroundColor: "#F2F2F2" }}
      className="flex flex-col items-center py-9"
    >
      <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mona-head mb-5 lg:mb-8">
        Punters Feedback
      </h2>
      <div className="w-10/12">
        <div className="md:flex h-48 md:py-5 md:h-auto mx-auto flex-nowrap justify-center">
          <Slider
            {...settings}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            {feedbacks}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
