import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PatientDetails = ({ patients, match }) => {
  const patient = patients.find(p => p.id === match.params.patientId);

  return (
    <div>
      <Link to="/patients">go back</Link>
      <div className="patient-details-container">
        <h3 className="page-title">{`Patient #${match.params.patientId}`}</h3>
        {/* <pre><code>{JSON.stringify(patient, null, 4)}</code></pre> */}
        <div className="patient-details">
          <h4 className="patient-name">First Name:</h4>
          <p>{patient.firstName}</p>
          <h4 className="patient-name">Last Name:</h4>
          <p>{patient.lastName}</p>
          <h4 className="patient-date-of-birth">Dae of birth:</h4>
          <p>{patient.dateOfBirth}</p>
          <h4 className="patient-languages">Used Languages:</h4>
          <ul>{patient.languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};

PatientDetails.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  patients: state.db.patients
});

export default connect(mapStateToProps)(PatientDetails);
