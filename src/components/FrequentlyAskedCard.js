import React, { useState } from "react";
import faqBg from "../assets/faqBg.PNG";
import { Faq } from "../data/faqData";

function FrequentlyAskedCard({ title, content }) {
  const [closed, setClosed] = useState(true);
  const [cardNo, setCardNo] = useState(0);
  return (
    <div
      className="py-14 h-screen overflow-y-scroll"
      id="faq"
      style={{ backgroundImage: `url(${faqBg})`, backgroundSize: "100% 100%" }}
    >
      <div className="mx-auto text-white text-center">
        <h2 className="millik text-xl md:text-2xl lg:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-xs lg:text-base mx-auto w-9/12 lg:w-1/3">
          We will try to answer as much as we can here, if you need more help,
          reach us at hello@tips180.com
        </p>
      </div>
      <div className="bg-white lg:rounded-xl rounded-md mx-auto mt-5 py-6 px-9 w-11/12 lg:w-6/12">
        {Faq.map((each, index) => (
          <div key={index} style={{ borderBottom: "1px solid #f2f2f2" }}>
            <div
              className={
                !closed && cardNo === index + 10
                  ? `flex cursor-pointer justify-between text-xs lg:text-base w-full ${
                      index !== 0 ? "mt-4" : ""
                    } py-2 items-center mx-auto`
                  : `flex cursor-pointer justify-between text-xs lg:text-base w-full ${
                      index !== 0 ? "mt-4" : ""
                    } py-2 items-center mx-auto`
              }
              onClick={() => {
                setClosed(!closed);
                setCardNo(index + 10);
              }}
              key={index}
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
                  ? `flex cursor-pointer justify-between text-xs lg:text-base w-full mb-4 py-2 items-center mx-auto`
                  : `hidden`
              }
            >
              {each.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedCard;
