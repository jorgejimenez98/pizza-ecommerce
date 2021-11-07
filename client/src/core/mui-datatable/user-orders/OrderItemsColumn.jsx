import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function OrderItemsColumn({ orderItems }) {
  return (
    <List>
      {orderItems?.map((item, i) => {
        const totalPrice =
          item?.quantity * item?.pizza?.prices[0][item.varient];
        return (
          <ListItem disablePadding key={i}>
            <ListItemButton>
              <ListItemText
                primary={`${item?.pizza?.name}: [${item?.varient}] * ${item?.quantity} = ${totalPrice}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default OrderItemsColumn;
