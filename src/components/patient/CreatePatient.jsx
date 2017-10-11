import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as patientActions from "./../../actions/patientActions";
import CreatePatientForm from "./CreatePatientForm";

class CreatePatient extends React.Component {
  constructor(props) {
    super(props);
    this.submitPatient = this.submitPatient.bind(this);
  }

  submitPatient(input) {
    // console.log(input);
    this.props.createPatient(input);
  }

  render() {
    return <CreatePatientForm onSubmit={this.submitPatient} />;
  }
}

CreatePatient.propTypes = {
  createPatient: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createPatient: patient => dispatch(patientActions.createPatient(patient)),
});

export default connect(null, mapDispatchToProps)(CreatePatient);
