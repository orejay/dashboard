import React, { useEffect, useState } from "react";

function RecentWinTable({ getWinningTips, results }) {
  useEffect(() => {
    getWinningTips();
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      <table>
        <thead className="millik" style={{ color: "#4F4F4F" }}>
          {results.length > 0 ? (
            <tr className="text-sm md:text-base">
              <th>Date</th>
              <th>League</th>
              <th>Match</th>
              <th>Tip</th>
              <th>Scores</th>
            </tr>
          ) : (
            <tr>
              <td colSpan="5">
                <h1 className="text-center millik text-red-600 text-xl md:text-3xl mb-7">
                  Please Check Back Later!
                </h1>
              </td>
            </tr>
          )}
        </thead>
        <tbody>
          {results.length > 0
            ? results.map((each, index) => (
                <tr
                  className={`text-center text-xs md:text-base h-12 ${
                    index === results.length - 1 ? "lg:rounded-b-2xl" : ""
                  }`}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F7F6FE" : "#fff",
                  }}
                >
                  <td
                    key={index}
                    className={`${
                      index === results.length - 1 ? "rounded-bl-2xl" : ""
                    }`}
                  >{`${each.date.slice(8)}/${each.date.slice(5, 7)}`}</td>
                  <td key={index} className="flex justify-center">
                    <p
                      className="rounded p-2 w-fit text-white"
                      style={{
                        backgroundColor:
                          each.league === "EPL"
                            ? "#38003C"
                            : each.league === "LA LIGA"
                            ? "#E00C1A"
                            : each.league === "ITA"
                            ? "#024494"
                            : each.league === "FRA"
                            ? "#DAE025"
                            : "#6D55F1",
                      }}
                    >
                      {each.league}
                    </p>
                  </td>
                  <td key={index} className="millik mt-1 md:text-lg">
                    {each.name}
                  </td>
                  <td key={index} className="flex justify-center">
                    <p
                      className="rounded md:p-2 p-1 md:min-w-fit w-fit text-white"
                      style={{ backgroundColor: "#6D55F1" }}
                    >
                      {each.fttip}
                    </p>
                  </td>
                  <td
                    key={index}
                    className={`${
                      index === results.length - 1 ? "rounded-br-2xl" : ""
                    }`}
                  >
                    {each.ftscore}
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default RecentWinTable;