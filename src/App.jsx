import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import configureStore from "./store";
import PatientsList from "./components/patient/PatientsList";
import CreatePatient from "./components/patient/CreatePatient";

import initialState from "./MOCK_DATA";

const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <h2>Clinic Alpha Patients Manager</h2>
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

        <Switch>
          <Route exact path="/" render={() => <h3>Welcome!!!</h3>} />
          <Route path="/about" render={() => <h3>About Page...</h3>} />
          <Route path="/patients" component={PatientsList} />
          <Route path="/create-patient" component={CreatePatient} />
          <Route
            render={() => /* 404 */ <h3>404, Sorry Wrong Destination</h3>}
          />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
