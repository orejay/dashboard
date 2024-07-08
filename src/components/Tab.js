import React from "react";

const Tab = ({ tab, active, index, onClick }) => {
  const activeStyles = {
    color: "#FFFFFF",
    backgroundColor: "linear-gradient(90.12deg, #62C7A1 , #6D55F1)",
    fontSize: "14px",
    borderRadius: "5px",
  };
  const inActiveStyles = {
    color: "black",
    backgroundColor: "#FFFFFF",
    fontSize: "14px",
    borderRadius: "5px",
  };
  return (
    <div
      className={
        active === index
          ? "flex items-center my-2 mr-14 px-4 py-2 cursor-pointer shadow lg:shadow-none bg-gradient-to-r from-teal-500 to-blue-600 w-full lg:w-2/3 "
          : "flex items-center my-2 mr-14 px-4 py-2 cursor-pointer shadow lg:shadow-none bg-gradient-to-r from-white to-gray-100 lg:bg-white lg:from-white lg:to-white w-full lg:w-2/3 "
      }
      style={active === index ? activeStyles : inActiveStyles}
      onClick={() => onClick()}
    >
      {tab}
    </div>
  );
};

export default Tab;
