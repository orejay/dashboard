import React, { useEffect, useState } from "react";
import PredWin from "./PredWin";
import winBg from "../assets/win-bg.png";
import faqbg from "../assets/pwfaqbg.webp";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useMediaQuery } from "@mui/material";

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
  { label: "Tanzania", value: "TZ" },
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

const PredictAndWinComp = ({ isFaq, redirectUrl, isDashboard }) => {
  const isMobile = useMediaQuery("(max-width:500px)");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [closed, setClosed] = useState(true);
  const [data, setData] = useState(null);
  const [prize, setPrize] = useState(null);
  const [isLocation, setIsLocation] = useState(false);
  const [isLocationValid, setIsLocationValid] = useState(false);
  const [cardNo, setCardNo] = useState(0);
  const [country, setCountry] = useState(null);
  const [manualLocation, setManualLocation] = useState(false);
  const geoURL = process.env.REACT_APP_GEOLOCATIONURL;
  const geoKey = process.env.REACT_APP_GEOAPIKEY1;
  const geoKey2 = process.env.REACT_APP_GEOAPIKEY2;
  const geoKey3 = process.env.REACT_APP_GEOAPIKEY3;
  const geoKey4 = process.env.REACT_APP_GEOAPIKEY4;
  const geoKey5 = process.env.REACT_APP_GEOAPIKEY5;
  const geoKey6 = process.env.REACT_APP_GEOAPIKEY6;
  const geoKey7 = process.env.REACT_APP_GEOAPIKEY7;
  const geoKey8 = process.env.REACT_APP_GEOAPIKEY8;
  const geoKeys = [
    geoKey,
    geoKey2,
    geoKey3,
    geoKey4,
    geoKey5,
    geoKey6,
    geoKey7,
    geoKey8,
  ];
  const api = process.env.REACT_APP_BASE_API;
  const [userCountryCode, setUserCountryCode] = useState(null);

  const getLocation = async (num) => {
    try {
      const res = await fetch(`${geoURL}/country?token=${geoKeys[num]}`);
      const res_txt = await res.text();
      if (res.ok) {
        handleLocation(String(res_txt).trim());
        setIsLocation(true);
      } else if (res.status === 429) {
        if (num < 7) {
          getLocation(num + 1);
        } else {
          setManualLocation(true);
          handleLocation("NG");
          setIsLocation(true);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLocation(0);
  }, []);

  const getPrize = async (cntry) => {
    const res = await fetch(`${api}/getendpoints/prizes/${cntry}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const res_json = await res.json();
    setPrize(res_json.prize);
  };

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
    setData(res_json);
  };

  const handleLocation = (code) => {
    if (
      ["Nigeria", "Kenya", "Ghana", "Cameroon", "Uganda", "Tanzania"].includes(
        countries.filter((c) => c.value === code)[0].label
      )
    )
      setIsLocationValid(true);
    setCountry(countries.filter((c) => c.value === code)[0].label);
    getFee(countries.filter((c) => c.value === code)[0].label);
    getPrize(countries.filter((c) => c.value === code)[0].label);
  };

  const Faq = [
    {
      q: "IS IT FREE TO PLAY?",
      a: "NO! You are required to pay an access token. Token is only valid per round.",
    },
    {
      q: "CAN I HAVE MULTIPLE ACCOUNTS?",
      a: "NO! We only permit one player per account. You will be disqualified if you play with multiple accounts.",
    },
    {
      q: "HOW MUCH DOES IT COST TO JOIN?",
      a: `It costs ${
        country === "Nigeria"
          ? "₦"
          : country === "Ghana"
          ? "GHC"
          : country === "Kenya" || country === "Tanzania"
          ? "KSH"
          : country === "Cameroon"
          ? "CFA"
          : country === "Uganda"
          ? "UGX"
          : "KSH"
      }${Number(data?.fee)?.toLocaleString("en-US")} per round.`,
    },
    {
      q: "HOW DO I PAY?",
      a: "Payments can be made using MPESA (KENYA & TANZANIA), BANK TRANSFER (NIGERIA), MTN MOBILE MONEY (CAMEROON), MTN MOBILE MONEY (GHANA), MTN MOBILE MONEY (UGANDA). Paying online with your card (PAYSTACK) automatically activates your account.",
    },
    {
      q: "WHAT COUNTRIES IS P&W AVAILABLE IN?",
      a: "Nigeria, Kenya, Ghana, Cameroon, Uganda and Tanzania.",
    },
    {
      q: "IS THERE A RAFFLE DRAW AMONG WINNERS?",
      a: "NO! Stated prize for each round will be shared among winners for the round.",
    },
    {
      q: "WHO DO I CONTACT WHEN I WIN?",
      a: "You can reach us on any of customer care lines to claim your prize.",
    },
  ];

  // const checkLogin = () => {
  //   if (!token) {
  //     navigate("/auth/login");
  //     toast.info("Kindly Login to View Predict and Win!");
  //     toast.clearWaitingQueue();
  //   }
  // };

  // useEffect(() => {
  //   checkLogin();
  // }, []);

  const faq = (
    <div className="bg-white lg:rounded-xl rounded-md mx-auto mt-5 py-6 px-9 w-11/12 lg:w-6/12">
      {Faq.map((each, index) => (
        <div key={index} style={{ borderBottom: "1px solid #f2f2f2" }}>
          <div
            className={
              cardNo === index + 1
                ? `flex cursor-pointer justify-between text-xs lg:text-base w-full ${
                    index !== 0 ? "mt-4" : ""
                  } py-2 items-center mx-auto`
                : `flex cursor-pointer justify-between text-xs lg:text-base w-full ${
                    index !== 0 ? "mt-4" : ""
                  } py-2 items-center mx-auto`
            }
            onClick={() => {
              setClosed(!closed);
              cardNo === index + 1 ? setCardNo(0) : setCardNo(index + 1);
            }}
            key={index}
          >
            <p className="font-bold">{each.q}</p>
            <ion-icon
              size="small"
              name={
                cardNo === index + 1
                  ? "remove-circle-outline"
                  : "add-circle-outline"
              }
            ></ion-icon>
          </div>
          <div
            className={
              cardNo === index + 1
                ? `flex cursor-pointer justify-between text-xs lg:text-base w-full mb-4 py-2 items-center mx-auto`
                : `hidden`
            }
          >
            {each.a}
          </div>
        </div>
      ))}
    </div>
  );

  const loader = (
    <div className="h-screen">
      <Loader />
    </div>
  );

  const predict = (
    <div className="min-h-screen flex flex-col items-center">
      {isLocationValid && (
        <div
          alt="banner"
          style={{
            backgroundImage: `url(${winBg})`,
            backgroundSize: "100% 100%",
          }}
          className="lg:mb-8 w-full h-60 flex justify-center"
        >
          <div className="text-white py-4">
            <h2 className=" text-center text-xl md:text-2xl font-semibold">
              FIGHT FOR A <br />
              CHANCE TO WIN
            </h2>
            <p
              className="text-center big-shoulder font-bold"
              style={{ fontSize: "75px" }}
            >
              {country === "Nigeria"
                ? "₦"
                : country === "Ghana"
                ? "GHC"
                : country === "Kenya" || country === "Tanzania"
                ? "KSH"
                : country === "Cameroon"
                ? "CFA"
                : country === "Uganda"
                ? "UGX"
                : "KSH"}
              {Number(prize).toLocaleString()}
            </p>
            <p className="text-center">
              <Link
                className="underline font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
                to="/pw-terms"
              >
                T&C APPLY
              </Link>
            </p>
          </div>
        </div>
      )}
      {manualLocation && (
        <select
          name="manual-location"
          id="manual-location"
          className="dd mb-5 w-1/3 md:w-1/6"
          onChange={(e) => handleLocation(e.target.value)}
        >
          <option value="NG">Nigeria</option>
          <option value="UG">Uganda</option>
          <option value="GH">Ghana</option>
          <option value="KE">Kenya</option>
          <option value="CM">Cameroon</option>
          <option value="TZ">Tanzania</option>
        </select>
      )}
      <PredWin
        manualLocation={manualLocation}
        isLocationValid={isLocationValid}
        country={country}
        fee={data?.fee}
        redirectUrl={redirectUrl}
        isDashboard={isDashboard}
      />
      {isFaq && (
        <div
          style={{
            backgroundImage: `url(${faqbg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-fit py-8 mt-8 flex flex-col items-center justify-center"
        >
          <h3 className="millik lg:text-4xl text-lg text-white">
            Frequently Asked Questions
          </h3>
          <p className="lg:text-lg text-xs text-center text-white w-10/12">
            We will try to answer as much as we can here, if you need more help,
            reach us at hello@tips180.com
          </p>
          {faq}
        </div>
      )}
    </div>
  );

  if (isLocation) {
    return predict;
  } else {
    return loader;
  }
};

export default PredictAndWinComp;
