import React, { useRef } from "react";
import Main from "../Main";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const api = process.env.REACT_APP_BASE_API;
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const sendMessage = async () => {
    try {
      const res = await fetch(`${api}/postendpoints/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        redirect: "follow",
        credentials: "same-origin",
        body: JSON.stringify({
          name: nameRef.current.value,
          phone: phoneRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
      });
      const res_json = await res.json();

      if (!res.ok) {
        toast.error("Unable to upgrade user!");
        return console.log("Unable to upgrade user!");
      }

      toast.info("Thank you for reaching out to us!");
      navigate("/");
    } catch (error) {
      toast.info("Check your network!");
    }
  };

  const contactUs = (
    <div className="w-full lg:pb-10" style={{ background: "#F2F2F2" }}>
      <div className="w-full mx-auto text-center">
        <div className="lg:py-20 py-14 lg:mb-16 text-white mx-auto text-center bg-gradient-to-r from-teal-500 to-blue-600">
          <h1 className="lg:text-4xl text-xl millik mx-auto">Contact Us</h1>
          <p className="w-11/12 mx-auto">
            Send us a message by using the form below and a team member will get
            back to you as soon as possible.
          </p>
        </div>
      </div>
      <div className="p-5 lg:py-10 lg:px-14 flex flex-wrap mx-auto rounded-lg bg-white w-full lg:w-4/6">
        <div className="w-full lg:w-1/2">
          <div className="my-5">
            <p style={{ fontSize: "14px", color: "#4F4F4F" }}>
              For general enquiries, please reach us
            </p>
            <h2 style={{ fontSize: "18px" }} className="font-bold">
              hello@tips180.com
            </h2>
          </div>
          <div className="my-5 lg:my-10">
            <p style={{ fontSize: "14px", color: "#4F4F4F" }}>
              For Advert & sponsorship please reach us
            </p>
            <h2 style={{ fontSize: "18px" }} className="font-bold">
              adverts@tips180.com
            </h2>
          </div>
          <div className="my-5 lg:my-10">
            <p style={{ fontSize: "14px", color: "#4F4F4F" }}>Call us on</p>
            <h2 style={{ fontSize: "18px" }} className="font-bold">
              +234 813 1149 662, +254 796 118 357 (Kenya)
            </h2>
          </div>
          <div className="my-5 lg:my-10">
            <p style={{ fontSize: "14px", color: "#4F4F4F" }}>Working Hours</p>
            <h2 style={{ fontSize: "18px" }} className="font-bold">
              Mondays to Fridays (9am to 5pm) Saturdays (10am-12noon)
            </h2>
          </div>
          <div className="my-5 lg:my-10">
            <p style={{ fontSize: "14px", color: "#4F4F4F" }}>Email</p>
            <h2 style={{ fontSize: "18px" }} className="font-bold">
              hello@tips180.com
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-5">
          <div className="my-4 flex flex-col">
            <label className="label">Full Name*</label>
            <input
              type="text"
              ref={nameRef}
              className="w-full lg:w-5/6 input-styles"
            />
          </div>
          <div className="my-4 flex flex-col">
            <label className="label">Email Address*</label>
            <input
              type="email"
              ref={emailRef}
              className="w-full lg:w-5/6 input-styles"
            />
          </div>
          <div className="my-4 flex flex-col">
            <label className="label">Phone Number</label>
            <input
              type="tel"
              ref={phoneRef}
              className="w-full lg:w-5/6 input-styles"
            />
          </div>
          <div className="my-4 flex flex-col">
            <label className="label">Message*</label>
            <textarea
              type="text"
              ref={messageRef}
              className="w-full lg:w-5/6 input-styles rounded-lg p-2"
              style={{
                border: "1px solid #BDBDBD",
                resize: "none",
                height: "130px",
                outline: "none",
              }}
            />
          </div>
          <button
            onClick={() => sendMessage()}
            className="w-full lg:w-5/6 mt-7 mb-2 py-6 rounded h-9  flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>Contact Us - Tips180</title>
      </Helmet>
      <Main Prop={contactUs} nav={7} />
    </div>
  );
};

export default ContactUs;
