import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";

const UpgradeUserTable = ({ result, refresh }) => {
  const [userData, setUserData] = useState({
    email: "",
    plan: "",
    duration: "",
  });

  const durations = [
    "",
    "5 Days",
    "10 Days",
    "15 Days",
    "1 Week",
    "1 Month",
    "3 Months",
    "6 Months",
    "12 Months",
    "Deactivate",
  ];

  const authHeader = localStorage.getItem("admintoken");
  const api = process.env.REACT_APP_BASE_API;

  const upgrade = async (userData) => {
    try {
      const res = await fetch(`${api}/edit/upgrade-user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + authHeader,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({
          email: result.email,
          plan: userData.plan,
          duration: userData.duration,
        }),
      });
      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Unable to upgrade user!");
        return console.log("Unable to upgrade user!");
      }

      toast.info("Successful!");
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  const downgrade = async (userData) => {
    try {
      const res = await fetch(
        `${api}/postendpoints/downgrade/${userData.plan}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + authHeader,
          },
          redirect: "follow",
          credentials: "same-origin",
          body: JSON.stringify({
            email: result.email,
          }),
        }
      );
      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Unable to downgrade user!");
        return console.log("Unable to downgrade user!");
      }

      toast.info("Successful!");
    } catch (error) {
      console.log("Check your network");
    }
  };

  return (
    <div className="w-full">
      {result.email ? (
        <div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">User ID:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.user_id}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Fullname:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.name}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Email Address:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.email}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Account Plan:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.plan}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Smart Bet:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.smartbet}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Rollover:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.rollover}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">50 Odds:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.odds50}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Weekend 10:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.w10}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Plan:</h1>
            <div className="lg:w-2/3">
              <select
                name="plan"
                id="plan-dd"
                className="w-full dropdown cursor-pointer"
                onChange={(e) =>
                  setUserData({ ...userData, plan: e.target.value })
                }
              >
                <option value=""></option>
                <option value="key">Key</option>
                <option value="premium">Premium</option>
                <option value="smartbet">Smart Bet</option>
                <option value="rollover">Rollover</option>
                <option value="odds50">50 Odds</option>
                <option value="weekend10">Weekend 10</option>
              </select>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Duration:</h1>
            <div className="lg:w-2/3">
              <select
                name="plan"
                id="plan-dd"
                className="w-full dropdown cursor-pointer"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    duration: e.target.value,
                  })
                }
              >
                {durations.map((each, index) => (
                  <option value={each} key={index}>
                    {each}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-center lg:w-11/12">
            <input
              type="submit"
              value={
                userData.duration === "Deactivate" ? "Downgrade" : `Upgrade`
              }
              onClick={() => {
                userData.duration === "Deactivate"
                  ? downgrade(userData)
                  : upgrade(userData);
                refresh();
              }}
              className="w-full bg-gradient-to-r cursor-pointer from-teal-500 to-blue-600 text-white hover:shadow-md hover:shadow-green-200 hover:transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UpgradeUserTable;
