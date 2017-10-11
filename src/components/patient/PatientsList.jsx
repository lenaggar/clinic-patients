import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { patientsFetchData } from "./../../actions/patientActions";
import PatientRow from "./PatientRow";

class PatientsList extends React.Component {
  componentDidMount() {
    if (!this.props.patients.length) {
      this.props.fetchData();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.isLoading && !nextProps.isLoading) {
      return false;
    }

    return true;
  }

  render() {
    console.log("props:   ", this.props); // eslint-disable-line no-console

    if (this.props.hasErrored) {
      return (
        <div className="loading-error">
          <p>Sorry! There was an error loading the data</p>
        </div>
      );
    }

    if (this.props.isLoading) {
      return (
        <div className="loading">
          <p>Loading…</p>
        </div>
      );
    }

    return (
      <div className="patient-rows-container">
        {this.props.patients.map(patient => (
          <PatientRow key={patient.id} data={patient} />
        ))}
      </div>
    );
  }
}

PatientsList.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  patients: state.patients,
  hasErrored: state.patientsHasErrored,
  isLoading: state.patientsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(patientsFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientsList);
