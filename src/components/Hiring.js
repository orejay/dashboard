import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import GamesTable from "./GamesTable";
import BCode from "./BookingCode";
import Loader from "./Loader";

const Hiring = () => {
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
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

  const Top = (
    <div className=" flex  w-full">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold mona-head "
      >
        We Are Hiring!
      </h1>
    </div>
  );

  const Content = (
    <div className="p-5">
      <p className="font-semibold text-lg pb-3">
        We are hiring for the following positions...
      </p>
      <div>
        {jobs.map((each, index) => (
          <li key={index}>{each[`${index}`]}</li>
        ))}
      </div>
      <p className="pt-3">
        Please send your CV to{" "}
        <a href="mailto:jobs@tips180.com" className="underline text-blue-500">
          jobs@tips180.com
        </a>
      </p>
    </div>
  );

  return <Dashboard Top={Top} Content={Content} active={17} />;
};
export default Hiring;
