import { useMediaQuery } from "@mui/material";
import React from "react";

const Tab = ({ tab, active, index, onClick }) => {
  const isMobile = useMediaQuery("(max-width:500px)");

  const activeStyles = {
    color: "#FFFFFF",
    backgroundColor: "#8672F3",
    fontSize: "14px",
    borderRadius: "5px",
  };
  const inActiveStyles = {
    color: "#FFFFFF",
    backgroundColor: isMobile ? "#354464" : "",
    fontSize: "14px",
    borderRadius: "5px",
  };
  return (
    <div
      className={
        active === index
          ? "flex items-center my-2 px-4 py-2 cursor-pointer shadow lg:shadow-none  w-full lg:w-5/6 "
          : "flex items-center my-2 px-4 py-2 cursor-pointer shadow lg:shadow-none w-full lg:w-5/6 hover:bg-dhover"
      }
      style={active === index ? activeStyles : inActiveStyles}
      onClick={() => onClick()}
    >
      {tab}
    </div>
  );
};

export default Tab;
