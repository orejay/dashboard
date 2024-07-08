import React, { useEffect } from "react";

const Ad = () => {
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

    // return () => {
    //   // Clean up function to remove the script when the component unmounts
    //   document.body.removeChild(script);
    // };
  }, []);
  return (
    <div className="w-screen h-screen">
      <div class="clever-core-ads"></div>
    </div>
  );
};

export default Ad;
