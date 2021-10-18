import * as React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
} from "@mui/material";

import { Delete } from "@material-ui/icons";

export default function CartItemsList() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <Tooltip title="Delete">
            <IconButton edge="end">
              <Delete />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
