import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Tip from "./Tip";
import BCode from "./BookingCode";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BankersTip = () => {
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");

  const [data, setData] = useState(null);
  const [bcode, setBCode] = useState(null);
  const [loader, setLoader] = useState(true);

  const GetBankers = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/bankers-tip`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();

      if (!res.ok) {
        console.log(res?.message);
      } else {
        setData(res_json);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };
  const GetBookingCode = async () => {
    setLoader(true);
    try {
      const res = await fetch(`${api}/getendpoints/bookings/banker`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
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

  useEffect(() => {
    GetBankers();
    GetBookingCode();
  }, []);
  const Top = (
    <div className="flex w-full">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold millik"
      >
        Banker Tip Of The Day
      </h1>
    </div>
  );

  const Content = !loader ? (
    <>
      {data?.msg ? (
        <h1 className="text-xl millik">{data?.msg}</h1>
      ) : (
        <Tip
          match={data?.name}
          league={data?.league}
          tip={data?.tip}
          odds={data?.odds}
          analysis={data?.analysis !== "" ? data?.analysis : "N/A"}
          level={data?.confidence}
        />
      )}
      <div className="flex w-full justify-center">
        <button className="rounded px-3 h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0">
          <Link className="text-white mx-auto" to="/dashboard/acca">
            View more banker tips on expert acca
          </Link>
        </button>
      </div>

      <BCode data={bcode} type="banker" />
    </>
  ) : (
    <Loader />
  );
  return (
    <div>
      <Helmet>
        <title>Banker Betting Tip of the Day - Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={12} />
    </div>
  );
};
export default BankersTip;
