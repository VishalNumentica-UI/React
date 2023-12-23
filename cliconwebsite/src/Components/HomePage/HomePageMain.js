import React from "react";
import { AdPopup } from "./AdPopup";
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { BestDeals } from "./BestDeals";
import { ShopCategory } from "./ShopCategory";
import { FeatureProduct } from "./FeatureProduct";
import { NewProductsBanner } from "./NewProductsBanner";
export function HomePageMain() {
  return (
    <div>
      <AdPopup />
      <Navigation />
      <Hero />
      <Features />
      <BestDeals />
      <ShopCategory />
      <FeatureProduct />
      <NewProductsBanner />
    </div>
  );
}
