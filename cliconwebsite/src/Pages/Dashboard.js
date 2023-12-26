import React from "react";
import { Navigation } from "../Components/HomePage/Navigation";
import { NavigationServices } from "../CommonFunctionalities/NavigationServices";
import { Footer } from "../Components/HomePage/Footer";
import { DashboardPage } from "../Components/Dashboard/DashboardPage";
export function Dashboard() {
  return (
    <div>
      <Navigation />
      <NavigationServices />
      <DashboardPage />
      <Footer />
    </div>
  );
}
