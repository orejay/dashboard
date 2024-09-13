import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import PaymentTypes from "../components/PaymentTypes";
import Select from "react-select";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";

const Subscribe = ({ type }) => {
  const [country, setCountry] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userCountryCode, setUserCountryCode] = useState(null);
  const [location, setLocation] = useState(null);
  const geoURL = process.env.REACT_APP_GEOLOCATIONURL;
  const geoKey = process.env.REACT_APP_GEOAPIKEY1;
  const geoKey2 = process.env.REACT_APP_GEOAPIKEY2;
  const geoKey3 = process.env.REACT_APP_GEOAPIKEY3;
  const geoKey4 = process.env.REACT_APP_GEOAPIKEY4;
  const geoKey5 = process.env.REACT_APP_GEOAPIKEY5;
  const geoKeys = [geoKey, geoKey2, geoKey3, geoKey4, geoKey5];

  const getLocation = async (num) => {
    try {
      const res = await fetch(`${geoURL}/country?token=${geoKeys[num]}`);
      const res_txt = await res.text();

      if (res.ok) {
        setUserCountryCode(String(res_txt).trim().toLowerCase());
        setCountry(String(res_txt).trim().toLowerCase());
        handleLocation(String(res_txt).trim().toLowerCase());
      } else if (res.status === 429) {
        if (num < 4) {
          getLocation(num + 1);
        } else {
          setCountry("ot");
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLocation(0);
  }, []);

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
      setCountry("ot");
    }
  };

  const handleLocation = (code) => {
    if (availableList.includes(code)) {
      setCountry(code);
    } else {
      setCountry("ot");
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
      <Dashboard Top={Top} Content={country ? Content : loader} active={4} />
    </div>
  );
};

export default Subscribe;
