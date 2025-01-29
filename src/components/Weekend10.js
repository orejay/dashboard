import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import GamesTable from "./GamesTable";
import BCode from "./BookingCode";
import Loader from "./Loader";
import { Helmet } from "react-helmet";

const Weekend10 = () => {
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");

  const [data, setData] = useState(null);
  const [matchData, setMatchData] = useState(null);
  const [dataSet, setDataSet] = useState(1);
  const [bcode, setBCode] = useState({});
  const [loader, setLoader] = useState(true);

  const GetWeekend10 = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/w10`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();
      console.log(res_json);
      setLoader(false);
      if (!res.ok) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } else {
        setMatchData(res_json.matches);
        setData(res_json.matches.filter((m) => m.weekend10_1st === true));
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  const GetBookingCode = async (set) => {
    try {
      const res = await fetch(`${api}/getendpoints/bookings/w10${set}`, {
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
        console.log(res_json);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };
  const Top = (
    <div className=" flex  w-full">
      <h1
        style={{ color: "#22222" }}
        className="font-bold mona-head md:text-2xl text-xl"
      >
        Weekend 10 Odds!
      </h1>
    </div>
  );

  const Content = (
    <div className="w-full p-5" style={{ overflow: "hidden" }}>
      {/* <GamesTable data={data} type={"W10"} /> */}
      {loader ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-end items-center py-2">
            <div
              className="cursor-pointer bg-gradient-to-r from-teal-500 to-blue-600 rounded p-2 text-white font-semibold"
              onClick={() => {
                setData(
                  dataSet === 2
                    ? matchData.filter((m) => m.weekend10_1st === true)
                    : matchData.filter((m) => m.weekend10_2nd === true)
                );
                setDataSet(dataSet === 1 ? 2 : 1);
                GetBookingCode(dataSet === 1 ? 2 : 1);
              }}
            >
              {dataSet === 1 ? "View Second Set" : "View First Set"}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              overflow: "scroll",
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
            }}
          >
            <table className="text-center my-10">
              <tbody>
                <tr className="w-full my-2 md:text-base text-sm text-white">
                  <th>Date</th>
                  <th>Time</th>
                  <th>League</th>
                  <th>Match</th>
                  <th>Tip</th>
                  <th>Confidence</th>
                  <th>Odds</th>
                  <th>Scores</th>
                </tr>
                {data?.map((dat, i) => (
                  <tr className="py-2 md:text-base text-xs" key={i}>
                    <td
                      style={{ borderRight: "1px solid #828282" }}
                    >{`${dat?.date.slice(8)}/${dat?.date.slice(5, 7)}`}</td>
                    <td style={{ borderRight: "1px solid #828282" }}>
                      {dat?.time}
                    </td>
                    <td style={{ borderRight: "1px solid #828282" }}>
                      {dat?.league}
                    </td>
                    <td style={{ borderRight: "1px solid #828282" }}>
                      {dat?.name}
                    </td>
                    <td style={{ borderRight: "1px solid #828282" }}>
                      {dataSet === 1
                        ? dat?.weekend10_1st_tip
                        : dat?.weekend10_2nd_tip}
                    </td>
                    <td style={{ borderRight: "1px solid #828282" }}>
                      {dat?.confidence}
                    </td>
                    <td style={{ borderRight: "1px solid #828282" }}>
                      {dataSet === 1
                        ? dat?.weekend10_1st_odds
                        : dat?.weekend10_2nd_odds}
                    </td>
                    <td>{dat?.ftscore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BCode data={bcode} />
        </div>
      )}
      <div className="md:w-5/6 mx-auto">
        <div className="">
          <h2 className="mona-head text-md" style={{ color: "#4f4f4f" }}>
            Notes :
          </h2>
          <p>
            Although matches were carefully selected by our experts, we strongly
            recommend you stake responsibly!
          </p>
        </div>
        <h2 className="mona-head text-md my-8 text-red-600">
          STAKE WHAT YOU CAN AFFORD TO LOSE!!!
        </h2>
      </div>
    </div>
  );

  useEffect(() => {
    GetWeekend10();
    GetBookingCode(dataSet);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Buy Weekend 10 Odds! - Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={12} />
    </div>
  );
};
export default Weekend10;
