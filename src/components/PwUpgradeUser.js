import React, { useState, useRef } from "react";
import MembersList from "./MembersList";
import UpgradeUserTable from "./UpgradeUserTable";
import PwMembersList from "./PwMembersList";

const PwUpgradeUser = () => {
  const searchEmailRef = useRef(null);
  const [data, setData] = useState({});
  const [cat, setCat] = useState("email");
  const [memberData, setMemberData] = useState([]);
  const [displayUser, setDisplayUser] = useState(false);

  const GetUsers = async () => {
    const token = localStorage.getItem("admintoken");
    const api = process.env.REACT_APP_BASE_API;

    try {
      const res = await fetch(`${api}/postendpoints/search-users?page=1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email: searchEmailRef.current.value, cat: cat }),
      });
      const res_json = await res.json();
      if (!res.ok) {
        localStorage.removeItem("admin");
        localStorage.removeItem("admintoken");
      } else {
        setMemberData(res_json);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  const setDisplay = () => {
    setDisplayUser(true);
  };

  return (
    <div className="w-full">
      <div>
        <input
          type="text"
          className="input text-gray-600 md:mr-2 mr-2"
          placeholder="User Email or ID"
          onChange={(e) => {
            if (e.target.value.length >= 3) {
              GetUsers();
              setDisplayUser(false);
            }
          }}
          ref={searchEmailRef}
        />
        <select
          onChange={(e) => setCat(e.target.value)}
          name="category"
          id="cat"
          className="dd mr-2"
        >
          <option value="email">Email</option>
          <option value="id">User ID</option>
        </select>
        <input
          type="submit"
          value="Search User"
          className="input bg-gradient-to-r cursor-pointer from-teal-500 to-blue-600 text-white hover:shadow-md hover:shadow-green-200 hover:transition-all ease-in-out duration-500"
          onClick={() => {
            GetUsers();
            setDisplayUser(false);
          }}
        />
      </div>
      <PwMembersList
        memberData={memberData}
        displayUser={displayUser}
        setDisplayUser={(props) => setDisplay(props)}
      />
    </div>
  );
};

export default PwUpgradeUser;
