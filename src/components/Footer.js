import React from "react";
import { footerLinks } from "../data/footerData";
import paymentmet from "../assets/paymentmethods.webp";
import gamerlogos from "../assets/gamerslogos.png";
import logo from "../assets/tip-logo.png";
import { Link } from "react-router-dom";
import BulletPoint from "./BulletPoint";

function Footer() {
  return (
    <div className="text-white py-4 px-2 lg:px-0 font-medium text-xs lg:text-base bg-gradient-to-r from-teal-600 to-blue-600 bottom-0 right-0 left-0">
      <div className="lg:w-11/12 mx-auto lg:flex items-center justify-between hidden">
        {footerLinks[0].footerHead.map((footHead, index) => {
          return (
            <h3
              key={index}
              className="w-1/3 text-xs md:text-base lg:text-xl mb-2"
            >
              {footHead}
            </h3>
          );
        })}
      </div>
      <hr className="mb-2 hidden lg:block" />
      <div className="flex flex-col lg:flex-row lg:w-11/12 mx-auto justify-between">
        <div className="lg:w-1/3">
          <h3 className="lg:hidden text-base mb-3">Football Predictions</h3>
          <ul className="">
            {footerLinks[1].other.map((otherLink, indx) => {
              return (
                <li
                  className="flex items-center mb-2 text-xs font-normal md:text-base"
                  style={{ maxWidth: "97%" }}
                  key={indx}
                >
                  <BulletPoint />
                  <Link to={otherLink.link} className="ml-1">
                    {otherLink.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/3 mt-7 lg:mt-0">
          <h3 className="lg:hidden text-base mb-3">Helpful Links</h3>
          <ul className="">
            {footerLinks[2].links.map((link, ind) => {
              return (
                <li
                  className="mb-2 text-xs font-normal md:text-base"
                  style={{ maxWidth: "97%" }}
                  key={ind}
                >
                  {link.name === "FAQs" ? (
                    <div className="flex items-center">
                      <BulletPoint />
                      <a href={link.link} className="ml-1">
                        {link.name}
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <BulletPoint />
                      <Link to={link.link} className="ml-1">
                        {link.name}
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/3 mt-7 lg:mt-0">
          <h3 className="lg:hidden text-base mb-3">Stay Connected</h3>
          <ul>
            {footerLinks[3].stayLinks.map((stay, i) => {
              return (
                <li
                  className="flex mb-2 text-xs font-normal md:text-base md:ml-0"
                  style={{ maxWidth: "97%" }}
                  key={i}
                >
                  <img
                    src={stay.image}
                    alt={`tips180-${stay.name}-icon`}
                    width={stay.name !== "X" ? "" : "24px"}
                    height={stay.name !== "X" ? "" : "24px"}
                    className="mr-3"
                    loading="lazy"
                  />
                  <a
                    href={stay.link}
                    target="_blank"
                    className="flex items-center"
                  >
                    {stay.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/3 mt-7 lg:my-0 mb-5">
          <h3 className="lg:hidden text-base mb-3">Get in Touch</h3>
          <ul>
            {footerLinks[4].touchLinks.map((touch, i) => {
              return (
                <li
                  className="mb-2 text-xs font-normal md:text-base md:ml-0"
                  style={{ maxWidth: "97%" }}
                  key={i}
                >
                  {touch.name === "mail" ? (
                    <img
                      src={touch.image}
                      alt={`tips180-${touch.name}-icon`}
                      style={{ width: "25px" }}
                      loading="lazy"
                    />
                  ) : touch.name === "phone" ? (
                    <div className="flex mt-3">
                      {touch.image.map((each, i) => (
                        <img
                          key={i}
                          src={each}
                          alt={`tips180-${touch.name}-icon`}
                          className={i === 0 ? "mr-3" : ""}
                          style={{ width: "25px" }}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  ) : (
                    <a
                      href={
                        touch.name[0] === "+"
                          ? `tel:${touch.link}`
                          : `mailto:${touch.name}`
                      }
                      className="w-full"
                    >
                      {touch.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-11/12 mx-auto mt-5">
        <p>Payment Methods</p>
        <div className="flex flex-col mt-3 items-center">
          <img
            src={paymentmet}
            alt="tips180-payment-img"
            className="w-8/12"
            loading="lazy"
          />
          <img
            src={gamerlogos}
            alt="tips180-payment-img"
            className="mt-7 w-9/12"
            loading="lazy"
          />
          <p className="my-5">
            Content on tips180.com is not intended for anybody under 18yrs of
            age
          </p>
        </div>
        <div className="w-full flex items-center justify-start">
          <img
            src={logo}
            alt="tips180-logo"
            className="md:w-107 w-3/12"
            loading="lazy"
          />
          <div>
            <p className="ml-2">
              © 2024. <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
              <Link to="disclaimer">Disclaimer</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
