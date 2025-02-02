import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./Dashboard";
import BCode from "./BookingCode";
import FAQ from "../../src/assets/faq.png";
import Loader from "./Loader";
import { Link, Element } from "react-scroll";
import { Helmet } from "react-helmet";

const Odds50 = () => {
  const [data, setData] = useState(null);
  const [matchData, setMatchData] = useState(null);
  const [dataSet, setDataSet] = useState(1);
  const [presentFaq, setPresentFAQ] = useState(null);
  const [closed, setClosed] = useState(true);
  const [cardNo, setCardNo] = useState(0);
  const [bcode, setBCode] = useState(null);
  const faq = [
    // { q: "How does it work?", a: "a" },
    // { q: "How many times do I get the 50 Odds?", a: "b" },
  ];
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
  const faqRefs = useRef(faq.map(() => React.createRef()));
  const targetRef = useRef(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleClick = (i) => {
    const faqCard = faqRefs.current[i - 10].current;
    faqCard.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setPresentFAQ(faq[i - 10]);
    setClosed((prevClosed) => !prevClosed);
    setCardNo(i);
  };

  const Get50Odds = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/sure50`, {
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
        setData(res_json.matches.filter((m) => m.sure50_1st === true));
        setMatchData(res_json.matches);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  const GetBookingCode = async (set) => {
    try {
      const res = await fetch(`${api}/getendpoints/bookings/odds50${set}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();
      if (!res.ok) {
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
      } else {
        setBCode(res_json);
        console.log("booking >>>>>>>>>>>>>>>>>", res_json);
        // setData(res_json.matches);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };
  // const Sort = (data) => {
  //   console.log(data);
  //   for (let i of data) {
  //     if (!Data.includes(i.date)) {
  //       Data.push(i.date);
  //     }
  //   }
  //   console.log(Data);
  // };

  const Top = (
    <div className="lg:px-5 flex flex-wrap items-center justify-between w-full">
      <h1
        style={{ fontSize: "" }}
        className="text-md lg:text-3xl font-bold w-1/2 lg:w-2/4 mona-head"
      >
        Buy 50 Odds!
      </h1>
      {/* <div className="flex flex-wrap justify-between   my-1">
        <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-2 lg:px-5 my-1 rounded-md  w-34 lg:w-40 mr-5 ">
          Buy Now
        </button>
        <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-2 lg:px-5 my-1 w-32 lg:w-40 rounded-md ">
          View 50 odds
        </button>
      </div> */}
    </div>
  );

  const Content = (
    <div
      className=" w-full"
      style={{
        overflow: "hidden",
      }}
    >
      {data === null ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-end items-center py-2 px-5">
            <div
              className="cursor-pointer bg-gradient-to-r from-teal-500 to-blue-600 rounded p-2 text-white font-semibold"
              onClick={() => {
                setData(
                  dataSet === 2
                    ? matchData.filter((m) => m.sure50_1st === true)
                    : matchData.filter((m) => m.sure50_2nd === true)
                );
                setDataSet(dataSet === 1 ? 2 : 1);
                GetBookingCode(dataSet === 1 ? 2 : 1);
              }}
            >
              {dataSet === 1 ? "View Second Set" : "View First Set"}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              overflow: "scroll",
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
            }}
            className="p-5"
          >
            {/* <GamesTable data={data}/> */}
            <table className="w-full text-center text-sm md:text-base my-10">
              <tr
                className="w-full my-2"
                style={{ backgroundColor: "#62C7A1", color: "#FFF" }}
              >
                <th>Date</th>
                <th>Time</th>
                <th>League</th>
                <th>Match</th>
                <th>Tip</th>
                <th>Confidence</th>
                <th>Odds</th>
                <th>Scores</th>
              </tr>
              {data?.map((dat, i) => (
                <tr className="py-2 text-xs md:text-base" key={i}>
                  <td
                    style={{ borderRight: "1px solid #828282" }}
                  >{`${dat?.date.slice(8)}/${dat?.date.slice(5, 7)}`}</td>
                  <td style={{ borderRight: "1px solid #828282" }}>
                    {dat?.time}
                  </td>
                  <td style={{ borderRight: "1px solid #828282" }}>
                    {dat?.league}
                  </td>
                  <td
                    style={{
                      color: "#6D55F1",
                      borderRight: "1px solid #828282",
                    }}
                  >
                    {dat?.name}
                  </td>
                  <td style={{ borderRight: "1px solid #828282" }}>
                    {dataSet === 1 ? dat?.sure50_1st_tip : dat?.sure50_2nd_tip}
                  </td>
                  <td style={{ borderRight: "1px solid #828282" }}>
                    {dat?.confidence}
                  </td>
                  <td style={{ borderRight: "1px solid #828282" }}>
                    {dataSet === 1
                      ? dat?.sure50_1st_odds
                      : dat?.sure50_2nd_odds}
                  </td>
                  <td>{dat?.ftscore}</td>
                </tr>
              ))}
            </table>
          </div>
          {bcode != null && <BCode data={bcode} />}
        </>
      )}
      <div className="mx-auto">
        <div className="md:w-5/6 mx-auto items-center text-center">
          <p
            className="md:w-5/6 flex text-sm md:text-base justify-even mx-auto text-left font-bold my-16 mona-head"
            style={{ color: "#4F4F4F" }}
          >
            NOTE: Although matches were carefully selected by our experts, we
            strongly recommend you stake responsibly!
          </p>
          <p className="my-20 text-left text-red-600 md:text-base text-sm mona-head">
            STAKE WHAT YOU CAN AFFORD TO LOSE!!!
          </p>
        </div>

        <div style={{ backgroundColor: "#EFECFD" }} className="p-5">
          <h1 className="text-xl mona">The 50 Odds Plan</h1>
          <div name="target" className="my-8">
            {faq.map((each, index) => (
              <div key={index}>
                <div
                  className={
                    !closed && cardNo === index + 10
                      ? `flex cursor-pointer justify-between text-xs lg:text-base rounded-t-md mt-4 py-2 px-4 items-center shadow-sm mx-auto`
                      : `flex cursor-pointer justify-between text-xs lg:text-base rounded-md mt-4 py-2 px-4 items-center shadow-sm mx-auto`
                  }
                  style={{ backgroundColor: "#F2F2F2" }}
                  onClick={() => {
                    // setClosed(!closed);
                    // setCardNo(index + 10);
                    handleClick(index + 10);
                  }}
                  key={index}
                  ref={faqRefs.current[index]}
                >
                  <p className="font-bold">{each.q}</p>
                  <ion-icon
                    size="small"
                    name={
                      !closed && cardNo === index + 10
                        ? "remove-circle-outline"
                        : "add-circle-outline"
                    }
                  ></ion-icon>
                </div>
                <div
                  className={
                    !closed && cardNo === index + 10
                      ? `flex cursor-pointer justify-between text-xs lg:text-base rounded-b-md mb-4 py-2 px-4 items-center shadow-sm mx-auto`
                      : `hidden`
                  }
                  style={{ backgroundColor: "#FFF" }}
                >
                  {each.a}
                </div>
              </div>
            ))}
          </div>
          <div className="my-10">
            <h2 className="mona text-xl" style={{ color: "#4f4f4f" }}>
              50 ODDS WINNING TACTICS
            </h2>
            <p className="my-5 text-sm">
              Although, odds were strategically and carefully selected by our
              experts, we’d strongly recommend you understand your staking
              power, stake responsibly and do not stake what you cannot afford
              to lose. Mostly during the weekends, two sets of 50 Odds are
              usually provided. We’d suggest you split your staking budget
              across the sets of tips provided. We’d suggest the 4-3-3 formula.
            </p>
            <p className="my-10 text-sm">
              For example, if you have a staking budget of $10, you may stake $4
              on the first set, stake $3 on the second set, stake the remaining
              $3 on a selected set crafted by you. Made on your gut feelings or
              based on the experts’ confidence level. You may select 4 tips from
              Set 1 and 4 tips from Set 2 for your permutation.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    Get50Odds();
    GetBookingCode(dataSet);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Buy 50 Odds! - Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={9} />
    </div>
  );
};

export default Odds50;
