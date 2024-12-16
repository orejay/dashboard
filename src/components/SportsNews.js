import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";

function SportsNews() {
  const [results, setResults] = useState([]);
  const api = process.env.REACT_APP_BASE_API;
  useEffect(() => {
    fetch(`${api}/postendpoints/news`)
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
        console.log("news >>>", result);
      });
  }, []);
  const isMobile = useMediaQuery("(max-width:450px)");

  const newsItem = results?.map((item, index) => {
    return (
      <div
        className={`flex flex-col items-start w-full md:mx-2 mb-4`}
        key={index}
      >
        <div
          style={{
            width: isMobile ? "95vw" : "370px",
            height: "230px",
            backgroundImage: `url(${item.image_link})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-md mb-2"
        ></div>
        <p className="font-medium w-10/12 text-sm lg:text-base mb-1">
          {item.caption.slice(0, 50)}...
        </p>
        <p className="italic text-xs mb-2">{item.date}</p>
        <a
          href={item.news_link}
          className="flex items-center justify-center border-2 font-medium text-xs lg:text-sm w-2/5 p-2 rounded bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
        >
          Read More
        </a>
      </div>
    );
  });
  return (
    <div
      className="h-screen lg:h-auto overflow-y-scroll lg:overflow-x-scroll"
      style={{ backgroundColor: "#FFF", padding: "80px 0" }}
    >
      <div className="flex w-10/12 mx-auto justify-between lg:mb-8 items-end mb-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium big-shoulder">
          Sport News
        </h2>
        <a
          href="https://www.tips180.com/blog/"
          className="bg-gradient-to-r text-sm lg:text-base underline underline-offset-1 from-teal-500 to-blue-600 text-transparent bg-clip-text decoration-cyan-600 hover:decoration-transparent font-bold"
        >
          More News
        </a>
      </div>
      <div className="w-10/12 mx-auto mobilee lg:overflow-x-scroll">
        <div className="flex flex-col md:flex-row w-fit justify-between">
          {newsItem}
        </div>
      </div>
    </div>
  );
}

export default SportsNews;
