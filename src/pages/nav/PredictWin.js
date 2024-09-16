import React from "react";
import Main from "../../Main";
import PredictAndWinComp from "../../components/PredictAndWinComp";

const PredictWin = () => {
  return (
    <Main
      Prop={
        <PredictAndWinComp
          isFaq={true}
          redirectUrl={"/predict-win"}
          isDashboard={false}
        />
      }
      nav={4}
    />
  );
};

export default PredictWin;
