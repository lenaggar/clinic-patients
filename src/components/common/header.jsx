import React from "react";
import { Link } from "react-router-dom";

const header = (
  <div>
    <h1 className="page-title">Clinic Alpha Patients Manager</h1>
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
        <Link to="/404">4 0 4</Link>
      </li>
    </ul>
    <hr />
  </div>
);

export default header;
