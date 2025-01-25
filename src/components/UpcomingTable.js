import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import b9ja from "../assets/bet9ja.png";
import sporty from "../assets/sportybet1.png";
import paribet from "../assets/paribet1.png";
import onexbet from "../assets/1xbet1.png";
import msport from "../assets/msport1.png";
import onexlong from "../assets/onexlong.png";
import starbet from "../assets/starbet1.png";
import bet22 from "../assets/22bet1.png";

const UpcomingTable = ({ getUpcoming, results }) => {
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

  return (
    <div className="flex flex-wrap justify-around">
      <table>
        <thead className="big-shoulder" style={{ color: "#4F4F4F" }}>
          {results.length > 0 ? (
            <tr className="text-sm md:text-base">
              <th className="bg-white text-black">Date</th>
              <th className="bg-white text-black">League</th>
              <th className="bg-white text-black">Match</th>
              <th className="bg-white text-black">Tip</th>
            </tr>
          ) : (
            <tr>
              <td colSpan="5">
                <h1 className="text-center big-shoulder text-red-600 text-xl md:text-3xl mb-7">
                  Please Check Back Later!
                </h1>
              </td>
            </tr>
          )}
        </thead>
        <tbody>
          {results.length > 0
            ? results.map((each, index) => (
                <tr
                  key={index}
                  className={`text-center text-xs lg:text-base h-12`}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F7F6FE" : "#fff",
                  }}
                >
                  <td
                    className={`h-full ${
                      index === results.length - 1 ? "rounded-bl-2xl" : ""
                    }`}
                  >
                    <p>{`${each.date.slice(8)}/${each.date.slice(5, 7)}`}</p>
                  </td>
                  <td className="h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="rounded p-2 px-3 text-white text-center"
                        style={{
                          backgroundColor:
                            each.league === "EPL"
                              ? "#38003C"
                              : each.league === "LA LIGA"
                              ? "#E00C1A"
                              : each.league === "ITA"
                              ? "#024494"
                              : each.league === "FRA"
                              ? "#DAE025"
                              : "#6D55F1",
                          minWidth: "15px",
                        }}
                      >
                        <p>{each.league}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col items-center big-shoulder mt-1 md:text-lg">
                      <p>{each.name}</p>
                      <div className="flex flex-col md:flex md:flex-row items-center justify-center lg:text-sm md:text-xs w-full">
                        <div className="flex flex-col md:flex md:flex-row items-center justify-between lg:text-sm md:text-xs w-full lg:w-6/12 mt-2 md:mt-1">
                          <div className="flex flex-col md:flex md:flex-row items-center justify-between  md:mt-4 text-xs md:text-sm w-full text-stone-800">
                            <a
                              href={data?.link}
                              target="_blank"
                              className="flex justify-center md:h-9 h-8 w-9/12 mb-2 md:mb-0 lg:w-7/12"
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
                                    : data?.bookie?.toUpperCase() ===
                                      "SPORTYBET"
                                    ? "bg-red-600"
                                    : data?.bookie?.toUpperCase() === "1XBET" ||
                                      "PARIBET"
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
                                      : data?.bookie?.toUpperCase() ===
                                        "SPORTYBET"
                                      ? sporty
                                      : data?.bookie?.toUpperCase() === "22BET"
                                      ? bet22
                                      : data?.bookie?.toUpperCase() === "MSPORT"
                                      ? msport
                                      : data?.bookie?.toUpperCase() ===
                                        "STARBET"
                                      ? starbet
                                      : data?.bookie?.toUpperCase() === "1XBET"
                                      ? onexlong
                                      : data?.bookie?.toUpperCase() ===
                                        "PARIBET"
                                      ? paribet
                                      : ""
                                  })`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                  backgroundSize: `${
                                    data?.bookie?.toUpperCase() !== "MSPORT"
                                      ? "85% auto"
                                      : ""
                                  }`,
                                }}
                              ></div>
                            </a>
                            <div className="flex w-9/12 md:h-9 h-6 md:w-4/12">
                              <div
                                className="rounded-l-md w-1/2 flex justify-center items-center"
                                style={{
                                  backgroundColor: "#E5F5FF",
                                  color: "#13A0FF",
                                }}
                              >
                                <p className="big-shoulder">Odds</p>
                              </div>
                              <div
                                className="rounded-r-md w-1/2 flex justify-center items-center"
                                style={{
                                  backgroundColor: "#DEEDE0",
                                  color: "#355E3B",
                                }}
                              >
                                <p className="big-shoulder">{each.ft_odds}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    className={`h-full relative ${
                      index === results.length - 1 ? "rounded-br-2xl" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="rounded p-2 px-2 text-white text-center"
                        style={{ backgroundColor: "#6D55F1", minWidth: "15px" }}
                      >
                        <p>{each.fttip}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingTable;
