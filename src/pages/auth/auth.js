import React from "react";

import Main from "../../Main";

const Auth = ({ App, image }) => {
  const Prop = (
    <div className="w-full h-full" style={{ background: "#F2F2F2" }}>
      <div
        className="w-full lg:w-4/5 mx-auto lg:rounded-lg lg:flex lg:my-12"
        style={{ background: "#fff" }}
      >
        <div className="w-full lg:w-1/2 ">{App()}</div>
        <img src={image} alt="Auth" className="hidden lg:block lg:w-2/5 " />
      </div>
    </div>
  );
  return <Main Prop={Prop} />;
};

export default Auth;
