import React from "react";

import { AdPopup } from "../Components/HomePage/AdPopup";
import { Navigation } from "../Components/HomePage/Navigation";
import { Hero } from "../Components/HomePage/Hero";
import { Features } from "../Components/HomePage/Features";
import { BestDeals } from "../Components/HomePage/BestDeals";
import { ShopCategory } from "../Components/HomePage/ShopCategory";
import { FeatureProduct } from "../Components/HomePage/FeatureProduct";
import { AdSpecialBanner } from "../Components/HomePage/AdSpecialBanner";
import { NewProductsBanner } from "../Components/HomePage/NewProductsBanner";
import { ComputerAccessories } from "../Components/HomePage/ComputerAccessories";
import { ProductSellTypeComponent } from "../Components/HomePage/ProductSellTypeComponent";
import { LatestNews } from "../Components/HomePage/LatestNews";
import { NewsLetter } from "../Components/HomePage/NewsLetter";
import { Footer } from "../Components/HomePage/Footer";
import { NavigationServices } from "../CommonFunctionalities/NavigationServices";

export function HomePageMain() {
  return (
    <div>
      <AdPopup />
      <Navigation />
      <NavigationServices />
      <Hero />
      <Features />
      <BestDeals />
      <ShopCategory />
      <FeatureProduct />
      <NewProductsBanner />
      <ComputerAccessories />
      <AdSpecialBanner />
      <ProductSellTypeComponent />
      <LatestNews />
      <NewsLetter />
      <Footer />
    </div>
  );
}
