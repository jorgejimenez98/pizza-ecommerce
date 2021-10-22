import React from "react";
import { Button } from "@mui/material";

function SubtotalPrice({ cartItems }) {
  const subtotalPrice = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  return (
    <div>
      <h1 className="text-center text-muted">SubTotal = {subtotalPrice} cup</h1>

      <div className="text-center">
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            alert(`Make method on paypal to pay ${subtotalPrice} cup`);
          }}
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
}

export default SubtotalPrice;
