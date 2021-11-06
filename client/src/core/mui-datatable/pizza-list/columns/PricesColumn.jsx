import React from "react";

function PricesColumn({ prices }) {
  return (
    <div>
      <div>Small: {prices[0].small}</div>
      <div>Medium: {prices[0].medium}</div>
      <div>Large: {prices[0].large}</div>
    </div>
  );
}

export default PricesColumn;
