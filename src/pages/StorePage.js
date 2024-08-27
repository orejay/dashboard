import React from "react";
import { useEffect, lazy, Suspense } from "react";
import { toast } from "react-toastify";
import Main from "../Main";
import { useNavigate } from "react-router-dom";
const StoreTable = lazy(() => import("../components/StoreTable"));

const style = {
  width: "90%",
};

const endpoints = {
  doublechance: [{ endpoint: "dc", tip: "dctip", title: "Double Chance" }],
  pr: [
    {
      endpoint: "potential-risk",
      tip: "potentialrisktip",
      title: "Potential Risk",
    },
  ],
  over1: [{ endpoint: "over-1", tip: "over1", title: "Over 1.5" }],
  correctscore: [
    { endpoint: "correct-score", tip: "cstip", title: "Correct Score" },
  ],
  bts: [{ endpoint: "bts", tip: "bts", title: "Both Teams Score" }],
  over2: [
    { endpoint: "over-2", tip: "over2", title: "Over/Under 2.5" },
    { endpoint: "under-2", tip: "under2", title: "Under 2.5" },
  ],
  singlecombo: [
    { endpoint: "single-combo", tip: "singlecombotip", title: "Single Combo" },
  ],
  weekendtip: [
    { endpoint: "weekend", tip: "weekendtip", title: "Weekend Tips" },
  ],
  htft: [
    { endpoint: "ht-ft", tip: "htfttip", title: "Half Time Full Time Tips" },
  ],
  singlebet: [
    { endpoint: "single-bet", tip: "singlebettip", title: "Single Bet Tips" },
  ],
  sbh: [{ endpoint: "sbh", tip: "sbhtip", title: "Score Both Halves Tips" }],
  handicap: [
    { endpoint: "handicap", tip: "handicaptip", title: "Handicap Tips" },
  ],
  odds2: [
    { endpoint: "sure2/1", tip: "sure2tip", title: "2 Odds Tips" },
    { endpoint: "sure2/2", tip: "sure2tip", title: "2 Odds Tips" },
  ],
  odds3: [
    { endpoint: "sure3/1", tip: "sure3tip", title: "3 Odds Tips" },
    { endpoint: "sure3/2", tip: "sure3tip", title: "3 Odds Tips" },
  ],
  httips: [
    { endpoint: "ht-tips", tip: "halftimetip", title: "Half Time Tips" },
  ],
  winehalf: [
    {
      endpoint: "win-either-half",
      tip: "wineitherhalftip",
      title: "Win Either Half Tips",
    },
  ],
  draw: [{ endpoint: "draw", tip: "draw", title: "Full Time Draw Tips" }],
};

const StorePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const link = window.location.href.split("/")[4];
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
  });

  const market = (
    <div className="pb-10">
      <div className="flex justify-center">
        <div className="w-full bg-gradient-to-r py-12 lg:py-20 flex flex-col justify-center items-center from-teal-600 to-blue-600">
          <h2 className="text-2xl lg:text-4xl text-white font-medium millik">
            {endpoints[link][0].title}
          </h2>
        </div>
      </div>
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
          <Suspense fallback={<div>Loading...</div>}>
            <StoreTable
              style={style}
              profile={false}
              endpoint={each.endpoint}
              tip={each.tip}
              index={index}
              link={link}
            />
          </Suspense>
        </div>
      ))}
    </div>
  );

  const Markets = () => <div className="min-h-screen">{market}</div>;

  return <Main Prop={<Markets />} />;
};

export default StorePage;
