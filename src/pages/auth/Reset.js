import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./auth";
import Imagee from "../../assets/forgot.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const App = () => {
  const api = process.env.REACT_APP_BASE_API;
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loadText, setLoadText] = useState("Submit");

  const passwordRef = useRef(null);
  const token = window.location.href.split("/")[5];

  const Resetpassword = async () => {
    setLoadText("...");
    try {
      const res = await fetch(`${api}/auth/reset`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        redirect: "follow",

        body: JSON.stringify({
          token: token,
          password: passwordRef.current.value,
        }),
      });
      const res_json = await res.json();
      setLoadText("Submit");

      if (!res.ok) {
        toast.error("Password reset link is expired!");

        setLoadText("Submit");
      } else {
        toast.success("Password Changed Successfully!");
        navigate("/auth/login");
      }
    } catch (error) {
      setLoadText("Submit");
      toast.error("Password reset link is expired!");
    }
  };
  return (
    <div className="w-full py-10 px-8">
      <h2 className="font-bold mb-4" style={{ fontSize: "30px" }}>
        Reset Password
      </h2>
      <p>Input your new password below</p>
      <div className="my-4">
        <label className="label">Password</label>
        <br />
        <input
          type="password"
          ref={passwordRef}
          className="w-full lg:w-5/6 input-styles"
        />
      </div>

      <button
        onClick={() => Resetpassword()}
        className="w-6/6 lg:w-5/6 w-1/3 mt-7 mb-10 py-3 rounded h-9  flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0"
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
const Reset = () => {
  return (
    <div>
      <Helmet>
        <title>Password Reset - Tips180</title>
      </Helmet>
      <Auth App={App} image={Imagee} />
    </div>
  );
};

export default Reset;
