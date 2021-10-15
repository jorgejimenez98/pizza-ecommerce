import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ScrollTop from "./components/ScrollTop";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Switch>
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route path="/" render={(props) => <MainLayout {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
