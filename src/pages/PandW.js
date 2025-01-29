import React, { useEffect, useRef, useState } from "react";
import Dashboard from "../components/Dashboard";
import Flag from "react-flagkit";
import { CancelRounded, CheckRounded } from "@mui/icons-material";

const PandW = () => {
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
  const [entries, setEntries] = useState(null);
  const [rounds, setRounds] = useState([]);
  const [status, setStatus] = useState("");
  const [round, setRound] = useState([]);
  const roundRef = useRef(null);

  const getRounds = async () => {
    const res = await fetch(`${api}/getendpoints/pw-rounds`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });

    const res_json = await res.json();
    setRounds(res_json);
    console.log(res_json);
  };

  const handleFetch = (v) => {
    if (v !== "") getEntries(v);
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);

    const dateString = date.toUTCString();

    return dateString.slice(0, dateString.length - 7);
  };

  const getEntries = async (round) => {
    const res = await fetch(`${api}/getendpoints/pw-entries/${round}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });

    const res_json = await res.json();
    setEntries(res_json.predictions);
    setStatus(res_json.round_status);
    console.log("match >>>>>>>>>>>>>", res_json);
  };

  useEffect(() => {
    getRounds();
  }, []);

  const Top = (
    <div className=" flex  w-full">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold mona-head "
      >
        Predict and Win History
      </h1>
    </div>
  );

  const Content = (
    <div className="p-5">
      <div>
        {rounds?.length > 0 ? (
          <select
            name="round-picker"
            id="round-picker"
            className="dd w-2/6 mb-4"
            ref={roundRef}
            onChange={(e) => {
              handleFetch(e.target.value);
              setRound(e.target.value);
            }}
          >
            <option value="">Select Round</option>
            {rounds.map((each, index) => (
              <option
                value={each?.set_id}
                key={index}
                // selected={round === each.set_id ? "selected" : ""}
              >
                {each.set}
              </option>
            ))}
          </select>
        ) : (
          <select
            name="round-picker"
            id="round-picker"
            className="dd w-2/6 mb-4"
          >
            <option value="">No Rounds Played</option>
          </select>
        )}
      </div>
      <div>
        {entries ? (
          <div className="flex justify-between mb-4">
            <div className="ml-4">
              <h3 className="mona-head mr-1">
                Round {entries ? entries[0]?.set : ""}
              </h3>
            </div>
            <div className="flex items-center mr-4">
              <h3 className="mona-head mr-1">Status:</h3>
              <p
                className={` font-semibold italic ${
                  status === "Won"
                    ? "text-green-500"
                    : status === "Lost"
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {status}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        {entries?.map((each, index) => (
          <div
            key={index}
            className="w-full p-4 rounded mb-3"
            style={{ backgroundColor: "#F2F2F2" }}
          >
            <div>
              <div className="lg:text-sm text-xs flex">
                <p className="mr-1">{formatDate(each.date)} |</p>{" "}
                <div
                  className="flex items-center justify-center w-fit"
                  style={{ borderRadius: "50%" }}
                >
                  <Flag
                    country={each.country.value}
                    style={{
                      borderRadius: "50%",
                      width: "14px",
                      height: "14px",
                      objectFit: "cover",
                    }}
                  />
                </div>{" "}
                <p className="ml-1">{each.league.label}</p>
              </div>
            </div>
            <div className="flex mt-3 w-full justify-between">
              <div className="lg:text-sm text-xs font-semibold">
                <p>{each.match.split(" vs ")[0]}</p>
                <p>{each.match.split(" vs ")[1]}</p>
              </div>
              <div className="flex pr-10 justify-start items-center text-xs lg:text-sm font-semibold">
                <div className="mr-8">
                  <p className="text-black">Prediction</p>
                  <p
                    style={{ margin: "0 0.5px", padding: "2px 5px" }}
                    className={`text-white w-fit rounded ${
                      each.prediction === "H"
                        ? "bg-green-600"
                        : each.prediction === "D"
                        ? "bg-blue-600"
                        : "bg-yellow-600"
                    }`}
                  >
                    {each.prediction}
                  </p>
                </div>
                <div className="mr-6">
                  <p className="text-black">Result</p>
                  <p
                    style={{ margin: "0 0.5px", padding: "2px 5px" }}
                    className={`text-white w-fit rounded ${
                      each.result === "H"
                        ? "bg-green-600"
                        : each.result === "D"
                        ? "bg-blue-600"
                        : each.result === ""
                        ? "bg-blue-500"
                        : "bg-yellow-600"
                    }`}
                  >
                    {each.result === "" ? "Pending" : each.result}
                  </p>
                </div>
                <div>
                  {each.result === "" ? (
                    ""
                  ) : each.result === each.prediction ? (
                    <CheckRounded sx={{ color: "#16a34a" }} />
                  ) : (
                    <CancelRounded sx={{ color: "#FE0405" }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!entries ? (
        <p className="mona-head text-red-500 text-center mt-3">
          You have no Predict and Win Entries
        </p>
      ) : (
        ""
      )}
    </div>
  );

  return <Dashboard Top={Top} Content={Content} active={4} />;
};

export default PandW;
