import {
  CREATE_PATIENT,
  PATIENTS_IS_LOADING,
  PATIENTS_HAS_ERRORED,
  PATIENTS_FETCH_DATA_SUCCESS,
} from "./../actions/actionTypes";

export const createPatient = (state = [], action) => {
  switch (action.type) {
    case CREATE_PATIENT:
      return [...state, Object.assign({}, action.patient)];

    default:
      return state;
  }
};

export const patientsHasErrored = (state = false, action) => {
  switch (action.type) {
    case PATIENTS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
};

export const patientsIsLoading = (state = true, action) => {
  switch (action.type) {
    case PATIENTS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

export const patients = (state = [], action) => {
  switch (action.type) {
    case PATIENTS_FETCH_DATA_SUCCESS:
      return action.patients;

    default:
      return state;
  }
};
