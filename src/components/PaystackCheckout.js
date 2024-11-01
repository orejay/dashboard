import React, { useEffect } from "react";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Main from "../Main";
import paystack from "../assets/paystack.png";
import bank from "../assets/bank.png";
import opay from "../assets/opay.png";

const PaystackCheckout = () => {
  const publicKey = process.env.REACT_APP_PAYSTACK_TEST_KEY;
  const user = JSON.parse(localStorage.getItem("user"));
  const amount = sessionStorage.getItem("amount") * 100;
  const email = user.email;
  const name = user.name;
  const api = process.env.REACT_APP_BASE_API;
  const authHeader = localStorage.getItem("token");
  const navigate = useNavigate();
  const [openBank, setOpenBank] = useState(false);
  const [openOpay, setOpenOpay] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: "Okay, got it!",
    onSuccess: (response) => {
      sessionStorage.setItem("reference", response.reference);
      verifyPaystack();
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => {
      sessionStorage.removeItem("plan");
      sessionStorage.removeItem("duration");
      sessionStorage.removeItem("amount");
      sessionStorage.removeItem("planName");
      alert("You didn't completed your payment!");
    },
  };

  const verifyPaystack = async () => {
    try {
      const res = await fetch(`${api}/postendpoints/verify-paystack`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + authHeader,
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
        upgrade();
      } else {
        toast.info("Payment Unsuccessful!");
      }
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  const upgrade = async () => {
    try {
      const res = await fetch(`${api}/postendpoints/paystack-upgrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + authHeader,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({
          plan: sessionStorage.getItem("plan"),
          duration: sessionStorage.getItem("duration"),
          reference: sessionStorage.getItem("reference"),
        }),
      });
      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Unable to upgrade user!");
        return console.log("Unable to upgrade user!");
      }

      toast.info(
        `Payment Complete! Your ${sessionStorage.getItem(
          "planName"
        )} Plan Has Been Activated Successfully!`
      );
      sessionStorage.removeItem("plan");
      sessionStorage.removeItem("duration");
      sessionStorage.removeItem("amount");
      sessionStorage.removeItem("planName");
      navigate("/dashboard/profile");
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("duration")) {
      navigate("/");
    }
  }, []);

  const Checkout = (
    <div>
      {isModal && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300" />
      )}
      {isModal && (
        <div className="bg-white rounded fixed z-50 inset-0 flex-column justify-between items-center p-4 w-9/12 md:w-5/12 md:h-44 h-3/6 shadow-md top-37 md:top-1/2 md:left-37 left-12">
          <div className="border-b-2 mb-2">
            <button
              onClick={() => setIsModal(false)}
              className=" text-red-600 font-bold"
            >
              x
            </button>
          </div>
          <div className="text-base text-red-600 font-semibold mb-6">
            Please do not leave this page until your payment has been
            successfully processed. Your account will be automatically
            activated.
          </div>
          <div className="flex justify-end">
            <PaystackButton
              className=" text-sm border-2 w-full md:w-2/5 mt-2 md:mt-0 h-fit my-auto rounded py-2 md:px-1 px-3 greybgh font-semibold transition-all ease-in-out"
              {...componentProps}
            />
          </div>
        </div>
      )}
      <div
        className={`lg:h-screen lg:my-16 lg:rounded-xl mx-auto lg:overflow-y-scroll bg-white lg:w-9/12`}
      >
        <h1 className="millik text-2xl text-center border-b pt-7 pb-3 mb-10">
          Payment Method
        </h1>
        <div className="px-6 lg:px-16">
          <div className="justify-between border-b md:flex pb-7 mb-10">
            <div className="md:flex md:w-10/12">
              <div className="md:w-2/12 mr-7">
                <img
                  src={paystack}
                  alt="paystack-image"
                  className="md:w-32 w-24"
                />
              </div>
              <div className="md:w-8/12">
                <h2 className="font-bold mb-2 mt-2 md:mt-0">
                  Payment Online With Your Debit/Card
                </h2>
                <p className="text-sm md:text-base">
                  Your account will be upgraded automatically after a successful
                  transaction. Refresh account for an activation. Pls ensure the
                  email address you used in registering on the website
                  corresponds with that on the online payment platform.
                </p>
              </div>
            </div>
            <div className="mt-2 md:w-2/12 md:mt-0 flex justify-end">
              <button
                onClick={() => setIsModal(true)}
                className="text-sm border-2 md:w-full w-2/5 mt-2 md:mt-0 h-fit my-auto rounded py-2 md:px-1 px-3 greybgh font-semibold transition-all ease-in-out"
              >
                Pay Now
              </button>
            </div>
          </div>
          <div className="border-b pb-7 mb-10">
            <div className="justify-between md:flex">
              <div className="md:flex md:w-10/12">
                <div className="md:w-2/12 mr-7">
                  <img
                    src={bank}
                    alt="paystack-image"
                    className="w-24 md:w-32 shadow rounded"
                  />
                </div>
                <div className="md:w-7/12">
                  <h2 className="font-bold mb-2 mt-2 md:mt-0">
                    Bank App Transfer/USSD Code/Deposit
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
                  onClick={() => setOpenBank(!openBank)}
                >
                  <p className="p-2 text-sm md:text-base">
                    {!openBank ? "View" : "Hide"} Details
                  </p>
                </div>
              </div>
            </div>
            <div className={!openBank ? `hidden` : `mt-10`}>
              <h2 className="millik mb-2">
                BANK APP TRANSFER/ USSD CODE/DEPOSIT
              </h2>
              <p className="text-sm md:text-base">
                You can make payments for your Tips180 account
                activation/upgrade ONLY to the account info below
              </p>
              <h3 className="font-semibold mt-5 text-sm md:text-base">
                TIPS 180 CONCEPTS <br /> 1021742465 <br /> UBA.
              </h3>
              <h3 className="font-semibold mt-5 text-sm md:text-base">
                TIPS 180 CONCEPTS <br /> 1313138723 <br /> ZENITH BANK.
              </h3>
              <p className="mt-2 text-sm md:text-base">
                After making deposits, send the name of the account you made the
                payment from, amount paid and email address (registered on
                TIPS180) or USER ID on the website as a text message to{" "}
                <span className="font-semibold">+2348131149662</span> or send a
                screenshot of payment and USER ID to{" "}
                <span className="font-semibold">+2348131149662</span> on
                WhatsApp. Your Tips180 account will be upgraded once payment has
                been confirmed.
              </p>
            </div>
          </div>
          <div className="border-b pb-7">
            <div className="justify-between md:flex">
              <div className="md:flex md:w-10/12">
                <div className="md:w-2/12 mr-7">
                  <img
                    src={opay}
                    alt="paystack-image"
                    className="w-24 md:w-32 shadow rounded"
                  />
                </div>
                <div className="md:w-7/12">
                  <h2 className="font-bold mb-2 mt-2 md:mt-0">
                    Payment via POS/PALMPAY/OPAY
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
                  onClick={() => setOpenOpay(!openOpay)}
                >
                  <p className="p-2 text-sm md:text-base">
                    {!openOpay ? "View" : "Hide"} Details
                  </p>
                </div>
              </div>
            </div>
            <div className={!openOpay ? `hidden` : `mt-10`}>
              <p className="text-sm md:text-base">
                You can make payments for your Tips180 account
                activation/upgrade ONLY to the account info below
              </p>
              <h3 className="font-semibold mt-5 text-sm md:text-base">
                TIPS 180 CONCEPTS <br /> 1021742465 <br /> UBA.
              </h3>
              <h3 className="font-semibold mt-5 text-sm md:text-base">
                TIPS 180 CONCEPTS <br /> 1313138723 <br /> ZENITH BANK.
              </h3>
              <p className="mt-2 text-sm md:text-base">
                After making deposits, send the agent’s name, amount paid and
                email address (registered on TIPS180) as a text message to{" "}
                <span className="font-semibold">+2348131149662</span> or send a
                screenshot of payment and USER ID to{" "}
                <span className="font-semibold">+2348131149662</span> on
                WhatsApp. Your Tips180 account will be upgraded once payment has
                been confirmed.
              </p>
            </div>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return <Main Prop={Checkout} />;
};

export default PaystackCheckout;
