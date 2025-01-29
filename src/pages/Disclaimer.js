import React from "react";
import Main from "../Main";

const Disclaimer = () => {
  const about = (
    <div className="w-full py-5 lg:py-10 " style={{ background: "#F2F2F2" }}>
      <div className="py-5 lg:py-10 md:min-h-screen  px-5 lg:px-14  mx-auto rounded-lg bg-white w-full lg:w-5/6">
        <h2
          className="mb-3 mona-head bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "24px" }}
        >
          GENERAL DISCLAIMER AND WAIVER LIABILITY
        </h2>
        <p className="my-4">
          The information on this site is intended to furnish users with general
          information on football predictions, and betting advisory among other
          betting-related analyses.
        </p>
        <p className="my-4">
          The information contained and accessed on this site{" "}
          <a href="https://www.tips180.com" className="text-blue-500 underline">
            www.tips180.com
          </a>{" "}
          is provided by Tips180 for general football predictions guidance and
          it is not intended to substitute for any investment scheme whatsoever.
        </p>
        <p className="my-4">
          However, there are no expressed or implicit warranties nor
          representations with regards to the content’s accuracy and/or
          completeness.
        </p>
        <p className="my-4">
          You are advised to consult with appropriate Tips180 customer service
          representatives via the channels provided on the website for inquiries
          and advice regarding any of our service offerings.
        </p>
        <p className="my-4">
          Tips180 Concepts shall not be held responsible and/or liable for any
          consultation made outside the contact channels provided on this
          website.
        </p>
        <p className="mt-6 mb-2">
          <span className="font-bold mb-2 block">
            COMPANY REGISTRATION: BN 2640693
          </span>
          <span className="block font-bold">REGISTERED COMPANY ADDRESS</span>
          HFP EASTLINE COMPLEX, ABRAHAM ADESANYA, LAGOS, NIGERIA. <br />
          <span className="block mt-4">
            COPYRIGHT© 2023 TIPS180 CONCEPTS ALL RIGHTS RESERVED | POWERED BY
            TIPS180
          </span>
        </p>
      </div>
    </div>
  );

  return <Main Prop={about} />;
};

export default Disclaimer;
