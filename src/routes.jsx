import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {
  PatientsListPage,
  CreatePatientPage
} from './components'

export default (
    <BrowserRouter>
      <div>
        <h2 className="page-title">Clinic Alpha Patients Manager</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/patients">View Patients List</Link>
          </li>
          <li>
            <Link to="/create-patient">Create a new patient record</Link>
          </li>
          <li>
            <Link to="/mod">4 0 4</Link>
          </li>
        </ul>
        <hr />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <h3>Welcome!!!</h3>} />
            <Route path="/about" render={() => <h3>About Page...</h3>} />
            <Route path="/patients" component={PatientsListPage} />
            <Route path="/create-patient" component={CreatePatientPage} />
            <Route render={() => <h3>404, Sorry Wrong Destination</h3>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
);
