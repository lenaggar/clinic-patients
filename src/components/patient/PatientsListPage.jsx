import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import PatientsList from "./PatientsList";
import PatientDetais from "./PatientDetails";

const PatientsListPage = ({ match, patientsCount }) => (
  <div>
    <Helmet>
      <title>{`Alpha | ${patientsCount} Patients`}</title>
    </Helmet>

    <Route exact path={match.url} component={PatientsList} />
    <Route path={`${match.url}/:patientId`} component={PatientDetais} />
  </div>
);

PatientsListPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  patientsCount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  patientsCount: state.db.patients.length
});

export default connect(mapStateToProps)(PatientsListPage);
