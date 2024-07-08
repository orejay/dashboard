import React, { useState, useRef } from "react";
import Dashboard from "../components/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "../components/ChangePassword";
import { Helmet } from "react-helmet";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
  const [tab, setTab] = useState(0);

  const Top = (
    <div
      className="flex rounded-lg w-full p-2 px-8"
      style={{ background: "#F2F2F2", border: "1px solid #E0E0E0" }}
    >
      {["My Information", "Change Password"].map((prop, i) => (
        <p
          style={{
            color: `${tab === i ? "#222222" : "#828282"}`,
            background: `${tab === i ? "#FFFFFF" : "transparent"}`,
          }}
          key={i}
          className="px-2 py-1 rounded-lg cursor-pointer"
          onClick={() => setTab(i)}
        >
          {prop}
        </p>
      ))}
    </div>
  );
  const Content = (
    <ChangePassword user={user} tab={tab} api={api} token={token} />
  );

  return (
    <div>
      <Helmet>
        <title>
          My Account-Football Tips and Predictions from seasoned experts -
          Tips180
        </title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={0} />
    </div>
  );
};

export default Profile;
