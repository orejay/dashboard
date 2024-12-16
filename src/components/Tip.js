import React from "react";

const Tip = ({ match, league, tip, odds, analysis, level }) => {
  return (
    <div className="lg:flex justify-evenly ">
      <div className="mx-3">
        <div
          className="my-7"
          style={{
            fontSize: "16px",
            color: "#4F4F4F",
          }}
        >
          <p>Match:</p>
          <h3
            style={{ color: "#222222", fontSize: "20px" }}
            className="font-bold big-shoulder"
          >
            {match}
          </h3>
        </div>
        <div
          className="my-7"
          style={{
            fontSize: "16px",
            color: "#4F4F4F",
          }}
        >
          <p> League:</p>
          <h3
            style={{ color: "#222222", fontSize: "20px" }}
            className="font-bold big-shoulder"
          >
            {league}
          </h3>
        </div>
        <div
          className="my-7"
          style={{
            fontSize: "16px",
            color: "#4F4F4F",
          }}
        >
          <p>Tip:</p>
          <h3
            style={{ color: "#222222", fontSize: "20px" }}
            className="font-bold big-shoulder"
          >
            {tip}
          </h3>
        </div>
      </div>
      <div className="mx-3">
        <div
          className="my-7"
          style={{
            fontSize: "16px",
            color: "#4F4F4F",
          }}
        >
          <p>Odds:</p>
          <h3
            style={{ color: "#222222", fontSize: "20px" }}
            className="font-bold big-shoulder"
          >
            {odds}
          </h3>
        </div>
        <div
          className="my-7"
          style={{
            fontSize: "16px",
            color: "#4F4F4F",
          }}
        >
          <p>Analysis:</p>
          <h3
            style={{ color: "#222222", fontSize: "14px" }}
            className="font-semibold"
          >
            {analysis}
          </h3>
        </div>
        <div
          className="my-7"
          style={{
            fontSize: "16px",
            color: "#4F4F4F",
          }}
        >
          <p>Confidence Level:</p>
          <h3
            style={{ color: "#222222", fontSize: "20px" }}
            className="font-bold big-shoulder"
          >
            {level}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tip;
