import React from "react";
import { connect } from "react-redux";

const PatientsList = props => (
  <pre>
    <code>{JSON.stringify(props, null, 4)}</code>
  </pre>
);

const mapStateToProps = state => ({
  patient: state.patients
});

export default connect(mapStateToProps)(PatientsList);
