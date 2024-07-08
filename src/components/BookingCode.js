/** @format */

import React, { useState, useEffect } from "react";
import b9ja from "../assets/bet9ja.png";
import sporty from "../assets/sportybet1.png";
import paribet from "../assets/paribet1.png";
import onexlong from "../assets/onexlong.png";
import msport from "../assets/msport1.png";
import starbet from "../assets/starbet1.png";
import bet22 from "../assets/22bet1.png";

export default function ({ data = {}, sbBook, CD, odd = 1, smartBet = false }) {
  const page = window.location.href.split("/")[4];
  const [oddss, setOddss] = useState(data ? data[`${CD}_odds`] : "");
  const [ind, setInd] = useState(0);

  useEffect(() => {
    if (page !== "bankertips" && page !== "smartbet") {
      setInd(
        Object?.values(data)[ind]
          ? Object.values(data)[0][0]?.bookie
            ? 0
            : 1
          : 0
      );
    } else {
      setInd(data ? (Object.values(data)[0][0]?.bookie ? 0 : 0) : 0);
    }
    setOddss(
      CD === "today"
        ? data?.today_odds
        : CD === "yesterday"
        ? data?.yesterday_odds
        : data?.tomorrow_odds
    );
  }, [CD]);

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
  const pageList = ["50odds", "bankertips", "weekend10"];

  return (
    <div className="">
      {Object?.values(data)[ind] ? (
        <div className="md:flex flex-wrap justify-between my-10 mt-20 w-full lg:w-6/6 mx-auto ">
          <a
            className="flex items-center"
            href={
              !pageList.includes(page) && smartBet
                ? Object?.values(data)[ind]?.filter((b) =>
                    CD === "today"
                      ? b.date === formattedToday
                      : CD === "yesterday"
                      ? b.date === formattedYesterday
                      : b.date === formattedTomorrow
                  )[0]?.link
                : page === "50odds"
                ? data?.odds50.link
                : page === "bankertips"
                ? data?.banker.link
                : page === "smartbet" && !smartBet
                ? sbBook?.sbplus?.link
                : page === "weekend10"
                ? data?.w10.link
                : page === "acca"
                ? Object?.values(data)[ind]?.filter((b) =>
                    CD === "today"
                      ? b.date === formattedToday
                      : CD === "yesterday"
                      ? b.date === formattedYesterday
                      : b.date === formattedTomorrow
                  )[0]?.link
                : ""
            }
            target="_blank"
          >
            <div>
              <h1 className="text-sm mb-2">Booking Code:</h1>
              <div className="flex items-center lg:font-bold millik">
                <h1 className="text-xs lg:text-lg">
                  {data && page === "50odds" ? data?.odds50?.bookie : ""}
                  {data && page === "bankertips" ? data?.banker?.bookie : ""}
                  {sbBook && page === "smartbet" && !smartBet
                    ? sbBook?.sbplus?.bookie
                    : ""}
                  {data && page === "weekend10" ? data?.w10?.bookie : ""}
                  {(data && !pageList.includes(page) && smartBet) ||
                  page === "acca"
                    ? Object?.values(data)[ind]?.filter((b) =>
                        CD === "today"
                          ? b.date === formattedToday
                          : CD === "yesterday"
                          ? b.date === formattedYesterday
                          : b.date === formattedTomorrow
                      )[0]?.bookie
                    : ""}{" "}
                  -
                </h1>
                <h1 className="lg:mx-2 text-xs lg:text-lg">
                  {data && page === "50odds" ? data?.odds50?.code : ""}
                  {data && page === "bankertips" ? data?.banker?.code : ""}
                  {sbBook && page === "smartbet" ? sbBook?.sbplus?.code : ""}
                  {data && page === "weekend10" ? data?.w10?.code : ""}
                  {(data && !pageList.includes(page) && smartBet) ||
                  page === "acca"
                    ? Object?.values(data)[ind]?.filter((b) =>
                        CD === "today"
                          ? b.date === formattedToday
                          : CD === "yesterday"
                          ? b.date === formattedYesterday
                          : b.date === formattedTomorrow
                      )[0]?.code
                    : ""}
                </h1>
              </div>
            </div>
            <div>
              {page === "bankertips" && (
                <div
                  className={`${
                    data?.banker?.bookie?.toUpperCase() === "BET9JA"
                      ? "bg-green-900"
                      : data?.banker?.bookie?.toUpperCase() === "MSPORT"
                      ? "bg-gray-900"
                      : data?.banker?.bookie?.toUpperCase() === "STARBET"
                      ? "bg-gray-900"
                      : data?.banker?.bookie?.toUpperCase() === "22BET"
                      ? "bg-gray-900"
                      : data?.banker?.bookie?.toUpperCase() === "SPORTYBET"
                      ? "bg-red-600"
                      : data?.banker?.bookie?.toUpperCase() === "1XBET" ||
                        "PARIBET"
                      ? "bg-white"
                      : ""
                  } flex justify-center ml-3 h-14 w-32 rounded-r-2xl`}
                  style={{
                    backgroundColor:
                      data?.banker?.bookie?.toUpperCase() === "1XBET"
                        ? "#205583"
                        : "",
                    backgroundImage: `url(${
                      data?.banker?.bookie?.toUpperCase() === "BET9JA"
                        ? b9ja
                        : data?.banker?.bookie?.toUpperCase() === "SPORTYBET"
                        ? sporty
                        : data?.banker?.bookie?.toUpperCase() === "22BET"
                        ? bet22
                        : data?.banker?.bookie?.toUpperCase() === "MSPORT"
                        ? msport
                        : data?.banker?.bookie?.toUpperCase() === "STARBET"
                        ? starbet
                        : data?.banker?.bookie?.toUpperCase() === "1XBET"
                        ? onexlong
                        : data?.banker?.bookie?.toUpperCase() === "PARIBET"
                        ? paribet
                        : ""
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              )}
              {page === "smartbet" && !smartBet && (
                <div
                  className={`${
                    sbBook?.sbplus?.bookie?.toUpperCase() === "BET9JA"
                      ? "bg-green-900"
                      : sbBook?.sbplus?.bookie?.toUpperCase() === "MSPORT"
                      ? "bg-gray-900"
                      : sbBook?.sbplus?.bookie?.toUpperCase() === "STARBET"
                      ? "bg-gray-900"
                      : sbBook?.sbplus?.bookie?.toUpperCase() === "22BET"
                      ? "bg-gray-900"
                      : sbBook?.sbplus?.bookie?.toUpperCase() === "SPORTYBET"
                      ? "bg-red-600"
                      : sbBook?.sbplus?.bookie?.toUpperCase() === "1XBET" ||
                        "PARIBET"
                      ? "bg-white"
                      : ""
                  } flex justify-center ml-3 h-14 w-32 rounded-r-2xl`}
                  style={{
                    backgroundColor:
                      sbBook?.sbplus?.bookie?.toUpperCase() === "1XBET"
                        ? "#205583"
                        : "",
                    backgroundImage: `url(${
                      sbBook?.sbplus?.bookie?.toUpperCase() === "BET9JA"
                        ? b9ja
                        : sbBook?.sbplus?.bookie?.toUpperCase() === "SPORTYBET"
                        ? sporty
                        : sbBook?.sbplus?.bookie?.toUpperCase() === "22BET"
                        ? bet22
                        : sbBook?.sbplus?.bookie?.toUpperCase() === "MSPORT"
                        ? msport
                        : sbBook?.sbplus?.bookie?.toUpperCase() === "STARBET"
                        ? starbet
                        : sbBook?.sbplus?.bookie?.toUpperCase() === "1XBET"
                        ? onexlong
                        : sbBook?.sbplus?.bookie?.toUpperCase() === "PARIBET"
                        ? paribet
                        : ""
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              )}
              {page === "weekend10" && (
                <div
                  className={`${
                    data?.w10?.bookie?.toUpperCase() === "BET9JA"
                      ? "bg-green-900"
                      : data?.w10?.bookie?.toUpperCase() === "MSPORT"
                      ? "bg-gray-900"
                      : data?.w10?.bookie?.toUpperCase() === "STARBET"
                      ? "bg-gray-900"
                      : data?.w10?.bookie?.toUpperCase() === "22BET"
                      ? "bg-gray-900"
                      : data?.w10?.bookie?.toUpperCase() === "SPORTYBET"
                      ? "bg-red-600"
                      : data?.w10?.bookie?.toUpperCase() === "1XBET" ||
                        "PARIBET"
                      ? "bg-white"
                      : ""
                  } flex justify-center ml-3 h-14 w-32 rounded-r-2xl`}
                  style={{
                    backgroundColor:
                      data?.w10?.bookie?.toUpperCase() === "1XBET"
                        ? "#205583"
                        : "",
                    backgroundImage: `url(${
                      data?.w10?.bookie?.toUpperCase() === "BET9JA"
                        ? b9ja
                        : data?.w10?.bookie?.toUpperCase() === "SPORTYBET"
                        ? sporty
                        : data?.w10?.bookie?.toUpperCase() === "22BET"
                        ? bet22
                        : data?.w10?.bookie?.toUpperCase() === "MSPORT"
                        ? msport
                        : data?.w10?.bookie?.toUpperCase() === "STARBET"
                        ? starbet
                        : data?.w10?.bookie?.toUpperCase() === "1XBET"
                        ? onexlong
                        : data?.w10?.bookie?.toUpperCase() === "PARIBET"
                        ? paribet
                        : ""
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              )}
              {page === "50odds" && (
                <div
                  className={`${
                    data?.odds50?.bookie?.toUpperCase() === "BET9JA"
                      ? "bg-green-900"
                      : data?.odds50?.bookie?.toUpperCase() === "MSPORT"
                      ? "bg-gray-900"
                      : data?.odds50?.bookie?.toUpperCase() === "STARBET"
                      ? "bg-gray-900"
                      : data?.odds50?.bookie?.toUpperCase() === "22BET"
                      ? "bg-gray-900"
                      : data?.odds50?.bookie?.toUpperCase() === "SPORTYBET"
                      ? "bg-red-600"
                      : data?.odds50?.bookie?.toUpperCase() === "1XBET" ||
                        "PARIBET"
                      ? "bg-white"
                      : ""
                  } flex justify-center ml-3 h-14 w-32 rounded-r-2xl`}
                  style={{
                    backgroundColor:
                      data?.odds50?.bookie?.toUpperCase() === "1XBET"
                        ? "#205583"
                        : "",
                    backgroundImage: `url(${
                      data?.odds50?.bookie?.toUpperCase() === "BET9JA"
                        ? b9ja
                        : data?.odds50?.bookie?.toUpperCase() === "SPORTYBET"
                        ? sporty
                        : data?.odds50?.bookie?.toUpperCase() === "22BET"
                        ? bet22
                        : data?.odds50?.bookie?.toUpperCase() === "MSPORT"
                        ? msport
                        : data?.odds50?.bookie?.toUpperCase() === "STARBET"
                        ? starbet
                        : data?.odds50?.bookie?.toUpperCase() === "1XBET"
                        ? onexlong
                        : data?.odds50?.bookie?.toUpperCase() === "PARIBET"
                        ? paribet
                        : ""
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              )}
              {(data && !pageList.includes(page) && smartBet) ||
              page === "acca" ? (
                <div
                  className={`${
                    Object.values(data)
                      [ind]?.filter((b) =>
                        CD === "today"
                          ? b.date === formattedToday
                          : CD === "yesterday"
                          ? b.date === formattedYesterday
                          : b.date === formattedTomorrow
                      )[0]
                      ?.bookie?.toUpperCase() === "BET9JA"
                      ? "bg-green-900"
                      : Object.values(data)
                          [ind]?.filter((b) =>
                            CD === "today"
                              ? b.date === formattedToday
                              : CD === "yesterday"
                              ? b.date === formattedYesterday
                              : b.date === formattedTomorrow
                          )[0]
                          ?.bookie?.toUpperCase() === "MSPORT"
                      ? "bg-gray-900"
                      : Object.values(data)
                          [ind]?.filter((b) =>
                            CD === "today"
                              ? b.date === formattedToday
                              : CD === "yesterday"
                              ? b.date === formattedYesterday
                              : b.date === formattedTomorrow
                          )[0]
                          ?.bookie?.toUpperCase() === "STARBET"
                      ? "bg-gray-900"
                      : Object.values(data)
                          [ind]?.filter((b) =>
                            CD === "today"
                              ? b.date === formattedToday
                              : CD === "yesterday"
                              ? b.date === formattedYesterday
                              : b.date === formattedTomorrow
                          )[0]
                          ?.bookie?.toUpperCase() === "22BET"
                      ? "bg-gray-900"
                      : Object.values(data)
                          [ind]?.filter((b) =>
                            CD === "today"
                              ? b.date === formattedToday
                              : CD === "yesterday"
                              ? b.date === formattedYesterday
                              : b.date === formattedTomorrow
                          )[0]
                          ?.bookie?.toUpperCase() === "SPORTYBET"
                      ? "bg-red-600"
                      : Object.values(data)
                          [ind]?.filter((b) =>
                            CD === "today"
                              ? b.date === formattedToday
                              : CD === "yesterday"
                              ? b.date === formattedYesterday
                              : b.date === formattedTomorrow
                          )[0]
                          ?.bookie?.toUpperCase() === "1XBET" || "PARIBET"
                      ? "bg-white"
                      : ""
                  } flex justify-center ml-3 h-14 w-32 rounded-r-2xl`}
                  style={{
                    backgroundColor:
                      Object.values(data)
                        [ind]?.filter((b) =>
                          CD === "today"
                            ? b.date === formattedToday
                            : CD === "yesterday"
                            ? b.date === formattedYesterday
                            : b.date === formattedTomorrow
                        )[0]
                        ?.bookie?.toUpperCase() === "1XBET"
                        ? "#205583"
                        : "",
                    backgroundImage: `url(${
                      data && page !== "50odds"
                        ? Object.values(data)[ind]?.filter((b) =>
                            CD === "today"
                              ? b.date === formattedToday
                              : CD === "yesterday"
                              ? b.date === formattedYesterday
                              : b.date === formattedTomorrow
                          )[0]?.bookie === "BET9JA".toUpperCase()
                          ? b9ja
                          : Object.values(data)[ind]?.filter((b) =>
                              CD === "today"
                                ? b.date === formattedToday
                                : CD === "yesterday"
                                ? b.date === formattedYesterday
                                : b.date === formattedTomorrow
                            )[0]?.bookie === "Msport".toUpperCase()
                          ? msport
                          : Object.values(data)[ind]?.filter((b) =>
                              CD === "today"
                                ? b.date === formattedToday
                                : CD === "yesterday"
                                ? b.date === formattedYesterday
                                : b.date === formattedTomorrow
                            )[0]?.bookie === "Starbet".toUpperCase()
                          ? starbet
                          : Object.values(data)[ind]?.filter((b) =>
                              CD === "today"
                                ? b.date === formattedToday
                                : CD === "yesterday"
                                ? b.date === formattedYesterday
                                : b.date === formattedTomorrow
                            )[0]?.bookie === "1XBET".toUpperCase()
                          ? onexlong
                          : Object.values(data)[ind]?.filter((b) =>
                              CD === "today"
                                ? b.date === formattedToday
                                : CD === "yesterday"
                                ? b.date === formattedYesterday
                                : b.date === formattedTomorrow
                            )[0]?.bookie === "SportyBet".toUpperCase()
                          ? sporty
                          : Object.values(data)[ind]?.filter((b) =>
                              CD === "today"
                                ? b.date === formattedToday
                                : CD === "yesterday"
                                ? b.date === formattedYesterday
                                : b.date === formattedTomorrow
                            )[0]?.bookie === "PariBet".toUpperCase()
                          ? paribet
                          : bet22
                        : ""
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              ) : (
                ""
              )}
            </div>
          </a>
          {data?.odds === "" ? (
            <></>
          ) : (
            <div className="my-5 lg:my-0">
              <p className="text-sm">Total Odds:</p>
              <p className="text-xl font-bold millik">
                {data
                  ? data?.odds
                    ? data?.odds
                    : smartBet
                    ? data[`${CD}_odds`]
                    : sbBook
                    ? sbBook?.odds
                    : odd
                  : ""}
              </p>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
