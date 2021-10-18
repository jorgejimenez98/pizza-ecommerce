import { Home, Cart } from "./views";

export const routes = [
  { path: "/home", component: Home, exact: true },
  { path: "/cart", component: Cart },
];
