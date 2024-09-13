import React from "react";
import Loader from "../../components/Loader";
import Main from "../../Main";
import { Link } from "react-router-dom";

const PredictWin = () => {
  const predict = (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="-mb-96 flex flex-col z-50 items-center mt-32 h-80">
        <h1 className="text-2xl md:text-4xl lg:text-5xl millik">
          Starting September 30!
        </h1>
        <p className="text-base mt-2">Please check back later</p>
        <Link
          to="/"
          className="text-sm text-blue-400 hover:text-teal-500 cursor-pointer"
        >
          Back to homepage
        </Link>
      </div>
      <Loader />
    </div>
  );

  return <Main Prop={predict} nav={4} />;
};

export default PredictWin;
