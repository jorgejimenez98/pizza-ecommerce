import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function AdressColumn({ city, country, shippingAdress1, shippingAdress2 }) {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={`${city}, ${country}`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={`${shippingAdress1}`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={`${shippingAdress2}`} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}

export default AdressColumn;
