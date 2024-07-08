import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import HeaderComp from "./components/HeaderComp";

const Main = ({ Prop, logIn, nav }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "clever-core";
    script.setAttribute("data-cfasync", "false");
    script.type = "text/javascript";
    script.innerHTML = `
      /* <![CDATA[ */
                                    (function (document, window) {
                                        var a, c = document.createElement("script"), f = window.frameElement;

                                        c.id = "CleverCoreLoader50448";
                                        c.src = "https://scripts.cleverwebserver.com/1b246c2b83b7f322480a19abdd2ceff6.js";

                                        c.async = !0;
                                        c.type = "text/javascript";
                                        c.setAttribute("data-target", window.name || (f && f.getAttribute("id")));
                                        c.setAttribute("data-callback", "put-your-callback-macro-here");

                                        try {
                                            a = parent.document.getElementsByTagName("script")[0] || document.getElementsByTagName("script")[0];
                                        } catch (e) {
                                            a = !1;
                                        }

                                        a || (a = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]);
                                        a.parentNode.insertBefore(c, a);
                                    })(document, window);
                                    /* ]]> */
    `;

    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `(function(i,s,o,g,r,a,m){i
      ['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i
      [r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)
      [0];a.async=1;a.src=g;m.parentNode.insertBefore
      (a,m)
        })
      (window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-97709798-1', 'auto');
        ga('send', 'pageview');`;

    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ background: "#F2F2F2" }}>
      <HeaderComp logIn={logIn} nav={nav} />
      <div>{Prop}</div>

      <Footer />
    </div>
  );
};
export default Main;
