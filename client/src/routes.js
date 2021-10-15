import Home from "./views/Home";
import Cart from "./views/Cart";
import Login from "./views/Login";

export const routes = [
  { path: "/home", component: Home, exact: true },
  { path: "/cart", component: Cart },
  { path: "/login", component: Login },
];