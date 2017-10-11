import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

const CreatePatientForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="patient-info">
        <label htmlFor="first-name">
          First Name:
          <Field
            component="input"
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Jon"
            required
          />
        </label>
        <label htmlFor="last-name">
          Last Name:
          <Field
            component="input"
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Snow"
            required
          />
        </label>
        <label htmlFor="date-of-birth">
          Date of birth:
          <Field
            component="input"
            type="date"
            name="date-of-birth"
            id="date-of-birth"
            placeholder="1988-11-22"
            required
          />
        </label>
        <label htmlFor="languages">
          List of Languages:
          <Field
            component="select"
            name="languages"
            id="languages"
            multiple
            required
          >
            <option value="" disabled>
              Multiple selection available
            </option>
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Latin">Latin</option>
          </Field>
        </label>
      </fieldset>
      <fieldset className="patient-CTA">
        <input className="btn" type="submit" name="submit" value="Create" />
      </fieldset>
    </form>
  );
};

CreatePatientForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "patient",
  initialValues: { languages: [] },
})(CreatePatientForm);
