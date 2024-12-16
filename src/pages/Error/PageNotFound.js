import React from "react";
import Main from "../../Main";
import lost from "../../assets/notFound.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const notFound = (
    <div className="w-10/12 mx-auto rounded-xl h-screen md:h-fit md:bg-white md:my-16 flex justify-center items-center md:py-10">
      <div className="flex flex-col items-center">
        <img
          src={lost}
          alt="tips180-not-found-image"
          className="md:mt-5 md:w-2/3 lg:w-auto"
        />
        <h1 className="big-shoulder text-red-600 md:text-2xl lg:text-4xl mt-4">
          Ooops...Page not found!
        </h1>
        <p className="md:mt-3 mt-2 lg:text-base text-sm text-center">
          This page wasn’t found or was removed. We suggest you go back to home
        </p>
        <button className="cursor-pointer hover:shadow-md md:mt-5 mt-3 rounded bg-gradient-to-r from-teal-500 to-blue-600 text-white md:p-2 p-1 px-2 text-sm md:text-base">
          <Link to={"/"} className="w-full h-full">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );

  return <Main Prop={notFound} />;
};

export default PageNotFound;
