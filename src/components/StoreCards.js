import React from "react";
import { Link } from "react-router-dom";

const storeCardData = [
  {
    name: "Double Chance",
    link: "/tip-store/doublechance",
  },
  {
    name: "Over 1.5",
    link: "/tip-store/over1",
  },
  {
    name: "Potential Risk",
    link: "/tip-store/pr",
  },
  {
    name: "Correct Score",
    link: "/tip-store/correctscore",
  },
  {
    name: "BTS",
    link: "/tip-store/bts",
  },
  {
    name: "Over/Under 2.5",
    link: "/tip-store/over2",
  },
  {
    name: "Single Combo",
    link: "/tip-store/singlecombo",
  },
  {
    name: "Weekend Tips",
    link: "/tip-store/weekendtip",
  },
  { name: "HT/FT", link: "/tip-store/htft" },
  {
    name: "Single Bet",
    link: "/tip-store/singlebet",
  },
  {
    name: "Score Both Halves",
    link: "/tip-store/sbh",
  },
  {
    name: "Handicap",
    link: "/tip-store/handicap",
  },
  { name: "2 Odds", link: "/tip-store/odds2" },
  { name: "3 Odds", link: "/tip-store/odds3" },
  {
    name: "Half Time Tips",
    link: "/tip-store/httips",
  },
  {
    name: "Win Either Half",
    link: "/tip-store/winehalf",
  },
  {
    name: "Draw",
    link: "/tip-store/draw",
  },
  {
    name: "Accumulator",
    link: "/tip-store/accumulator",
  },
];

const plansCardData = [
  {
    name: "Experts Acca",
    link: "/dashboard/acca",
  },
  {
    name: "Leagues",
    link: "/leagues",
  },
  {
    name: "50 Odds",
    link: "/dashboard/50odds",
  },
  {
    name: "Weekend 10",
    link: "/dashboard/weekend10",
  },
  {
    name: "Smartbet Plan",
    link: "/dashboard/smartbet",
  },
  {
    name: "Smartbet Plus",
    link: "/dashboard/smartbet",
  },
  {
    name: "Rollover Bet",
    link: "/dashboard/rollover",
  },
];

const odds50 = ["50 Odds"];
const weekend10 = ["Weekend 10"];
const smartbet = ["Smartbet Plan", "Smartbet Plus"];
const rollover = ["Rollover Bet"];

const Free = ["Correct Score", "Potential Risk", "Over 1.5", "Double Chance"];

const Key = [
  "Correct Score",
  "Potential Risk",
  "Over 1.5",
  "Double Chance",
  "Experts Acca",
  "Weekend Tips",
  "Single Combo",
  "Over/Under 2.5",
  "BTS",
];

const Premium = ["Leagues", "Experts Acca"];

const StoreCards = ({ style, bStyle, dashboard }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div
        className={`flex flex-wrap md:w-full m-5 ${
          bStyle === "hidden" ? "mb-0" : ""
        }`}
      >
        {!dashboard || user?.accoutplan === "Premium"
          ? storeCardData.map((card, index) => {
              return (
                <Link
                  key={index}
                  to={!user ? "/auth/login" : card.link}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-black md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${style} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              );
            })
          : user?.accoutplan === "Free"
          ? storeCardData
              .filter((p) => Free.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-black md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : user?.accoutplan === "Key"
          ? storeCardData
              .filter((p) => Key.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-black md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : ""}
      </div>
      <div className="flex flex-wrap md:w-full m-2">
        {!dashboard
          ? plansCardData.map((card, index) => {
              return (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-gray-700 md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              );
            })
          : user?.accoutplan === "Free"
          ? plansCardData
              .filter((p) => Free.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-gray-700 md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : user?.accoutplan === "Key"
          ? plansCardData
              .filter((p) => Key.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-gray-700 md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : user?.accoutplan === "Premium"
          ? plansCardData
              .filter((p) => Premium.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-gray-700 md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : ""}
        {user?.odds50status === "Active"
          ? plansCardData
              .filter((p) => odds50.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-gray-700 md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : ""}
        {user?.w10subscriptstatus === "Active"
          ? plansCardData
              .filter((p) => weekend10.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-gray-700 md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : ""}
        {user?.rollsubscriptstatus === "Active"
          ? plansCardData
              .filter((p) => rollover.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-gray-700 md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : ""}
        {user?.isubscriptstatus === "Active"
          ? plansCardData
              .filter((p) => smartbet.includes(p.name))
              .map((card, index) => (
                <Link
                  key={index}
                  to={user ? card.link : "/auth/login"}
                  className={`flex items-center justify-center h-11 text-center text-xs md:text-sm bg-gray-700 md:h-14 p-2 text-white w-2/5 md:w-1/5 rounded ${bStyle} cursor-pointer hover:shadow-md hover:shadow-gray-500 transition-all duration-300 ease-in`}
                >
                  <div key={index}>{card.name}</div>
                </Link>
              ))
          : ""}
      </div>
      <Link
        to={`/tipsstore`}
        className={`millik text-blue-500 underline hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 hover:text-transparent hover:bg-clip-text ml-6 ${
          bStyle === "hidden" ? "" : "hidden"
        }`}
      >
        View full store here...
      </Link>
    </div>
  );
};

export default StoreCards;
