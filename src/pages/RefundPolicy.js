import React from "react";
import Main from "../Main";

const RefundPolicy = () => {
  const RP = (
    <div className="w-full py-5 lg:py-10 " style={{ background: "#F2F2F2" }}>
      <div className="py-5 lg:py-10 md:h-screen  px-5 lg:px-14  mx-auto rounded-lg bg-white w-full lg:w-5/6">
        <h2
          className="mb-5 mona-head bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text"
          style={{ fontSize: "24px" }}
        >
          Refund Policy
        </h2>
        <p>
          Refund Policy: Please note that once you have paid for a plan, and
          your account has been upgraded, then the service is deemed to have
          been provided. After that point, there will be no refunds as the
          service has been delivered at your own request, and an agreed price
          before making payment.
        </p>
      </div>
    </div>
  );

  return <Main Prop={RP} />;
};

export default RefundPolicy;
