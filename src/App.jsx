import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import configureStore from "./store";
import PatientsListPage from "./components/patient/PatientsListPage";
import CreatePatient from "./components/patient/CreatePatient";
// import { patientsFetchData } from "./actions/patientActions";

const store = configureStore();

// store.dispatch(patientsFetchData());

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

        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <h3>Welcome!!!</h3>} />
            <Route path="/about" render={() => <h3>About Page...</h3>} />
            <Route path="/patients" component={PatientsListPage} />
            <Route path="/create-patient" component={CreatePatient} />
            <Route render={() => <h3>404, Sorry Wrong Destination</h3>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
