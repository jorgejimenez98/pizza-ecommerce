import React from "react";
import { Add, Remove } from "@material-ui/icons";

function CartListTextItem({ pizza, addOrSubstract }) {
  return (
    <React.Fragment>
      <span>
        Price: {pizza.quantity} * {pizza.prices[0][pizza.varient]} ={" "}
        {pizza.price} cup
        <br />
        Quantity{" "}
        <Remove
          className="pointer"
          onClick={() =>
            addOrSubstract(false, pizza, pizza.quantity, pizza.varient)
          }
        />{" "}
        {pizza.quantity}{" "}
        <Add
          className="pointer"
          onClick={() =>
            addOrSubstract(true, pizza, pizza.quantity, pizza.varient)
          }
        />
      </span>
    </React.Fragment>
  );
}

export default CartListTextItem;
