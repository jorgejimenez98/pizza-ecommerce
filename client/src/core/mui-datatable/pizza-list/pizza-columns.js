import ImageColumn from "./columns/ImageColumn";
import PricesColumn from "./columns/PricesColumn";
import CategoryColumn from "./columns/CategoryColumn";
import ActionColumn from "./columns/ActionColumn";

export const pizzacolumns = [
  {
    name: "_id",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: false,
      viewColumns: false,
    },
  },
  {
    name: "image",
    label: "Image",
    options: {
      filter: false,
      sort: false,
      viewColumns: false,
      customBodyRender: (value, tableMeta) => {
        const name = tableMeta.rowData[2];
        return <ImageColumn imageUrl={value} name={name} />;
      },
    },
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
      viewColumns: true,
      customBodyRender: (value, tableMeta) => {
        return (
          <h6>
            <strong>{value}</strong>
          </h6>
        );
      },
    },
  },
  {
    name: "prices",
    label: "Prices",
    options: {
      filter: false,
      sort: false,
      viewColumns: false,
      customBodyRender: (value, tableMeta) => {
        return <PricesColumn prices={value} />;
      },
    },
  },
  {
    name: "category",
    label: "Category",
    options: {
      filter: true,
      filterType: "dropdown",
      sort: true,
      viewColumns: true,
      customBodyRender: (value, tableMeta) => {
        return <CategoryColumn category={value} />;
      },
    },
  },
  {
    name: "_id",
    label: "Actions",
    options: {
      filter: false,
      sort: false,
      viewColumns: false,
      customBodyRender: (pizzaId, tableMeta) => {
        const name = tableMeta.rowData[2];
        return <ActionColumn pizzaId={pizzaId} name={name} />;
      },
    },
  },
];
