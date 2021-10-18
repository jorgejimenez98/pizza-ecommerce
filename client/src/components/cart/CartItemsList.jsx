import * as React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
} from "@mui/material";

import { Delete, ShoppingCart } from "@material-ui/icons";
import CartListTextItem from "./CartListTextItem";

export default function CartItemsList({
  cartItems,
  deleteItem,
  addOrSubstract,
}) {
  return (
    <React.Fragment>
      <h1 className="text-center text-muted">
        My Cart <ShoppingCart />
      </h1>
      <List className="cart-items-list">
        {cartItems.map((pizza, ind) => (
          <React.Fragment key={ind}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="pizza"
                  src={pizza.image}
                  sx={{ width: 70, height: 70 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${pizza.name} (${pizza.varient})`}
                className="pl-3"
                secondary={
                  <CartListTextItem
                    pizza={pizza}
                    addOrSubstract={addOrSubstract}
                  />
                }
              />
              <ListItemSecondaryAction>
                <Tooltip title="Delete">
                  <IconButton edge="end" onClick={() => deleteItem(pizza._id)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
}
