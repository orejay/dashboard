import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tab from "./Tab";

const LeftSide = ({ active, msgs }) => {
  const [tabNo, setTabNo] = useState(0);

  const data = [
    {
      name: "My Profile",
      link: "/dashboard/profile",
    },
    {
      name: "My Store",
      link: "/dashboard/store",
    },
    {
      name: `Messages (${msgs})`,
      link: "/dashboard/messages",
    },
    { name: "Predict & Win", link: "/dashboard/pw" },
    { name: "Predict & Win History", link: "/dashboard/pw-history" },
    {
      name: "How to Subscribe",
      link: "/dashboard/subscribe",
    },
    { name: "Make Payment", link: "/dashboard/payment" },
    { name: "2 Odds", link: "/dashboard/odds2" },
    { name: "3 Odds", link: "/dashboard/odds3" },
    { name: "50 Odds Plan", link: "/dashboard/50odds" },
    { name: "Smart Bet Plan", link: "/dashboard/smartbet" },
    { name: "Rollover Bet", link: "/dashboard/rollover" },
    { name: "Weekend 10", link: "/dashboard/weekend10" },
    { name: "Experts ACCA", link: "/dashboard/acca" },
    { name: "Banker Tips of the Day", link: "/dashboard/bankertips" },
    { name: "Punter’s Guide", link: "/dashboard/puntersguide" },
    { name: "Betting Glossary", link: "/dashboard/glossary" },
    { name: "We Are Hiring", link: "/dashboard/hiring" },
  ];
  return (
    <div
      className="min-h-screen left-side pt-5 pl-5 items-left hidden lg:block rounded-l-xl"
      style={{
        height: "100vh",
        overflowY: "scroll",
        position: "relative",
        backgroundColor: "#1B2232",
      }}
    >
      {data.map((taa, index) => (
        <Link to={taa.link}>
          <Tab
            tab={taa.name}
            active={active || tabNo}
            index={index}
            onClick={() => setTabNo(index)}
          />
        </Link>
      ))}
    </div>
  );
};
export default LeftSide;
