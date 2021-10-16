import React from "react";
import { routes } from "../routes";
import { NavBar } from "../containers";
import { Switch, Route, Redirect } from "react-router-dom";

function MainLayout() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        })}
        <Redirect from="/" to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default MainLayout;
