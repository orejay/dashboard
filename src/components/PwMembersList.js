import React, { useState } from "react";
import UpgradeUserTable from "./UpgradeUserTable";
import PwUpgradeUserTable from "./PwUpgradeUserTable";

const PwMembersList = ({ memberData, displayUser, setDisplayUser }) => {
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");

  const GetUser = async (email) => {
    const token = localStorage.getItem("admintoken");
    const api = process.env.REACT_APP_BASE_API;

    try {
      const res = await fetch(`${api}/postendpoints/search-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email: email }),
      });
      const res_json = await res.json();
      if (!res.ok) {
        localStorage.removeItem("admin");
        localStorage.removeItem("admintoken");
      } else {
        setData(res_json);
      }
    } catch (error) {
      console.log("Check your network");
    }
  };

  return (
    <div>
      {displayUser ? (
        <PwUpgradeUserTable
          result={data}
          refresh={(props) => GetUser(props, email)}
        />
      ) : (
        <table className="mt-10">
          <tr className="font-bold">
            <td>User ID</td>
            <td>Full Name</td>
            <td>Email</td>
          </tr>
          {memberData.map((each, index) => (
            <tr
              key={index}
              className={
                index % 2 === 1
                  ? `bg-gray-200 cursor-pointer`
                  : `cursor-pointer bg-white`
              }
              onClick={() => {
                setEmail(each.email);
                GetUser(each.email);
                setDisplayUser();
              }}
            >
              <td>{each.user_id}</td>
              <td>{each.full_name}</td>
              <td>{each.email}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default PwMembersList;
