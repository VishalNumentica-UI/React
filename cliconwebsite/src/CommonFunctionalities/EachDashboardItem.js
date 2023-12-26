import React from "react";
import { Image } from "react-bootstrap";
function EachDashboardItem({ eachItem }) {
  const { icon, navTitle } = eachItem;
  return (
    <div className="d-flex gap-2 p-2">
      <div>
        <Image src={icon} alt="" />
      </div>
      <div>{navTitle}</div>
    </div>
  );
}

export default EachDashboardItem;
