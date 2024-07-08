import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useFlutterwave,
  FlutterWaveButton,
  closePaymentModal,
} from "flutterwave-react-v3";
import flutter from "../assets/flutter.png";
import mtn from "../assets/mtn.png";
import mpesa from "../assets/mpesa.png";
import Main from "../Main";

const fwPublicKey = process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY;

const FlutterwaveCheckout = () => {
  const api = process.env.REACT_APP_BASE_API;
  const authHeader = localStorage.getItem("token");
  const navigate = useNavigate();
  const [openMtn, setOpenMtn] = useState(false);
  const [openMpesa, setOpenMpesa] = useState(false);
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
                  src={mtn}
                  alt="paystack-image"
                  className="w-24 md:w-32 shadow rounded"
                />
              </div>
              <div className="md:w-8/12">
                <h2 className="font-bold mb-2 mt-2 md:mt-0">
                  Payment by MTN Mobile Money
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
                onClick={() => setOpenMtn(!openMtn)}
              >
                <p className="p-2 text-sm md:text-base">
                  {!openMtn ? "View" : "Hide"} Details
                </p>
              </div>
            </div>
          </div>
          <div className={!openMtn ? `hidden` : `mt-10`}>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made only to{" "}
              <span className="font-semibold">+233 249 447 682</span>
              <br /> After making payment, please send the details below as a
              Whatsapp message to{" "}
              <span className="font-semibold">+234 814 600 0171</span>. <br />
              <ol className="pl-2">
                <li>1. YOUR MTN MOBILE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
        </div>
        <div className="border-b pb-7 mb-10">
          <div className="justify-between md:flex">
            <div className="md:flex md:w-10/12">
              <div className="md:w-2/12 mr-7">
                <img
                  src={mpesa}
                  alt="paystack-image"
                  className="w-24 md:w-32 shadow rounded"
                />
              </div>
              <div className="md:w-8/12">
                <h2 className="font-bold mb-2 mt-2 md:mt-0">
                  Payment by MPESA (SAFARICOM MOBILE MONEY)
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
                onClick={() => setOpenMpesa(!openMpesa)}
              >
                <p className="p-2 text-sm md:text-base">
                  {!openMpesa ? "View" : "Hide"} Details
                </p>
              </div>
            </div>
          </div>
          <div className={!openMpesa ? `hidden` : `mt-10`}>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made ONLY to{" "}
              <span className="font-semibold">+254 796 118 357</span> <br />
              After making payment, please send the details below as a Whatsapp
              message to
              <span className="font-semibold">+254 796 118 357</span>
              <ol className="pl-2">
                <li>1. YOUR MTN MOBILE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
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
