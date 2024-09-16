import React, { useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import AdminTop from "../components/AdminTop";
import AddPredictions from "../components/AddPredictions";
import PredWinResults from "../components/PredWinResults";
import ManagePrizes from "../components/ManagePrizes";
import PredWinFees from "../components/PredWinFees";
import PwUpgradeUser from "../components/PwUpgradeUser";
import PwHistory from "../components/PwHistory";

const data = [
  { name: "Add Predictions" },
  { name: "Prizes" },
  { name: "Entry Fee" },
  { name: "Upgrade User" },
  { name: "History" },
  { name: "Results" },
];

const AdminAddPredictions = () => {
  const [tab, setTab] = useState(0);
  const [tabNo, setTabNo] = useState(0);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const onClick = (index) => {
    setTabNo(index);
  };

  const Top = (
    <div className="text-md rounded-lg w-full">
      <AdminTop
        data={data}
        tabNo={tabNo}
        setTabNo={setTabNo}
        onClick={(prop) => onClick(prop)}
      />
    </div>
  );
  const Content = (
    <div className="w-full">
      {tabNo === 0 ? (
        <AddPredictions />
      ) : tabNo === 1 ? (
        <ManagePrizes />
      ) : tabNo === 2 ? (
        <PredWinFees />
      ) : tabNo === 3 ? (
        <PwUpgradeUser />
      ) : tabNo === 4 ? (
        <PwHistory />
      ) : (
        <PredWinResults />
      )}
    </div>
  );
  return (
    <AdminDashboard
      Top={Top}
      Content={Content}
      active={admin.role === "admin" ? 12 : 13}
    />
  );
};

export default AdminAddPredictions;
