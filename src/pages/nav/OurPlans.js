import React, { useEffect, useState } from "react";
import PlansCard from "../../components/PlansCard";
import Main from "../../Main";
import { plansData } from "../../data/plansData";
import { dollarData } from "../../data/dollarData";
import { kenyaData } from "../../data/kenyaData";
import { ghanaData } from "../../data/ghanaData";
import Select from "react-select";
import { tanzaniaData } from "../../data/TanzaniaData";
import { ugandaData } from "../../data/UgandaData";
import { camBenData } from "../../data/camBenData";
import { sierraLData } from "../../data/sierraLData";
import { southAData } from "../../data/southAData";
import { Helmet } from "react-helmet";

const sty = {
  width: "32%",
};

const CountryList = {
  af: "Afganistán",
  al: "Albania",
  de: "Alemania",
  ad: "Andorra",
  ao: "Angola",
  ai: "Anguila",
  aq: "Antártida",
  ag: "Antigua y Barbuda",
  sa: "Arabia Saudí",
  dz: "Argelia",
  ar: "Argentina",
  am: "Armenia",
  aw: "Aruba",
  au: "Australia",
  at: "Austria",
  az: "Azerbaiyán",
  bs: "Bahamas",
  bd: "Bangladés",
  bb: "Barbados",
  bh: "Baréin",
  be: "Bélgica",
  bz: "Belice",
  bj: "Benín",
  bm: "Bermudas",
  by: "Bielorrusia",
  bo: "Bolivia",
  ba: "Bosnia y Herzegovina",
  bw: "Botsuana",
  br: "Brasil",
  bn: "Brunéi",
  bg: "Bulgaria",
  bf: "Burkina Faso",
  bi: "Burundi",
  bt: "Bután",
  cv: "Cabo Verde",
  kh: "Camboya",
  cm: "Camerún",
  ca: "Canadá",
  ic: "Canarias",
  bq: "Caribe neerlandés",
  qa: "Catar",
  ea: "Ceuta y Melilla",
  td: "Chad",
  cz: "Chequia",
  cl: "Chile",
  cn: "China",
  cy: "Chipre",
  va: "Ciudad del Vaticano",
  co: "Colombia",
  km: "Comoras",
  cg: "Congo",
  kp: "Corea del Norte",
  kr: "Corea del Sur",
  cr: "Costa Rica",
  ci: "Côte d’Ivoire",
  hr: "Croacia",
  cu: "Cuba",
  cw: "Curazao",
  dg: "Diego García",
  dk: "Dinamarca",
  dm: "Dominica",
  ec: "Ecuador",
  eg: "Egipto",
  sv: "El Salvador",
  ae: "Emiratos Árabes Unidos",
  er: "Eritrea",
  sk: "Eslovaquia",
  si: "Eslovenia",
  es: "España",
  us: "Estados Unidos",
  ee: "Estonia",
  sz: "Esuatini",
  et: "Etiopía",
  ph: "Filipinas",
  fi: "Finlandia",
  fj: "Fiyi",
  fr: "Francia",
  ga: "Gabón",
  gm: "Gambia",
  ge: "Georgia",
  gh: "Ghana",
  gi: "Gibraltar",
  gd: "Granada",
  gr: "Grecia",
  gl: "Groenlandia",
  gp: "Guadalupe",
  gu: "Guam",
  gt: "Guatemala",
  gf: "Guayana Francesa",
  gg: "Guernsey",
  gn: "Guinea",
  gq: "Guinea Ecuatorial",
  gw: "Guinea-Bisáu",
  gy: "Guyana",
  ht: "Haití",
  hn: "Honduras",
  hu: "Hungría",
  in: "India",
  id: "Indonesia",
  iq: "Irak",
  ir: "Irán",
  ie: "Irlanda",
  ac: "Isla de la Ascensión",
  im: "Isla de Man",
  cx: "Isla de Navidad",
  nf: "Isla Norfolk",
  is: "Islandia",
  ax: "Islas Åland",
  ky: "Islas Caimán",
  cc: "Islas Cocos",
  ck: "Islas Cook",
  fo: "Islas Feroe",
  gs: "Islas Georgia del Sur y Sandwich del Sur",
  fk: "Islas Malvinas",
  mp: "Islas Marianas del Norte",
  mh: "Islas Marshall",
  um: "Islas menores alejadas de EE. UU.",
  pn: "Islas Pitcairn",
  sb: "Islas Salomón",
  tc: "Islas Turcas y Caicos",
  vg: "Islas Vírgenes Británicas",
  vi: "Islas Vírgenes de EE. UU.",
  il: "Israel",
  it: "Italia",
  jm: "Jamaica",
  jp: "Japón",
  je: "Jersey",
  jo: "Jordania",
  kz: "Kazajistán",
  ke: "Kenia",
  kg: "Kirguistán",
  ki: "Kiribati",
  xk: "Kosovo",
  kw: "Kuwait",
  la: "Laos",
  ls: "Lesoto",
  lv: "Letonia",
  lb: "Líbano",
  lr: "Liberia",
  ly: "Libia",
  li: "Liechtenstein",
  lt: "Lituania",
  lu: "Luxemburgo",
  mk: "Macedonia",
  mg: "Madagascar",
  my: "Malasia",
  mw: "Malaui",
  mv: "Maldivas",
  ml: "Mali",
  mt: "Malta",
  ma: "Marruecos",
  mq: "Martinica",
  mu: "Mauricio",
  mr: "Mauritania",
  yt: "Mayotte",
  mx: "México",
  fm: "Micronesia",
  md: "Moldavia",
  mc: "Mónaco",
  mn: "Mongolia",
  me: "Montenegro",
  ms: "Montserrat",
  mz: "Mozambique",
  mm: "Myanmar",
  na: "Namibia",
  nr: "Nauru",
  np: "Nepal",
  ni: "Nicaragua",
  ne: "Níger",
  ng: "Nigeria",
  nu: "Niue",
  no: "Noruega",
  nc: "Nueva Caledonia",
  nz: "Nueva Zelanda",
  om: "Omán",
  nl: "Países Bajos",
  pk: "Pakistán",
  pw: "Palaos",
  pa: "Panamá",
  pg: "Papúa Nueva Guinea",
  py: "Paraguay",
  pe: "Perú",
  pf: "Polinesia Francesa",
  pl: "Polonia",
  pt: "Portugal",
  pr: "Puerto Rico",
  hk: "RAE de Hong Kong",
  mo: "RAE de Macao",
  gb: "Reino Unido",
  cf: "República Centroafricana",
  cd: "República Democrática del Congo",
  do: "República Dominicana",
  re: "Reunión",
  rw: "Ruanda",
  ro: "Rumanía",
  ru: "Rusia",
  eh: "Sáhara Occidental",
  ws: "Samoa",
  as: "Samoa Americana",
  bl: "San Bartolomé",
  kn: "San Cristóbal y Nieves",
  sm: "San Marino",
  mf: "San Martín",
  pm: "San Pedro y Miquelón",
  vc: "San Vicente y las Granadinas",
  sh: "Santa Elena",
  lc: "Santa Lucía",
  st: "Santo Tomé y Príncipe",
  sn: "Senegal",
  rs: "Serbia",
  sc: "Seychelles",
  sl: "Sierra Leona",
  sg: "Singapur",
  sx: "Sint Maarten",
  sy: "Siria",
  so: "Somalia",
  lk: "Sri Lanka",
  za: "Sudáfrica",
  sd: "Sudán",
  ss: "Sudán del Sur",
  se: "Suecia",
  ch: "Suiza",
  sr: "Surinam",
  sj: "Svalbard y Jan Mayen",
  th: "Tailandia",
  tw: "Taiwán",
  tz: "Tanzania",
  tj: "Tayikistán",
  io: "Territorio Británico del Océano Índico",
  tf: "Territorios Australes Franceses",
  ps: "Territorios Palestinos",
  tl: "Timor-Leste",
  tg: "Togo",
  tk: "Tokelau",
  to: "Tonga",
  tt: "Trinidad y Tobago",
  ta: "Tristán de Acuña",
  tn: "Túnez",
  tm: "Turkmenistán",
  tr: "Turquía",
  tv: "Tuvalu",
  ua: "Ucrania",
  ug: "Uganda",
  uy: "Uruguay",
  uz: "Uzbekistán",
  vu: "Vanuatu",
  ve: "Venezuela",
  vn: "Vietnam",
  wf: "Wallis y Futuna",
  ye: "Yemen",
  dj: "Yibuti",
  zm: "Zambia",
  zw: "Zimbabue",
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

const OurPlans = () => {
  const [data, setData] = useState(plansData);
  const [selectedOption, setSelectedOption] = useState(null);
  const [country, setCountry] = useState("Nigeria");
  const token = localStorage.getItem("token");

  const IsUserAuthorized = async () => {
    try {
      const res = await fetch("https://www.tips180.lol/getendpoints/auth", {
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
      ? setData(kenyaData)
      : countries.value === "UG"
      ? setData(ugandaData)
      : countries.value === "SL"
      ? setData(sierraLData)
      : countries.value === "ZA"
      ? setData(southAData)
      : countries.value === "BJ" ||
        countries.value === "CM" ||
        countries.value === "CI" ||
        countries.value === "ML" ||
        countries.value === "GW" ||
        countries.value === "NE" ||
        countries.value === "BF" ||
        countries.value === "SN"
      ? setData(camBenData)
      : setData(dollarData);
    setCountry(countries.label);
  };

  useEffect(() => {
    IsUserAuthorized();
  }, []);

  const ourPlans = (
    <div style={{ background: "#F2F2F2" }}>
      <div className="lg:py-20 py-14 text-white mx-auto text-center bg-gradient-to-r from-teal-500 to-blue-600">
        <h1 className="lg:text-4xl text-xl millik mx-auto">Our Plans</h1>
        <p className="text-xs lg:text-base">
          There’s a plan tailored for everyone!
        </p>
      </div>
      <div className="w-full mt-12 flex flex-col items-center">
        <Select
          options={countries}
          value={selectedOption}
          onChange={handleChange}
          isSearchable={true}
          placeholder="Select a Country"
          className="md:w-4/12 w-7/12 lg:w-3/12 mb-4 mx-auto cursor-pointer"
        />
        {/* <select
          className="dropdown md:w-4/12 w-7/12 lg:w-3/12 mb-4 mx-auto cursor-pointer"
          label="country"
          id="plans-country"
          defaultValue="Nigeria"
          onChange={(e) => {
            e.target.value === "Nigeria"
              ? setData(plansData)
              : e.target.value === "Ghana"
              ? setData(ghanaData)
              : e.target.value === "Kenya"
              ? setData(kenyaData)
              : setData(dollarData);
            setCountry(e.target.value);
          }}
        >
          {Object.values(CountryList).map((each, index) => (
            <option value={each} key={index}>
              {each}
            </option>
          ))}
        </select> */}
      </div>
      <div className="w-11/12 px-6 pt-6 pb-16 rounded-xl mt-10 mb-36 mx-auto bg-gray-100 md:shadow shadow-slate-300">
        <PlansCard bg={"gray-100"} styl={sty} data={data} country={country} />
      </div>
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>Payment Plans - Tips180</title>
      </Helmet>
      <Main Prop={ourPlans} nav={2} />
    </div>
  );
};

export default OurPlans;
