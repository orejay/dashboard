import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import compete from "../assets/competepw.png";
import predict from "../assets/predpw.png";
import subscribe from "../assets/subpw.png";
import clock from "../assets/clock.svg";
import Flag from "react-flagkit";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
// import Countdown from "./Countdown";
import Countdown from "react-countdown";
import { PaystackButton } from "react-paystack";
import { Button } from "react-scroll";
import { Link } from "react-router-dom";

const PredWin = ({
  isLocationValid,
  country,
  fee,
  redirectUrl,
  isDashboard,
  manualLocation,
}) => {
  const isMobile = useMediaQuery("(max-width:450px)");
  const [data, setData] = useState([]);
  const [round, setRound] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [hovered, setHovered] = useState("");
  const [roundId, setRoundId] = useState(0);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [pred, setPred] = useState("");
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const [payed, setPayed] = useState(false);
  const email = user?.email;
  const name = user?.name;
  const [expiry, setExpiry] = useState(null);
  const [expired, setExpired] = useState(false);
  const [predictions, setPredictions] = useState({});
  const [isModal, setIsModal] = useState(false);
  const [isRuleModal, setIsRuleModal] = useState(false);
  const [isRuleVisible, setIsRuleVisible] = useState(false);
  const token = localStorage.getItem("token");
  const api = process.env.REACT_APP_BASE_API;
  const today = new Date();
  const todaysDate = today.toUTCString();
  const deadline = new Date(expiry);
  const verifyPaystack = async () => {
    try {
      const res = await fetch(`${api}/postendpoints/verify-paystack-pw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + token,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({
          reference: sessionStorage.getItem("reference"),
        }),
      });
      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Unable To Complete Payment!");
        return console.log("Unable To Complete Payment!");
      }

      if (res_json.data.status === "success") {
        completeSubscription();
      } else {
        toast.info("Payment Unsuccessful!");
        toast.clearWaitingQueue();
      }
    } catch (error) {
      toast.info("Check your network!");
    }
  };
  const getMatches = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/predictions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const res_json = await res.json();
      setData(res_json.predictions);
      setRound(res_json.round);
      setRoundId(res_json.setid);
      setExpiry(res_json.expiry);
      const tDay = new Date(todaysDate);
      const exp = new Date(res_json.expiry);
      if (tDay > exp) setExpired(true);
    } catch (e) {
      toast.info("Check your network!");
    }
  };

  const completeSubscription = async () => {
    try {
      const res = await fetch(`${api}/postendpoints/paystack-pw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + token,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({
          round: roundId,
          reference: sessionStorage.getItem("reference"),
        }),
      });
      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Unable to upgrade user!");
        return console.log("Unable to upgrade user!");
      }

      setIsModal(false);
      submitPredictions(pred);
    } catch (error) {
      console.log("error >>>>>>>>", error);
      toast.info("Check your network!");
    }
  };

  const formatDateTime = (dt) => {
    const date = new Date(dt);
    let res;
    try {
      res = date.toISOString().slice(0, 16);
    } catch (e) {
      res = dt;
    }
    return res;
  };

  const componentProps = {
    email,
    amount: fee * 100,
    metadata: {
      name,
    },
    publicKey,
    text: "Proceed to pay",
    onSuccess: (response) => {
      sessionStorage.setItem("reference", response.reference);
      verifyPaystack();
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => {
      sessionStorage.removeItem("fee");
      alert("You didn't completed your payment!");
    },
  };

  const getPaymentStatus = async (cntry, pr) => {
    const res = await fetch(`${api}/getendpoints/pw-payment/${cntry}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        round: roundId,
      }),
    });
    const res_json = await res.json();
    setPayed(res_json.payed);

    if (expired) {
      toast.error("Predictions have closed for this round!");
      toast.clearWaitingQueue();
    } else if (res.status === 403) {
      toast.error("You have already submitted a prediction for this round");
      toast.clearWaitingQueue();
    } else if (res_json === 403) {
      toast.error("You have already submitted a prediction for this round");
      toast.clearWaitingQueue();
    } else if (Object.values(predictions).length < data?.length) {
      toast.error("Kindly select a prediction for every match");
      toast.clearWaitingQueue();
    } else if (!expired && pr.length === data?.length && res_json.payed) {
      submitPredictions(pr);
    } else if (!res_json.payed) {
      toast.clearWaitingQueue();
      setIsModal(true);
    }
  };

  const IsUserAuthorized = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/auth`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();

      if (!res.ok || res.status === 500) {
        localStorage.setItem("prevurl", redirectUrl);
        navigate("/auth/login");
        toast.info("Kindly login to continue");
        toast.clearWaitingQueue();
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setIsValid(false);
      } else {
        if (isValid) {
          let pr = "";
          for (let i = 0; i < Object.values(predictions).length; i++) {
            pr += predictions[`${i}`];
          }
          setPred(pr);
          getPaymentStatus(country, pr);
        }
        setIsValid(true);
        localStorage.setItem("token", res_json.new_token);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  const handlePredict = (index, value) => {
    setPredictions({ ...predictions, [index]: value });
  };

  const handleSubmit = () => {
    IsUserAuthorized();
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);

    const dateString = date.toUTCString();

    return dateString.slice(0, dateString.length - 7);
  };

  // useEffect(() => {
  //   IsUserAuthorized();
  // }, []);

  const submitPredictions = async (pr) => {
    try {
      const res = await fetch(`${api}/postendpoints/submit-prediction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + token,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({
          prediction: pr,
          round,
          set_id: roundId,
        }),
      });

      const res_json = await res.json();

      if (res.status === 403) {
        toast.error("You have already submitted a prediction for this round");
        toast.clearWaitingQueue();
      } else if (!res.ok) {
        toast.error("Unable to submit prediction!");
        return console.log("Unable to add prediction!");
      } else if (res.ok) {
        toast.info("Prediction submitted successfully!");
        toast.clearWaitingQueue();
        navigate("/predict-win");
      }
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  const styl = {
    width: isMobile ? "44px" : "64px",
    height: isMobile ? "44px" : "64px",
  };

  const heading = (
    <div className="flex flex-col items-center bg-white p-8 lg:px-16 lg:rounded-t-xl">
      <h2 className="millik lg:text-xl">How To Play Predict & Win</h2>
      <div className="lg:flex w-full justify-between mt-4">
        <div className="flex justify-start items-center py-4 lg:py-0 border-b lg:border-b-0 lg:w-1/3">
          <img src={subscribe} alt="subscrice-icon" style={styl} />
          <div className="ml-4">
            <h4 className="lg:text-base text-sm font-semibold">
              Subscribe for P&W
            </h4>
            <p className="lg:text-sm text-xs">Pay to play</p>
          </div>
        </div>
        <div className="flex lg:justify-center items-center py-4 lg:py-0 border-b lg:border-b-0 lg:w-1/3">
          <img src={predict} alt="subscrice-icon" style={styl} />
          <div className="ml-4">
            <h4 className="lg:text-base text-sm font-semibold">Predict</h4>
            <p className="lg:text-sm text-xs">
              Predict the outcome (1,X,2) of 12 football matches
            </p>
          </div>
        </div>
        <div className="flex lg:justify-end items-center py-4 lg:py-0 lg:w-1/3">
          <img src={compete} alt="subscrice-icon" style={styl} />
          <div className="ml-4">
            <h4 className="lg:text-base text-sm font-semibold">
              Compete to Win
            </h4>
            <p className="lg:text-sm text-xs">
              Lock in your predictions and stand a chance to win
            </p>
          </div>
        </div>
      </div>
      <h4
        className="text-blue-500 underline font-semibold mt-4 cursor-pointer"
        onClick={() => {
          isDashboard ? setIsRuleVisible(!isRuleVisible) : setIsRuleModal(true);
        }}
      >
        Predict & Win Game Rules
      </h4>
      {isRuleVisible && (
        <div className="mt-4">
          <h3 className="font-semibold mb-1">P&W RULES</h3>
          <div className="text-sm overflow-y-scroll md:h-72 h-96 shadow-inner-bottom px-2 pb-4 rounded">
            <p className="my-2">
              1. You must create an account with us before you can make your
              predictions/or submit your predictions.
            </p>
            <p className="my-2">
              2. Ensure you make a prediction for each of the matches/and
              crosscheck before submitting your predictions.
            </p>
            <p className="my-2">
              3. You may select any one of 1(HOME WIN), X (DRAW), 2 (AWAY WIN)
              for each of the matches.
            </p>
            <p className="my-2">
              4. You stand a chance to win if all predictions made for a Round
              are correct.
            </p>
            <p className="my-2">
              5. You are not allowed to play with multiple accounts. Multiple
              accounts will be closed; and any Winnings you may have accrued
              will be forfeited.
            </p>
            <p className="my-2">
              6. Entries submitted are irrevocable. You will not be allowed to
              cancel or change entries once they have been submitted.
            </p>
            <p className="my-2">
              7. In case of void bets by bookmakers, we reserve the right to
              cancel entry for that Round or cancel the whole Round.
            </p>
            <p className="my-2">
              8. In case of matches postponed, if the matches are not replayed
              within 48 hours, entry for that Round will be deem void.
            </p>
            <p className="my-2">
              9. Winners are not selected by raffle draws. Prize will be shared
              among winners for each round.
            </p>
            <p className="my-2">
              10. You may check your P&W History in your dashboard for your
              records.
            </p>
            <p className="my-2">
              If you do not accept any of our Rules and{" "}
              <Link
                className="underline text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                to="/pw-terms"
              >
                Terms and Conditions
              </Link>
              , please close this page, and discontinue the P&W session.
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const subHead = (
    <div className="flex justify-center p-6">
      <div className="flex flex-col items-center">
        <h3 className="millik text-sm lg:text-base mb-1">
          P & W {round} (This week’s fixtures)
        </h3>
        {expiry && (
          <div className="flex-col items-center lg:flex lg:flex-row lg:text-sm text-xs font-semibold">
            <p className="text-center">
              Expires on {formatDate(expiry)}{" "}
              <span className="hidden lg:inline">|</span>{" "}
            </p>
            <div className="flex lg:ml-1 justify-center items-center">
              {!expired && (
                <img
                  src={clock}
                  alt="clock-icon"
                  className="mr-1"
                  style={{
                    width: isMobile ? "14px" : "18px",
                    height: isMobile ? "14px" : "18px",
                  }}
                />
              )}{" "}
              {expired ? (
                <p className="text-red-600">
                  Predictions have closed for this round
                </p>
              ) : (
                <Countdown date={formatDate(deadline)} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const invalidLocation = (
    <div className="w-full flex justify-center h-24 mt-8">
      <h2 className="millik text-red-500 lg:text-lg text-center">
        Predict and win is currently not available in your location.
      </h2>
    </div>
  );

  const noMatches = (
    <div className="w-full flex justify-center h-24 mt-8">
      <h2 className="millik text-red-500 lg:text-lg text-center">
        Sorry there are currently no matches available.
      </h2>
    </div>
  );

  const cards = (
    <div className="flex flex-col items-center">
      {isModal || isRuleModal ? (
        <div
          onClick={() => {
            setIsRuleModal(false);
            setIsModal(false);
          }}
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300"
        />
      ) : (
        ""
      )}
      {isRuleModal && (
        <div className="bg-white rounded fixed z-50 inset-0 flex-column justify-between items-center p-4 w-9/12 md:w-5/12 md:h-96 h-169 shadow-inner top-40 md:top-40 md:left-37 left-12">
          <div className="border-b-2 mb-2">
            <button
              onClick={() => setIsRuleModal(false)}
              className=" text-red-600 font-bold"
            >
              x
            </button>
          </div>
          <div className="">
            <h3 className="font-semibold mb-1">P&W RULES</h3>
            <div className="text-sm overflow-y-scroll md:h-72 h-96 shadow-inner-bottom px-2 pb-4 rounded">
              <p className="my-2">
                1. You must create an account with us before you can make your
                predictions/or submit your predictions.
              </p>
              <p className="my-2">
                2. Ensure you make a prediction for each of the matches/and
                crosscheck before submitting your predictions.
              </p>
              <p className="my-2">
                3. You may select any one of 1(HOME WIN), X (DRAW), 2 (AWAY WIN)
                for each of the matches.
              </p>
              <p className="my-2">
                4. You stand a chance to win if all predictions made for a Round
                are correct.
              </p>
              <p className="my-2">
                5. You are not allowed to play with multiple accounts. Multiple
                accounts will be closed; and any Winnings you may have accrued
                will be forfeited.
              </p>
              <p className="my-2">
                6. Entries submitted are irrevocable. You will not be allowed to
                cancel or change entries once they have been submitted.
              </p>
              <p className="my-2">
                7. In case of void bets by bookmakers, we reserve the right to
                cancel entry for that Round or cancel the whole Round.
              </p>
              <p className="my-2">
                8. In case of matches postponed, if the matches are not replayed
                within 48 hours, entry for that Round will be deem void.
              </p>
              <p className="my-2">
                9. Winners are not selected by raffle draws. Prize will be
                shared among winners for each round.
              </p>
              <p className="my-2">
                10. You may check your P&W History in your dashboard for your
                records.
              </p>
              <p className="my-2">
                If you do not accept any of our Rules and{" "}
                <Link
                  className="underline text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="/pw-terms"
                >
                  Terms and Conditions
                </Link>
                , please close this page, and discontinue the P&W session.
              </p>
            </div>
          </div>
        </div>
      )}
      {isModal && (
        <div className="bg-white rounded fixed z-50 inset-0 flex-column justify-between items-center p-4 w-9/12 md:w-5/12 md:h-52 h-3/6 shadow-md top-37 md:top-48 md:left-37 left-12">
          <div className="border-b-2 mb-2">
            <button
              onClick={() => setIsModal(false)}
              className=" text-red-600 font-bold"
            >
              x
            </button>
          </div>
          <div className="text-base mb-6">
            Kindly make payments to proceed. <br />
            The entry fee for this round is{" "}
            <span className="font-semibold">
              {country === "Nigeria"
                ? "₦"
                : country === "Ghana"
                ? "GHC"
                : country === "Kenya"
                ? "KSH"
                : country === "Cameroon"
                ? "CFA"
                : country === "Uganda"
                ? "UGX"
                : "KSH"}
              {Number(fee)?.toLocaleString("en-US")} .
            </span>
            {country === "Nigeria"
              ? " Your predictions would be automatically submitted after payment"
              : " Kindly contact an admit after completing payment for this round."}
          </div>
          <div className="flex justify-end">
            {country === "Nigeria" ? (
              <PaystackButton
                className=" text-sm border-2 w-full md:w-2/5 mt-2 md:mt-0 h-fit my-auto rounded py-2 md:px-1 px-3 greybgh font-semibold transition-all ease-in-out"
                {...componentProps}
              />
            ) : (
              <Button
                onClick={() => {
                  if (!token) {
                    navigate(`/auth/login`);
                  } else if (country === "Ghana") {
                    navigate(`/payment/ghana-payment`);
                  } else if (country === "Kenya") {
                    navigate(`/payment/kenya-payment`);
                  } else if (country === "Uganda") {
                    navigate(`/payment/uganda-payment`);
                  } else if (country === "Cameroon") {
                    navigate(`/payment/cameroon-payment`);
                  } else if (country === "Tanzania") {
                    navigate(`/payment/tanzania-payment`);
                  }
                }}
                className=" text-sm border-2 w-full md:w-2/5 mt-2 md:mt-0 h-fit my-auto rounded py-2 md:px-1 px-3 greybgh font-semibold transition-all ease-in-out"
              >
                Proceed to pay
              </Button>
            )}
          </div>
        </div>
      )}
      {data?.map((each, index) => (
        <div key={index} className="w-11/12 p-4 bg-white rounded mb-3">
          <div>
            <div className="lg:text-sm text-xs flex">
              <p className="mr-1">{formatDate(each.date)} |</p>{" "}
              <div
                className="flex items-center justify-center w-fit"
                style={{ borderRadius: "50%" }}
              >
                <Flag
                  country={each.country.value}
                  style={{
                    borderRadius: "50%",
                    width: "14px",
                    height: "14px",
                    objectFit: "cover",
                  }}
                />
              </div>{" "}
              <p className="ml-1">{each.league.label}</p>
            </div>
          </div>
          <div className="flex mt-3 w-full justify-between">
            <div className="lg:text-sm text-xs font-semibold">
              <p>{each.match.split(" vs ")[0]}</p>
              <p>{each.match.split(" vs ")[1]}</p>
            </div>
            <div className="flex items-center text-xs lg:text-sm text-blue-500 font-semibold">
              <div
                onClick={() => handlePredict(index, "H")}
                className={`p-1 h-fit rounded cursor-pointer hover:shadow ${
                  predictions[index] && predictions[index] === "H"
                    ? "shadow"
                    : ""
                }
                }`}
                style={{
                  border: "2px solid #6D55F1",
                  backgroundColor:
                    (predictions[index] && predictions[index] === "H") ||
                    hovered === String(index) + "H"
                      ? "#6D55F1"
                      : "",
                  color:
                    (predictions[index] && predictions[index] === "H") ||
                    hovered === String(index) + "H"
                      ? "#fff"
                      : "",
                }}
                onMouseEnter={() => setHovered(String(index) + "H")}
                onMouseLeave={() => setHovered(0)}
              >
                HOME
              </div>
              <div
                onClick={() => handlePredict(index, "D")}
                className={`mx-2 p-1 h-fit rounded cursor-pointer  ${
                  predictions[index] && predictions[index] === "D"
                    ? "shadow"
                    : ""
                }`}
                style={{
                  border: "2px solid #6D55F1",
                  backgroundColor:
                    (predictions[index] && predictions[index] === "D") ||
                    hovered === String(index) + "D"
                      ? "#6D55F1"
                      : "",
                  color:
                    (predictions[index] && predictions[index] === "D") ||
                    hovered === String(index) + "D"
                      ? "#fff"
                      : "",
                }}
                onMouseEnter={() => setHovered(String(index) + "D")}
                onMouseLeave={() => setHovered(0)}
              >
                DRAW
              </div>
              <div
                onClick={() => handlePredict(index, "A")}
                className={`p-1 h-fit rounded cursor-pointer  ${
                  predictions[index] && predictions[index] === "A"
                    ? "shadow"
                    : ""
                }`}
                style={{
                  border: "2px solid #6D55F1",
                  backgroundColor:
                    (predictions[index] && predictions[index] === "A") ||
                    hovered === String(index) + "A"
                      ? "#6D55F1"
                      : "",
                  color:
                    (predictions[index] && predictions[index] === "A") ||
                    hovered === String(index) + "A"
                      ? "#fff"
                      : "",
                }}
                onMouseEnter={() => setHovered(String(index) + "A")}
                onMouseLeave={() => setHovered(0)}
              >
                AWAY
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="lg:w-11/12 lg:rounded-xl mb-8 pb-6"
      style={{ backgroundColor: "#F7F6FE" }}
    >
      {heading}
      {subHead}
      {isLocationValid && data.length > 0
        ? cards
        : data.length === 0
        ? noMatches
        : invalidLocation}
      <div className="flex justify-center my-3">
        {isLocationValid && data.length > 0 && (
          <button
            onClick={() => {
              handleSubmit();
              sessionStorage.setItem("fee", fee);
            }}
            className={` cursor-pointer from-teal-500 to-blue-600 bg-gradient-to-r ${
              expired ? "opacity-50" : ""
            } text-white hover:shadow-md hover:shadow-green-200 hover:transition-all ease-in-out duration-500 rounded py-2 px-3`}
          >
            Submit your Predictions
          </button>
        )}
      </div>
    </div>
  );
};

export default PredWin;
