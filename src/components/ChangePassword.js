import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ChangePassword({ user, tab, api, token }) {
  const currRef = useRef(null);
  const newPassRef = useRef(null);
  const confPassRef = useRef(null);
  const [loadText, setloadText] = useState("Update Password");
  const [editInfo, setEditInfo] = useState(false);
  const [signupData, setSignupData] = useState({
    fname: "",
    email: "",
    phone: "",
  });
  const [loadEditText, setLoadEditText] = useState("Save Changes");

  const [selectedCountry, setSelectedCountry] = useState(
    JSON.stringify({ value: "ng", label: "Nigeria" })
  );
  const ChangePassword = async () => {
    setloadText(". . .");
    if (newPassRef.current.value !== confPassRef.current.value) {
      return toast.error("Password mismatch"), setloadText("Update Password");
    }
    try {
      const res = await fetch(`${api}/auth/change-pass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          old_password: currRef.current.value,
          new_password: confPassRef.current.value,
        }),
      });
      const res_json = await res.json();

      if (!res.ok) {
        toast.error(res_json.msg);
      } else {
        toast.success("Password Changed Successfully ");
      }
      setloadText("Update Password");
    } catch (error) {
      console.log("Check your network");
      setloadText("Update Password");
    }
  };
  const EditProfile = async () => {
    setLoadEditText("...");
    try {
      const data = JSON.stringify(signupData);
      const res = await fetch(`${api}/edit/edit-profile`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: data,
      });

      const res_json = await res.json();

      if (!res.ok) {
        return (
          toast.error("Please check your data and try again"),
          setLoadEditText("SAVE CHANGES")
        );
      } else {
        localStorage.setItem("user", JSON.stringify(res_json));
        localStorage.setItem("token", res_json.refresh_token);
        toast.success(`Changes Saved`);
        setLoadEditText("SAVE CHANGES");
        setSignupData({
          fname: "",
          email: "",
          phone: "",
        });
        setEditInfo(false);
        window.location.reload(false);
      }
    } catch (error) {
      toast.error("Please check your network connection");
      setLoadEditText("SAVE CHANGES");
    }
  };

  return (
    <div className="w-full">
      {tab === 0 ? (
        <div className="">
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Name:</h1>
            <div className="flex lg:w-2/3">
              <div className="w-full">
                <p
                  type="text"
                  className="input-styles w-full"
                  placeholder="Full Name"
                >
                  {user?.name}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Email Address:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">User ID:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-styles w-full">
                {user?.user_id}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Phone:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-styles w-full">
                {user?.phone}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Country:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-styles w-full">
                {user?.country}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Account Plan:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {user?.accoutplan}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Smart Bet:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {user?.isubscriptstatus}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Rollover Bet:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {user?.rollsubscriptstatus
                  ? user.rollsubscriptstatus
                  : "Inactive"}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">50 Odds:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {user?.odds50status}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Weekend 10:</h1>
            <div className="lg:w-2/3">
              <p type="text" className="input-styles w-full">
                {user?.w10subscriptstatus}
              </p>
            </div>
          </div>
          <div
            className="flex w-full justify-center"
            onClick={() => setEditInfo(true)}
          >
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 loadText-white py-2 px-5 rounded-md w-full lg:w-1/3 lg:ml-20 text-white">
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Current Password:</h1>
            <div className="lg:w-2/3">
              <input
                type="password"
                className="input-styles w-full"
                ref={currRef}
              />
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">New Password:</h1>
            <div className="lg:w-2/3">
              <input
                ref={newPassRef}
                id="mes"
                name="mes"
                type="password"
                className="input-styles w-full"
              />
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Confirm New Password:</h1>
            <div className="lg:w-2/3">
              <input
                ref={confPassRef}
                type="password"
                id="message"
                name="message"
                className="input-styles w-full"
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              onClick={() => ChangePassword()}
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-2 px-5 rounded-md w-full lg:w-1/3 lg:ml-40"
            >
              {loadText}
            </button>
          </div>
        </div>
      )}

      {editInfo ? (
        <div className="lg:w-full w-10/12 mx-auto flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="w-full relative my-6 mx-auto">
            <div className="lg:w-2/4 opacity-100 mx-auto border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-2xl millik">Edit Profile</h3>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setEditInfo(false)}
                >
                  <span className="text-black opacity-7 h-7 w-8  text-xl lg:text-2xl block  rounded-full">
                    x
                  </span>
                </button>
              </div>
              <div className="relative p-3 flex-auto">
                <form className=" rounded px-4 md:pt-6 md:pb-4 w-full">
                  <div className="w-full lg:w-5/6 md:flex items-center ">
                    <label className="label w-2/5">Full Name :</label>

                    <input
                      type="text"
                      className="input-styles text-gray-300 w-full"
                      placeholder="FirstName LastName"
                      onChange={(e) =>
                        setSignupData({ ...signupData, fname: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-4 w-full lg:w-5/6 md:flex items-center">
                    <label className="label  w-2/5">Phone Number :</label>

                    <div className="w-full  mt-3">
                      <PhoneInput
                        country={JSON.parse(selectedCountry).value}
                        inputClass={"input-styles"}
                        inputStyle={{ width: "100%" }}
                        onChange={(phone) =>
                          setSignupData({
                            ...signupData,
                            phone: phone,
                            country: JSON.parse(selectedCountry).label,
                          })
                        }
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex w-full item-center justify-center ">
                <button
                  className="text-white w-3/12 p-2 lg:text-base bg-gradient-to-r from-teal-500 to-blue-600 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-6"
                  type="button"
                  onClick={() => {
                    signupData.fname.length > 3
                      ? EditProfile()
                      : toast.error("Please enter a valid name!");
                  }}
                >
                  {loadEditText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
