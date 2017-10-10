import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as patientActions from "./../../actions/patientActions";

class CreatePatient extends React.Component {
  constructor(props) {
    super(props);

    this.submitPatient = this.submitPatient.bind(this);
  }

  submitPatient(input) {
    this.props.createPatient(input);
  }

  render() {
    let firstNameInput;
    let lastNameInput;
    let dateOfBirthInput;
    let languagesInput;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          const input = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            dateOfBirth: dateOfBirthInput.value,
            languages: languagesInput.value
          };
          this.submitPatient(input);
          e.target.reset();
        }}
      >
        <div>
          <label htmlFor="first-name">
            First Name:
            <input
              type="text"
              name="first-name"
              id="first-name"
              ref={element => {
                firstNameInput = element;
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="last-name">
            Last Name:
            <input
              type="text"
              name="last-name"
              id="last-name"
              ref={element => {
                lastNameInput = element;
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="date-of-birth">
            Date of birth:
            <input
              type="date"
              name="date-of-birth"
              id="date-of-birth"
              ref={element => {
                dateOfBirthInput = element;
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="languages">
            List of Languages:
            <input
              type="text"
              name="languages"
              id="languages"
              ref={element => {
                languagesInput = element;
              }}
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    );
  }
}

CreatePatient.propTypes = {
  createPatient: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  patient: state.patients
});

const mapDispatchToProps = dispatch => ({
  createPatient: patient => dispatch(patientActions.createPatient(patient))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePatient);
