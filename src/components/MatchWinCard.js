import React, { useEffect, useState } from "react";

function MatchWinCard({ getWinningTips, results }) {
  useEffect(() => {
    getWinningTips();
  }, []);

  let card;

  if (results.length > 0) {
    card = results.map((each, index) => {
      return (
        <div
          key={index}
          className=" flex flex-col font-semibold text-xs md:text-sm items-center justify-around h-99 rounded-2xl py-100 px-100 transition-all duration-300 ease-in mb-6 shadow hover:shadow-md hover:shadow-gray-300"
          id="match-card"
          style={{ width: "45%", backgroundColor: "#F2F2F2" }}
        >
          <div className="flex w-full h-20 place-content-evenly text-sm lg:text-base font-semibold text-stone-800">
            <div className="flex flex-col items-center justify-between">
              <div className="flex justify-center">Date</div>
              <div className="flex justify-center">{`${each.date.slice(
                8
              )}/${each.date.slice(5, 7)}`}</div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <div className="bg-black rounded p-2 min-w-fit w-101 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                {each.league}
              </div>
              <div>{each.name}</div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <div className="flex justify-center">Tip</div>
              <div className="flex justify-center">{each.fttip}</div>
            </div>
          </div>
          <div className="mt-6 text-sm lg:text-base font-semibold text-stone-800">
            <p className="flex justify-center font-normal">Score</p>
            <div className="flex justify-center">{each.ftscore}</div>
          </div>
        </div>
      );
    });
  } else {
    card = (
      <h1 className="text-center mona-head text-red-600 text-xl md:text-3xl mb-7">
        Please Check Back Later!
      </h1>
    );
  }
  return <div className="flex flex-wrap justify-around">{card}</div>;
}

export default MatchWinCard;
