import { Home, Cart, UserOrders, AdminPanel } from "./views";

export const routes = [
  { path: "/home", component: Home, exact: true },
  { path: "/cart", component: Cart },
  { path: "/my/orders", component: UserOrders },
  { path: "/admin/panel", component: AdminPanel },
];
