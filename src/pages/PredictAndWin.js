import React, { useEffect, useRef, useState } from "react";
import Dashboard from "../components/Dashboard";
import Flag from "react-flagkit";
import { CancelRounded, CheckRounded } from "@mui/icons-material";
import PredictAndWinComp from "../components/PredictAndWinComp";

const PredictAndWin = () => {
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
        className="font-bold big-shoulder "
      >
        Predict and Win
      </h1>
    </div>
  );

  const Content = (
    <div>
      <PredictAndWinComp
        isFaq={false}
        redirectUrl={"/dashboard/pw"}
        isDashboard={true}
      />
    </div>
  );

  return <Dashboard Top={Top} Content={Content} active={3} />;
};

export default PredictAndWin;
