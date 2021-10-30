import { Home, Cart, UserOrders } from "./views";

export const routes = [
  { path: "/home", component: Home, exact: true },
  { path: "/cart", component: Cart },
  { path: "/my/orders", component: UserOrders },
];
