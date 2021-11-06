import React from "react";

function CategoryColumn({ category }) {
  const type = category === "veg" ? "primary" : "success";
  const text = category === "veg" ? "Vegan" : "Non Vegan";

  return (
    <h4>
      <span className={`badge badge-${type}`}>{text}</span>
    </h4>
  );
}

export default CategoryColumn;
