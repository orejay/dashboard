import React from "react";
import { Helmet } from "react-helmet";
import Dashboard from "./Dashboard";
import StoreTable from "./StoreTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProfileSure2 = () => {
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
    odds2: [
      { endpoint: "sure2/1", tip: "sure2tip", title: "2 Odds Tips" },
      { endpoint: "sure2/2", tip: "sure2tip", title: "2 Odds Tips" },
    ],
  };

  const Top = (
    <div className=" flex  w-full">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold mona-head "
      >
        2 Odds
      </h1>
    </div>
  );

  const Content = (
    <div>
      {endpoints[link].map((each, index) => (
        <div className="mt-10" key={index}>
          {link === "odds2" || link === "odds3" ? (
            <p className="text-2xl mona-head font-bold mt-1 mb-6 text-center">
              Set {index + 1}
            </p>
          ) : link === "over2" ? (
            <p className="text-2xl mona-head font-bold mt-1 mb-6 text-center">
              {index === 0 ? "Over 2.5" : "Under 2.5"}
            </p>
          ) : (
            ""
          )}
          <StoreTable
            style={style}
            profile={true}
            endpoint={each.endpoint}
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
        <title>2 Odds- Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={7} />
    </div>
  );
};

export default ProfileSure2;
