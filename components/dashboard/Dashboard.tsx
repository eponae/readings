import React from "react";
import { DashboardTitle, DashboardTitleLink } from "./Dashboard.style";

const Dashboard = () => {
  return (
    <DashboardTitle>
      Welcome to{" "}
      <DashboardTitleLink href="https://nextjs.org">
        Next.js!
      </DashboardTitleLink>
    </DashboardTitle>
  );
};

export default Dashboard;
