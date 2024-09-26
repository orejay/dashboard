import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import PlansCard from "./PlansCard";
import { plansData } from "../data/plansData";
import { dollarData } from "../data/dollarData";
import { kenyaData } from "../data/kenyaData";
import { ghanaData } from "../data/ghanaData";
import Select from "react-select";
import { camBenData } from "../data/camBenData";
import { sierraLData } from "../data/sierraLData";
import { southAData } from "../data/southAData";
import { tanzaniaData } from "../data/TanzaniaData";
import { ugandaData } from "../data/UgandaData";
import Loader from "./Loader";
import { Helmet } from "react-helmet";

const sty = {
  width: "48%",
};

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

const Payment = () => {
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [country, setCountry] = useState(null);
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
  const [userCountryCode, setUserCountryCode] = useState(null);

  const getLocation = async (num) => {
    try {
      const res = await fetch(`${geoURL}/country?token=${geoKeys[num]}`);
      const res_txt = await res.text();
      console.log(res);
      console.log(res_txt);
      if (res.ok) {
        setUserCountryCode(String(res_txt).trim());
        handleLocation(String(res_txt).trim());
      } else if (res.status === 429) {
        if (num < 7) {
          getLocation(num + 1);
        } else {
          setUserCountryCode("US");
          setCountry("US");
          handleLocation("US");
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLocation(0);
  }, []);

  const handleChange = (countries) => {
    setSelectedOption(countries);
    countries.value === "NG"
      ? setData(plansData)
      : countries.value === "GH"
      ? setData(ghanaData)
      : countries.value === "KE" ||
        countries.value === "ET" ||
        countries.value === "RW"
      ? setData(kenyaData)
      : countries.value === "TZ"
      ? setData(tanzaniaData)
      : countries.value === "UG"
      ? setData(ugandaData)
      : countries.value === "SL"
      ? setData(sierraLData)
      : countries.value === "ZA"
      ? setData(southAData)
      : countries.value === "BJ" || countries.value === "CM"
      ? setData(camBenData)
      : setData(dollarData);
    setCountry(countries.label);
  };

  const handleLocation = (code) => {
    code === "NG"
      ? setData(plansData)
      : code === "GH"
      ? setData(ghanaData)
      : code === "KE" || code === "ET" || code === "RW"
      ? setData(kenyaData)
      : code === "TZ"
      ? setData(kenyaData)
      : code === "UG"
      ? setData(ugandaData)
      : code === "SL"
      ? setData(sierraLData)
      : code === "ZA"
      ? setData(southAData)
      : code === "BJ" || code === "CM"
      ? setData(camBenData)
      : setData(dollarData);
    setCountry(countries.filter((c) => c.value === code)[0].label);
  };

  const Top = (
    <div className="flex w-full mb-4">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold millik"
      >
        Make Payment
      </h1>
    </div>
  );

  const Content = (
    <div
      className=" "
      style={{
        zIndex: 10,
      }}
    >
      <div
        className="w-full flex "
        style={{
          zIndex: -1,
        }}
      >
        <Select
          options={countries}
          value={selectedOption}
          onChange={handleChange}
          isSearchable={true}
          menuPortalTarget={document.body}
          className="md:w-4/12 w-7/12 lg:w-4/12 mb-4 mx-auto cursor-pointer"
          styles={{ menuPortal: (base) => ({ ...base }) }}
          placeholder="Select a Country"
        />
      </div>

      {country ? (
        <PlansCard styl={sty} data={data} country={country} />
      ) : (
        <Loader />
      )}
    </div>
  );
  return (
    <div>
      <Helmet>
        <title></title>
      </Helmet>
      <Dashboard Top={Top} Content={Content} active={6} />
    </div>
  );
};
export default Payment;
