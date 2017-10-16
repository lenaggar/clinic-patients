import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import PatientsList from "./PatientsList";
import PatientDetais from "./PatientDetails";

const PatientsListPage = ({ match }) => (
  <div>
    <Route exact path={match.url} component={PatientsList} />
    <Route path={`${match.url}/:patientId`} component={PatientDetais} />
  </div>
);

PatientsListPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired
};

export default PatientsListPage;
