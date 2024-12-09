import React, { useState } from "react";
import MatchWinCard from "./MatchWinCard";
import UpcomingCards from "./UpcomingCards";
import RecentWinTable from "./RecentWinTable";
import UpcomingTable from "./UpcomingTable";

const activeStyles = {
  // borderBottom: "2px solid #999999",
  whiteSpace: "nowrap",
  borderSpacing: "3px",
  // color: "black",
};

const inactiveStyles = {
  whiteSpace: "nowrap",
  color: "#BDBDBD",
};

// {
//   /* <MatchWinCard
//             results={winResults}
//             getWinningTips={(prop) => getWinningTips(prop)}
//           /> */
// }

function WinUpcomingCards() {
  const [tab, setTab] = useState(0);
  const [results, setResults] = useState([]);
  const [winResults, setWinResults] = useState([]);
  const api = process.env.REACT_APP_BASE_API;
  const getUpcoming = () => {
    fetch(`${api}/getendpoints/upcoming-matches`)
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
      });
  };

  const getWinningTips = () => {
    fetch(`${api}/getendpoints/recent-win`)
      .then((response) => response.json())
      .then((result) => {
        setWinResults(result);
      });
  };

  return (
    <div>
      <div className="flex items-center md:justify-start w-11/12 mx-auto mt-7 md:mt-4 mobil">
        <h2
          onClick={() => setTab(0)}
          className={
            tab === 0
              ? `md:text-2xl text-lg lg:text-3xl font-medium millik mr-4 cursor-pointer text-transparent bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text`
              : `text-xs md:text-md lg:text-xl font-medium millik mr-4 cursor-pointer`
          }
          style={tab === 0 ? activeStyles : inactiveStyles}
        >
          Recent Winning Tips
        </h2>
        <h2
          onClick={() => setTab(1)}
          className={
            tab === 1
              ? `text-lg flex items-center md:text-2xl lg:text-3xl font-medium millik cursor-pointer text-transparent bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text`
              : `text-xs md:text-md flex items-end lg:text-xl font-medium millik cursor-pointer`
          }
          style={tab === 1 ? activeStyles : inactiveStyles}
        >
          Upcoming Tips
        </h2>
      </div>
      {/* <hr
        className="mb-1 md:my-0 mobil mx-auto w-11/12"
        style={{ whiteSpace: "nowrap" }}
      /> */}
      <div
        className="lg:w-11/12 lg:mx-auto h-screen overflow-y-scroll md:my-8 mb-4 mx-1 border-2 rounded-2xl pb-0"
        style={{
          padding: "3% 0",
          paddingBottom: "0",
        }}
      >
        {tab === 0 ? (
          <RecentWinTable
            results={winResults}
            getWinningTips={(prop) => getWinningTips(prop)}
          />
        ) : (
          <UpcomingTable
            results={results}
            getUpcoming={(prop) => getUpcoming(prop)}
          />
        )}
      </div>
    </div>
  );
}

export default WinUpcomingCards;
