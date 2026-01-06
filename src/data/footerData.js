import whatsapp from "../assets/WhatsApp.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import telegram from "../assets/Telegra.png";
import twitter from "../assets/Twitter.png";
import X from "../assets/X.png";
import wSVG from "../assets/whatsapp.svg";
import phoneSVG from "../assets/phone.svg";
import mailSVG from "../assets/mail.svg";

export const footerLinks = [
  {
    footerHead: [
      "Football Predictions",
      "Helpful Links",
      "Stay Connected",
      "Get in Touch",
    ],
  },
  {
    other: [
      { name: "Football Betting Tips", link: "/" },
      { name: "English Premier League", link: "/leagues/epl" },
      { name: "Spanish La Liga", link: "/leagues/la liga" },
      { name: "German Bundesliga", link: "/leagues/ger" },
      { name: "Italian Serie A", link: "/leagues/ita" },
      { name: "French Ligue One", link: "/leagues/fre l1" },
      { name: "Free Football Betting Tips", link: "/" },
      { name: "Both Teams To Score Tips", link: "/tip-store/bts" },
      { name: "Over 2.5 Goals Tips", link: "/tip-store/over2" },
      { name: "Double Chance Tips", link: "/tip-store/doublechance" },
    ],
  },
  {
    links: [
      { name: "About Us", link: "/about-us" },
      { name: "Support Center", link: "" },
      { name: "How to Pay", link: "/how-to-pay" },
      { name: "FAQs", link: "#faq" },
      { name: "Our Plans", link: "/our-plans" },
      { name: "Contact Us", link: "/contact" },
      { name: "Terms and Conditions", link: "/terms-and-condition" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Refund Policy", link: "/refund-policy" },
      { name: "Disclaimer", link: "/disclaimer" },
    ],
  },
  {
    stayLinks: [
      { name: "X", image: X, link: "https://twitter.com/tips180" },
      {
        name: "Instagram",
        image: instagram,
        link: "https://www.instagram.com/tips180com",
      },
      { name: "Telegram", image: telegram, link: "http://t.me/tips1800" },
      {
        name: "Facebook",
        image: facebook,
        link: "https://web.facebook.com/tips180dotcom/",
      },
      { name: "Whatsapp", image: whatsapp, link: "https://wa.link/itv11v" },
    ],
  },
  {
    touchLinks: [
      { name: "mail", image: mailSVG, link: "" },
      { name: "hello@tips180.com", link: "" },
      { name: "advert@tips180.com", link: "" },
      { name: "phone", image: [phoneSVG, wSVG], link: "" },
      { name: "+234 813 1149 662", link: "+23481131149662" },
    ],
  },
];
