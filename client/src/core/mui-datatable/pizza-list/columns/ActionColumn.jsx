import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { LinkContainer } from "react-router-bootstrap";

function ActionColumn({ pizzaId, name }) {
  return (
    <div>
      <LinkContainer to={`/admin/panel/pizzas/edit/${pizzaId}`}>
        <Tooltip title={`Edit Pizza: ${name}`} placement="bottom">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </LinkContainer>
    </div>
  );
}

export default ActionColumn;
