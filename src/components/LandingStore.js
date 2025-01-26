import React from "react";
import StoreCards from "./StoreCards";
import { Link } from "react-router-dom";
import bg from "../assets/Group3.webp";

function LandingStore() {
  const token = localStorage.getItem("token");

  return (
    <div className="flex flex-col lg:flex-row lg:flex">
      <div
        className="lg:w-1/2 pt-4  md:p-6"
        style={{ backgroundColor: "#E6F5F1" }}
      >
        <h2 className="text-xl md:text-2xl font-medium ml-6 big-shoulder">
          Tips Store
        </h2>
        <StoreCards style={`lg:m-1 m-2`} bStyle={`hidden`} />
      </div>
      <div
        className="lg:w-1/2 p-3 md:p-6 flex"
        style={{
          backgroundColor: "#E1E1FA",
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="md:w-4/5 pt-4">
          <div
            className="rounded w-fit mona text-sm mb-4"
            style={{ fontSize: "24px", color: "#6D55F1" }}
          >
            Experts ACCA
          </div>
          <p className="text-xs md:text-sm mb-6" style={{ maxWidth: "70%" }}>
            Are you confused with making the right selections? Let our experts
            guide you to victory with their best football tips selection of the
            day!
          </p>
          <Link to={!token ? `/auth/login` : `/dashboard/acca`}>
            <div
              className="rounded w-fit p-3 text-sm lg:text-base font-medium text-white "
              style={{ fontSize: "16px", backgroundColor: "#6D55F1" }}
            >
              Get the best 5-10 odds of Experts Tips
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingStore;
