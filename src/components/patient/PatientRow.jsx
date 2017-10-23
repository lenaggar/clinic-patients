import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PatientRow = ({ patient }) => (
  <div className="patient-row">
    <div className="name">
      <h4>{`${patient.lastName}, ${patient.firstName}`}</h4>
      <p>{`ID #${patient.id}`}</p>
    </div>
    <div className="cta">
      <Link to={`/patients/${patient.id}`} className="btn" patient={patient}>
        View
      </Link>
    </div>
  </div>
);

PatientRow.propTypes = {
  patient: PropTypes.objectOf(PropTypes.any).isRequired
};

export default PatientRow;
