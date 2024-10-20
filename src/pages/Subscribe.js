import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import PaymentTypes from "../components/PaymentTypes";
import Select from "react-select";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";

const Subscribe = ({ type }) => {
  const [country, setCountry] = useState("df");
  const [selectedOption, setSelectedOption] = useState(null);

  const availableList = [
    "ng",
    "be",
    "gh",
    "ke",
    "ug",
    "tz",
    "ca",
    "sl",
    "lr",
    "ci",
    "gm",
  ];

  const handleChange = (countries) => {
    setSelectedOption(countries);
    if (availableList.includes(countries.value)) {
      setCountry(countries.value);
    } else {
      setCountry("df");
    }
  };

  const CountryList = [
    { value: "ng", label: "Nigeria" },
    { value: "gh", label: "Ghana" },
    { value: "ke", label: "Kenya" },
    { value: "ug", label: "Uganda" },
    { value: "tz", label: "Tanzania" },
    { value: "be", label: "Benin Republic" },
    { value: "ca", label: "Cameroon" },
    { label: "Sierra Leone", value: "sl" },
    { label: "Liberia", value: "lr" },
    { label: "Cote D'Ivoire", value: "ci" },
    { label: "Gambia", value: "gm" },
    { value: "ot", label: "Others" },
  ];

  const changeCountry = (prop) => setCountry(prop);

  const Top = (
    <div>
      <h1
        className="font-bold flex iteems-center millik"
        style={{ fontSize: "24px" }}
      >
        How to Subscribe
      </h1>
    </div>
  );

  const Content = (
    <div>
      <div className="mb-10">
        <Select
          options={CountryList}
          value={selectedOption}
          onChange={handleChange}
          isSearchable={true}
          menuPortalTarget={document.body}
          className="md:w-4/12 w-7/12 lg:w-4/12 mb-4 mx-auto cursor-pointer"
          styles={{ menuPortal: (base) => ({ ...base }) }}
          placeholder="Select a Country"
        />
      </div>
      <PaymentTypes country={country} />
    </div>
  );

  const loader = <Loader />;

  return (
    <div>
      <Helmet>
        <title>How to Subscribe - Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={country ? Content : loader} active={5} />
    </div>
  );
};

export default Subscribe;
