import { Home, Cart, Login, Register } from "./views";

export const routes = [
  { path: "/home", component: Home, exact: true },
  { path: "/cart", component: Cart },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];
