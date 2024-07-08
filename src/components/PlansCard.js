import React from "react";
import { useState, useRef } from "react";
import Tick from "./Tick";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import greenTop from "../assets/greenTop.png";
import blueTop from "../assets/blueTop.png";
import { toast } from "react-toastify";

function PlansCard({ bg, styl, data, country }) {
  const [price, setPrice] = useState(0);
  const [box, setBox] = useState(0);
  const api = process.env.REACT_APP_BASE_API;
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const durationRef = useRef(null);
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

  const card = data.map((plan, index) => {
    return (
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

            <Link
              to={
                !token
                  ? `/auth/login`
                  : country === "Nigeria"
                  ? `/payment/paystack`
                  : country === "Ghana"
                  ? `/payment/ghana-payment`
                  : country === "Kenya"
                  ? `/payment/kenya-payment`
                  : [
                      "burkina faso",
                      "senegal",
                      "mali",
                      "Cote D'Ivoire".toLowerCase(),
                      "Guinea-Bissau".toLowerCase(),
                      "niger",
                    ].includes(country.toLowerCase())
                  ? `/payment/wa-payment`
                  : ["benin"].includes(country.toLowerCase())
                  ? `/payment/benin-payment`
                  : country === "Uganda"
                  ? `/payment/uganda-payment`
                  : country === "Cameroon"
                  ? `/payment/cameroon-payment`
                  : country === "Tanzania"
                  ? `/payment/tanzania-payment`
                  : `/payment/flutterwave`
              }
              className="p-2 bg-gradient-to-r from-teal-600 to-blue-600 rounded-md hover:shadow-md hover:shadow-teal-500 transition-all duration-300 ease-in"
            >
              <button
                onClick={() => {
                  IsUserAuthorized();
                  sessionStorage.setItem("amount", plan.prices[price].value);
                  sessionStorage.setItem("duration", plan.durations[price]);
                  sessionStorage.setItem("plan", plan.title);
                  sessionStorage.setItem("planName", plan.name);
                }}
                className="text-sm lg:text-base font-medium text-white w-full text-center"
              >
                Pay Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return <div className={`w-2/2 flex flex-wrap bg-${bg}`}>{card}</div>;
}

export default PlansCard;
