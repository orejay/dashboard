import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import GamesTable from "./GamesTable";
import BCode from "./BookingCode";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Rollover = () => {
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [bcode, setBCode] = useState(null);
  const [loader, setLoader] = useState(true);
  const [currentDay, setCuurentDay] = useState("today");

  const GetRollOver = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/rollover`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();
      setLoader(false);
      if (!res.ok) {
        navigate("/auth/login");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } else {
        setData(res_json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetBookingCode = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/bookings/rollover`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();
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
  const Top = (
    <div className=" flex  w-full mb-6">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold big-shoulder "
      >
        Rollover Bet
      </h1>
    </div>
  );

  useEffect(() => {
    GetRollOver();
    GetBookingCode();
  }, []);
  const Content = loader ? (
    <Loader />
  ) : (
    <div className="p-5">
      <GamesTable
        data={data}
        type={"ro"}
        onClick={(prop) => setCuurentDay(prop)}
        rollBook={bcode}
      />
      {/* <BCode data={bcode} /> */}
    </div>
  );
  return (
    <div>
      <Helmet>
        <title>Rollover Bet- Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={11} />
    </div>
  );
};
export default Rollover;
