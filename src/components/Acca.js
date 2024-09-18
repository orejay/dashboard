import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import GamesTable from "./GamesTable";
import BCode from "./BookingCode";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ACCA = () => {
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [set, setSet] = useState({});
  const [bcode, setBCode] = useState(null);
  const [ea, setEA] = useState(1);
  const [loader, setLoader] = useState(true);
  const [currentDay, setCurrentDay] = useState("today");
  const GetExpertAcca = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/experts-acca`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();
      if (!res.ok) {
        navigate("/auth/login");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } else {
        setData(res_json);
        setSet(res_json.set_1);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };
  const GetBookingCode = async (prop) => {
    setLoader(true);
    try {
      const res = await fetch(
        `${api}/getendpoints/bookings/expertsacca${prop}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const res_json = await res.json();
      setLoader(false);
      if (!res.ok) {
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
      } else {
        setBCode(res_json);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };
  const changeSet = (prop) => {
    if (prop === 2 && user?.accoutplan !== "Premium") {
      navigate("/dashboard/payment");
      toast.error("Kindly subscribe to premium to view second set");
    }
    prop === 1 ? setSet(data.set_1) : setSet(data.set_2);
    setEA(prop);
    GetBookingCode(prop);
  };

  useEffect(() => {
    GetExpertAcca();
    GetBookingCode(1);
  }, []);

  const Top = (
    <div className="w-full mb-6">
      <h1
        style={{ color: "#22222" }}
        className="font-bold millik md:text-2xl text-xl"
      >
        Experts ACCA
      </h1>
      <p className="md:text-base text-sm">
        Here are our experts best selections for the day.
      </p>
    </div>
  );

  const Content = !loader ? (
    <>
      <GamesTable
        data={set}
        type={ea === 1 ? "ea1" : "ea2"}
        onClick={(prop) => setCurrentDay(prop)}
        dat={bcode}
      />
      {/* <BCode
        data={bcode}
        CD={currentDay}
        odd={bcode && bcode[`${currentDay}_odds`]}
        type="ea"
      /> */}
      <div className="my-5 flex justify-center">
        <button
          className="text-center text-md bg-gradient-to-r rounded text-white from-teal-500 to-blue-600 p-2 hover:shadow-md"
          onClick={() => {
            changeSet(ea === 1 ? 2 : 1);
            localStorage.setItem("tips180_currentDay", "today");
            localStorage.setItem("currentDayis", "today");
          }}
        >
          {ea == 1 ? "View second set" : "View first set"}
        </button>
      </div>
    </>
  ) : (
    <Loader />
  );
  return (
    <div>
      <Helmet>
        <title>Experts ACCA - Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={13} />
    </div>
  );
};
export default ACCA;
