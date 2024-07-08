import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const UserPassword = () => {
  const navigate = useNavigate();
  const [wrongUserId, setWrongUserId] = useState(false);
  const authHeader = localStorage.getItem("admintoken");
  const api = process.env.REACT_APP_BASE_API;
  const userIdRef = useRef(null);
  const passRef = useRef(null);

  const changeUserPass = async () => {
    try {
      const res = await fetch(`${api}/auth/change-user-pass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + authHeader,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({
          user_id: userIdRef.current.value,
          password: passRef.current.value,
        }),
      });
      const res_json = await res.json();

      if (!res.ok) {
        setWrongUserId(true);
        toast.error("Unable to change password!");
        return console.log("Unable to change password!");
      }

      toast.info("Successful!");
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  return (
    <div className="text-sm lg:text-base">
      <p
        className={
          wrongUserId === false
            ? `hidden`
            : `hidden md:block text-red-600 md:ml-44 lg:ml-48 -mb-2 mt-5 md:mt-0 text-xs md:text-base italic`
        }
      >
        Invalid User ID!
      </p>
      <div className="md:flex items-center mt-5 md:mt-0 justify-between">
        <h1 className="flex items-center labels">Enter User ID:</h1>
        <p
          className={
            wrongUserId === false
              ? `hidden`
              : `md:hidden text-red-600 mt-2 -mb-2 text-xs italic`
          }
        >
          Invalid User ID!
        </p>
        <input
          type="text"
          className={
            wrongUserId === false
              ? `input w-full md:w-9/12`
              : `input w-full border-red-600 md:w-9/12`
          }
          ref={userIdRef}
        />
      </div>
      <div className="md:flex items-center mt-5 md:mt-0 justify-between">
        <h1 className="flex items-center labels">Enter Password:</h1>
        <input
          type="password"
          className={`input w-full md:w-9/12`}
          ref={passRef}
        />
      </div>
      <div className="flex justify-center mt-8">
        <input
          type="submit"
          value="Change Password"
          onClick={() => {
            changeUserPass();
            setWrongUserId(false);
          }}
          className="w-fit bg-gradient-to-r cursor-pointer from-teal-500 to-blue-600 text-white hover:shadow-md hover:shadow-green-200 hover:transition-all ease-in-out duration-500"
        />
      </div>
    </div>
  );
};

export default UserPassword;
