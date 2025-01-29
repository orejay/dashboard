import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";

const Messages = ({ type }) => {
  const api = process.env.REACT_APP_BASE_API;
  const token = localStorage.getItem("token");
  const [messages, setMessages] = useState(null);
  const [active, setActive] = useState(0);
  const [activeMsg, setActiveMsg] = useState(null);
  const getDate = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleDateString();
  };

  const getMessages = async () => {
    try {
      const res = await fetch(`${api}/getendpoints/messages`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const res_json = await res.json();
        setMessages(res_json);
      } else {
        console.log("An error occured");
      }
    } catch (e) {
      console.log(e);
      toast.error("Couldn't load your messages. Please try again");
    }
  };

  const markAsRead = async (msgId) => {
    try {
      const res = await fetch(`${api}/edit/message/${msgId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
        credentials: "same-origin",
        body: {
          message_id: msgId,
        },
      });
      const res_json = await res.json();
      console.log(res_json);
      if (res.ok) getMessages();
    } catch (e) {
      console.log("An error occured", e);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const Top = (
    <div>
      <h1
        className="font-bold flex mb-4 lg:mb-0 iteems-center mona-head"
        style={{ fontSize: "24px" }}
      >
        Messages
      </h1>
    </div>
  );

  const msgList = messages && (
    <div className="w-full lg:pl-2">
      <h3 className="mona-head md:text-xl text-lg p-2">
        {active === 0 ? "Unread Messages" : "Read Messages"}
      </h3>
      {messages[active === 0 ? "unread" : "read"]?.length > 0 ? (
        messages[active === 0 ? "unread" : "read"]?.map((each, index) => (
          <div
            key={index}
            className={`border-y p-2 flex justify-between cursor-pointer`}
            onClick={() => {
              setActiveMsg(each);
              active === 0 && markAsRead(each.id);
            }}
          >
            <p>{each.title}</p>
            <p>{getDate(each.date_created)}</p>
          </div>
        ))
      ) : (
        <p className="border-t p-2 flex justify-between">No new messages</p>
      )}
    </div>
  );

  const fullMsg = messages && (
    <div className="md:text-xl text-lg p-2">
      <h3 className="mona-head mb-6">{activeMsg?.title}</h3>
      {activeMsg?.image_url && activeMsg?.image_url !== "" ? (
        <div
          className="lg:w-9/12 w-full rounded-lg shadow mb-4"
          style={{
            backgroundImage: `url(${api}${activeMsg?.image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: "270px",
          }}
        ></div>
      ) : (
        ""
      )}
      <p className="md:text-base text-xs w-10/12">
        {String(activeMsg?.message)
          .split("~")
          .map((each, i) => (
            <p key={i} className="mb-2">
              {each}
            </p>
          ))}
      </p>
    </div>
  );

  const Content = (
    <div className="lg:flex min-h-screen shadow lg:shadow-none rounded-lg">
      <div className="flex lg:block lg:w-3/12 text-xs lg:text-base border-b lg:border-b-0 lg:border-r p-2 px-1 md:px-2">
        <div
          className={`mr-3 flex justify-center p-2 px-1 md:px-2 w-full shadow hover:shadow-md rounded lg:mb-4 font-semibold cursor-pointer ${
            active === 0 &&
            "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
          }`}
          onClick={() => {
            setActive(0);
            setActiveMsg(null);
          }}
        >
          <p className="md:pl-2">Unread({`${messages?.unread.length}`})</p>
        </div>
        <div
          className={`flex justify-center p-2 px-1 md:px-2 w-full shadow hover:shadow-md rounded lg:mb-4 font-semibold cursor-pointer ${
            active === 1 &&
            "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
          }`}
          onClick={() => {
            setActive(1);
            setActiveMsg(null);
          }}
        >
          <p className="md:pl-2">Read({`${messages?.read.length}`})</p>
        </div>
      </div>
      <div className="lg:w-9/12">{activeMsg ? fullMsg : msgList}</div>
    </div>
  );

  const loader = <Loader />;

  return (
    <div>
      <Helmet>
        <title>Messages - Tips180</title>
      </Helmet>
      <Dashboard Top={Top} Content={messages ? Content : loader} active={2} />
    </div>
  );
};

export default Messages;
