import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  _404,
  header,
  PatientsListPage,
  CreatePatientPage
} from "./components";

export default (
  <BrowserRouter>
    <div className="container">
      {header}
      <Switch>
        <Route exact path="/" render={Home} />
        <Route path="/about" render={About} />
        <Route path="/patients" component={PatientsListPage} />
        <Route path="/create-patient" component={CreatePatientPage} />
        <Route render={_404} />
      </Switch>
    </div>
  </BrowserRouter>
);
