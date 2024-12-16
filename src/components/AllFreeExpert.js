import React, { useState, useEffect, useRef } from "react";
import b9ja from "../assets/bet9ja.png";
import sporty from "../assets/sportybet1.png";
import paribet from "../assets/paribet1.png";
import onexlong from "../assets/onexlong.png";
import msport from "../assets/msport1.png";
import starbet from "../assets/starbet1.png";
import bet22 from "../assets/22bet1.png";
import telegram from "../assets/telegram.png";
import Select from "react-select";
import { Link } from "react-router-dom";
import FreeTable from "./FreeTable";
import { useMediaQuery } from "@mui/material";

const AllFreeExpert = () => {
  const [data, setData] = useState({});
  const [bookings, setBookings] = useState({});
  const api = process.env.REACT_APP_BASE_API;
  const today = new Date().toJSON().slice(0, 10);
  const newDate = new Date();
  const yesterday = new Date();
  yesterday.setDate(newDate.getDate() - 1);
  const yesterdayDate = yesterday.toJSON().slice(0, 10);
  const tomorrow = new Date();
  tomorrow.setDate(newDate.getDate() + 1);
  const tomorrowDate = tomorrow.toJSON().slice(0, 10);
  const [results, setResults] = useState([]);
  const [tab, setTab] = useState(1);
  const [date, setDate] = useState(today);
  const [selectedOption, setSelectedOption] = useState({
    label: "Today",
    value: "today",
  });
  const user = JSON.parse(localStorage.getItem("user"));
  const days = [
    { label: "Yesterday", value: "yesterday" },
    { label: "Today", value: "today" },
    { label: "Tomorrow", value: "tomorrow" },
  ];
  const dateList = {
    yesterday: yesterdayDate,
    today: today,
    tomorrow: tomorrowDate,
  };
  const isSmall = useMediaQuery("(max-width:450px)");

  const getFreeExpert = (date) => {
    fetch(`${api}/getendpoints/free-experts/${date}`)
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
      });
  };

  const getBooking = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/bookings/freex`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res_json = await res.json();
      if (!res.ok) {
        console.log(res.status);
      } else {
        setBookings(res_json.freex);
        setData(res_json.freex.today);
      }
    } catch (error) {
      console.log("Check your network", error);
    }
  };

  useEffect(() => {
    const download = async () => {
      await getBooking();
    };
    download();
  }, []);

  return (
    <div className="mb-10 bg-white">
      <div className="md:w-11/12 flex md:items-center items-start justify-between mx-auto mt-7 md:my-8 mobil">
        <h2 className="md:text-2xl lg:text-3xl font-medium millik flex-wrap">
          Get {selectedOption.label}'s Prediction and Betting Tips{" "}
          <span className="flex">({dateList[selectedOption.value]})</span>
        </h2>
        <Select
          options={days}
          value={selectedOption}
          onChange={(days) => {
            setSelectedOption(days);
            getFreeExpert(dateList[days.value]);
            setData(bookings[days.value]);
            setDate(dateList[days.value]);
          }}
          isSearchable={true}
          placeholder={selectedOption.label}
          className="md:w-4/12 w-5/12 md:hidden lg:w-3/12 mb-4 cursor-pointer"
        />
        <div className="md:flex hidden">
          <div
            className={`w-fit px-2 py-1 cursor-pointer greybgh ease-in-out duration-300 border-2 rounded-md border-gray-200 mr-3 ${
              tab === 0
                ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                : ""
            }`}
            onClick={() => {
              setDate(yesterdayDate);
              setSelectedOption({ label: "Yesterday", value: "yesterday" });
              setData(bookings.yesterday);
              getFreeExpert(yesterdayDate);
              setTab(0);
            }}
          >
            Yesterday
          </div>
          <div
            className={`w-fit px-2 py-1 cursor-pointer greybgh ease-in-out duration-300 border-2 rounded-md border-gray-200 mr-3 ${
              tab === 1
                ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                : ""
            } `}
            onClick={() => {
              setDate(today);
              setSelectedOption({ label: "Today", value: "today" });
              setData(bookings.today);
              getFreeExpert(today);
              setTab(1);
            }}
          >
            Today
          </div>
          <div
            className={`w-fit px-2 py-1 cursor-pointer greybgh ease-in-out duration-300 border-2 rounded-md border-gray-200 mr-1 ${
              tab === 2
                ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                : ""
            }`}
            onClick={() => {
              setDate(tomorrowDate);
              setSelectedOption({ label: "Tomorrow", value: "tomorrow" });
              setData(bookings.tomorrow);
              getFreeExpert(tomorrowDate);
              setTab(2);
            }}
          >
            Tomorrow
          </div>
        </div>
      </div>
      {/* <hr className="md:hidden md:my-2 mobil mx-auto" /> */}
      <div
        className="lg:w-11/12 mx-1 lg:mx-auto h-screen overflow-y-scroll border-2 rounded-t-2xl pb-0"
        style={{ padding: "3% 0 0 0", paddingBottom: "0" }}
      >
        <FreeTable
          data={data}
          date={date}
          results={results}
          getFreeExpert={(prop) => getFreeExpert(prop)}
          selectedOption={selectedOption}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center py-4 items-center lg:w-11/12  mx-1 lg:mx-auto border-2 rounded-b-2xl">
        {data?.bookie ? (
          <div className="flex flex-col items-center md:items-start w-full md:w-5/12 lg:w-3/12 md:mr-8 mb-2">
            <h3 className="font-bold text-sm">Free Expert Tips</h3>
            <p className="text-sm font-semibold">Booking Code: {data?.code}</p>
            <div className="flex items-center justify-center w-6/12 md:w-9/12 mt-1 md:mt-2 h-9">
              <div className="text-xs md:text-base font-light millik text-white bg-gradient-to-r from-teal-500 to-blue-600 h-full rounded-l-md flex items-center justify-center w-1/2">
                <p>Bet tips on</p>
              </div>
              <a href={data?.link} target="_blank" className="w-1/2 h-full">
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
                  } p-1 h-9 flex items-center justify-center rounded-r-md`}
                  style={{
                    backgroundColor:
                      data?.bookie?.toUpperCase() === "1XBET" ? "#205583" : "",
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
                ></div>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
        <a
          href="http://t.me/tips1800"
          target="_blank"
          className="flex items-center rounded text-sm lg:text-base w-fit h-fit p-2 bg-gradient-to-r from-teal-500 to-blue-600 font-medium text-white md:mr-3 mb-2 md:mb-0"
        >
          Join our Telegram Channel
          <img
            src={telegram}
            alt="tips180-telegram-img"
            className="ml-1"
            loading="lazy"
          />
        </a>
        <div className="rounded w-fit bg-none border-2 p-2 font-medium">
          <p className="bg-gradient-to-r text-sm lg:text-base from-teal-500 to-blue-600 text-transparent bg-clip-text">
            <Link
              className="w-full h-full"
              to={!user ? `/auth/login` : `/dashboard/bankertips`}
            >
              Banker Tips of the Day
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllFreeExpert;
