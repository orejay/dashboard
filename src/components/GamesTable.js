/** @format */

import React, { useState, useEffect } from "react";
import BCode from "./BookingCode";
import { ErrorBoundary } from "react-error-boundary";

const GamesTable = ({ data, dat, type, onClick, rollBook = false }) => {
  const [activeState, setActiveState] = useState(
    localStorage.getItem("currentDayis")
  );
  // const changeStates = (prop) => {
  //    onClick(prop);
  // }
  useEffect(() => {
    localStorage.setItem("currentDayis", "today");
  }, []);
  const Active = {
    background: "#222222",
    borderRadius: "5px",
    color: "white",
  };

  const Inactive = {
    background: "#ffffff",
    borderRadius: "5px",
    color: "#222222",
    border: "1px solid #222222",
  };

  const errorComponent = () => (
    <div>
      <p>Codes not available at the moment.</p>
    </div>
  );

  return (
    <div className="w-full" style={{ overflow: "hidden" }}>
      <div className="w-6/6  flex justify-around">
        {/* {Object?.keys(data)?.map((dat, i) => (
          <button
            className="py-2 px-4"
            key={i}
            style={activeState === dat ? Active : Inactive}
            onClick={() => setActiveState(dat)}
          >
            {dat}
          </button>
        )).reverse()} */}

        <button
          className="py-2 px-4 lg:w-1/4 md:text-base text-sm"
          style={activeState === "yesterday" ? Active : Inactive}
          onClick={() => {
            setActiveState(
              "yesterday",
              localStorage.setItem("currentDayis", "yesterday")
            );
            onClick("yesterday");
          }}
        >
          {"Yesterday" || Object?.keys(data)[2]}
        </button>
        <button
          className="py-2 px-4 lg:w-1/4 md:text-base text-sm"
          style={activeState === "today" ? Active : Inactive}
          onClick={() => {
            setActiveState(
              "today",
              localStorage.setItem("currentDayis", "today")
            );
            onClick("today");
          }}
        >
          {"Today" || Object?.keys(data)[0]}
        </button>
        <button
          className="py-2 px-4 lg:w-1/4 md:text-base text-sm"
          style={activeState === "tomorrow" ? Active : Inactive}
          onClick={() => {
            setActiveState(
              "tomorrow",
              localStorage.setItem("currentDayis", "tomorrow")
            );
            onClick("tomorrow");
          }}
        >
          {"Tomorrow" || Object?.keys(data)[1]}
        </button>
      </div>
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
            <th>League</th>
            <th>Match</th>
            <th>Tip</th>
            {type === "ea1" || type === "ea2" ? <th>Confidence</th> : ""}
            {!rollBook && <th>Odds</th>}
            <th>Scores</th>
          </tr>
          {data[activeState]?.map((dat, i) => (
            <tr className="py-2 md:text-base text-xs" key={i}>
              <td>{dat?.time}</td>
              <td>{dat?.league}</td>
              <td>{dat?.name}</td>
              <td>
                {type === "5o"
                  ? dat?.sure50tip
                  : type === "sb"
                  ? dat.smartbettip
                  : type === "ro"
                  ? dat.rollovertip
                  : type === "ea1"
                  ? dat.expertsacca1tip
                  : dat.expertsacca2tip}
              </td>
              {type === "ea1" || type === "ea2" ? (
                <td>{dat?.confidence}</td>
              ) : (
                ""
              )}
              {!rollBook && (
                <td>
                  {type === "5o"
                    ? dat?.sure50odds
                    : type === "sb"
                    ? dat?.smartbetodds
                    : type === "ea1"
                    ? dat?.expertsacca1odds
                    : dat?.expertsacca2odds}
                </td>
              )}
              <td>{dat?.ftscore}</td>
            </tr>
          ))}
        </table>
      </div>
      {type === "ea1" || type === "ea2" ? (
        <ErrorBoundary
          FallbackComponent={errorComponent}
          onError={(error, errorInfo) => {
            console.error("error", error, errorInfo);
          }}
        >
          <BCode
            data={dat}
            CD={activeState}
            odd={dat && dat[`${activeState}_odds`]}
            type="ea"
          />
        </ErrorBoundary>
      ) : (
        ""
      )}
      {rollBook && Number(rollBook[`${activeState}_odds`]) !== 1 ? (
        <div className="my-5 lg:my-0">
          <p className="text-sm">Total Odds:</p>
          <p className="text-xl font-bold big-shoulder">
            {rollBook[`${activeState}_odds`]}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GamesTable;
