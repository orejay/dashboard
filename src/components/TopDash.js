import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopDash = ({ active }) => {
  const [tabNo, setTabNo] = useState(0);
  const data = [
    {
      name: "My Profile",
      link: "/profile",
    },
    {
      name: "My Store",
      link: "/store",
    },
    {
      name: "How to Subscribe",
      link: "/subscribe",
    },
    { name: "Make Payment", link: "/payment" },
    { name: "50 Odds Plan", link: "/50odds" },
    { name: "Smart Bet Plan", link: "/smartbet" },
    { name: "Rollover Bet", link: "/rollover" },
    { name: "Weekend 10", link: "/weekend10" },
    { name: "Experts ACCA", link: "/acca" },
    { name: "Banker Tips of the Day", link: "/bankertips" },
    { name: "Punter’s Guide", link: "/puntersguide" },
    { name: "Betting Glossary", link: "/glossary" },
    { name: "We Are Hiring", link: "/hiring" },
  ];

  const onChangeTab = (index) => {
    setTabNo(index);
  };
  return (
    <div className="flex  flex-nowrap " style={{}}>
      {data.map((data, index) => {
        return (
          <Link to={data.link}>
            <p
              key={index}
              style={{
                borderBottom:
                  index === (active || tabNo)
                    ? "1px solid #62C7A1"
                    : "1px solid #E0E0E0",
                whiteSpace: "nowrap",
              }}
              className={
                index === (active || tabNo)
                  ? "px-4  bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text pb-1"
                  : "px-4 pb-1"
              }
              onClick={() => onChangeTab(index)}
            >
              {data.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default TopDash;
