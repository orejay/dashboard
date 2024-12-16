import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import b9ja from "../assets/bet9ja.png";
import sporty from "../assets/sportybet1.png";
import paribet from "../assets/paribet1.png";
import onexbet from "../assets/1xbet1.png";
import onexlong from "../assets/onexlong.png";
import msport from "../assets/msport1.png";
import msportLong from "../assets/msportlong.JPEG";
import starbet from "../assets/starbet1.png";
import bet22 from "../assets/22bet1.png";

const LandingLeagueCard = ({
  // getLeagueTips,
  league,
  endpoint,
  link,
  results,
  title,
}) => {
  const api = process.env.REACT_APP_BASE_API;
  const [data, setData] = useState({});

  const dateString = (dateValue) => {
    const newDate = new Date(dateValue);
    return newDate.toDateString();
  };

  const getBooking = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/bookings/league`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res_json = await res.json();
      if (!res.ok) {
      } else {
        setData(res_json.league);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  useEffect(() => {
    getBooking();
  }, []);

  const card =
    results[endpoint]?.length > 0
      ? results[endpoint]?.slice(0, 2).map((each, index) =>
          each.league.toUpperCase() === league.toUpperCase() ? (
            <div
              key={index}
              className="flex flex-col mobil text-xs md:text-sm items-center justify-between h-105 rounded-xl py-4 px-9 mb-6 hover:shadow-md hover:shadow-gray-300 transition-all duration-300 ease-in"
              id="match-card"
              style={{ width: "85%", backgroundColor: "#fff" }}
            >
              <div className="flex w-full h-20 mb-4 justify-between items-center text-sm font-semibold text-stone-800">
                <div className="flex">Date</div>

                <div className="rounded p-2 min-w-fit w-fit flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                  {each.league}
                </div>
                <div className="flex justify-center">Tip</div>
              </div>
              <div className="flex w-full h-20 justify-between items-center text-sm font-semibold text-stone-800">
                <div className="flex">{`${new Date(each.date)
                  .toJSON()
                  .slice(0, 10)
                  .slice(8)}/${new Date(each.date)
                  .toJSON()
                  .slice(0, 10)
                  .slice(5, 7)}`}</div>

                <div className="text-center">{each.name}</div>
                <div
                  className="bg-black rounded p-2 min-w-fit w-9 flex justify-center items-center text-white"
                  style={{ backgroundColor: "#6D55F1" }}
                >
                  {each.fttip}
                </div>
              </div>
              {/* <div className="flex w-full h-20 justify-between text-sm font-semibold text-stone-800">
                <div className="flex flex-col items-center justify-between">
                  <div className="flex">Date</div>
                  <div className="flex">{`${new Date(each.date)
                    .toJSON()
                    .slice(0, 10)
                    .slice(8)}/${new Date(each.date)
                    .toJSON()
                    .slice(0, 10)
                    .slice(5, 7)}`}</div>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div className="bg-black rounded p-2 min-w-fit w-101 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                    {each.league}
                  </div>
                  <div>{each.name}</div>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <div className="flex justify-center">Tip</div>
                  <div className="flex justify-center">{each.fttip}</div>
                </div>
              </div> */}
              <div className="flex justify-between mt-4 text-xs md:text-sm md:w-8/12 w-full text-stone-800">
                <a
                  href={data?.link}
                  target="_blank"
                  className="flex justify-center h-9 w-7/12"
                >
                  <div className="flex justify-center w-1/2 big-shoulder items-center p-2 text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-l-md">
                    Bet tip on
                  </div>
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
                    } flex justify-center p-2 w-1/2 rounded-r-md`}
                    style={{
                      backgroundColor:
                        data?.bookie?.toUpperCase() === "1XBET"
                          ? "#205583"
                          : "",
                      backgroundImage: `url(${
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
                          ? onexlong
                          : data?.bookie?.toUpperCase() === "PARIBET"
                          ? paribet
                          : ""
                      })`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <img
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
                      className="w-full h-full"
                      alt="b9ja-logo"
                    /> */}
                  </div>
                </a>
                <div className="flex w-4/12">
                  <div
                    className="rounded-l-md w-1/2 flex justify-center items-center"
                    style={{ backgroundColor: "#E5F5FF", color: "#13A0FF" }}
                  >
                    <p className="big-shoulder">Odds</p>
                  </div>
                  <div
                    className="rounded-r-md w-1/2 flex justify-center items-center"
                    style={{ backgroundColor: "#DEEDE0", color: "#355E3B" }}
                  >
                    <p className="big-shoulder">{each.ft_odds}</p>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center justify-between w-full">
                <div className="text-white flex">
                  {each.homeform
                    .slice(0, 5)
                    .split("")
                    .map((form, i) => {
                      return (
                        <div
                          key={i}
                          className={`flex justify-center font-semibold items-center mx-0.5 w-4 h-4 text-xs rounded-sm`}
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
                          className={`flex justify-center font-semibold items-center mx-0.5 w-4 h-4 text-xs rounded-sm`}
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
              </div> */}
            </div>
          ) : (
            ""
          )
        )
      : "";
  return (
    <div className={card === "" ? `hidden` : ``}>
      <div className="flex my-4">
        <h2 className="big-shoulder text-xl text-center md:text-2xl mx-auto">
          Betting Tips for {title}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around">
        {card}
      </div>
      <div className="flex mb-4">
        <Link
          to={`/leagues/${link}`}
          className="py-2 px-24 border-2 text-sm md:text-base mx-auto rounded bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
        >
          View More...
        </Link>
      </div>
    </div>
  );
};

export default LandingLeagueCard;
