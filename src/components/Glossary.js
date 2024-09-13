import React from "react";
import Dashboard from "./Dashboard";
import Data from "../data/GlossaryData";
import { data } from "autoprefixer";

const Glossary = () => {
  const Top = (
    <div className="flex w-full">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold millik"
      >
        Glossary
      </h1>
    </div>
  );

  const Content = (
    <div>
      <p className="mb-8 md:text-base text-sm" style={{ lineHeight: "2" }}>
        When you first enter the world of football betting, it can be
        overwhelming. There are a lot of betting terms to master, and
        understanding the various elements of betting terminology can seriously
        affect your enjoyment of the games. Taking a moment to familiarize
        yourself with the various terms and phrases will help you to feel more
        comfortable and sound like a serious punter even while you learn the
        ropes.
      </p>
      <div className="my-8 md:text-base text-sm" style={{ lineHeight: "2" }}>
        In Betting many specific terms are used.
        <br /> On this betting glossary page, we want to collect and explain the
        key ones.
        <br /> If you miss a term, send it to us, and we will add it to the
        list!
      </div>

      {Data.map((dataa, index) => {
        return (
          <div className="flex  my-7 w-full" key={index}>
            <h3
              className="font-bold w-1/5 millik break-all"
              style={{ fontSize: "16px" }}
            >
              {dataa.title}
            </h3>

            <p
              className="w-4/5 mx-3 md:text-base text-sm"
              style={{ lineHeight: "2" }}
            >
              {dataa.content}
            </p>
          </div>
        );
      })}
    </div>
  );
  return <Dashboard Top={Top} Content={Content} active={14} />;
};
export default Glossary;
