import React, { useState } from "react";
import Auth from "./auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Imagee from "../../assets/signup.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const styles = {
  goodStyle: {
    border: "1px solid #bdbdbd",
  },
  badStyle: {
    border: "1px solid red",
  },
};

const App = () => {
  const [hidePass, setHidePass] = useState(true);
  const [hideCPass, setHideCPass] = useState(true);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [loadText, setLoadText] = useState("Sign Up");
  const api = process.env.REACT_APP_BASE_API;
  const [passwords, setPasswords] = useState({
    password1: "",
    password2: "",
  });
  const [signupData, setSignupData] = useState({
    fname: "",
    email: "",
    ref_code: "",
    phone: "",
    country: "",
    password: "",
  });
  const [validData, setValidData] = useState({
    fname: true,
    email: true,
    phone: true,
    password: true,
  });
  const [selectedCountry, setSelectedCountry] = useState({
    label: "Nigeria",
    value: "NG",
  });

  const countries = [
    { label: "Afghanistan", value: "AF" },
    { label: "Albania", value: "AL" },
    { label: "Algeria", value: "DZ" },
    { label: "Andorra", value: "AD" },
    { label: "Angola", value: "AO" },
    { label: "Anguilla", value: "AI" },
    { label: "Antarctica", value: "AQ" },
    { label: "Argentina", value: "AR" },
    { label: "Armenia", value: "AM" },
    { label: "Australia", value: "AU" },
    { label: "Austria", value: "AT" },
    { label: "Azerbaijan", value: "AZ" },
    { label: "Bahamas", value: "BS" },
    { label: "Bangladesh", value: "BD" },
    { label: "Barbados", value: "BB" },
    { label: "Belarus", value: "BY" },
    { label: "Belgium", value: "BE" },
    { label: "Benin", value: "BJ" },
    { label: "Bermuda", value: "BM" },
    { label: "Bolivia", value: "BO" },
    { label: "Bosnia and Herzegovina", value: "BA" },
    { label: "Botswana", value: "BW" },
    { label: "Brazil", value: "BR" },
    { label: "Bulgaria", value: "BG" },
    { label: "Burkina Faso", value: "BF" },
    { label: "Burundi", value: "BI" },
    { label: "Cambodia", value: "KH" },
    { label: "Cameroon", value: "CM" },
    { label: "Canada", value: "CA" },
    { label: "Cape Verde", value: "CV" },
    { label: "Cayman Islands", value: "KY" },
    { label: "Central African Republic", value: "CF" },
    { label: "Chad", value: "TD" },
    { label: "Chile", value: "CL" },
    { label: "China", value: "CN" },
    { label: "Christmas Island", value: "CX" },
    { label: "Cocos (Keeling) Islands", value: "CC" },
    { label: "Colombia", value: "CO" },
    { label: "Comoros", value: "KM" },
    { label: "Congo", value: "CG" },
    { label: "Congo, The Democratic Republic of the", value: "CD" },
    { label: "Cook Islands", value: "CK" },
    { label: "Costa Rica", value: "CR" },
    { label: "Cote D'Ivoire", value: "CI" },
    { label: "Croatia", value: "HR" },
    { label: "Cuba", value: "CU" },
    { label: "Cyprus", value: "CY" },
    { label: "Czech Republic", value: "CZ" },
    { label: "Denmark", value: "DK" },
    { label: "Djibouti", value: "DJ" },
    { label: "Dominica", value: "DM" },
    { label: "Dominican Republic", value: "DO" },
    { label: "Ecuador", value: "EC" },
    { label: "Egypt", value: "EG" },
    { label: "El Salvador", value: "SV" },
    { label: "Equatorial Guinea", value: "GQ" },
    { label: "Eritrea", value: "ER" },
    { label: "Estonia", value: "EE" },
    { label: "Ethiopia", value: "ET" },
    { label: "Falkland Islands (Malvinas)", value: "FK" },
    { label: "Faroe Islands", value: "FO" },
    { label: "Fiji", value: "FJ" },
    { label: "Finland", value: "FI" },
    { label: "France", value: "FR" },
    { label: "French Guiana", value: "GF" },
    { label: "French Polynesia", value: "PF" },
    { label: "French Southern Territories", value: "TF" },
    { label: "Gabon", value: "GA" },
    { label: "Gambia", value: "GM" },
    { label: "Georgia", value: "GE" },
    { label: "Germany", value: "DE" },
    { label: "Ghana", value: "GH" },
    { label: "Gibraltar", value: "GI" },
    { label: "Greece", value: "GR" },
    { label: "Greenland", value: "GL" },
    { label: "Grenada", value: "GD" },
    { label: "Guadeloupe", value: "GP" },
    { label: "Guam", value: "GU" },
    { label: "Guatemala", value: "GT" },
    { label: "Guernsey", value: "GG" },
    { label: "Guinea", value: "GN" },
    { label: "Guinea-Bissau", value: "GW" },
    { label: "Guyana", value: "GY" },
    { label: "Haiti", value: "HT" },
    { label: "Heard Island and Mcdonald Islands", value: "HM" },
    { label: "Holy See (Vatican City State)", value: "VA" },
    { label: "Honduras", value: "HN" },
    { label: "Hong Kong", value: "HK" },
    { label: "Hungary", value: "HU" },
    { label: "Iceland", value: "IS" },
    { label: "India", value: "IN" },
    { label: "Indonesia", value: "ID" },
    { label: "Iran, Islamic Republic Of", value: "IR" },
    { label: "Iraq", value: "IQ" },
    { label: "Ireland", value: "IE" },
    { label: "Isle of Man", value: "IM" },
    { label: "Israel", value: "IL" },
    { label: "Italy", value: "IT" },
    { label: "Jamaica", value: "JM" },
    { label: "Japan", value: "JP" },
    { label: "Jersey", value: "JE" },
    { label: "Jordan", value: "JO" },
    { label: "Kazakhstan", value: "KZ" },
    { label: "Kenya", value: "KE" },
    { label: "Kiribati", value: "KI" },
    { label: "Korea", value: "KP" },
    { label: "Korea, Republic of", value: "KR" },
    { label: "Kuwait", value: "KW" },
    { label: "Kyrgyzstan", value: "KG" },
    { label: "Latvia", value: "LV" },
    { label: "Lebanon", value: "LB" },
    { label: "Lesotho", value: "LS" },
    { label: "Liberia", value: "LR" },
    { label: "Libyan Arab Jamahiriya", value: "LY" },
    { label: "Liechtenstein", value: "LI" },
    { label: "Lithuania", value: "LT" },
    { label: "Luxembourg", value: "LU" },
    { label: "Macao", value: "MO" },
    { label: "Macedonia, The Former Yugoslav Republic of", value: "MK" },
    { label: "Madagascar", value: "MG" },
    { label: "Malawi", value: "MW" },
    { label: "Malaysia", value: "MY" },
    { label: "Maldives", value: "MV" },
    { label: "Mali", value: "ML" },
    { label: "Malta", value: "MT" },
    { label: "Marshall Islands", value: "MH" },
    { label: "Martinique", value: "MQ" },
    { label: "Mauritania", value: "MR" },
    { label: "Mauritius", value: "MU" },
    { label: "Mayotte", value: "YT" },
    { label: "Mexico", value: "MX" },
    { label: "Micronesia, Federated States of", value: "FM" },
    { label: "Moldova, Republic of", value: "MD" },
    { label: "Monaco", value: "MC" },
    { label: "Mongolia", value: "MN" },
    { label: "Montenegro", value: "ME" },
    { label: "Montserrat", value: "MS" },
    { label: "Morocco", value: "MA" },
    { label: "Mozambique", value: "MZ" },
    { label: "Myanmar", value: "MM" },
    { label: "Namibia", value: "NA" },
    { label: "Nauru", value: "NR" },
    { label: "Nepal", value: "NP" },
    { label: "Netherlands", value: "NL" },
    { label: "Netherlands Antilles", value: "AN" },
    { label: "New Caledonia", value: "NC" },
    { label: "New Zealand", value: "NZ" },
    { label: "Nicaragua", value: "NI" },
    { label: "Niger", value: "NE" },
    { label: "Nigeria", value: "NG" },
    { label: "Niue", value: "NU" },
    { label: "Norfolk Island", value: "NF" },
    { label: "Northern Mariana Islands", value: "MP" },
    { label: "Norway", value: "NO" },
    { label: "Oman", value: "OM" },
    { label: "Pakistan", value: "PK" },
    { label: "Palau", value: "PW" },
    { label: "Palestinian Territory, Occupied", value: "PS" },
    { label: "Panama", value: "PA" },
    { label: "Papua New Guinea", value: "PG" },
    { label: "Paraguay", value: "PY" },
    { label: "Peru", value: "PE" },
    { label: "Philippines", value: "PH" },
    { label: "Pitcairn", value: "PN" },
    { label: "Poland", value: "PL" },
    { label: "Portugal", value: "PT" },
    { label: "Puerto Rico", value: "PR" },
    { label: "Qatar", value: "QA" },
    { label: "Reunion", value: "RE" },
    { label: "Romania", value: "RO" },
    { label: "Russian Federation", value: "RU" },
    { label: "RWANDA", value: "RW" },
    { label: "Saint Helena", value: "SH" },
    { label: "Saint Kitts and Nevis", value: "KN" },
    { label: "Saint Lucia", value: "LC" },
    { label: "Saint Pierre and Miquelon", value: "PM" },
    { label: "Saint Vincent and the Grenadines", value: "VC" },
    { label: "Samoa", value: "WS" },
    { label: "San Marino", value: "SM" },
    { label: "Sao Tome and Principe", value: "ST" },
    { label: "Saudi Arabia", value: "SA" },
    { label: "Senegal", value: "SN" },
    { label: "Serbia", value: "RS" },
    { label: "Seychelles", value: "SC" },
    { label: "Sierra Leone", value: "SL" },
    { label: "Singapore", value: "SG" },
    { label: "Slovakia", value: "SK" },
    { label: "Slovenia", value: "SI" },
    { label: "Solomon Islands", value: "SB" },
    { label: "Somalia", value: "SO" },
    { label: "South Africa", value: "ZA" },
    { label: "South Georgia and the South Sandwich Islands", value: "GS" },
    { label: "Spain", value: "ES" },
    { label: "Sri Lanka", value: "LK" },
    { label: "Sudan", value: "SD" },
    { label: "Surilabel", value: "SR" },
    { label: "Svalbard and Jan Mayen", value: "SJ" },
    { label: "Swaziland", value: "SZ" },
    { label: "Sweden", value: "SE" },
    { label: "Switzerland", value: "CH" },
    { label: "Syrian Arab Republic", value: "SY" },
    { label: "Taiwan, Province of China", value: "TW" },
    { label: "Tajikistan", value: "TJ" },
    { label: "Tanzania, United Republic of", value: "TZ" },
    { label: "Thailand", value: "TH" },
    { label: "Timor-Leste", value: "TL" },
    { label: "Togo", value: "TG" },
    { label: "Tokelau", value: "TK" },
    { label: "Tonga", value: "TO" },
    { label: "Trinidad and Tobago", value: "TT" },
    { label: "Tunisia", value: "TN" },
    { label: "Turkey", value: "TR" },
    { label: "Turkmenistan", value: "TM" },
    { label: "Turks and Caicos Islands", value: "TC" },
    { label: "Tuvalu", value: "TV" },
    { label: "Uganda", value: "UG" },
    { label: "Ukraine", value: "UA" },
    { label: "United Arab Emirates", value: "AE" },
    { label: "United Kingdom", value: "GB" },
    { label: "United States", value: "US" },
    { label: "United States Minor Outlying Islands", value: "UM" },
    { label: "Uruguay", value: "UY" },
    { label: "Uzbekistan", value: "UZ" },
    { label: "Vanuatu", value: "VU" },
    { label: "Venezuela", value: "VE" },
    { label: "Viet Nam", value: "VN" },
    { label: "Virgin Islands, British", value: "VG" },
    { label: "Virgin Islands, U.S.", value: "VI" },
    { label: "Wallis and Futuna", value: "WF" },
    { label: "Western Sahara", value: "EH" },
    { label: "Yemen", value: "YE" },
    { label: "Zambia", value: "ZM" },
    { label: "Zimbabwe", value: "ZW" },
  ];

  const navigate = useNavigate();
  const signUp = async (event) => {
    event.preventDefault();
    if (validData.fname) {
      signUp();
    } else {
      toast.error("Please Check Your Information!");
    }

    if (!isCheckbox) {
      return toast.error("Please check the terms of service");
    }
    if (passwords.password1 !== passwords.password2) {
      return toast.error("Passwords do not match!");
    }
    setLoadText("...");
    try {
      const data = JSON.stringify(signupData);
      const res = await fetch(`${api}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        redirect: "follow",
        credentials: "same-origin",
        body: data,
      });

      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Email is already registered!");
        setLoadText("Sign Up");
      } else {
        console.log("res >>>>>>>>>>>>>>>>", res);
        console.log("res json >>>>>>>>>>>>>>>>", res_json);
        toast.success(`Welcome ${signupData.fname.split(" ")[0]}...`);
        navigate("/auth/login");
      }
    } catch (error) {
      toast.error("Please check your network connection");
      setLoadText("Sign Up");
    }
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/; // Regex pattern for full name validation
    return nameRegex.test(name);
  };

  return (
    <div className="w-full py-10 px-8 h-full">
      <h2 className="font-bold mb-10 millik" style={{ fontSize: "30px" }}>
        Sign Up
      </h2>
      <form onSubmit={signUp}>
        <div className="flex justify-between w-full lg:w-full">
          <div className="w-full lg:w-5/6">
            <label className="label">
              Full Name <span className="text-red-500">*</span>
            </label>
            <br />
            {!validData.fname && (
              <p className="text-red-600 italic text-xs md:text-sm -mb-2">
                Please input a valid name
              </p>
            )}
            <input
              type="text"
              className={`regex-input-styles text-gray-300 w-full`}
              style={!validData.fname ? styles.badStyle : styles.goodStyle}
              placeholder="Firstname Lastname"
              onChange={(e) => {
                if (validateName(e.target.value)) {
                  setSignupData({ ...signupData, fname: e.target.value });
                  setValidData({ ...validData, fname: true });
                } else if (e.target.value === "") {
                  setValidData({ ...validData, fname: true });
                } else {
                  setSignupData({ ...signupData, fname: "" });
                  setValidData({ ...validData, fname: false });
                }
              }}
            />
          </div>
        </div>
        <div className="my-4">
          <label className="label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <br />

          <input
            type="text"
            className="w-full lg:w-5/6 regex-input-styles"
            style={!validData.email ? styles.badStyle : styles.goodStyle}
            onChange={(e) => {
              setSignupData({ ...signupData, email: e.target.value });
            }}
          />
        </div>
        <div className="my-4">
          <label className="label">Referral Code</label>
          <br />

          <input
            type="text"
            className="w-full lg:w-5/6 regex-input-styles"
            placeholder="Optional"
            style={styles.goodStyle}
            onChange={(e) => {
              setSignupData({ ...signupData, ref_code: e.target.value });
            }}
          />
        </div>
        <div className="my-4">
          <label className="label">
            Password <span className="text-red-500">*</span>
          </label>
          <br />
          <div className="flex items-center w-full lg:w-5/6">
            <input
              type={!hidePass ? "text" : "password"}
              className="w-full input-styles"
              onChange={(e) => {
                setSignupData({ ...signupData, password: e.target.value });
                setPasswords({ ...passwords, password1: e.target.value });
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
            {/* <span
            className="flex items-center justify-center cursor-pointer eye"
            style={{}}
          >
            <img
              src={Eye}
              className=""
              alt="hide password"
              onClick={() => setHidePass(!hidePass)}
            />
          </span> */}
          </div>
        </div>
        <div className="my-4">
          <label className="label">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <br />
          <div className="flex items-center w-full lg:w-5/6">
            <input
              type={!hideCPass ? "text" : "password"}
              className="w-full input-styles"
              style={{ borderRight: "" }}
              onChange={(e) => {
                setSignupData({ ...signupData, password: e.target.value });
                setPasswords({ ...passwords, password2: e.target.value });
              }}
            />
            <span
              className="flex items-center justify-center cursor-pointer eye"
              style={{
                color: "#BDBDBD",
              }}
            >
              <ion-icon
                name={!hideCPass ? "eye-off-outline" : "eye-outline"}
                size="large"
                onClick={() => setHideCPass(!hideCPass)}
              ></ion-icon>
            </span>
            {/* <span
            className="flex items-center justify-center cursor-pointer eye"
            style={{}}
          >
            <img
              src={Eye}
              className=""
              alt="hide password"
              onClick={() => setHidePass(!hidePass)}
            />
          </span> */}
          </div>
        </div>

        <div className="my-4">
          <label className="label">
            Country <span className="text-red-500">*</span>
          </label>
          <br />
          <Select
            options={countries}
            value={countries.label}
            onChange={(e) => setSelectedCountry(e)}
            isSearchable={true}
            placeholder="Select a Country"
            className=" w-full lg:w-5/6 mb-4 cursor-pointer"
          />
          {/* <select
          className="w-full lg:w-5/6 input-styles cursor-pointer"
          onChange={(e) =>
            setSelectedCountry(Object.keys(CountryList)[e.target.value])
          }
        >
          <option>- - Select a Country - -</option>
          {Object.values(CountryList).map((coun, index) => (
            <option key={index} value={index}>
              {coun}
            </option>
          ))}
        </select> */}
        </div>
        <div className="my-4">
          <label className="label ">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <br />
          {/* <input
          type="phone"
          className="w-full lg:w-5/6 input-styles"
          onChange={(e) =>
            setSignupData({ ...signupData, phone: e.target.value })
          }
        /> */}
          <div className="w-full lg:w-5/6 mt-3">
            <PhoneInput
              country={selectedCountry.value.toLowerCase()}
              inputClass={"input-styles"}
              inputStyle={{ width: "100%" }}
              // value={this.state.phone}
              onChange={(phone) =>
                setSignupData({
                  ...signupData,
                  phone: phone,
                  country: selectedCountry.label,
                })
              }
            />
          </div>
        </div>

        <p className="items-center">
          <input
            type="checkbox"
            className="mr-2 cursor-pointer"
            style={{ border: "1px solid #bdbdbd" }}
            onClick={(e) => setIsCheckbox(e.target.checked)}
          />
          I confirm that I have read and agreed to Tips180{" "}
          <Link to="/termsandcondition" className="text-teal-600 underline">
            Terms and Conditions
          </Link>
          . I confirm I am at least 18 years of age.
        </p>

        <button
          className="w-full lg:w-5/6 mt-7 mb-2 py-3 rounded h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0"
          type="submit"
          // onClick={() => {
          //   if (validData.fname) {
          //     signUp();
          //   } else {
          //     toast.error("Please Check Your Information!");
          //   }
          // }}
        >
          Sign Up
        </button>

        <div className="w-full lg:w-5/6 text-center">
          <p>Already have an account?</p>
          <p className="font-bold my-3 cursor-pointer text-blue-400 underline">
            <Link to="/auth/login">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
const Signup = () => {
  return (
    <div>
      <Helmet>
        <title>Signup - Tips180</title>
      </Helmet>
      <Auth App={App} image={Imagee} />;
    </div>
  );
};

export default Signup;
