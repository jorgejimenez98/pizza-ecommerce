import React from "react";
import { Button } from "@mui/material";

function SubtotalPrice({ subtotalPrice, handlePayButtom }) {
  return (
    <div>
      <h1 className="text-center text-muted">SubTotal = {subtotalPrice} cup</h1>
      <div className="text-center">
        <Button variant="contained" color="success" onClick={handlePayButtom}>
          Pay Now
        </Button>
      </div>
    </div>
  );
}

export default SubtotalPrice;
