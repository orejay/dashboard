import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  AccountCircleRounded,
  LogoutRounded,
  MessageRounded,
  NotificationsRounded,
} from "@mui/icons-material";

const styles = {
  opened: { color: "green" },
  closed: { color: "red" },
};

const HeaderComp = ({ logIn, nav }) => {
  const [open, setOpen] = useState(true);
  const [tab, setTab] = useState(nav);
  const [showMenu, setShowMenu] = useState(false);
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
  const [messages, setMessages] = useState(null);
  const [loggedIn, setloggedIn] = useState(true);

  const getMessages = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/messages`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res_json = await res.json();
      if (res.ok) setMessages(res_json.unread.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setloggedIn(false);
    navigate("/auth/login");
  };

  return (
    <div
      className="lg:flex sticky lg:py-2 py-4 px-6 top-0 bg-white shadow-sm items-center justify-between font-extrabold text-stone-900 "
      style={{ zIndex: "300" }}
    >
      <Helmet>
        <meta
          name="keywords"
          content="bet, football prediction site, football predictions and tips, Free football predictions, Football prediction in Nigeria"
        />
      </Helmet>
      <div className="lg:ml-4">
        <Link to="/">
          <img
            src={require("../assets/tip-logo.png")}
            alt="logo"
            className="w-32 aspect-auto"
          />
        </Link>
      </div>
      <div
        className="text-3xl absolute right-6 top-4 cursor-pointer lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <ion-icon
          name={open ? "menu-outline" : "close-outline"}
          style={open ? styles.opened : styles.closed}
        ></ion-icon>
      </div>
      <div
        className={`lg:flex transition-all ease-in bg-white h-screen lg:h-fit duration-1000 items-center justify-between lg:w-10/12 w-full pb-3 lg:pl-0 lg:pb-0 lg:px-5  ${
          open ? "hidden" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="lg:flex bg-white justify-between text-lg xl:ml-20 lg:ml-6 xl:w-8/12 lg:9/12">
          <div
            className={
              tab === 1
                ? `pt-4 lg:pt-0 lg:mb-0 mb-4 text-md xl:text-lg lg:text-sm  font-bold lg:mr-4 bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text`
                : `pt-4 lg:pt-0 lg:mb-0 mb-4 text-md xl:text-lg text-sm font-medium lg:mr-4 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-md hover:text-transparent hover:bg-clip-text`
            }
            onClick={() => setTab(1)}
          >
            <Link to="/leagues" style={{ fontSize: "16px" }}>
              Leagues
            </Link>
          </div>
          <div
            className={
              tab === 2
                ? `lg:pt-0 lg:mb-0 mb-4 font-bold text-md xl:text-lg lg:text-sm lg:mr-4 bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text`
                : `lg:mb-0 mb-4 text-md xl:text-lg lg:text-sm font-medium lg:mr-4 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-md hover:text-transparent hover:bg-clip-text`
            }
            onClick={() => setTab(2)}
          >
            <Link to="/our-plans" style={{ fontSize: "16px" }}>
              Our Plans
            </Link>
          </div>
          <div
            className={
              tab === 3
                ? `bg-gradient-to-r from-teal-500 to-blue-600 text-md xl:text-lg lg:text-sm text-transparent bg-clip-text lg:mb-0 mb-4  font-bold lg:mr-4`
                : `lg:mb-0 mb-4 font-medium text-md xl:text-lg lg:text-sm lg:mr-4 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-md hover:text-transparent hover:bg-clip-text`
            }
            onClick={() => setTab(3)}
          >
            <Link to="/tipsstore" style={{ fontSize: "16px" }}>
              Tips Store
            </Link>
          </div>
          <div
            className={
              tab === 4
                ? `lg:mb-0 mb-4 font-bold lg:mr-4 bg-gradient-to-r text-md xl:text-lg lg:text-sm from-teal-500 to-blue-600 text-transparent bg-clip-text`
                : `lg:mb-0 mb-4 font-medium text-md xl:text-lg lg:text-sm lg:mr-4 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-md hover:text-transparent hover:bg-clip-text`
            }
            onClick={() => setTab(4)}
          >
            <Link to="/predict-win" style={{ fontSize: "16px" }}>
              Predict & Win
            </Link>
          </div>
          <div
            className={
              tab === 5
                ? `bg-gradient-to-r from-teal-500 text-md xl:text-lg lg:text-sm to-blue-600 text-transparent bg-clip-text lg:mb-0 mb-4 font-bold lg:mr-4`
                : `lg:mb-0 mb-4 font-medium text-md xl:text-lg lg:text-sm  lg:mr-4 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-md hover:text-transparent hover:bg-clip-text`
            }
            onClick={() => setTab(5)}
          >
            <a
              href="https://tips180.com/blog/"
              target="_blank"
              style={{ fontSize: "16px" }}
            >
              Blog
            </a>
          </div>
          <div
            className={
              tab === 6
                ? `bg-gradient-to-r from-teal-500 to-blue-600 text-md xl:text-lg lg:text-sm text-transparent bg-clip-text lg:mb-0 mb-4 font-bold lg:mr-4`
                : `lg:mb-0 mb-4 font-medium text-md xl:text-lg lg:text-sm lg:mr-4 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-md hover:text-transparent hover:bg-clip-text`
            }
            onClick={() => setTab(6)}
          >
            <Link to="/how-to-pay" style={{ fontSize: "16px" }}>
              How to Pay
            </Link>
          </div>
          <div
            className={
              tab === 7
                ? `bg-gradient-to-r from-teal-500 to-blue-600 text-md xl:text-lg lg:text-sm text-transparent bg-clip-text lg:mb-0 mb-4 font-bold lg:mr-4`
                : `lg:mb-0 mb-4 font-medium text-md xl:text-lg lg:text-sm lg:mr-4 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-md hover:text-transparent hover:bg-clip-text`
            }
            onClick={() => setTab(7)}
          >
            <Link to="/contact" style={{ fontSize: "16px" }}>
              Contact Us
            </Link>
          </div>
        </div>

        {!user || user?.name === "" ? (
          <div className="flex flex-col lg:flex-row bg-white justify-around lg:items-center lg:w-36 lg:mt-0 mt-9 mb-4 lg:mb-0">
            <div className="flex justify-center mb-2 text-white lg:text-inherit w-full lg:w-fit font-medium rounded-md bg-gradient-to-r from-teal-600 to-blue-600 lg:bg-none py-2 lg:mb-0 items-center">
              <Link to="/auth/signup" style={{ fontSize: "16px" }}>
                Sign Up
              </Link>
            </div>
            <div className="flex lg:w-fit justify-center items-center lg:bg-gradient-to-r from-teal-600 to-blue-600 lg:px-2 lg:py-1 mb-5 font-medium lg:mb-0 lg:text-white rounded">
              <Link to="/auth/login" style={{ fontSize: "16px" }}>
                Sign In
              </Link>
            </div>
          </div>
        ) : (
          <div className="lg:flex items-center">
            <div
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <p className="text-lg font-thin cursor-pointer mr-5 underline  text-teal-400 lg:mb-0 mb-2 text-center millik">
                <span
                  className="hidden lg:flex justify-center items-center bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
                  style={{ fontSize: "16px" }}
                >
                  <AccountCircleRounded sx={{ color: "#2563EB", mr: "4px" }} />
                  {user?.name}
                  {messages && messages !== 0 ? (
                    <div
                      className="flex items-center justify-center text-center text-xs"
                      style={{
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                      }}
                    >
                      <p className="text-center w-full">({messages})</p>
                    </div>
                  ) : (
                    ""
                  )}
                </span>
                <Link
                  className="lg:hidden flex justify-center items-center bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
                  to="/dashboard/profile"
                  style={{ fontSize: "16px" }}
                >
                  <AccountCircleRounded sx={{ color: "#2563EB", mr: "2px" }} />
                  {user?.name}
                </Link>
                <Link
                  className="lg:hidden flex justify-center items-center bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
                  to="/dashboard/messages"
                  style={{ fontSize: "16px" }}
                >
                  <NotificationsRounded sx={{ color: "#2563EB", mr: "2px" }} />
                  Messages
                  {messages && messages !== 0 ? (
                    <div
                      className=" flex items-center justify-center text-center text-xs"
                      style={{
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                      }}
                    >
                      <p className="text-center w-full">({messages})</p>
                    </div>
                  ) : (
                    ""
                  )}
                </Link>
              </p>
              {showMenu && (
                <div
                  className={`lg:absolute ${
                    user.name.split(" ").length < 2 ? "right-2" : ""
                  } shadow rounded-b-md rounded-tr-md hidden cursor-pointer lg:block bg-white w-2/12 text-lg`}
                >
                  <div className="p-3 hover:bg-gradient-to-r hover:text-white rounded-tr-md from-teal-600 to-blue-600">
                    <Link
                      to="/dashboard/profile"
                      className="w-full flex items-center"
                      style={{ fontSize: "16px" }}
                    >
                      <AccountCircleRounded
                        sx={{ color: "#2563EB", mr: "2px" }}
                      />
                      My Profile
                    </Link>
                  </div>
                  <div className="p-3 hover:bg-gradient-to-r hover:text-white rounded-tr-md from-teal-600 to-blue-600">
                    <Link
                      to="/dashboard/messages"
                      className="w-full flex items-center"
                      style={{ fontSize: "16px" }}
                    >
                      <NotificationsRounded
                        sx={{
                          color: "#2563EB",
                          mr: "2px",
                        }}
                      />
                      Messages{" "}
                      {messages && messages !== 0 ? (
                        <div
                          className=" flex items-center justify-center ml-1 text-center bg-blue-600 text-white text-sm"
                          style={{
                            borderRadius: "50%",
                            width: "25px",
                            height: "25px",
                          }}
                        >
                          <p className="text-center w-full">{messages}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </Link>
                  </div>
                  <div
                    onClick={() => LogOut()}
                    className="w-full rounded-b-md hover:bg-red-600 p-3 text-red-600 hover:text-white"
                    style={{ fontSize: "16px" }}
                  >
                    <LogoutRounded
                      sx={{
                        mr: "2px",
                      }}
                    />
                    Log Out
                  </div>
                </div>
              )}
            </div>
            <p
              style={{ color: "white", cursor: "pointer", fontSize: "16px" }}
              className="rounded-md text-center lg:hidden py-1 px-2 bg-gradient-to-r from-red-500 to-red-600"
              onClick={() => LogOut()}
            >
              <LogoutRounded
                sx={{
                  mr: "2px",
                }}
              />
              Log Out
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderComp;
