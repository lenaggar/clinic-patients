import React from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const CreatePatientForm = props => {
  const {
    handleSubmit,
    submitSucceeded,
    createPatientIsLoading,
    languagesIsLoading,
    languagesHasErrored,
    languages
  } = props;

  const languageOptions = (IsLoading, HasErrored, langs) => {
    if (IsLoading) {
      return (
        <option value="" disabled>
          Loading available languages . . .
        </option>
      );
    }
    if (HasErrored) {
      return (
        <option value="" disabled>
          sorry, there was a problem loading the languages!!!
        </option>
      );
    }
    return langs.map(obj => (
      <option key={obj.id} value={obj.language}>
        {obj.language}
      </option>
    ));
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <fieldset className="patient-info">
        <label htmlFor="firstName">
          First Name:
          <Field
            component="input"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Jon"
            required
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <Field
            component="input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Snow"
            required
          />
        </label>
        <label htmlFor="dateOfBirth">
          Date of birth:{" "}
          <span className="sub-text">(must be at least 18 years old)</span>
          <Field
            component="input"
            type="date"
            min="1950-01-01"
            max="1999-12-31"
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="1988-11-22"
            required
          />
        </label>
        <label htmlFor="languages">
          List of Languages:{" "}
          <span className="sub-text">(select all that apply)</span>
          <Field
            component="select"
            name="languages"
            id="languages"
            multiple
            required
          >
            {languageOptions(
              languagesIsLoading,
              languagesHasErrored,
              languages
            )}
          </Field>
        </label>
      </fieldset>
      <fieldset className="patient-CTA">
        <input className="btn" type="submit" name="submit" value="Create" />
      </fieldset>
    </form>
  );

  const submittingModal = (
    <div className="submitting-modal">
      <p>Submitting . . .</p>
    </div>
  );

  return (
    <div>
      {/* props.submitSucceeded is a redux-form property which becomes true after the form is submitted */}
      {submitSucceeded && !createPatientIsLoading ? (
        <Redirect to="/patients" />
      ) : (
        form
      )}

      {createPatientIsLoading && submittingModal}
    </div>
  );
};

CreatePatientForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createPatientIsLoading: PropTypes.bool.isRequired,
  languagesIsLoading: PropTypes.bool.isRequired,
  languagesHasErrored: PropTypes.bool.isRequired,
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitSucceeded: PropTypes.bool.isRequired
};

export default reduxForm({
  form: "patient",
  initialValues: { languages: [] }
  // onSubmitSuccess: (result, dispatch) => dispatch(reset("patient")),
})(CreatePatientForm);
