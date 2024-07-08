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
      setLoader(false);
      if (!res.ok) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } else {
        setData(res_json.matches);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  const GetBookingCode = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/bookings/w10`, {
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
    <div className=" flex  w-full">
      <h1
        style={{ color: "#22222" }}
        className="font-bold millik md:text-2xl text-xl"
      >
        Weekend 10 Odds!
      </h1>
    </div>
  );

  const Content = (
    <div className="w-full" style={{ overflow: "hidden" }}>
      {/* <GamesTable data={data} type={"W10"} /> */}
      {loader ? (
        <Loader />
      ) : (
        <>
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
                <tr className="w-full my-2 md:text-base text-sm">
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
                    <td>{`${dat?.date.slice(8)}/${dat?.date.slice(5, 7)}`}</td>
                    <td>{dat?.time}</td>
                    <td>{dat?.league}</td>
                    <td>{dat?.name}</td>
                    <td>{dat?.weekend10tip}</td>
                    <td>{dat?.confidence}</td>
                    <td>{dat?.weekend10odds}</td>
                    <td>{dat?.ftscore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BCode data={bcode} />
        </>
      )}
      <div className="md:w-5/6 mx-auto">
        <div className="">
          <h2 className="millik text-md" style={{ color: "#4f4f4f" }}>
            Notes :
          </h2>
          <p>
            Although matches were carefully selected by our experts, we strongly
            recommend you stake responsibly!
          </p>
        </div>
        <h2 className="millik text-md my-8 text-red-600">
          STAKE WHAT YOU CAN AFFORD TO LOSE!!!
        </h2>
      </div>
    </div>
  );

  useEffect(() => {
    GetWeekend10();
    GetBookingCode();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Buy Weekend 10 Odds! - Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={9} />
    </div>
  );
};
export default Weekend10;