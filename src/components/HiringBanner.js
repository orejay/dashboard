import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HiringBanner = () => {
  const token = localStorage.getItem("token");
  const api = process.env.REACT_APP_BASE_API;
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const res = await fetch(`${api}/getendpoints/jobs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res_json = await res.json();
    console.log(res_json);
    const jobList = res_json.jobs.roles.split(",");
    var newJobs = [];
    for (let i = 0; i < jobList.length; i++) {
      newJobs = [...newJobs, { [i]: jobList[i] }];
    }
    setJobs(newJobs);
  };
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div
      className={`${
        jobs.length > 0 ? "" : "hidden"
      }flex justify-center items-center py-4 border-b`}
    >
      <div className="w-11/12 text-center flex justify-center mx-auto items-center">
        <p className="font-semibold md:text-lg text-sm">We Are Hiring! </p>
        <button className="ml-2 bg-gradient-to-r cursor-pointer from-teal-500 to-blue-600 text-white px-3 py-1 rounded">
          <Link to={token ? "/hiring" : "/auth/login"}>View Positions</Link>
        </button>
      </div>
    </div>
  );
};

export default HiringBanner;
