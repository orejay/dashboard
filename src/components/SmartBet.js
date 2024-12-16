import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import GamesTable from "./GamesTable";
import BCode from "./BookingCode";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
import { ErrorBoundary } from "react-error-boundary";

const SmartBet = () => {
  const [data, setData] = useState([""]);
  const [sbBook, setSbBook] = useState([""]);
  const [loader, setLoader] = useState(true);
  const [smartBet, setSmartBet] = useState(true);
  const [bcode, setBCode] = useState(null);
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
  const [currentDay, setCuurentDay] = useState("today");

  const errorComponent = () => (
    <div>
      <p>Codes not available at the moment.</p>
    </div>
  );

  const Top = (
    <div className="flex flex-wrap justify-end lg:justify-between w-full items-center">
      <h1
        style={{ fontSize: "", color: "#22222" }}
        className="hidden lg:flex font-bold text-md lg:text-3xl big-shoulder w-1/2"
      >
        {smartBet ? "Smart Bet Plan" : "Smart Bet Plus Plan"}
      </h1>
      <div className="flex  my-2">
        <button
          className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs lg:text-lg py-2  px-5 rounded-md mr-5 mb-6 lg:mb-0"
          onClick={() => CheckSB()}
        >
          {smartBet ? "View Smart Bet Plus" : "View Smart Bet"}Tips
        </button>
      </div>
    </div>
  );

  const Content = loader ? (
    <Loader />
  ) : (
    <>
      <div>
        {smartBet ? (
          <GamesTable
            data={data}
            type={"sb"}
            onClick={(prop) => setCuurentDay(prop)}
          />
        ) : (
          <div className="w-full" style={{ overflow: "hidden" }}>
            <div
              style={{
                width: "100%",
                overflow: "scroll",
                scrollBehavior: "smooth",
                whiteSpace: "nowrap",
              }}
            >
              <table className="w-full text-center my-10">
                <tr className="w-full my-2 md:text-base text-sm">
                  <th>Time</th>
                  <th>Date</th>
                  <th>League</th>
                  <th>Match</th>
                  <th>Tip</th>
                  <th>Odds</th>
                  <th>Scores</th>
                </tr>
                {data.sb_plus?.map((dat, i) => (
                  <tr className="py-2 md:text-base text-xs" key={i}>
                    <td>{dat?.time}</td>
                    <td>{`${dat?.date.slice(8)}/${dat?.date.slice(5, 7)}`}</td>
                    <td>{dat?.league}</td>
                    <td>{dat?.name}</td>
                    <td>{dat?.sbplustip}</td>
                    <td>{dat?.sbplusodds}</td>
                    <td>{dat?.ftscore}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        )}
      </div>
      {bcode !== null && (
        <ErrorBoundary
          FallbackComponent={errorComponent}
          onError={(error, errorInfo) => {
            console.error("error", error, errorInfo);
          }}
        >
          <BCode
            data={bcode}
            CD={currentDay}
            smartBet={smartBet}
            sbBook={sbBook}
          />
        </ErrorBoundary>
      )}
    </>
  );

  const CheckSB = () => {
    if (smartBet) {
      setSmartBet(false);
      GetSmartBet(false);
      GetBookingCode(false);
    } else {
      setSmartBet(true);
      GetSmartBet(true);
      GetBookingCode(true);
    }
  };

  const GetSmartBet = async (prop) => {
    setLoader(true);
    try {
      const res = await fetch(
        `${api}/getendpoints/${prop ? "smart-bet" : "sb-plus"}`,
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
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } else {
        setData(res_json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetBookingCode = async (prop) => {
    try {
      const res = await fetch(
        `${api}/getendpoints/bookings/${prop ? "smartbet" : "smartbetplus"}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const res_json = await res.json();
      if (!res.ok) {
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
      } else {
        if (prop) {
          setBCode(res_json);
          setSbBook([""]);
        } else {
          setSbBook(res_json);
        }
        // setData(res_json.matches);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  useEffect(() => {
    GetSmartBet(true);
    GetBookingCode(true);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          {smartBet
            ? "Smart Bet Plan - Tips180 - It is our passion to see millions of people win!"
            : "Football Smart Bet Plus - Tips180 - It is our passion to see millions of people win!"}
        </title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={10} />
    </div>
  );
};
export default SmartBet;
