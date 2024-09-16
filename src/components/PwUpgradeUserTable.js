import { ToastContainer, toast } from "react-toastify";
import React, { useRef, useState } from "react";

const PwUpgradeUserTable = ({ result, refresh }) => {
  const token = localStorage.getItem("admintoken");
  const api = process.env.REACT_APP_BASE_API;
  const countryRef = useRef(null);

  const upgrade = async (userData) => {
    try {
      const res = await fetch(`${api}/postendpoints/pw-upgrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + token,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({
          email: result.email,
          id: result.user_id,
          country: countryRef.current.value,
        }),
      });
      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Unable to upgrade user!");
        return console.log("Unable to upgrade user!");
      }

      toast.info("Successful!");
      toast.clearWaitingQueue();
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  return (
    <div className="w-full">
      {result.email ? (
        <div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">User ID:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.user_id}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Fullname:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.name}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Email Address:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {result?.email}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <label htmlFor="country" className="lg:w-1/4">
              Country:
            </label>
            <div className="lg:w-2/3">
              {/* <input
                ref={countryRef}
                name="country"
                type="text"
                placeholder="Kenya"
                className="w-full"
              /> */}
              <select
                name="select-country"
                id="select-country"
                className="dd lg:w-2/3"
                ref={countryRef}
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Uganda">Uganda</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Tanzania">Tanzania</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center lg:w-11/12">
            <input
              type="submit"
              value={`Upgrade`}
              onClick={() => {
                upgrade();
              }}
              className="w-full bg-gradient-to-r cursor-pointer from-teal-500 to-blue-600 text-white hover:shadow-md hover:shadow-green-200 hover:transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PwUpgradeUserTable;
