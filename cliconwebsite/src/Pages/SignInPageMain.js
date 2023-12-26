import React from "react";

import { SignInTab } from "../CommonFunctionalities/SignInTab";
import { Navigation } from "../Components/HomePage/Navigation";
import { Footer } from "../Components/HomePage/Footer";
import { NavigationServices } from "../CommonFunctionalities/NavigationServices";
export function SignInPageMain() {
  return (
    <div>
      <Navigation />
      <NavigationServices />
      <SignInTab />
      <Footer />
    </div>
  );
}
