import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSide from "./leftSide";
import Main from "../Main";
import MobileMenu from "./MobileMenu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = ({ Content, Top, active }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [mobile, setMobile] = useState(false);
  const token = localStorage.getItem("token");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const api = process.env.REACT_APP_BASE_API;
  const styles = {
    opened: { color: "#62C7A1" },
    closed: { color: "red" },
  };

  const [messages, setMessages] = useState(0);

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

  const App = () => {
    const IsUserAuthorized = async () => {
      try {
        const res = await fetch(`${api}/getendpoints/auth`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const res_json = await res.json();

        if (!res.ok || res.status === 500) {
          navigate("/auth/login");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setIsValid(false);
        } else {
          setIsValid(true);
          localStorage.setItem("token", res_json.new_token);
        }
      } catch (error) {
        console.log("Check your network");
      }
    };

    const RedirectToPayments = (props) => {
      navigate("/dashboard/payment");
      {
        props === 9
          ? toast.info("Please Subscribe to 50 Odds Plan to view 50 Odds Plan")
          : props === 10
          ? toast.info(
              "Please Subscribe to Smart Bet Plan to view Smart Bet Plan"
            )
          : props === 11
          ? toast.info(
              "Please Subscribe to Rollover plan to view Rollover plan"
            )
          : props === 12
          ? toast.info(
              "Please Subscribe to Weekend 10 Plan view Weeekend 10 plan"
            )
          : toast.info(
              "Please Upgrade to Key or Premium to view Experts Acca plan"
            );
      }
      toast.clearWaitingQueue();
    };
    useEffect(() => {
      IsUserAuthorized();
    }, []);
    return (
      <>
        <div className="w-full db-bg py-10" style={{ height: "100%" }}>
          <div className="w-full py-10 hidden lg:block">
            <div className="w-5/6 pl-5 rounded-xl mx-auto flex bg-white">
              <div
                className="w-1/4"
                style={{
                  borderRight: "1px solid #E0E0E0",
                  minHeight: "100vh",
                  overflowY: "scroll",
                  zIndex: 200,
                }}
              >
                <LeftSide active={active} msgs={messages} />
              </div>
              <div className="w-3/4">
                <div
                  className="py-4 px-10"
                  style={{ borderBottom: " 1px solid #E0E0E0" }}
                >
                  {Top}
                </div>
                {(active === 9 &&
                  (user?.odds50status?.toLowerCase() === "inactive" ||
                    user?.odds50status === null)) ||
                (active === 10 &&
                  (user?.isubscriptstatus?.toLowerCase() === "inactive" ||
                    user?.isubscriptstatus === null)) ||
                (active === 11 &&
                  (user?.rollsubscriptstatus?.toLowerCase() === "inactive" ||
                    user?.rollsubscriptstatus === null)) ||
                (active === 12 &&
                  (user?.w10subscriptstatus?.toLowerCase() === "inactive" ||
                    user?.w10subscriptstatus === null)) ||
                (active === 13 &&
                  (user?.rsubscriptstatus?.toLowerCase() === "inactive" ||
                    user?.rsubscriptstatus === null ||
                    user?.accoutplan === "Free")) ? (
                  RedirectToPayments(active)
                ) : (
                  <div
                    className="px-10 py-10"
                    style={{ height: "100vh", overflowY: "scroll" }}
                  >
                    {Content}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:hidden">
            <div
              className={
                !mobile
                  ? "text-left flex mx-5 w-24 h-14 text-2xl"
                  : "text-right text-2xl mx-3"
              }
              onClick={() => (mobile ? setMobile(false) : setMobile(true))}
            >
              {/* <div
              className="text-3xl absolute right-6 top-4 cursor-pointer lg:hidden"
              onClick={() => setOpen(!open)}
            > */}
              <ion-icon
                size="large"
                name={!mobile ? "grid" : "close"}
                style={!mobile ? styles.opened : styles.closed}
              ></ion-icon>
              <h1 className={!mobile ? "ml-1 millik" : "hidden"}>Menu</h1>
              {/* </div> */}
            </div>
            {mobile === true && <MobileMenu active={active} msgs={messages} />}
            {(active === 9 &&
              (user?.odds50status?.toLowerCase() === "inactive" ||
                user?.odds50status === null)) ||
            (active === 10 &&
              (user?.isubscriptstatus?.toLowerCase() === "inactive" ||
                user?.isubscriptstatus === null)) ||
            (active === 11 &&
              (user?.rollsubscriptstatus?.toLowerCase() === "inactive" ||
                user?.rollsubscriptstatus === null)) ||
            (active === 12 &&
              (user?.w10subscriptstatus?.toLowerCase() === "inactive" ||
                user?.w10subscriptstatus === null)) ||
            (active === 13 &&
              (user?.rsubscriptstatus?.toLowerCase() === "inactive" ||
                user?.rsubscriptstatus === null)) ? (
              RedirectToPayments(active)
            ) : (
              <div
                className="px-4 lg:px-10 py-5"
                style={{ height: "100vh", overflowY: "scroll" }}
              >
                <div>{Top}</div>
                <div>{Content}</div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  return <Main Prop={<App />} logIn={isValid} />;
};

export default Dashboard;
