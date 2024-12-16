import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../Main";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const leagueData = [
  { name: "ENGLISH PREMIER LEAGUE", value: "epl" },
  { name: "BELGIUM PRO LEAGUE", value: "pro_league" },
  { name: "ITALIAN SERIE A", value: "seria_a" },
  { name: "POLISH EKSTRAKLASA", value: "ekstraklasa" },
  { name: "ENGLISH  CHAMPIONSHIP", value: "championship" },
  { name: "PORTUGUESE PRIMERA LIGA", value: "primera_liga" },
  { name: "RUSSIAN PREMIER LEAGUE", value: "russian_pl" },
  { name: "UKRANIAN PREMIER LEAGUE", value: "ukrainian_pl" },
  { name: "GERMAN BUNDESLIGA", value: "bundesliga" },
  { name: "SCOTTISH PREMIERHSIP", value: "premiership" },
  { name: "HOLLAND EREDIVISIE", value: "eresdivisie" },
  { name: "ISREAL LIGAT HAAL", value: "ligat_haal" },
  { name: "GERMAN 2 BUNDESLIGA", value: "bundesliga_2" },
  { name: "SERBIA SUPER LIGA", value: "super_liga" },
  { name: "SPANISH LA LIGA", value: "la_liga" },
  { name: "GREECE SUPER LEAGUE", value: "super_league" },
  { name: "FRENCH LIGUE ONE", value: "ligue_1" },
  { name: "NOTHERN IRISH LEAGUE", value: "irish_league" },
];

const League = () => {
  const id = window.location.href.split("/")[4];
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const api = process.env.REACT_APP_BASE_API;

  const getMatches = async (id) => {
    try {
      const res = await fetch(`${api}/getendpoints/leagues/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();
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

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    } else if (user.accoutplan.toLowerCase() === "premium") {
      getMatches(id);
    } else {
      toast.info("Subscribe to Premium Plan to View League Predictions!");
      navigate("/dashboard/payment");
    }
  }, []);

  const league = (
    <div className="w-full md:py-5 lg:py-10 " style={{ background: "#F2F2F2" }}>
      <div className="py-5 lg:py-10  px-5 lg:px-14  mx-auto h-screen overflow-y-scroll rounded-lg bg-white w-full lg:w-5/6">
        <h2 className="big-shoulder" style={{ fontSize: "24px" }}>
          League’s Prediction {`(${data[0]?.league})`}
        </h2>
        <div>
          <table className="w-full text-xs md:text-base text-center my-10">
            <tr className="w-full my-2 mb-4">
              <th>Date</th>
              <th>Match</th>
              <th>Tip</th>
              <th>Score</th>
            </tr>
            {data.map((each, index) => (
              <tr className="py-2 " key={index}>
                <td>{each.date}</td>
                <td>{each.name}</td>
                <td>{each.ft_tip}</td>
                <td>{each.ft_score}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>{`(${data[0]?.league})`} Predictions - Tips180</title>
      </Helmet>
      <Main Prop={league} />
    </div>
  );
};

export default League;
