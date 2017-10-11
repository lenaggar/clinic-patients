import React from "react";
import PropTypes from "prop-types";

const PatientRow = props => {

  const {
    data: {
      id,
      firstName,
      lastName,
      dateOfBirth,
      languages
    }
  } = props;

  return (
    <div className="patient-row">
      {/* <pre>
        <code>{JSON.stringify(props.data, null, 4)}</code>
      </pre> */}
      <div className="name">
        <h3>{`${firstName} ${lastName}`}</h3>
      </div>
      <div className="cta">
        <button onClick={() => { console.log(id) }} >View</button>
      </div>
        {/* <p className="card-text">{Date(props.data.dateOfBirth)}</p>
        <ul>
          {props.data.languages.map(lang => <li key='lang'>{lang}</li>)}
        </ul> */}
    </div>
  )
};

PatientRow.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PatientRow;
