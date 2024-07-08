import React, { useState, useEffect } from "react";
import b9ja from "../assets/bet9ja.png";
import sporty from "../assets/sportybet1.png";
import paribet from "../assets/paribet1.png";
import onexbet from "../assets/1xbet1.png";
import msport from "../assets/msport1.png";
import starbet from "../assets/starbet1.png";
import bet22 from "../assets/22bet1.png";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const StoreTable = ({ style, endpoint, tip, index, link, profile }) => {
  const authHeader = localStorage.getItem("token");
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(true);
  const [matches, setMatches] = useState([]);
  const [active, setActive] = useState(2);
  const navigate = useNavigate();
  const api = process.env.REACT_APP_BASE_API;
  const [data, setData] = useState({});

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const currentDate = new Date();

  // Get yesterday, today, and tomorrow
  const yesterday = new Date();
  yesterday.setDate(currentDate.getDate() - 1);
  const dayBefore = new Date();
  dayBefore.setDate(currentDate.getDate() - 2);
  const dayAfterT = new Date();
  dayAfterT.setDate(currentDate.getDate() + 2);
  const tomorrow = new Date();
  tomorrow.setDate(currentDate.getDate() + 1);

  // Format the dates
  const formattedYesterday = formatDate(yesterday);
  const formattedToday = formatDate(currentDate);
  const formattedDayAfterT = formatDate(dayAfterT);
  const formattedDayBefore = formatDate(dayBefore);
  const formattedTomorrow = formatDate(tomorrow);
  const dates = [
    formattedDayBefore,
    formattedYesterday,
    formattedToday,
    formattedTomorrow,
    formattedDayAfterT,
  ];

  const getBookings = async (category) => {
    try {
      const res = await fetch(`${api}/getendpoints/bookings/${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res_json = await res.json();
      if (!res.ok) {
      } else {
        setData(res_json);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  useEffect(() => {
    getBookings(link);

    fetch(`${api}/getendpoints/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + authHeader,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.msg) {
          if (endpoint === "weekend") {
            setResults(result);
          } else {
            setResults(result.filter((r) => r.date === formattedToday));
          }
          setMatches(result);
          setLoader(false);
        } else {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          navigate("/auth/login");
        }
      });
  }, []);

  const content = (
    <div className="w-full">
      <div className="flex mx-auto md:w-10/12 justify-around mb-4">
        {endpoint !== "weekend" &&
          dates.map((each, i) => (
            <div
              key={i}
              className={`w-1/6 flex items-center justify-center rounded-md border-2 p-1 text-center cursor-pointer ${
                active === i ? "bg-black text-white" : ""
              }`}
              onClick={() => {
                setActive(i);
                setResults(matches.filter((m) => m.date === dates[i]));
                console.log("results", results);
                console.log("matches", matches);
              }}
            >
              <p className="text-xs md:text-base">{i !== 2 ? each : "Today"}</p>
            </div>
          ))}
      </div>
      {Object.values(results).length > 0 ? (
        <table
          className="text-center mx-auto shadow-md shadow-gray-300"
          style={style}
        >
          <tr className="w-full my-2 bg-white millik text-xs lg:text-xl font-light">
            <th>Time</th>
            <th>League</th>
            <th>Match</th>
            <th>Tip</th>
            {tip === "singlebettip" ? <th>Odds</th> : ""}
            {["halftimetip", "htfttip"].includes(tip) ? <th>HT Scores</th> : ""}
            <th>FT Result</th>
          </tr>
          {Object.values(results).map((each, index) => {
            return (
              <tr
                className="py-2 text-xs lg:text-base"
                key={index}
                style={{
                  backgroundColor: index % 2 === 1 ? "#ffffff" : "f2f2f2",
                }}
              >
                <td>{each.time}</td>
                <td>{each.league}</td>
                <td>{each.name}</td>
                <td>
                  {endpoint === "over-1"
                    ? `OVER 1.5`
                    : endpoint === "over-2"
                    ? `OVER 2.5`
                    : endpoint === "draw"
                    ? `X`
                    : endpoint === "under-2"
                    ? `UNDER 2.5`
                    : endpoint === "bts"
                    ? `BTS`
                    : each[`${tip}`]}
                </td>
                {tip === "singlebettip" ? <td>{each["singlebetodds"]}</td> : ""}
                {["halftimetip", "htfttip"].includes(tip) ? (
                  <td>{each.htscore}</td>
                ) : (
                  ""
                )}
                <td>{each.ftscore}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        <div className="w-full flex justify-center py-5">
          <h1 className="millik text-lg md:text-2xl text-red-500 mx-auto w-9/12 md:w-full text-center">
            Sorry, tips are not available for now. Please check back later.
          </h1>
        </div>
      )}
      {results.length > 0 && (
        <div>
          {link === "odds2" || link === "odds3" ? (
            <div className="mt-7 mx-auto" style={{}}>
              {data?.odds2 || data?.odds3 ? (
                <div className="md:flex justify-around w-11/12 mx-auto">
                  <div
                    className={`md:w-5/12 ${
                      profile === false ? "lg:w-3/12" : "lg:w-5/12"
                    } flex justify-between`}
                  >
                    <div className="w-7/12 text-sm md:text-base">
                      <p>Booking Code</p>
                      <p className="text-sm">
                        {
                          data[link][link + (index + 1).toString()].filter(
                            (b) => b.date === dates[active]
                          )[0]?.bookie
                        }
                        {` - `}{" "}
                        {
                          data[link][link + (index + 1).toString()].filter(
                            (b) => b.date === dates[active]
                          )[0]?.code
                        }
                      </p>
                    </div>
                    <a
                      href={
                        data[link][link + (index + 1).toString()].filter(
                          (b) => b.date === dates[active]
                        )[0]?.link
                      }
                      target="_blank"
                      className={`${
                        data[link][link + (index + 1).toString()]
                          .filter((b) => b.date === dates[active])[0]
                          ?.bookie.toUpperCase() === "BET9JA"
                          ? "bg-green-900"
                          : data[link][link + (index + 1).toString()]
                              .filter((b) => b.date === dates[active])[0]
                              ?.bookie.toUpperCase() === "MSPORT"
                          ? "bg-gray-900"
                          : data[link][link + (index + 1).toString()]
                              .filter((b) => b.date === dates[active])[0]
                              ?.bookie.toUpperCase() === "STARBET"
                          ? "bg-gray-900"
                          : data[link][link + (index + 1).toString()]
                              .filter((b) => b.date === dates[active])[0]
                              ?.bookie.toUpperCase() === "22BET"
                          ? "bg-gray-900"
                          : data[link][link + (index + 1).toString()]
                              .filter((b) => b.date === dates[active])[0]
                              ?.bookie.toUpperCase() === "SPORTYBET"
                          ? "bg-red-600"
                          : data[link][link + (index + 1).toString()]
                              .filter((b) => b.date === dates[active])[0]
                              ?.bookie.toUpperCase() === "1XBET" || "PARIBET"
                          ? "bg-white"
                          : ""
                      } flex justify-center w-4/12 h-10 items-center p-2 rounded-r-lg`}
                    >
                      <img
                        src={
                          data[link][link + (index + 1).toString()]
                            .filter((b) => b.date === dates[active])[0]
                            ?.bookie.toUpperCase() === "BET9JA"
                            ? b9ja
                            : data[link][link + (index + 1).toString()]
                                .filter((b) => b.date === dates[active])[0]
                                ?.bookie.toUpperCase() === "SPORTYBET"
                            ? sporty
                            : data[link][link + (index + 1).toString()]
                                .filter((b) => b.date === dates[active])[0]
                                ?.bookie.toUpperCase() === "22BET"
                            ? bet22
                            : data[link][link + (index + 1).toString()]
                                .filter((b) => b.date === dates[active])[0]
                                ?.bookie.toUpperCase() === "MSPORT"
                            ? msport
                            : data[link][link + (index + 1).toString()]
                                .filter((b) => b.date === dates[active])[0]
                                ?.bookie.toUpperCase() === "STARBET"
                            ? starbet
                            : data[link][link + (index + 1).toString()]
                                .filter((b) => b.date === dates[active])[0]
                                ?.bookie.toUpperCase() === "1XBET"
                            ? onexbet
                            : data[link][link + (index + 1).toString()]
                                .filter((b) => b.date === dates[active])[0]
                                ?.bookie.toUpperCase() === "PARIBET"
                            ? paribet
                            : onexbet
                        }
                        alt="bet-logo"
                        className=""
                      />
                    </a>
                  </div>
                  <div className="mt-5 md:mt-0 text-sm md:text-base">
                    <p>Total Odds:</p>
                    <p className="text-sm">
                      {link === "odds2"
                        ? index === 0
                          ? results[0]?.sure21stsetodds
                          : results[0]?.sure22ndsetodds
                        : ""}
                      {link === "odds3"
                        ? index === 0
                          ? results[0]?.sure31stsetodds
                          : results[0]?.sure32ndsetodds
                        : ""}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
  return loader ? <Loader /> : content;
};

export default StoreTable;
