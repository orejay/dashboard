import React from "react";
import Dashboard from "./Dashboard";
import Data from "../data/PuntersData";
import { Helmet } from "react-helmet";

const PuntersGuide = () => {
  const Top = (
    <div className="flex w-full" style={{ lineHeight: "2" }}>
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold millik "
      >
        Punter's Guide
      </h1>
    </div>
  );

  const Content = (
    <div>
      <p className="mb-8 md:text-base text-sm">
        Anybody can win a bet. It could be through skill or it could just be
        through dumb luck on a bet with terrible odds. To consistently win more
        than you lose is much harder and requires skill rather than luck.
      </p>
      <p className="my-8 md:text-base text-sm">
        Even if you have skill in estimating what the odds for an event should
        be, you are likely to lose many of your bets, as betting by definition
        exposes you to uncertain future outcomes. You will have periods where
        everything goes right and periods where nothing goes right – all due to
        luck.
      </p>
      <p className="my-8 md:text-base text-sm">
        To survive all of this, you need a consistent approach to decide when
        and how much to bet to ensure you make the most from the bookmakers;
        that is why we advise you thoroughly examine this page to be a
        successful punter and minimize the negative impact of bad luck.
      </p>
      {Data.map((data, index) => {
        return (
          <div key={index}>
            <h3 className="font-bold millik">{data?.title}</h3>

            <div>
              {data.content.map((dat, i) => (
                <p className="my-8 md:text-base text-sm" key={i}>
                  {dat}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      <Helmet>
        <title>Punters Guide - Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={13} />
    </div>
  );
};
export default PuntersGuide;
