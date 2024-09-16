import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
import Tab from "./Tab";

const MobileMenu = ({ active, msgs }) => {
  const [tabNo, setTabNo] = useState(0);
  const navigate = useNavigate();
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

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="z-50">
      <VisibilitySensor style={{ zIndex: 289 }}>
        {({ isVisible }) => (
          <Spring
            delay={100}
            to={{
              transform: isVisible ? "translateY(0)" : "translateY(-2%)",
            }}
          >
            {(props) => (
              <div
                style={{
                  border: "1px solid #62C7A1",
                  height: "92%",
                  overflow: "scroll",
                  zIndex: 100,
                }}
                className="w-3/5 lg:hidden fixed top-16 px-2 shadow-lg bg-white"
              >
                <div style={{ ...props }}>
                  <div className="mb-10 mt-20">
                    {data.map((taa, index) => (
                      <Link to={taa.link}>
                        <Tab
                          tab={taa.name}
                          active={tabNo || active}
                          index={index}
                          onClick={() => setTabNo(index)}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default MobileMenu;
