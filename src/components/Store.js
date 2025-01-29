import React from "react";
import Dashboard from "./Dashboard";
import StoreCards from "./StoreCards";

const Store = () => {
  const Top = (
    <div className="flex w-full">
      <h1
        style={{ fontSize: "24px", color: "#22222" }}
        className="font-bold mona-head"
      >
        My Store
      </h1>
    </div>
  );

  const Content = (
    <StoreCards dashboard={true} style={`lg:m-4 m-2`} bStyle={`lg:m-4 m-2`} />
  );
  return <Dashboard Top={Top} Content={Content} active={1} />;
};
export default Store;
