import React, { useState, useRef } from "react";
import paystack from "../assets/paystack.png";
import flutterwave from "../assets/flutter.png";
import { Link } from "react-router-dom";

const PaymentTypes = ({ country }) => {
  const payInfoRef = useRef(null);
  const scrollToInfo = () => {
    const position = payInfoRef.current.getBoundingClientRect().top;
    const offsetPosition = position - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    // payInfoRef.current.scrollIntoView({
    //   behavior: "smooth",
    // });
  };
  const data = {
    df: {
      headers: [
        "Bank Transfer/POS/OPAY",
        "Debit/ Credit Card",
        "PAYPAL",
        "CRYPTO",
        "MPESA",
        "MTN MOBILE MONEY (GHANA)",
        "MTN MOBILE MONEY (UGANDA)",
        "MTN MOBILE MONEY (CAMEROON)",
        "MTN MOBILE MONEY (BENIN R.)",
        "ORANGE MONEY (SIERRA LEONE)",
        "ORANGE MONEY (IVORY COAST)",
        "ORANGE MONEY (SENEGAL)",
      ],
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              BANK APP TRANSFER/ USSD CODE/DEPOSIT
            </h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              You can make payments for your Tips180 account activation/upgrade
              ONLY to the account info below
            </p>
          </div>

          <div className="my-10">
            <h2 className="millik md:text-xl text-base">
              <p>TIPS 180 CONCEPTS,</p>
              <p>1021742465,</p>
              <p>UBA.</p>
            </h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              After making deposits, send the name of the account you made the
              payment from, amount paid and email address (registered on
              TIPS180) or USER ID on the website as a text message to
              +2348131149662 or send a screenshot of payment and USER ID to
              +2348131149662 on WhatsApp. Your Tips180 account will be upgraded
              once payment has been confirmed.
            </p>
          </div>
          <div className="my-10">
            <h2 className="millik md:text-xl text-base">DISCLAIMER</h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              <p>PAYMENT ONLINE WITH YOUR DEBIT/CREDIT CARD.</p>
            </h2>
            <Link to="/our-plans">
              <button className="bg-gradient-to-r rounded p-2 hover:shadow-md text-white from-teal-500 to-blue-600 my-4">
                Pay Online with Paystack
              </button>
            </Link>

            <p style={{ color: "#828282" }} className="md:text-base text-sm">
              Your account will be upgraded automatically after a successful
              transaction. Refresh account for an activation. Pls ensure the
              email address you used in registering on the website corresponds
              with that on the online payment platform.
            </p>
          </div>

          <div className="my-10">
            <h2 className="millik md:text-xl text-base">DISCLAIMER</h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">Pay via PAYPAL</h2>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">Pay via CRYPTO</h2>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">Pay via MPESA</h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via MTN MOBILE MONEY (GHANA)
            </h2>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>

          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via MTN MOBILE MONEY (UGANDA)
            </h2>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made only to{" "}
              <span className="font-semibold">+256 787 166 125</span>
              <br /> After making payment, please send the details below as a
              Whatsapp message to{" "}
              <span className="font-semibold">+254 796 118 357</span>. <br />
              <ol className="pl-2">
                <li>1. YOUR MTN MOBILE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>

          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via MTN MOBILE MONEY (CAMEROON)
            </h2>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made only to{" "}
              <span className="font-semibold">+237 676 988 731</span>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>

          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via MTN MOBILE MONEY (BENIN REPUBLIC)
            </h2>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made only to{" "}
              <span className="font-semibold">+229 466 199 56</span>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>

          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via ORANGE MONEY (Sierra Leone)
            </h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made ONLY to{" "}
              <span className="font-semibold">+232 781 093 88</span> <br />
              After making payment, please send the details below as a Whatsapp
              message to
              <span className="font-semibold">+232 760 600 00</span>
              <ol className="pl-2">
                <li>1. YOUR ORANGE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via ORANGE MONEY (Ivory Coast)
            </h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made ONLY to{" "}
              <span className="font-semibold">+232 781 093 88</span> <br />
              After making payment, please send the details below as a Whatsapp
              message to
              <span className="font-semibold">+232 760 600 00</span>
              <ol className="pl-2">
                <li>1. YOUR ORANGE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via ORANGE MONEY (Senegal)
            </h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made ONLY to{" "}
              <span className="font-semibold">+232 781 093 88</span> <br />
              After making payment, please send the details below as a Whatsapp
              message to
              <span className="font-semibold">+232 760 600 00</span>
              <ol className="pl-2">
                <li>1. YOUR ORANGE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    ng: {
      headers: [
        "Pay via Bank Transfer/POS/OPAY",
        "Pay via Debit/ Credit Card",
        // " Pay via POS/OPAY",
      ],
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              BANK APP TRANSFER/ USSD CODE/DEPOSIT
            </h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              You can make payments for your Tips180 account activation/upgrade
              ONLY to the account info below
            </p>
          </div>

          <div className="my-10">
            <h2 className="millik md:text-xl text-base">
              <p>TIPS 180 CONCEPTS,</p>
              <p>1021742465,</p>
              <p>UBA.</p>
            </h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              After making deposits, send the name of the account you made the
              payment from, amount paid and email address (registered on
              TIPS180) or USER ID on the website as a text message to
              +2348131149662 or send a screenshot of payment and USER ID to
              +2348131149662 on WhatsApp. Your Tips180 account will be upgraded
              once payment has been confirmed.
            </p>
          </div>
          <div className="my-10">
            <h2 className="millik md:text-xl text-base">DISCLAIMER</h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              <p>PAYMENT ONLINE WITH YOUR DEBIT/CREDIT CARD.</p>
            </h2>
            <Link to="/our-plans">
              <button className="bg-gradient-to-r rounded p-2 hover:shadow-md text-white from-teal-500 to-blue-600 my-4">
                Pay Online with Paystack
              </button>
            </Link>

            <p style={{ color: "#828282" }} className="md:text-base text-sm">
              Your account will be upgraded automatically after a successful
              transaction. Refresh account for an activation. Pls ensure the
              email address you used in registering on the website corresponds
              with that on the online payment platform.
            </p>
          </div>

          <div className="my-10">
            <h2 className="millik md:text-xl text-base">DISCLAIMER</h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              PAYMENT VIA POS/PALMPAY/OPAY
            </h2>

            <p
              style={{ color: "#828282" }}
              className="my-4 md:text-base text-sm"
            >
              After making deposits, send the agent’s name, amount paid and
              email address (registered on TIPS180) as a text message to
              +2348131149662 or send a screenshot of payment and USER ID to
              +2348131149662 on WhatsApp. Your Tips180 account will be upgraded
              once payment has been confirmed.
            </p>
          </div>

          <div className="my-10">
            <h2 className="millik md:text-xl text-base">DISCLAIMER</h2>
            <p
              style={{ color: "#828282" }}
              className="my-1 md:text-base text-sm"
            >
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    gh: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via MTN MOBILE MONEY
            </h2>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>

          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    ca: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via MTN MOBILE MONEY
            </h2>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made only to{" "}
              <span className="font-semibold">+237 676 988 731</span>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>

          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    be: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via MTN MOBILE MONEY
            </h2>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made only to{" "}
              <span className="font-semibold">+229 466 199 56</span>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>

          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    ke: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">Pay via MPESA</h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    // ug: {
    //   info: [
    //     <div className="my-10">
    //       <div className="my-5">
    //         <h2 className="millik md:text-xl text-base">
    //           Pay via MPESA (SAFARICOM MOBILE MONEY)
    //         </h2>

    //         <p
    //           style={{ color: "#828282" }}
    //           className="my-4 text-sm md:text-base"
    //         >
    //           All payments should be made ONLY to +254 796118357
    //         </p>
    //       </div>

    //       <div>
    //         <p
    //           style={{ color: "#828282" }}
    //           className="my-4 text-sm md:text-base"
    //         >
    //           After making your payment.
    //         </p>
    //         <p
    //           style={{ color: "#828282" }}
    //           className="my-1 text-sm md:text-base"
    //         >
    //           Please send THE MPESA DETAILS: Name, "Registered" email address,
    //           and date of payment to +254 796118357
    //         </p>
    //         <p
    //           style={{ color: "#828282" }}
    //           className="my-4 text-sm md:text-base"
    //         >
    //           Your Tips180 account would be upgraded before the end of the day.
    //         </p>
    //       </div>
    //     </div>,
    //   ],
    // },
    ug: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via MTN MOBILE MONEY
            </h2>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made only to{" "}
              <span className="font-semibold">+256 787 166 125</span>
              <br /> After making payment, please send the details below as a
              Whatsapp message to{" "}
              <span className="font-semibold">+254 796 118 357</span>. <br />
              <ol className="pl-2">
                <li>1. YOUR MTN MOBILE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>

          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    // tz: {
    //   info: [
    //     <div className="my-10">
    //       <div className="my-5">
    //         <h2 className="millik md:text-xl text-base">Pay via MPESA</h2>
    //         <p className="text-sm md:text-base">
    //           Your Tips180 account will be upgraded once payment has been
    //           confirmed
    //         </p>
    //         <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
    //           <Link
    //             to="/our-plans"
    //             className="w-full h-full text-center flex justify-center items-center"
    //           >
    //             <p>PRICING PLAN</p>
    //           </Link>
    //         </button>
    //         <p className="mt-2 text-sm md:text-base">
    //           All payments should be made ONLY to{" "}
    //           <span className="font-semibold">+254 796 118 357</span> <br />
    //           After making payment, please send the details below as a Whatsapp
    //           message to
    //           <span className="font-semibold">+254 796 118 357</span>
    //           <ol className="pl-2">
    //             <li>1. YOUR MTN MOBILE MONEY NAME</li>
    //             <li>2. DATE OF PAYMENT</li>
    //             <li>3. AMOUNT PAID</li>
    //             <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
    //           </ol>
    //           Your Tips180 account would be upgraded before the end of the day.
    //         </p>
    //       </div>
    //       <div className="py-7 lg:py-0 lg:my-10">
    //         <h2 className="millik text-red-600">REFUND POLICY</h2>
    //         <p className="text-sm md:text-base">
    //           Refund Policy: Please note that once you have paid for a plan, and
    //           your account has been upgraded, then the service is deemed to have
    //           been provided. After that point, there will be no refunds as the
    //           service has been delivered at your own request, and an agreed
    //           price before making payment. Information transmitted is intended
    //           only for person(s) or entity above the age of 18. Bet Responsibly!
    //         </p>
    //       </div>
    //       <div className="py-7 lg:py-0 lg:my-10">
    //         <h2 className="millik text-red-600">DISCLAIMER</h2>
    //         <p className="text-sm md:text-base">
    //           Information transmitted is intended only for the persons or entity
    //           above the age of 18. Tips180 do NOT refund money paid for
    //           subscription and not liable to any money lost or gained. Countries
    //           that soccer betting is not legal should not subscribe to our
    //           plans. You can read through our Terms and Conditions for more
    //           information on Tips180.
    //         </p>
    //       </div>
    //     </div>,
    //   ],
    // },
    tz: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">Pay via MPESA</h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    sl: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via ORANGE MONEY
            </h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made ONLY to{" "}
              <span className="font-semibold">+232 781 093 88</span> <br />
              After making payment, please send the details below as a Whatsapp
              message to
              <span className="font-semibold">+232 760 600 00</span>
              <ol className="pl-2">
                <li>1. YOUR ORANGE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    lr: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via ORANGE MONEY
            </h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made ONLY to{" "}
              <span className="font-semibold">+232 781 093 88</span> <br />
              After making payment, please send the details below as a Whatsapp
              message to
              <span className="font-semibold">+232 760 600 00</span>
              <ol className="pl-2">
                <li>1. YOUR ORANGE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    ci: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via ORANGE MONEY
            </h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made ONLY to{" "}
              <span className="font-semibold">+232 781 093 88</span> <br />
              After making payment, please send the details below as a Whatsapp
              message to
              <span className="font-semibold">+232 760 600 00</span>
              <ol className="pl-2">
                <li>1. YOUR ORANGE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    gm: {
      info: [
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">
              Pay via ORANGE MONEY
            </h2>
            <p className="text-sm md:text-base">
              Your Tips180 account will be upgraded once payment has been
              confirmed
            </p>
            <button className="w-full lg:w-1/3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0 mt-2">
              <Link
                to="/our-plans"
                className="w-full h-full text-center flex justify-center items-center"
              >
                <p>PRICING PLAN</p>
              </Link>
            </button>
            <p className="mt-2 text-sm md:text-base">
              All payments should be made ONLY to{" "}
              <span className="font-semibold">+232 781 093 88</span> <br />
              After making payment, please send the details below as a Whatsapp
              message to
              <span className="font-semibold">+232 760 600 00</span>
              <ol className="pl-2">
                <li>1. YOUR ORANGE MONEY NAME</li>
                <li>2. DATE OF PAYMENT</li>
                <li>3. AMOUNT PAID</li>
                <li>4. REGISTERED EMAIL ADDRESS OR USER ID ON THE WEBSITE</li>
              </ol>
              Your Tips180 account would be upgraded before the end of the day.
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
    ot: {
      headers: ["PAY VIA PAYPAL", "PAY VIA CRYPTO"],
      info: [
        // <div className="my-10">
        //   <div className="w-full flex flex-wrap">
        //     <div className="w-full lg:w-1/4">
        //       <img src={flutterwave} alt="paystack-image" className="" />
        //     </div>
        //     <div className="w-full lg:w-3/4">
        //       <h2 className="font-bold mb-2 mt-2 md:mt-0 md:text-xl text-base">
        //         Payment Online With Your Debit/Card
        //       </h2>
        //       <p className="text-sm md:text-base">
        //         Your account will be upgraded automatically after a successful
        //         transaction. Refresh account for an activation. Pls ensure the
        //         email address you used in registering on the website corresponds
        //         with that on the online payment platform.
        //       </p>
        //     </div>
        //   </div>
        // </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">Pay via PAYPAL</h2>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
        <div className="my-10">
          <div className="my-5">
            <h2 className="millik md:text-xl text-base">Pay via CRYPTO</h2>
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
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">REFUND POLICY</h2>
            <p className="text-sm md:text-base">
              Refund Policy: Please note that once you have paid for a plan, and
              your account has been upgraded, then the service is deemed to have
              been provided. After that point, there will be no refunds as the
              service has been delivered at your own request, and an agreed
              price before making payment. Information transmitted is intended
              only for person(s) or entity above the age of 18. Bet Responsibly!
            </p>
          </div>
          <div className="py-7 lg:py-0 lg:my-10">
            <h2 className="millik text-red-600">DISCLAIMER</h2>
            <p className="text-sm md:text-base">
              Information transmitted is intended only for the persons or entity
              above the age of 18. Tips180 do NOT refund money paid for
              subscription and not liable to any money lost or gained. Countries
              that soccer betting is not legal should not subscribe to our
              plans. You can read through our Terms and Conditions for more
              information on Tips180.
            </p>
          </div>
        </div>,
      ],
    },
  };
  const [active, setActive] = useState(0);

  const activeStyles = {
    border: "1px solid blue",
    borderRadius: "5px",
    background: "transparent",
  };
  return (
    <div>
      <div
        className={`text-center justify-center items-center w-full grid ${
          data[country]?.headers?.length > 3 ? "grid-rows-4" : "grid-rows-2"
        } grid-cols-2 lg:grid-cols-3
       row-span-full col-span-full gap-1`}
      >
        {data[country]?.headers?.map((header, index) => (
          <div
            key={index}
            className="w-full px-2 py-2 text-sm font-semibold"
            onClick={() => {
              setActive(index);
              scrollToInfo();
            }}
            style={active === index ? activeStyles : {}}
          >
            <button
              className={
                active === index
                  ? "bg-transparent text-blue-600 py-2 rounded w-full"
                  : "greybg py-3 rounded-md w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white "
              }
            >
              {header}
            </button>
          </div>
        ))}
      </div>
      <div className="" ref={payInfoRef}>
        {data[country]?.info[active]}
      </div>
    </div>
  );
};

export default PaymentTypes;
