import React from "react";
import { Helmet } from "react-helmet";
import Dashboard from "./Dashboard";
import StoreTable from "./StoreTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProfileSure3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      (["weekendtip", "singlecombo", "bts", "over2"].includes(link) &&
        !["Key", "Premium"].includes(user?.accoutplan)) ||
      (![
        "weekendtip",
        "singlecombo",
        "bts",
        "over2",
        "doublechance",
        "over1",
        "pr",
        "correctscore",
      ].includes(link) &&
        !["Premium"].includes(user?.accoutplan))
    ) {
      navigate("/dashboard/payment");
      if (["weekendtip", "singlecombo", "bts", "over2"].includes(link)) {
        toast.info("Kindly Upgrade to Key or Premium Plan to View This Store!");
      } else {
        toast.info("Kindly Upgrade to Premium Plan to View This Store!");
      }
      toast.clearWaitingQueue();
    }
  }, []);
  const style = {
    width: "90%",
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const link = window.location.href.split("/")[4];
  const endpoints = {
    odds3: [
      { endpoint: "sure3/1", tip: "sure3tip", title: "3 Odds Tips" },
      { endpoint: "sure3/2", tip: "sure3tip", title: "3 Odds Tips" },
    ],
  };

  const Top = (
    <div className=" flex  w-full">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold millik "
      >
        3 Odds
      </h1>
    </div>
  );

  const Content = (
    <div>
      {endpoints[link].map((each, index) => (
        <div className="mt-10" key={index}>
          {link === "odds2" || link === "odds3" ? (
            <p className="text-2xl millik font-bold mt-1 mb-6 text-center">
              Set {index + 1}
            </p>
          ) : link === "over2" ? (
            <p className="text-2xl millik font-bold mt-1 mb-6 text-center">
              {index === 0 ? "Over 2.5" : "Under 2.5"}
            </p>
          ) : (
            ""
          )}
          <StoreTable
            style={style}
            endpoint={each.endpoint}
            profile={true}
            tip={each.tip}
            index={index}
            link={link}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>3 Odds- Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={5} />
    </div>
  );
};

export default ProfileSure3;
