import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import * as patientActions from "./../../actions/patientActions";
import CreatePatientForm from "./CreatePatientForm";

class CreatePatientPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitPatient = this.submitPatient.bind(this);
  }

  componentDidMount() {
    if (
      !this.props.languagesInitialFetchSucceeded &&
      !this.props.languagesIsLoading
    ) {
      this.props.fetchLanguages();
    }
  }

  submitPatient(input) {
    this.props.createPatient(input);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Alph | Create New Patient</title>
        </Helmet>

        <h3 className="page-title">Create a new patient record</h3>
        <CreatePatientForm
          onSubmit={this.submitPatient}
          createPatientIsLoading={this.props.createPatientIsLoading}
          languagesIsLoading={this.props.languagesIsLoading}
          languagesHasErrored={this.props.languagesHasErrored}
          languages={this.props.languages}
        />
      </div>
    );
  }
}

CreatePatientPage.propTypes = {
  createPatient: PropTypes.func.isRequired,
  fetchLanguages: PropTypes.func.isRequired,
  createPatientIsLoading: PropTypes.bool.isRequired,
  languagesIsLoading: PropTypes.bool.isRequired,
  languagesHasErrored: PropTypes.bool.isRequired,
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  languagesInitialFetchSucceeded: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  createPatientIsLoading: state.ui.createPatientIsLoading,
  createPatientHasErrored: state.ui.createPatientHasErrored,
  languagesIsLoading: state.ui.languagesIsLoading,
  languagesHasErrored: state.ui.languagesHasErrored,
  languages: state.db.languages,
  languagesInitialFetchSucceeded: state.ui.languagesInitialFetchSucceeded
});

const mapDispatchToProps = dispatch => ({
  createPatient: patient => dispatch(patientActions.createPatient(patient)),
  // fetchLanguages: () => dispatch(patientActions.languagesFetchData())
  fetchLanguages: () => dispatch(patientActions.fetchLanguages())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePatientPage);
