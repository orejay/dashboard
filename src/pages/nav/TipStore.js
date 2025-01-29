import React, { useEffect } from "react";
import StoreCards from "../../components/StoreCards";
import Main from "../../Main";
import { Helmet } from "react-helmet";

function TipStore() {
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");

  const IsUserAuthorized = async () => {
    try {
      const res = await fetch(`$${api}/getendpoints/auth`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();

      if (!res.ok) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  useEffect(() => {
    IsUserAuthorized();
  }, []);

  const store = (
    <div>
      <Helmet>
        <title>Tips Store - Tips180</title>
      </Helmet>
      <div className="py-14 lg:py-20 text-white mx-auto text-center bg-gradient-to-r from-teal-500 to-blue-600">
        <h1 className="lg:text-4xl text-xl mona-head mx-auto">Tips Store</h1>
      </div>
      <div className="shadow-md shadow-slate-300 w-10/12 bg-white rounded-xl py-14 flex flex-col justify-center items-center md:pl-6 md:pr-12 mt-20 mb-28 mx-auto">
        <StoreCards style={`lg:m-4 m-2`} bStyle={`lg:m-4 m-2`} />
      </div>
    </div>
  );
  return <Main Prop={store} nav={3} />;
}

export default TipStore;
