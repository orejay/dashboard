import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Tick from "./Tick";
import "../index.css";
import { useNavigate } from "react-router-dom";
import greenTop from "../assets/greenTop.png";
import blueTop from "../assets/blueTop.png";
import { toast } from "react-toastify";

function PointsCard({ bg, styl, data, country }) {
  const [price, setPrice] = useState(0);
  const [box, setBox] = useState(0);
  const api = process.env.REACT_APP_BASE_API;
  const [dataa, setDataa] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isModal, setIsModal] = useState(false);
  const today = new Date();

  const [isValid, setIsValid] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user?.email;
  const name = user?.name;

  const IsUserAuthorized = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/auth`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();

      if (!res.ok && res.status !== 500) {
        toast.info("kindly login to continue.");
        navigate("/auth/login");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setIsValid(false);
      } else {
        setIsValid(true);
        localStorage.setItem("token", res_json.new_token);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  const subscribe = async () => {
    try {
      const res = await fetch(`${api}/postendpoints/points-upgrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          plan: sessionStorage.getItem("plan"),
          duration: sessionStorage.getItem("duration"),
          price: sessionStorage.getItem("amount"),
        }),
      });
      const res_json = await res.json();

      console.log(res_json);

      if (!res.ok) {
        toast.error("Unable to upgrade user!");
        return console.log("Unable to upgrade user!");
      }

      if (res_json.upgrade === true) {
        toast.info(
          `Payment Complete! Your ${sessionStorage.getItem(
            "planName"
          )} Plan Has Been Activated Successfully!`
        );
      } else if (res_json.upgrade === false) {
        toast.warning(`${res_json.msg}`);
      }

      setIsModal(false);

      sessionStorage.removeItem("plan");
      sessionStorage.removeItem("duration");
      sessionStorage.removeItem("amount");
      sessionStorage.removeItem("planName");
    } catch (error) {
      console.log("Check your network");
    }
  };

  const card = data.map((plan, index) => (
    <div
      key={index}
      className="flex flex-col justify-between mx-auto mb-6 pb-9 h-103 rounded-2xl shadow-sm shadow-gray-300 bg-white transition-all duration-300 ease-in"
      id="plans-card"
      style={styl}
    >
      <div>
        <div
          className="flex flex-col px-4 py-4 mb-4 rounded-t-2xl bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${
              index === 1 || index === 4 ? greenTop : blueTop
            })`,
            backgroundSize: "100% 100%",
          }}
        >
          <h3 className="text-base text-white lg:text-2xl font-medium millik">
            {plan.name}
          </h3>
          <p className="text-sm text-white lg:text-base font-medium">
            {box === index ? plan.prices[price].title : plan.prices[0].title}
          </p>
        </div>
        {/* <hr style={{ color: "E0E0E0" }} className="w-full my-3" /> */}
        <ul>
          {plan.details.map((detail, indx) => {
            return (
              <li
                key={indx}
                className="flex items-center text-sm my-2 lg:text-base px-4"
              >
                <div>
                  <Tick />
                </div>
                {detail}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="flex flex-col px-4">
          <p className="text-base lg:text-xl mb-1 font-medium millik">
            Select Duration
          </p>
          <select
            name="duration"
            id="duration"
            onChange={(e) => {
              setBox(index);
              setPrice(e.target.value);
            }}
            style={{
              backgroundColor: "#F2F2F2",
              border: "0.4px solid #E0E0E0",
            }}
            className="dropdown text-sm lg:text-base outline-none p-2 rounded-md mb-3"
          >
            {plan.durations.map((duration, i) => {
              return (
                <option className="text-sm lg:text-base" key={i} value={i}>
                  {duration}
                </option>
              );
            })}
          </select>

          <div className="p-2 bg-gradient-to-r from-teal-600 to-blue-600 rounded-md hover:shadow-md hover:shadow-teal-500 transition-all duration-300 ease-in">
            <button
              onClick={() => {
                IsUserAuthorized();
                sessionStorage.setItem("amount", plan.prices[price].value);
                sessionStorage.setItem("duration", plan.durations[price]);
                sessionStorage.setItem("plan", plan.title);
                sessionStorage.setItem("planName", plan.name);
                setIsModal(true);
              }}
              className="text-sm lg:text-base font-medium text-white w-full text-center"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      {isModal && (
        <div
          style={{ zIndex: 1000 }}
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300"
        />
      )}
      {isModal && (
        <div
          style={{ zIndex: 1001 }}
          className="bg-white rounded fixed z-50 inset-0 flex-column justify-between items-center p-4 w-9/12 md:w-5/12 md:h-52 h-3/6 shadow-md top-37 md:top-1/2 md:left-37 left-12"
        >
          <div className="border-b-2 mb-2">
            <button
              onClick={() => setIsModal(false)}
              className=" text-red-600 font-bold"
            >
              x
            </button>
          </div>
          <div className="text-base mb-6">
            You're about to make payments for the{" "}
            {sessionStorage.getItem("plan")} plan. <br />
            {sessionStorage.getItem("amount")} points would be deducted from
            your wallet balance.
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                subscribe();
              }}
              className=" text-sm border-2 w-full md:w-2/5 mt-2 md:mt-0 h-fit my-auto rounded py-2 md:px-1 px-3 greybgh font-semibold transition-all ease-in-out"
            >
              Proceed to pay
            </button>
          </div>
        </div>
      )}
      <div className={`w-2/2 flex flex-wrap bg-${bg}`}>{card}</div>
    </div>
  );
}

export default PointsCard;
