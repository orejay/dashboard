import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import smartbetimage from "../assets/smartbet.png";
import smartbetplusimage from "../assets/smartbetplus.png";
import { Link } from "react-router-dom";

function SmartBetLanding() {
  const [next, setNext] = useState([]);
  const api = process.env.REACT_APP_BASE_API;

  useEffect(() => {
    fetch(`${api}/getendpoints/next-sb`)
      .then((response) => response.json())
      .then((next) => {
        setNext(next);
      });
  }, []);
  const nextCard = next.map((each, index) => {
    return (
      <div
        key={index}
        className="flex flex-wrap lg:w-11/12 justify-around lg:justify-between mx-auto"
      >
        <div
          className="flex p-6 mb-2 md:mb-6 tab shadow-sm rounded-xl"
          style={{
            width: "48%",
            backgroundColor: "#E6F5F1",
            backgroundImage: `url(${smartbetimage})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
            backgroundPositionY: "bottom",
            backgroundSize: "45% auto",
          }}
          id="smart-card"
        >
          <div>
            <h2 className="text-4xl font-medium bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text mb-1 big-shoulder">
              Smart Bet Plan!
            </h2>
            <p
              className="text-xs md:text-sm font-normal mb-3"
              style={{ maxWidth: "70%" }}
            >
              Unveil smart betting tips! Bet smart, win consistently!
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 w-fit text-white text-md font-medium rounded p-2 mb-3">
              <Link to="/dashboard/smartbet">Try This Out</Link>
            </button>
            <p className="font-bold mb-3 z-50">
              Smart Bet Odds: {each.smartbetodds}
            </p>
            <div className="">
              <div className="z-50">
                <p className="text-md">Next Smart Bet Tips Starts in</p>
                <h3 className="lg:text-2xl text-xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">
                  <Countdown time={each.nextsmartbet} />
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex p-6 mb-2 tab md:mb-6 shadow-sm rounded-xl"
          style={{
            width: "48%",
            backgroundColor: "#E1E1FA",
            backgroundImage: `url(${smartbetplusimage})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "right",
            backgroundPositionY: "bottom",
            backgroundSize: "45% auto",
          }}
          id="smart-card"
        >
          <div>
            <h2 className="text-4xl font-medium bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text mb-1 big-shoulder">
              Smart Bet Plus!
            </h2>
            <p
              className="text-xs md:text-sm font-normal mb-3"
              style={{ maxWidth: "77%" }}
            >
              Get ACCA of 10 banker tips (one banker tip per league) selected
              from Europe’s top ten leagues.
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 w-fit text-white text-md font-medium rounded p-2 mb-3">
              <Link to="/dashboard/smartbet">Try This Out</Link>
            </button>
            <p className="font-bold mb-3 w-2/3 md:w-full">
              Exclusive to Smart Bet Members
            </p>
            <div>
              <p className="text-md">Next Smart Bet Plus Tip</p>
              <h3 className="text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">
                {`${each.nextsmartbetplus.slice(
                  8
                )}/${each.nextsmartbetplus.slice(
                  5,
                  7
                )}/${each.nextsmartbetplus.slice(0, 4)}`}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{nextCard}</div>;
}

export default SmartBetLanding;
