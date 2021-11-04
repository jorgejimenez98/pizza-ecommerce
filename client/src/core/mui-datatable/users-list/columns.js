export const userColumns = [
  {
    name: "id",
    label: "",
    options: {
      filter: false,
      sort: false,
      display: true,
      viewColumns: false,
    },
  },
  {
    name: "name",
    label: "Full Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta) => {
        return <a href={`mailto:${value}`}>{value}</a>;
      },
    },
  },
  {
    name: "isAdmin",
    label: "User Rol",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (isAdmin) => {
        const type = isAdmin ? "primary" : "success";
        const rol = isAdmin ? "Admin" : "Client";
        return <span className={`badge badge-${type}`}>{rol}</span>;
      },
    },
  },
];
