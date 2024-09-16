import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PredWinFees = () => {
  const [data, setData] = useState(null);
  const feeRef = useRef(null);
  const countryRef = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("admintoken");
  const api = process.env.REACT_APP_BASE_API;

  const getFee = async (cntry) => {
    const res = await fetch(`${api}/getendpoints/fees/${cntry}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const res_json = await res.json();
    console.log("get >>>>>>>>", res_json);
    setData(res_json);
  };

  const postPrizes = async (e) => {
    e.preventDefault();
    try {
      const body = {
        fee: feeRef.current.value,
        country: countryRef.current.value,
      };

      const res = await fetch(`${api}/postendpoints/add-fees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + token,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify(body),
      });

      const res_json = await res.json();
      console.log("post >>>>>>>>", res_json);

      if (!res.ok) {
        toast.error("Unable to add predictions!");
        return console.log("Unable to add predictions!");
      }

      getFee();
      toast.info("Successful!");
      navigate("/theta/add-predictions");
    } catch (error) {
      console.log(error);
      toast.info("Check your network!");
    }

    toast.clearWaitingQueue();
  };

  useEffect(() => {
    getFee("Nigeria");
  }, []);

  return (
    <div>
      <form className="text-sm lg:text-base" onSubmit={(e) => postPrizes(e)}>
        <div className="w-5/6">
          <label htmlFor="country" className="mr-3">
            Country:
          </label>
          <select
            name="country"
            id="country-dropdown"
            className="dd mr-8 w-4/6"
            ref={countryRef}
            onChange={(e) => {
              getFee(e.target.value);
            }}
          >
            <option value="Nigeria">Nigeria</option>
            <option value="Kenya">Kenya</option>
            <option value="Ghana">Ghana</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Uganda">Uganda</option>
            <option value="Tanzania">Tanzania</option>
          </select>
        </div>
        <div className="w-5/6">
          <label htmlFor="prize" className="mr-3">
            Fee:
          </label>
          <input
            type="number"
            className="w-4/6"
            ref={feeRef}
            defaultValue={data?.fee}
          />
        </div>
        <button
          type="submit"
          className="md:w-1/3 mt-6 bg-gradient-to-r cursor-pointer from-teal-500 to-blue-600 text-white hover:shadow-md hover:shadow-green-200 hover:transition-all ease-in-out duration-500 rounded py-2 px-3"
        >
          Add Fee
        </button>
      </form>
    </div>
  );
};

export default PredWinFees;
