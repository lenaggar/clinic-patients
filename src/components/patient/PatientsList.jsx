import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPaients } from "./../../actions/patientActions";
import PatientRow from "./PatientRow";

class PatientsList extends React.Component {
  constructor(props) {
    super(props);

    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    if (!this.props.initialFetch && !this.props.isLoading) {
      this.props.fetchData();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.isLoading && !nextProps.isLoading) {
      return false;
    }
    return true;
  }

  handleRefresh() {
    if (!this.props.isLoading) {
      this.props.fetchData();
    }
  }

  render() {
    const { hasErrored, isLoading, patients } = this.props;

    if (hasErrored) {
      return (
        <div className="loading-error">
          <p>Sorry! There was an error fetching the data</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="submitting-modal">
          <p>Loading . . .</p>
        </div>
      );
    }

    return (
      <div className="patient-rows-container">
        <h3 className="page-title">Patients</h3>

        <div className="refresh-container">
          <button className="btn" onClick={this.handleRefresh}>
            Refresh
          </button>
        </div>

        {patients.map(patient => (
          <PatientRow key={patient.id} patient={patient} />
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
  initialFetch: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  patients: state.patients,
  hasErrored: state.patientsHasErrored,
  isLoading: state.patientsIsLoading,
  initialFetch: state.initialFetchSucceeded
});

const mapDispatchToProps = dispatch => ({
  // fetchData: () => dispatch(patientsFetchData()),
  fetchData: () => dispatch(fetchPaients())
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientsList);
