import React from "react";
import { Image } from "react-bootstrap";
import "../CommonFunctionalities/CommonFunctionalities.css";
import { TrendingProduct } from "../CommonFunctionalities/TrendingProduct";

export function ProductCard({ props }) {
  const { image, productDescription, productPrice } = props;
  return (
    <div className="eachProduct position-relative p-2 align-item-center">
      <div className="offerTag-hot position-absolute">
        <TrendingProduct />
      </div>
      <Image src={image} alt="" className="productCardImage" />
      <p>{productDescription}</p>
      <p>{productPrice}</p>
    </div>
  );
}
