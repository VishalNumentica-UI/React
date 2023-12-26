import React from "react";
import { Navigation } from "../Components/HomePage/Navigation";
import { Footer } from "../Components/HomePage/Footer";
import { NavigationServices } from "../CommonFunctionalities/NavigationServices";

import { ShopPageMain } from "../Components/ShopPage/ShopPageMain";

export function ShopPage() {
  return (
    <div>
      <Navigation />
      <NavigationServices />
      <ShopPageMain />
      <Footer />
    </div>
  );
}
