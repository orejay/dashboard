import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ContentCopyRounded, CopyAllRounded } from "@mui/icons-material";

export default function ChangePassword({ user, tab, api, token }) {
  const currRef = useRef(null);
  const refCodeRef = useRef(null);
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

  const handleCopy = () => {
    const content = refCodeRef.current.innerText;

    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast.info("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("failed to copy: ", err);
      });
  };

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
    <div className="w-full p-5">
      {tab === 0 ? (
        <div className="">
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Name:</h1>
            <div className="flex lg:w-2/3">
              <div className="w-full">
                <p
                  type="text"
                  className="input-display w-full"
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
              <p type="text" className="input-display w-full">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">User ID:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-display w-full">
                {user?.user_id}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Wallet Balance:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-display w-full">
                {user?.balance}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Referral Code:</h1>
            <div className="lg:w-2/3">
              <div
                type="text"
                className="input-display flex items-center cursor-pointer justify-between w-full"
                onClick={handleCopy}
              >
                <p ref={refCodeRef}>{user?.ref_code}</p>
                <div className="">
                  <span className="text-xs italic mr-1">copy to clipboard</span>
                  <CopyAllRounded sx={{ color: "black" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Total Ref Points:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-display w-full">
                {user?.ref_points}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Total Loyalty Points:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-display w-full">
                {user?.loyalty_points}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Phone:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-display w-full">
                {user?.phone}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Country:</h1>
            <div className="lg:w-2/3">
              <div type="text" className="input-display w-full">
                {user?.country}
              </div>
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Key/Premium:</h1>
            <div className="lg:w-2/3">
              <p
                type="text"
                className="input-display w-full"
                style={{
                  color: ["Key", "Premium"].includes(user?.accoutplan)
                    ? ""
                    : "#666666",
                  backgroundColor: ["Key", "Premium"].includes(user?.accoutplan)
                    ? ""
                    : "#F5F5F5",
                  border: ["Key", "Premium"].includes(user?.accoutplan)
                    ? "1px solid #6D55F1"
                    : "1px solid #CCCCCC",
                }}
              >
                {user?.accoutplan}
              </p>
            </div>
          </div>

          {user?.acc_plan_exp && (
            <div className="lg:flex items-center my-5">
              <h1 className="lg:w-1/4">Key/Premium Expiry:</h1>
              <div className="lg:w-2/3">
                <p type="text" className="input-display w-full">
                  {user?.acc_plan_exp}
                </p>
              </div>
            </div>
          )}

          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Smart Bet:</h1>
            <div className="lg:w-2/3">
              <p
                type="text"
                className="input-display w-full"
                style={{
                  color: user?.isubscriptstatus === "Active" ? "" : "#666666",
                  backgroundColor:
                    user?.isubscriptstatus === "Active" ? "" : "#CCCCCC",
                  border:
                    user?.isubscriptstatus === "Active"
                      ? "1px solid #6D55F1"
                      : "1px solid #CCCCCC",
                }}
              >
                {user?.isubscriptstatus}
              </p>
            </div>
          </div>
          {user?.smart_exp && (
            <div className="lg:flex items-center my-5">
              <h1 className="lg:w-1/4">Smart Bet Expiry:</h1>
              <div className="lg:w-2/3">
                <p type="text" className="input-display w-full">
                  {user?.smart_exp}
                </p>
              </div>
            </div>
          )}
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Rollover Bet:</h1>
            <div className="lg:w-2/3">
              <p
                type="text"
                className="input-display w-full"
                style={{
                  color:
                    user?.rollsubscriptstatus === "Active" ? "" : "#666666",
                  backgroundColor:
                    user?.rollsubscriptstatus === "Active" ? "" : "#CCCCCC",
                  border:
                    user?.rollsubscriptstatus === "Active"
                      ? "1px solid #6D55F1"
                      : "1px solid #CCCCCC",
                }}
              >
                {user?.rollsubscriptstatus
                  ? user.rollsubscriptstatus
                  : "Inactive"}
              </p>
            </div>
          </div>
          {user?.roll_exp && (
            <div className="lg:flex items-center my-5">
              <h1 className="lg:w-1/4">Rollover Expiry:</h1>
              <div className="lg:w-2/3">
                <p type="text" className="input-display w-full">
                  {user?.roll_exp}
                </p>
              </div>
            </div>
          )}
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">50 Odds:</h1>
            <div className="lg:w-2/3">
              <p
                type="text"
                className="input-display w-full"
                style={{
                  color: user?.odds50status === "Active" ? "" : "#666666",
                  backgroundColor:
                    user?.odds50status === "Active" ? "" : "#CCCCCC",
                  border:
                    user?.odds50status === "Active"
                      ? "1px solid #6D55F1"
                      : "1px solid #CCCCCC",
                }}
              >
                {user?.odds50status}
              </p>
            </div>
          </div>
          {user?.odds50_exp && (
            <div className="lg:flex items-center my-5">
              <h1 className="lg:w-1/4">50 Odds Expiry:</h1>
              <div className="lg:w-2/3">
                <p type="text" className="input-display w-full">
                  {user?.odds50_exp}
                </p>
              </div>
            </div>
          )}
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Weekend 10:</h1>
            <div className="lg:w-2/3">
              <p
                type="text"
                className="input-display w-full"
                style={{
                  color: user?.w10subscriptstatus === "Active" ? "" : "#666666",
                  backgroundColor:
                    user?.w10subscriptstatus === "Active" ? "" : "#CCCCCC",
                  border:
                    user?.w10subscriptstatus === "Active"
                      ? "1px solid #6D55F1"
                      : "1px solid #CCCCCC",
                }}
              >
                {user?.w10subscriptstatus}
              </p>
            </div>
          </div>
          {user?.w10_exp && (
            <div className="lg:flex items-center my-5">
              <h1 className="lg:w-1/4">Weekend 10 Expiry:</h1>
              <div className="lg:w-2/3">
                <p type="text" className="input-display w-full">
                  {user?.w10_exp}
                </p>
              </div>
            </div>
          )}
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
                type="text"
                className="input-display w-full"
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
                type="text"
                className="input-display w-full"
              />
            </div>
          </div>
          <div className="lg:flex items-center my-5">
            <h1 className="lg:w-1/4">Confirm New Password:</h1>
            <div className="lg:w-2/3">
              <input
                ref={confPassRef}
                type="text"
                id="message"
                name="message"
                className="input-display w-full"
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
                <h3 className="text-2xl big-shoulder">Edit Profile</h3>
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
                      className="input-display text-gray-300 w-full"
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
                        inputClass={"input-display"}
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
