import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Main from "../../Main";
import { Helmet } from "react-helmet";

const Leagues = () => {
  const api = process.env.REACT_APP_BASE_API;

  const [leaguesData, setLeaguesData] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(`${api}/getendpoints/leagues`)
      .then((response) => response.json())
      .then((result) => {
        setLeaguesData(result);
      });
  }, []);

  const leagues = (
    <div className="w-full pb-5 lg:pb-16 " style={{ background: "#F2F2F2" }}>
      <div className="lg:py-20 py-14 mb-5 md:mb-16 text-white mx-auto text-center bg-gradient-to-r from-teal-500 to-blue-600">
        <h1 className="lg:text-4xl text-xl mona-head mx-auto">Leagues</h1>
      </div>
      <div className="py-5 lg:py-10  px-5 lg:px-14 mx-auto rounded-lg md:shadow-md shadow-slate-300 md:bg-white md:bg-gradient-to-b md:from-white md:via-orange-100 md:to-white w-full h-screen overflow-y-scroll lg:w-5/6">
        {Object.entries(leaguesData)
          .filter(([key, value]) => key.toLowerCase() === "europe")
          .map(([name, val], index) => (
            <div key={index}>
              <h1
                className="my-5 font-bold mona-head hover:text-transparent cursor-pointer hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 w-fit"
                style={{ fontSize: "20px" }}
              >
                {name}
              </h1>
              <div className="w-full flex flex-wrap my-5">
                {val?.map((item, i) => (
                  <Link
                    to={`/leagues/${item.short_name.toLowerCase()}`}
                    className={`w-full md:w-1/4 my-2 ${
                      item.name.toUpperCase() === "ENGLISH PREMIER LEAGUE"
                        ? "hover:text-epl"
                        : item.name.toUpperCase() === "SPANISH LA LIGA"
                        ? "hover:text-spain"
                        : item.name.toUpperCase() === "ITALIAN SERIE A"
                        ? "hover:text-ita"
                        : item.name.toUpperCase() === "FRENCH LIGUE ONE"
                        ? "hover:text-fra"
                        : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500"
                    }`}
                    key={i}
                  >
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        {Object.entries(leaguesData)
          .filter(([key, value]) => key.toLowerCase() !== "europe")
          .map(([name, val], index) => (
            <div key={index}>
              <h1
                className="my-5 font-bold mona-head hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 w-fit cursor-pointer"
                style={{ fontSize: "20px" }}
              >
                {name}
              </h1>
              <div className="w-full flex flex-wrap my-5">
                {val?.map((item, i) => (
                  <Link
                    to={`/leagues/${item.short_name.toLowerCase()}`}
                    className="w-full md:w-1/4 my-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600"
                    key={i}
                  >
                    <p style={{}}>{item.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>
          Football Leagues - Football Leagues Prediction | Tips180 - Get the
          best predictions from all the world football leagues including Premier
          League, Bundesliga, Serie A, La Liga, Ligue 1
        </title>
      </Helmet>
      <Main Prop={leagues} nav={1} />
    </div>
  );
};

export default Leagues;
