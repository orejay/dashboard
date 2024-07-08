import React from "react";
import Main from "../Main";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const about = (
    <div className="w-full py-5 lg:py-10 " style={{ background: "#F2F2F2" }}>
      <div className="py-5 lg:py-10 md:min-h-screen  px-5 lg:px-14  mx-auto rounded-lg bg-white w-full lg:w-5/6">
        <h2
          className="mb-3 millik bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "24px" }}
        >
          ABOUT TIPS180 SERVICES
        </h2>
        <p>
          At Tips180, we are passionate about guiding punters across the world
          win more than they lose eventually.
        </p>
        <h3
          className="my-3 millik bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "18px" }}
        >
          WHAT IS OUR OBJECTIVE? HOW DO YOU BENEFIT?
        </h3>
        <h4
          className="my-3 millik bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "18px" }}
        >
          We?
        </h4>
        <ul className="list-disc pl-8">
          <li>Thoroughly analyze football matches.</li>
          <li>
            Consider all aspects of uncertainties to provide tip(s) that has the
            highest probability to win.
          </li>
          <li>Avoid predicting uncertain football matches.</li>
          <li>Provide analytical report for our premium users on demand.</li>
          <li>
            Provide series of Experts’ tips for our users to make selections on
          </li>
          <li>
            Provide different types of plan tailored to accommodate your betting
            style.
          </li>
        </ul>
        <h4
          className="my-3 millik bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "18px" }}
        >
          You?
        </h4>
        <ul className="list-disc pl-8">
          <li>Have different plans to make your selections from.</li>
          <li>Form your ideas and opinions based on our guidance.</li>
          <li>Increase your chances of winning.</li>
          <li>Typically win more than you lose.</li>
          <li>
            Aren’t spending a lot of time making match forecasts on your own
          </li>
          <li>WIN!</li>
        </ul>
        <h3
          className="my-3 millik bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "18px" }}
        >
          HOW DO WE OPERATE?
        </h3>
        <p>For every tip provide on our platform, we have covered;</p>
        <ul className="list-disc pl-8">
          <li>Concrete reasoning behind each pick.</li>
          <li>
            Risk management strategy which determines possible outcomes of
            single and multiple events.
          </li>
          <li>
            Recommendations on how to spread your budget among selected picks.
          </li>
        </ul>
        <p>
          Our team offers details concerning upcoming football matches on
          request. You are not compelled to take all our selections. It is your
          choice whether to place a bet on recommended result.
        </p>
        <h3
          className="my-3 millik bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "18px" }}
        >
          WE PREDICT TOP LEAGUES
        </h3>
        <p>
          At Tips180, we offer predictions mainly on top leagues and major
          tournaments. We try to avoid predicting the outcome of non-popular
          leagues and uncertain events. Top-leagues are under constant close
          attention of media and sport governing organizations, unlike
          non-popular championships, where there is a high chance of bribery. In
          this case, how can you trust such analysis? Simply put, we are
          dedicated to help you increase the success rate of your bets!
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>About Us - Tips180</title>
      </Helmet>
      <Main Prop={about} />
    </div>
  );
};

export default AboutUs;
