import React, { useState } from "react";
import Auth from "./auth";
import Eye from "../../assets/eye.svg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Imagee from "../../assets/signin.svg";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const App = () => {
  const api = process.env.REACT_APP_BASE_API;
  const [hidePass, setHidePass] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [loginText, setLoginText] = useState("Sign In");

  const navigate = useNavigate();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const data = JSON.stringify(loginDetails);
      setLoginText(". . .");

      const res = await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        redirect: "follow",
        credentials: "same-origin",

        body: data,
      });
      const res_json = await res.json();

      if (!res.ok || !res_json.is_authenticated) {
        toast.error("Email/Password Invalid");
        setLoginText("Sign In");
        return console.log("Email/Password Invalid");
      }

      toast.success("Welcome back!");
      localStorage.setItem("user", JSON.stringify(res_json));
      localStorage.setItem("token", res_json.refresh_token);
      navigate("/dashboard/profile");
    } catch (error) {
      toast.error("Check your network");
      setLoginText("Sign In");
    }
  };

  return (
    <div className="w-full py-10 px-8">
      <h2 className="font-bold mb-10 millik" style={{ fontSize: "30px" }}>
        Sign In
      </h2>
      <form onSubmit={signIn}>
        <div className="my-4">
          <label className="label">Email Address</label>
          <br />
          <input
            type="text"
            className="w-full lg:w-5/6 input-styles"
            onChange={(e) => {
              setLoginDetails({ ...loginDetails, email: e.target.value });
            }}
          />
        </div>
        <div className="my-4">
          <label className="label">Password</label>
          <br />
          <div className="flex items-center w-full lg:w-5/6">
            <input
              type={!hidePass ? "text" : "password"}
              className="w-full input-styles"
              style={{ borderRight: "" }}
              onChange={(e) => {
                setLoginDetails({ ...loginDetails, password: e.target.value });
              }}
            />
            <span
              className="flex items-center justify-center cursor-pointer eye"
              style={{
                color: "#BDBDBD",
              }}
            >
              <ion-icon
                name={!hidePass ? "eye-off-outline" : "eye-outline"}
                size="large"
                onClick={() => setHidePass(!hidePass)}
              ></ion-icon>
            </span>
          </div>
        </div>
        <button
          className="w-full lg:w-5/6 mt-7 mb-2 py-3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0"
          type="submit"
        >
          {loginText}
        </button>
      </form>

      <div className="w-full lg:w-5/6  flex justify-between my-5">
  
        <p className="text-blue-400 underline">
          <Link to="/auth/password">Forgot Password?</Link>
        </p>
      </div>
      <div className="w-full lg:w-5/6 text-center">
        <p>Don’t have an account?</p>
        <p className="font-bold my-3 cursor-pointer text-blue-400 underline">
          <Link to="/auth/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login - Tips180</title>
      </Helmet>
      <Auth App={App} image={Imagee} />
    </div>
  );
};

export default Login;
