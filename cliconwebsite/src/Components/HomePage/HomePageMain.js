import React from "react";
import { AdPopup } from "./AdPopup";
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { BestDeals } from "./BestDeals";
import { ShopCategory } from "./ShopCategory";
import { FeatureProduct } from "./FeatureProduct";
import { NewProductsBanner } from "./NewProductsBanner";
import { AdSpecialBanner } from "./AdSpecialBanner";
import { ComputerAccessories } from "./ComputerAccessories";
import { ProductSellTypeComponent } from "./ProductSellTypeComponent";
import { LatestNews } from "./LatestNews";
import { NewsLetter } from "./NewsLetter";
import { Footer } from "./Footer";

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
      <AdSpecialBanner />
      <ComputerAccessories />
      <ProductSellTypeComponent />
      <LatestNews />
      <NewsLetter />
      <Footer />
    </div>
  );
}
