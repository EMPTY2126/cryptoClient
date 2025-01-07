import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashMiddleFrame from "./components/DashMiddleFrame";
import DashBottomFrame from "./components/DashBottomFrame";
import DashTopFrame from "./components/DashTopFrame";
import LeftPanel from "./components/LeftPanel";

function Dashboard() {
  useEffect(() => {}, []);

  return (
    <div className="flex">
      <LeftPanel />
      <div className="relative w-full h-[900px] bg-gradient-to-br from-[#433D8B] to-[#2E236C] object-contain border-[20px] border-[#17153b] rounded-tl-[75px]">
        <DashTopFrame />
        <DashMiddleFrame />
        <DashBottomFrame />
      </div>
    </div>
  );
}

export default Dashboard;
