import React from "react";
import { Route, IndexRoute } from "react-router";
import {
  App,
  Home,
  About,
  Patients,
  PatientsList,
  PatientDetails,
  CreatePatient
} from "./components";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/patients" component={Patients}>
      <IndexRoute component={PatientsList} />
      <Route path="/patients/:id" component={PatientDetails} />
      <Route path="/patients/create" component={CreatePatient} />
    </Route>
  </Route>
);
