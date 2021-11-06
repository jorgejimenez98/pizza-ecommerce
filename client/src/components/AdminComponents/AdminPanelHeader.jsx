import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  HiUserGroup,
  FaPizzaSlice,
  GrAdd,
  GrOrderedList,
} from "react-icons/all";
import { LinkContainer } from "react-router-bootstrap";

export default function AdminPanelHeader() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="center-form">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        className="bg-white rounded"
      >
        <LinkContainer to={"/admin/panel/users/list"}>
          <Tab
            icon={<HiUserGroup size={24} />}
            label="Users List"
            className="mr-2"
          />
        </LinkContainer>

        <LinkContainer to={"/admin/panel/pizzas/list"}>
          <Tab icon={<FaPizzaSlice size={24} />} label="Pizzas List" />
        </LinkContainer>

        <LinkContainer to={"/admin/panel/pizzas/add"}>
          <Tab
            icon={<GrAdd size={24} />}
            label="Add Pizza"
            className="mr-2 ml-2"
          />
        </LinkContainer>

        <LinkContainer to={"/admin/panel/orders/list"}>
          <Tab icon={<GrOrderedList size={24} />} label="Orders List" />
        </LinkContainer>
      </Tabs>
    </div>
  );
}
