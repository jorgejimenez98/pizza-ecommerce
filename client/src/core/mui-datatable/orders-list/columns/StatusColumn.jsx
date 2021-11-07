import React from "react";

function StatusColumn({ status, orderId }) {
  const handleClick = () => {
    console.log("Deliver ", orderId);
  };
  return (
    <div>
      {status === "Pending" ? (
        <button type="button" onClick={handleClick} className="btn btn-primary">
          Peding
        </button>
      ) : (
        <div className="btn btn-outline-secondary">Delivered</div>
      )}
    </div>
  );
}

export default StatusColumn;
