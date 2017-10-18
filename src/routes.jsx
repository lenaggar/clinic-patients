import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  _404,
  header,
  footer,
  PatientsListPage,
  CreatePatientPage
} from "./components";

export default (
  <BrowserRouter>
    <div>
      <h1 className="page-title">Clinic Alpha Patients Manager</h1>
      <div className="container">
        {header}
        <div className="content">
          <Switch>
            <Route exact path="/" render={Home} />
            <Route path="/about" render={About} />
            <Route path="/patients" component={PatientsListPage} />
            <Route path="/create-patient" component={CreatePatientPage} />
            <Route render={_404} />
          </Switch>
        </div>
        {footer}
      </div>
    </div>
  </BrowserRouter>
);
