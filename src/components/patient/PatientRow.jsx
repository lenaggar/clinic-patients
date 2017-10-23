import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PatientRow = ({ patient }) => {
  const date = new Date(patient.dateOfBirth);

  return (
    <div className="patient-row">
      <div className="name">
        <h4>{`${patient.lastName}, ${patient.firstName}`}</h4>
        <p>{`ID #${patient.id}`}</p>
        <p>
          {`Date of birth: ${date.getFullYear()}-${date.getMonth() +
            1}-${date.getDate()}`}
        </p>
        <p>{`Languages: { ${patient.languages.join(", ")} }`}</p>
      </div>
      <div className="cta">
        <Link to={`/patients/${patient.id}`} className="btn" patient={patient}>
          View
        </Link>
      </div>
    </div>
  );
};

PatientRow.propTypes = {
  patient: PropTypes.objectOf(PropTypes.any).isRequired
};

export default PatientRow;
