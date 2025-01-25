import React, { useState, useEffect } from "react";
import LandingLeagueCard from "./LandingLeagueCard";
import { Link } from "react-router-dom";
import leagueBg from "../assets/leaguebg1.png";

const leagues = [
  {
    name: "EPL",
    endpoint: "epl",
    title: "English Premier League",
    link: "epl",
  },
  {
    name: "LA LIGA",
    endpoint: "la_liga",
    title: "Spanish La Liga",
    link: "la liga",
  },
  {
    name: "ITA",
    endpoint: "seria_a",
    title: "Italian Seria A",
    link: "ita",
  },
  {
    name: "GER",
    endpoint: "bundesliga",
    title: "German Bundesliga",
    link: "ger",
  },
];

const leagueBox = document.getElementById("league");

const LandingLeagues = () => {
  const [data, setData] = useState({});
  const [results, setResults] = useState({});
  const api = process.env.REACT_APP_BASE_API;

  const getLeagueTips = () => {
    fetch(`${api}/getendpoints/league-tips`)
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
      });
  };

  useEffect(() => {
    const download = async () => {
      await getLeagueTips();
    };
    download();
  }, []);

  return (
    <div
      className="mb-10 flex flex-col"
      style={{
        backgroundImage: `url(${leagueBg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="lg:w-11/12 flex items-center justify-between mx-auto mt-7 md:my-8 mobil"></div>
      <hr className="md:hidden my-2 mobil mx-auto" />
      <div
        className="flex flex-wrap justify-start md:px-5 mx-auto"
        style={{ width: "98.5%" }}
      >
        {leagues.map((each, index) =>
          results[each.endpoint]?.length > 0 ? (
            <div
              key={index}
              id="league"
              className={
                results[each.endpoint] === []
                  ? `hidden`
                  : `lg:w-6/12 w-full mx-auto md:mx-0 md:my-6 pb-0`
              }
            >
              <div className="">
                <LandingLeagueCard
                  league={each.name}
                  title={each.title}
                  endpoint={each.endpoint}
                  link={each.link}
                  results={results}
                  // getLeagueTips={(prop) => getLeagueTips(prop)}
                />
              </div>
            </div>
          ) : (
            <div key={index} className="hidden"></div>
          )
        )}
      </div>
    </div>
  );
};

export default LandingLeagues;
