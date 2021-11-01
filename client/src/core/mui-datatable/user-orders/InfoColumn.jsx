import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function InfoColumn({ totalPrice, orderStatus, dateOrdered }) {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={`Price: ${totalPrice}`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={`Order Status: ${orderStatus}`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={`Ordered On: ${dateOrdered
                .replace(/T/, " ")
                .replace(/\..+/, "")}`}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}

export default InfoColumn;
