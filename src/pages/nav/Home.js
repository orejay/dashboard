import React, { useEffect, useState, lazy, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import Main from "../../Main";
import Hero from "../../components/Hero";
import FrequentlyAskedCard from "../../components/FrequentlyAskedCard";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mui/material";
import Writeup from "../../components/Writeup";
import LandingStore from "../../components/LandingStore";
import loyaltyMob from "../../assets/loyalty-mobile.png";
import loyaltyPc from "../../assets/loyalty-pc.png";
const SmartBetLanding = lazy(() => import("../../components/SmartBetLanding"));
const AllFreeExpert = lazy(() => import("../../components/AllFreeExpert"));
const SportsNews = lazy(() => import("../../components/SportsNews"));
const Feedback = lazy(() => import("../../components/Feedback"));
const LandingLeagues = lazy(() => import("../../components/LandingLeagues"));
const LandingPlans = lazy(() => import("../../components/LandingPlans"));
const WinUpcomingCards = lazy(() =>
  import("../../components/WinUpcomingCards")
);

function Home() {
  const [isValid, setIsValid] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleComponents, setVisibleComponents] = useState({});
  const isMobile = useMediaQuery("(max-width:450px)");
  const token = localStorage.getItem("token");
  const refs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const IsUserAuthorized = async () => {
    try {
      const res = await fetch("https://www.tips180.lol/getendpoints/auth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } catch (error) {
      setIsValid(false);

      console.log("Check your network");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleComponents((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
  });

  useEffect(() => {
    if (token) IsUserAuthorized();
  }, []);

  const Loader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: isMobile ? "24px" : "36px",
        height: "150px",
      }}
    >
      <div className="w-12 h-12 border-6 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );

  const Prop = (
    <div className="bg-white">
      <Helmet>
        <title>
          "Tips180: Best Football Prediction Site | Win with Sure Odds"
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
      <div ref={refs[0]}>
        {visibleComponents[0] && (
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                {Loader}
              </div>
            }
          >
            <AllFreeExpert />
          </Suspense>
        )}
      </div>
      <Suspense fallback={<div className="h-screen">Loading...</div>}>
        <div className="flex mx-auto w-11/12 px-4 mb-8 rounded">
          <Link to="/our-plans">
            <img
              src={isMobile ? loyaltyMob : loyaltyPc}
              alt="tips180-loyalty-ad-img"
              className="rounded-md"
            />
          </Link>
        </div>
      </Suspense>
      <div ref={refs[1]}>
        {visibleComponents[1] && (
          <Suspense fallback={<div className="h-screen">Loading...</div>}>
            <SmartBetLanding />
          </Suspense>
        )}
      </div>
      <div ref={refs[2]}>
        {visibleComponents[2] && (
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                {Loader}
              </div>
            }
          >
            <LandingLeagues />
          </Suspense>
        )}
      </div>
      <div ref={refs[3]}>
        {visibleComponents[3] && (
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                {Loader}
              </div>
            }
          >
            <WinUpcomingCards />
          </Suspense>
        )}
      </div>
      <LandingStore />
      <div ref={refs[4]}>
        {visibleComponents[4] && (
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                {Loader}
              </div>
            }
          >
            <LandingPlans />
          </Suspense>
        )}
      </div>
      <div ref={refs[5]}>
        {visibleComponents[5] && (
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                {Loader}
              </div>
            }
          >
            <SportsNews />
          </Suspense>
        )}
      </div>
      <div ref={refs[6]}>
        {visibleComponents[6] && (
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                {Loader}
              </div>
            }
          >
            <Feedback />
          </Suspense>
        )}
      </div>
      <FrequentlyAskedCard />
      <Writeup />
    </div>
  );

  return <Main Prop={Prop} logIn={isValid} />;
}

export default Home;
