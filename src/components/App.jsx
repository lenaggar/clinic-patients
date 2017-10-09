import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

const App = props => (
  <div className="container">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            Clinic Patients Manager
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/books">Book</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
