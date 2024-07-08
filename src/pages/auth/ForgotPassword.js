import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "./auth";
import Imagee from "../../assets/forgot.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const App = () => {
  const api = process.env.REACT_APP_BASE_API;
  const emailRef = useRef(null);
  const [loadText, setLoadText] = useState("Submit");
  const Resetrequest = async () => {
    setLoadText("...");
    try {
      const res = await fetch(`${api}/auth/reset-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({ email: emailRef.current.value }),
      });

      const res_json = await res.json();
      console.log(res_json);
      setLoadText("Submit");
      if (!res.ok) {
        console.log("Please check your data and try again");
        setLoadText("Submit");
      } else if (!res_json.sent) {
        toast.error("No User found with that email ID");
      } else {
        toast.success("Success! Check your email for password reset link");
      }
    } catch (error) {
      console.log("Please check your network connection");
      setLoadText("Submit");
    }
  };

  // useEffect(() => {
  //   const handleKeyUp = (event) => {
  //     if (event.key === "Enter") {
  //       Resetrequest();
  //     }
  //   };

  //   window.addEventListener("keyup", handleKeyUp);

  //   return () => {
  //     window.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, []);

  return (
    <div className="w-full py-36 px-8">
      <h2 className="font-bold mb-4 millik" style={{ fontSize: "30px" }}>
        Forgot Password?
      </h2>
      <p>
        A link will be sent to your registered valid email address,{" "}
        <br className="hidden lg:block" />
        click on it to reset your password.
      </p>
      <div className="my-4">
        <label className="label">Email Address</label>
        <br />
        <input
          type="text"
          ref={emailRef}
          className="w-full lg:w-5/6 input-styles"
        />
      </div>

      <button
        onClick={() => Resetrequest()}
        className="w-full lg:w-5/6 mt-7 mb-10 py-3 rounded h-9  flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0"
      >
        {loadText}
      </button>

      <div className="w-full lg:w-5/6 text-center">
        <p>Don’t have an account?</p>
        <p className="font-bold my-3 cursor-pointer">
          <Link to="/auth/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
const ForgotPassword = () => {
  return (
    <div>
      <Helmet>
        <title>Forgot Password - Tips180</title>
      </Helmet>
      <Auth App={App} image={Imagee} />
    </div>
  );
};

export default ForgotPassword;
