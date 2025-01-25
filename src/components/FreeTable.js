import React, { useEffect } from "react";
import b9ja from "../assets/bet9ja.png";
import sporty from "../assets/sportybet1.png";
import paribet from "../assets/paribet1.png";
import msport from "../assets/msport1.png";
import starbet from "../assets/starbet1.png";
import onexlong from "../assets/onexlong.png";
import bet22 from "../assets/22bet1.png";
import { useMediaQuery } from "@mui/material";

function FreeTable({ date, data, getFreeExpert, results, selectedOption }) {
  const dateString = (dateValue) => {
    const newDate = new Date(dateValue);
    return newDate.toDateString();
  };
  const isMobile = useMediaQuery("(max-width:426px)");

  useEffect(() => {
    getFreeExpert(date);
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      <table>
        <thead className="big-shoulder" style={{ color: "#4F4F4F" }}>
          <tr className="text-sm md:text-base border-b">
            <th className="bg-white text-black">Date</th>
            <th className="bg-white text-black">League</th>
            <th className="bg-white text-black">Match</th>
            <th className="bg-white text-black">Tip</th>
            <th className="bg-white text-black">Scores</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((each, index) => (
              <tr
                key={index}
                className={`text-center text-xs lg:text-base border-b`}
                style={{
                  backgroundColor: "#F7F6FE",
                  height: "130px",
                }}
              >
                <td className="h-full relative">
                  <div className="absolute inset-0 flex items-start justify-center mt-3">
                    <p className="rounded p-2 px-3 text-center">{`${each.date.slice(
                      8
                    )}/${each.date.slice(5, 7)}`}</p>
                  </div>
                </td>
                <td className="h-full relative">
                  <div className="absolute inset-0 flex items-start justify-center mt-3">
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
                <td
                  style={{
                    padding: isMobile ? "0" : "",
                    margin: isMobile ? 0 : "",
                  }}
                  className="h-full relative"
                >
                  <div
                    className="flex flex-col items-center justify-evenly h-full big-shoulder md:text-lg"
                    style={{ height: isMobile ? "120px" : "" }}
                  >
                    <div
                      className="w-full flex justify-center
                    "
                    >
                      <p>
                        {isMobile
                          ? `${each?.name?.split(" vs ")[0]?.split(" ")[0]} ${
                              each?.name?.split(" vs ")[0]?.split(" ")?.length >
                              1
                                ? `${
                                    each.name.split(" vs ")[0]?.split(" ")[1][0]
                                  }.`
                                : ""
                            }  vs ${
                              each?.name?.split(" vs ")[1]?.split(" ")[0]
                            } ${
                              each?.name?.split(" vs ")[1]?.split(" ")?.length >
                              1
                                ? `${
                                    each?.name
                                      ?.split(" vs ")[1]
                                      ?.split(" ")[1][0]
                                  }.`
                                : ""
                            }`
                          : each?.name}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex md:flex-row items-center justify-between lg:text-sm md:text-xs w-full lg:w-8/12">
                      <div className="flex justify-between items-center flex-col md:flex md:flex-row text-xs md:text-sm w-full text-stone-800">
                        <a
                          href={data?.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center md:h-9 h-8 w-full lg:w-7/12 md:mb-0"
                        >
                          <div
                            className="flex justify-center w-1/2 big-shoulder items-center p-2 text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-l-md"
                            style={{ fontSize: isMobile ? "10px" : "" }}
                          >
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
                              backgroundSize: `${
                                data?.bookie?.toUpperCase() !== "MSPORT"
                                  ? "85% auto"
                                  : ""
                              }`,
                            }}
                          ></div>
                        </a>
                        <div className="flex w-9/12 md:h-9 h-6 mt-2 md:mt-0 md:w-4/12">
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
                            <p className="big-shoulder">{each?.ft_odds}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h-full relative">
                  <div className="absolute inset-0 flex items-start mt-3 justify-center">
                    <div
                      className="rounded px-2 text-center md:p-2 p-1 md:min-w-fit w-fit text-white"
                      style={{ backgroundColor: "#6D55F1" }}
                    >
                      <p>{each.fttip}</p>
                    </div>
                  </div>
                </td>

                <td className="h-full">{each.ftscore}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <h2 className="md:text-xl text-center w-full lg:text-3xl text-red-500 big-shoulder">
                  Sorry! No Free Expert Tips Available{" "}
                  {selectedOption.value === "today"
                    ? "Today"
                    : `for ${dateString(date)}`}
                </h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FreeTable;
