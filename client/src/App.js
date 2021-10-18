import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { ScrollTop, CustomizedSnackbars } from "./containers";
import { Login, Register } from "./views";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <CustomizedSnackbars /> 
      <Switch>
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/register" render={(props) => <Register {...props} />} />
        <Route path="/" render={(props) => <MainLayout {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
