import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";
import crypto from "../assets/crypto.jpeg";
import paypal from "../assets/paypal.png";
import Main from "../Main";

const fwPublicKey = process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY;

const FlutterwaveCheckout = () => {
  const api = process.env.REACT_APP_BASE_API;
  const authHeader = localStorage.getItem("token");
  const navigate = useNavigate();
  const [openCrypto, setOpenCrypto] = useState(false);
  const [openPaypal, setOpenPaypal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user.email;
  const name = user.name;
  const phone = user.phone;

  const config = {
    public_key: fwPublicKey,
    tx_ref: Date.now(),
    amount: sessionStorage.getItem("amount"),
    currency: "USD",
    payment_options: "card",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "../assets/tip-logo.png",
    },
  };

  useFlutterwave(config);

  const fwConfig = {
    ...config,
    text: "Pay Now",
    callback: (response) => {
      sessionStorage.setItem("reference", response.transaction_id);
      if (response.status === "successful") {
        verifyFlutter();
        alert("Thanks for doing business with us! Come back soon!!");
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      sessionStorage.removeItem("plan");
      sessionStorage.removeItem("duration");
      sessionStorage.removeItem("amount");
      sessionStorage.removeItem("planName");
      alert("You didn't completed your payment!");
    },
  };

  const verifyFlutter = async () => {
    try {
      const res = await fetch(`${api}/postendpoints/verify-flutter`, {
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

      if (res_json.data.status === "successful") {
        upgrade();
      } else {
        toast.info("something went wrong");
      }
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("duration")) {
      navigate("/");
    }
  }, []);

  const upgrade = async () => {
    try {
      const res = await fetch(`${api}/postendpoints/flutter-upgrade`, {
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
        toast.error("Unable to complete your request!");
        return console.log("Unable to complete your request!");
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
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  const Checkout = (
    <div className="lg:h-screen lg:my-16 lg:rounded-xl mx-auto lg:overflow-y-scroll bg-white lg:w-9/12">
      <h1 className="millik text-2xl text-center border-b pt-7 pb-3 mb-10">
        Payment Method
      </h1>
      <div className="px-6 lg:px-16">
        {/* <div className="justify-between border-b md:flex pb-7 mb-10">
          <div className="md:flex md:w-10/12">
            <div className="md:w-2/12 mr-7">
              <img
                src={flutter}
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
                email address you used in registering on the website corresponds
                with that on the online payment platform.
              </p>
            </div>
          </div>
          <FlutterWaveButton
            className="md:w-2/12 text-sm border-2 mt-2 md:mt-0 h-fit my-auto rounded py-2 md:px-1 px-3 hover:text-white hover:bg-purple-900 hover:border-purple-700 font-semibold transition-all ease-in-out"
            {...fwConfig}
          />
        </div> */}
        <div className="border-b pb-7 mb-10">
          <div className="justify-between md:flex">
            <div className="md:flex md:w-10/12">
              <div className="md:w-2/12 mr-7">
                <img
                  src={crypto}
                  alt="tips180-crypto-pay-img"
                  className="w-24 md:w-32 shadow rounded"
                  style={{ height: "120px" }}
                />
              </div>
              <div className="md:w-8/12">
                <h2 className="font-bold mb-2 mt-2 md:mt-0">
                  Payment with Crypto
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
                onClick={() => setOpenCrypto(!openCrypto)}
              >
                <p className="p-2 text-sm md:text-base">
                  {!openCrypto ? "View" : "Hide"} Details
                </p>
              </div>
            </div>
          </div>
          <div className={!openCrypto ? `hidden` : `mt-10`}>
            <p className="text-sm md:text-base">
              Kindly contact us via Whatsapp on{" "}
              <span className="font-semibold">+234 814 600 0171</span> or send a
              mail to <span className="font-semibold">crypto@tips180.com</span>{" "}
              for details on how to make payment via CRYPTO
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <a
                href="https://wa.link/j1td8w"
                target="_blank"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>WHATSAPP</p>
              </a>
            </button>
            <p className="mt-2 text-sm md:text-base">
              Your Tips180 account will be upgraded before the close of business
              day.
            </p>
          </div>
        </div>
        <div className="border-b pb-7 mb-10">
          <div className="justify-between md:flex">
            <div className="md:flex md:w-10/12">
              <div className="md:w-2/12 mr-7">
                <img
                  src={paypal}
                  alt="tips180-paystack-pay-img"
                  className="w-24 md:w-32 shadow rounded"
                />
              </div>
              <div className="md:w-8/12">
                <h2 className="font-bold mb-2 mt-2 md:mt-0">
                  Payment via Paypal
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
                onClick={() => setOpenPaypal(!openPaypal)}
              >
                <p className="p-2 text-sm md:text-base">
                  {!openPaypal ? "View" : "Hide"} Details
                </p>
              </div>
            </div>
          </div>
          <div className={!openPaypal ? `hidden` : `mt-10`}>
            <p className="text-sm md:text-base">
              Kindly click on the PAYPAL button below to view the PayPaldetails.
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <a
                href="https://www.paypal.me/ojett904?locale.x=en_CA"
                target="_blank"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PAYPAL</p>
              </a>
            </button>
            <p className="mt-2 text-sm md:text-base">
              After making payment, it is important to share your payment proof
              as a Whatsapp message to{" "}
              <span className="font-semibold">+234 814 600 0171</span> or to our
              mailbox at{" "}
              <span className="font-semibold">paypal@tips180.com</span> <br />
              <p className="mt-2">
                Your Tips180 account would be upgraded within 24 hours.
              </p>
            </p>
          </div>
        </div>
        <div className="py-7 lg:py-0 lg:my-10">
          <h2 className="millik text-red-600">REFUND POLICY</h2>
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
          <h2 className="millik text-red-600">DISCLAIMER</h2>
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

export default FlutterwaveCheckout;
