import React from "react";

const Tab = ({ tab, active, index, onClick }) => {
  const activeStyles = {
    color: "#FFFFFF",
    backgroundColor: "#8672F3",
    fontSize: "14px",
    borderRadius: "5px",
  };
  const inActiveStyles = {
    color: "#FFFFFF",
    backgroundColor: "#354464",
    fontSize: "14px",
    borderRadius: "5px",
  };
  return (
    <div
      className={
        active === index
          ? "flex items-center my-2 px-4 py-2 cursor-pointer shadow lg:shadow-none  w-full lg:w-5/6 "
          : "flex items-center my-2 px-4 py-2 cursor-pointer shadow lg:shadow-none w-full lg:w-5/6 "
      }
      style={active === index ? activeStyles : inActiveStyles}
      onClick={() => onClick()}
    >
      {tab}
    </div>
  );
};

export default Tab;
