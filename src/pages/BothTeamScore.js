import React from "react";
import StoreTable from "../components/StoreTable";

const style = {
  width: "90%",
};

function BothTeamScore() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <h2 className="text-2xl lg:text-4xl mt-8 font-bold big-shoulder">
          Both Teams Score
        </h2>
      </div>
      <div>
        <StoreTable style={style} endpoint="bts" />
      </div>
    </div>
  );
}

export default BothTeamScore;
