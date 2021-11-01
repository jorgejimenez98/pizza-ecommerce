import AdressColumn from "./AdressColumn";
import InfoColumn from "./InfoColumn";
import OrderItemsColumn from "./OrderItemsColumn";

export const columns = [
  {
    name: "id",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "orderItems",
    label: "Items",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => {
        return <OrderItemsColumn orderItems={value} />;
      },
    },
  },
  {
    name: "city",
    label: "Adress",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        const country = tableMeta.rowData[4];
        const shippingAdress1 = tableMeta.rowData[5];
        const shippingAdress2 = tableMeta.rowData[6];
        return (
          <AdressColumn
            city={value}
            country={country}
            shippingAdress1={shippingAdress1}
            shippingAdress2={shippingAdress2}
          />
        );
      },
    },
  },
  {
    name: "totalPrice",
    label: "Order Info",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta) => {
        const status = tableMeta.rowData[7];
        const dateOrdered = tableMeta.rowData[8];
        return (
          <InfoColumn
            totalPrice={value}
            orderStatus={status}
            dateOrdered={dateOrdered}
          />
        );
      },
    },
  },
  {
    name: "country",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "shippingAddress1",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "shippingAddress2",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "status",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "dateOrdered",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
];
