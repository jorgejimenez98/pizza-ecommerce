import UserColumn from "./columns/UserColumn";
import StatusColumn from "./columns/StatusColumn";

export const orderscolumns = [
  {
    name: "_id",
    label: "Order Id",
    options: {
      filter: false,
      sort: true,
      display: true,
      viewColumns: true,
    },
  },
  {
    name: "user",
    label: "User",
    options: {
      filter: false,
      sort: false,
      viewColumns: false,
      customBodyRender: (value, tableMeta) => {
        return <UserColumn user={value} />;
      },
    },
  },
  {
    name: "totalPrice",
    label: "Ammount",
    options: {
      filter: true,
      sort: true,
      viewColumns: true,
    },
  },
  {
    name: "dateOrdered",
    label: "Date Ordered",
    options: {
      filter: false,
      sort: false,
      viewColumns: false,
      customBodyRender: (value, tableMeta) => {
        return <div>{value.replace(/T/, " ").replace(/\..+/, "")}</div>;
      },
    },
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
      filterType: "dropdown",
      sort: true,
      viewColumns: true,
      customBodyRender: (status, tableMeta) => {
        const orderId = tableMeta.rowData[0];
        return <StatusColumn status={status} orderId={orderId} />;
      },
    },
  },
];
