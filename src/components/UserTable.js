import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// { name: "Free", link: "free" },

const plans = [
  { name: "Key", link: "key" },
  { name: "Premium", link: "premium" },
  { name: "Smart Bet Plan", link: "smartbet" },
  { name: "Rollover", link: "rollover" },
  { name: "50 Odds", link: "odds50" },
  { name: "Weekend 10", link: "weekend10" },
];

const UserTable = ({ style, results, tabNo, getUsers }) => {
  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  const authHeader = localStorage.getItem("admintoken");
  const api = process.env.REACT_APP_BASE_API;

  const downgrade = async (planNo, email) => {
    try {
      const data = JSON.stringify(userEmail);

      const res = await fetch(
        `${api}/postendpoints/downgrade/${plans[planNo].link}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + authHeader,
          },
          redirect: "follow",
          credentials: "same-origin",
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Unable to downgrade user!");
        return console.log("Unable to downgrade user!");
      }

      toast.info("Successful!");
    } catch (error) {
      console.log("Check your network");
    }
  };

  const Free = ({ planNo, email }) => {
    return (
      <div
        onClick={() => {
          downgrade(planNo, email);
          getUsers();
        }}
        className="rounded bg-red-600 w-fit px-1 lg:px-4 py-1 text-xs lg:text-base font-medium text-white cursor-pointer hover:shadow-md hover:shadow-red-300 hover:transition-all ease-in-out duration-500"
      >
        Remove
      </div>
    );
  };

  return (
    <div className="w-full">
      {results.total_users ? (
        <div className="rounded-md bg-gradient-to-r text-xs lg:text-base from-slate-100 to-gray-200 w-fit lg:p-2 p-1">
          <h2 className="bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text font-semibold">
            {results["total_users"]}
            {` ${plans[tabNo].name} `}{" "}
            {results.total_users > 1 ? "Members" : "Member"}
          </h2>
        </div>
      ) : (
        ""
      )}
      {results["users"] ? (
        <table className="text-left mx-auto my-2 break-words" style={style}>
          <tr className="w-full my-2 bg-white text-xs lg:text-base font-light">
            <th>User ID</th>
            <th>Fullname</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
          {results["users"]?.map((dat, i) => (
            <tr className="py-2 text-xs lg:text-base" key={i}>
              <td>{dat?.user_id}</td>
              <td>{dat?.full_name}</td>
              <td>{dat?.email}</td>
              <td>{dat?.phone_number}</td>
              <td>
                {/* {tabNo > 0 ? <Free planNo={tabNo} email={dat.email} /> : ""} */}
                <Free planNo={tabNo} email={dat.email} />
              </td>
            </tr>
          ))}
        </table>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserTable;
