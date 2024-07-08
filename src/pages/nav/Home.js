import React, { useEffect, useState, lazy, Suspense } from "react";
import Main from "../../Main";
import FrequentlyAskedCard from "../../components/FrequentlyAskedCard";
import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";
import SmartBetLanding from "../../components/SmartBetLanding";
import AllFreeExpert from "../../components/AllFreeExpert";
import Writeup from "../../components/Writeup";
import LandingStore from "../../components/LandingStore";
const SportsNews = lazy(() => import("../../components/SportsNews"));
const Feedback = lazy(() => import("../../components/Feedback"));
const LandingLeagues = lazy(() => import("../../components/LandingLeagues"));
const LandingPlans = lazy(() => import("../../components/LandingPlans"));
const WinUpcomingCards = lazy(() =>
  import("../../components/WinUpcomingCards")
);

function Home() {
  const [isValid, setIsValid] = useState(false);
  const token = localStorage.getItem("token");

  const IsUserAuthorized = async () => {
    try {
      const res = await fetch("https://www.tips180.lol/getendpoints/auth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();

      if (!res.ok) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } else {
        setIsValid(true);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  useEffect(() => {
    IsUserAuthorized();
  }, []);

  const Prop = (
    <div className="bg-white">
      <Helmet>
        <title>
          Best Football Prediction Site & Betting Tips | Win with Sure Odds
        </title>
        <meta
          name="description"
          content="Tips180.com is the best football prediction site for accurate betting tips. Join us for daily expert predictions and sure odds to win big in football betting!"
        />
        <meta
          name="google-site-verification"
          content="DqZFd8jPyM6Jb9Q4C3Qlmaj-d8IUxAoGo-vwkBIiSJo"
        />
        <meta name="author" content="tips180" />
      </Helmet>
      <Hero />
      <AllFreeExpert />
      <SmartBetLanding />
      <Suspense fallback={<div className="h-screen">Loading...</div>}>
        <LandingLeagues />
      </Suspense>
      <Suspense fallback={<div className="h-screen">Loading...</div>}>
        <WinUpcomingCards />
      </Suspense>
      <LandingStore />
      <Suspense fallback={<div className="h-screen">Loading...</div>}>
        <LandingPlans />
      </Suspense>
      <Suspense fallback={<div className="h-screen">Loading...</div>}>
        <SportsNews />
      </Suspense>
      <Suspense fallback={<div className="h-screen">Loading...</div>}>
        <Feedback />
      </Suspense>
      <FrequentlyAskedCard />
      <Writeup />
    </div>
  );

  return <Main Prop={Prop} logIn={isValid} />;
}

export default Home;
