import React, { useState } from "react";
import orange from "../assets/orange.jpeg";
import Main from "../Main";

const SlPayment = () => {
  const [openOrange, setOpenOrange] = useState(false);

  const Checkout = (
    <div className="lg:h-screen lg:my-16 lg:rounded-xl mx-auto lg:overflow-y-scroll bg-white lg:w-9/12">
      <h1 className="mona-head text-2xl text-center border-b pt-7 pb-3 mb-10">
        Payment Method
      </h1>
      <div className="px-6 lg:px-16">
        <div className="border-b pb-7 mb-10">
          <div className="justify-between md:flex">
            <div className="md:flex md:w-10/12">
              <div className="md:w-2/12 mr-7">
                <img
                  src={orange}
                  alt="tips180-paystack-pay-image"
                  className="w-24 md:w-32 shadow rounded"
                />
              </div>
              <div className="md:w-8/12">
                <h2 className="font-bold mb-2 mt-2 md:mt-0">
                  Payment via Orange Money
                </h2>
                <p className="text-sm md:text-base">
                  Your Tips180 account will be upgraded once payment has been
                  confirmed
                </p>
              </div>
            </div>
            <div className="mt-2 md:w-2/12 md:mt-0 flex justify-end">
              <div
                className="greybgh flex items-center text-sm font-semibold justify-center rounded w-2/5 md:w-full p-0 h-fit cursor-pointer border-2"
                onClick={() => setOpenOrange(!openOrange)}
              >
                <p className="p-2 text-sm md:text-base">
                  {!openOrange ? "View" : "Hide"} Details
                </p>
              </div>
            </div>
          </div>
          <div className={!openOrange ? `hidden` : `mt-10`}>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made only to{" "}
              <span className="font-semibold">+232 781 093 88</span>
              <br /> After making payment, please send the details below as a
              Whatsapp message to{" "}
              <span className="font-semibold">+232 760 600 00</span>. <br />
              <ol className="pl-2">
                <li>1. YOUR Orange MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
        </div>
        <div className="py-7 lg:py-0 lg:my-10">
          <h2 className="mona-head text-red-600">REFUND POLICY</h2>
          <p className="text-sm md:text-base">
            Refund Policy: Please note that once you have paid for a plan, and
            your account has been upgraded, then the service is deemed to have
            been provided. After that point, there will be no refunds as the
            service has been delivered at your own request, and an agreed price
            before making payment. Information transmitted is intended only for
            person(s) or entity above the age of 18. Bet Responsibly!
          </p>
        </div>

        <div className="py-7 lg:py-0 lg:my-10">
          <h2 className="mona-head text-red-600">DISCLAIMER</h2>
          <p className="text-sm md:text-base">
            Information transmitted is intended only for the persons or entity
            above the age of 18. Tips180 do NOT refund money paid for
            subscription and not liable to any money lost or gained. Countries
            that soccer betting is not legal should not subscribe to our plans.
            You can read through our Terms and Conditions for more information
            on Tips180.
          </p>
        </div>
      </div>
    </div>
  );

  return <Main Prop={Checkout} />;
};

export default SlPayment;
