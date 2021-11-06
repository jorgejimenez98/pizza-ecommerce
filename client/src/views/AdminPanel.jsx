import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AdminPanelHeader } from "../components";
import { Switch, Route, Redirect } from "react-router-dom";
// Components
import {
  UserList,
  AddPizza,
  OrdersList,
  PizzasList,
  EditPizza,
} from "../components";

function AdminPanel({ history }) {
  const { user_login } = useSelector((state) => state.users.login);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    }
  }, [user_login, history]);

  return (
    <div>
      <AdminPanelHeader />

      <Switch>
        <Route
          path={"/admin/panel/users/list"}
          render={(props) => <UserList {...props} />}
        />
        <Route
          path={"/admin/panel/pizzas/list"}
          render={(props) => <PizzasList {...props} />}
        />
        <Route
          path={"/admin/panel/pizzas/add"}
          render={(props) => <AddPizza {...props} />}
        />
        <Route
          path={"/admin/panel/pizzas/edit/:pizzaId"}
          render={(props) => <EditPizza {...props} />}
        />
        <Route
          path={"/admin/panel/orders/list"}
          render={(props) => <OrdersList {...props} />}
        />

        <Redirect from="/admin/panel" to="/admin/panel/users/list" />
      </Switch>
    </div>
  );
}

export default AdminPanel;
