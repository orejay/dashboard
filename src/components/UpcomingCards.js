import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import b9ja from "../assets/bet9ja.png";
import sporty from "../assets/sportybet1.png";
import paribet from "../assets/paribet1.png";
import onexbet from "../assets/1xbet1.png";
import msport from "../assets/msport1.png";
import starbet from "../assets/starbet1.png";
import bet22 from "../assets/22bet1.png";

const UpcomingCards = ({ getUpcoming, results }) => {
  const api = process.env.REACT_APP_BASE_API;
  const [data, setData] = useState({});

  const getBooking = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/bookings/upcoming`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res_json = await res.json();
      console.log(res_json);
      if (!res.ok) {
      } else {
        setData(res_json.upcoming);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  useEffect(() => {
    getUpcoming();
    getBooking();
  }, []);

  let card;

  if (results.length > 0) {
    card = results.map((each, index) => {
      return (
        <div
          key={index}
          className=" flex flex-col font-semibold text-xs md:text-sm items-center justify-between h-99 rounded-2xl py-100 px-100 bg-gray-200 mb-6 hover:shadow-md hover:shadow-gray-300 transition-all duration-300 ease-in"
          id="match-card"
          style={{ width: "45%" }}
        >
          <div className="flex w-full h-20 place-content-evenly text-sm lg:text-base font-semibold text-stone-800">
            <div className="flex flex-col items-center justify-between">
              <div className="flex justify-center">Date</div>
              <div className="flex justify-center">{`${each.date.slice(
                8
              )}/${each.date.slice(5, 7)}`}</div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <div className="bg-black rounded p-2 min-w-fit w-101 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                {each.league}
              </div>
              <div>{each.name}</div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <div className="flex justify-center">Tip</div>
              <div className="flex justify-center">{each?.fttip}</div>
            </div>
          </div>
          <div className="flex mt-6 text-sm w-6/12 lg:w-4/12 lg:text-base font-semibold text-stone-800">
            <a href={""} className="flex">
              <div
                className={`${
                  data?.bookie?.toUpperCase() === "BET9JA"
                    ? "bg-green-900"
                    : data?.bookie?.toUpperCase() === "MSPORT"
                    ? "bg-gray-900"
                    : data?.bookie?.toUpperCase() === "STARBET"
                    ? "bg-gray-900"
                    : data?.bookie?.toUpperCase() === "22BET"
                    ? "bg-gray-900"
                    : data?.bookie?.toUpperCase() === "SPORTYBET"
                    ? "bg-red-600"
                    : data?.bookie?.toUpperCase() === "1XBET" || "PARIBET"
                    ? "bg-white"
                    : ""
                } flex justify-center w-1/2 h-10 items-center p-2 rounded-l-lg`}
              >
                <img
                  src={
                    data?.bookie?.toUpperCase() === "BET9JA"
                      ? b9ja
                      : data?.bookie?.toUpperCase() === "SPORTYBET"
                      ? sporty
                      : data?.bookie?.toUpperCase() === "22BET"
                      ? bet22
                      : data?.bookie?.toUpperCase() === "MSPORT"
                      ? msport
                      : data?.bookie?.toUpperCase() === "STARBET"
                      ? starbet
                      : data?.bookie?.toUpperCase() === "1XBET"
                      ? onexbet
                      : data?.bookie?.toUpperCase() === "PARIBET"
                      ? paribet
                      : onexbet
                  }
                  alt="tips180-b9ja-logo"
                />
              </div>
              <div className="flex w-1/2 justify-center items-center p-2 text-white font-bold bg-gradient-to-r from-teal-500 to-blue-600 rounded-r-lg">
                betnow
              </div>
            </a>
          </div>
          <div className="flex items-center justify-between lg:text-base w-full">
            <div className="text-white flex">
              {each.homeform
                .slice(0, 5)
                .split("")
                .map((form, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex justify-center items-center mx-0.5 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded`}
                      style={{
                        backgroundColor:
                          form.toLowerCase() === "w"
                            ? "#3B7A57"
                            : form.toLowerCase() === "l"
                            ? "#D03D33"
                            : "#CCA01D",
                      }}
                    >
                      {form.toUpperCase()}
                    </div>
                  );
                })}
            </div>
            <div className="flex items-center text-center justify-center">
              Team Forms
            </div>
            <div className="flex text-white">
              {each.awayform
                .split("")
                .slice(0, 5)
                .map((form, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center mx-0.5 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6  rounded"
                      style={{
                        backgroundColor:
                          form.toLowerCase() === "w"
                            ? "#3B7A57"
                            : form.toLowerCase() === "l"
                            ? "#D03D33"
                            : "#CCA01D",
                      }}
                    >
                      {form.toUpperCase()}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      );
    });
  } else {
    card = (
      <h1 className="text-center mona-head text-red-600 text-xl md:text-3xl mb-7">
        Please Check Back Later!
      </h1>
    );
  }
  return <div className="flex flex-wrap justify-around">{card}</div>;
};

export default UpcomingCards;
