import {
  CREATE_PATIENT_IS_LOADING,
  CREATE_PATIENT_HAS_ERRORED,
  CREATE_PATIENT_SUCCESS,
  PATIENTS_IS_LOADING,
  PATIENTS_HAS_ERRORED,
  PATIENTS_FETCH_DATA_SUCCESS,
  INITIAL_FETCH_SUCCESS,
  LANGUAGES_FETCH_DATA_IS_LOADING,
  LANGUAGES_FETCH_DATA_HAS_ERRORED,
  LANGUAGES_FETCH_DATA_SUCCESS,
  LANGUAGES_INITIAL_FETCH_SUCCESS
} from "./../actions/actionTypes";

export const initialFetchSucceeded = (state = false, action) => {
  if (action.type === INITIAL_FETCH_SUCCESS) {
    return action.initialFetchSucceeded;
  }
  return state;
};

export const createPatientIsLoading = (state = false, action) => {
  if (action.type === CREATE_PATIENT_IS_LOADING) {
    return action.isLoading;
  }
  return state;
};

export const createPatientHasErrored = (state = false, action) => {
  if (action.type === CREATE_PATIENT_HAS_ERRORED) {
    return action.hasErrored;
  }
  return state;
};

export const patientsIsLoading = (state = false, action) => {
  if (action.type === PATIENTS_IS_LOADING) {
    return action.isLoading;
  }
  return state;
};

export const patientsHasErrored = (state = false, action) => {
  if (action.type === PATIENTS_HAS_ERRORED) {
    return action.hasErrored;
  }
  return state;
};

export const patients = (state = [], action) => {
  switch (action.type) {
    case PATIENTS_FETCH_DATA_SUCCESS:
      return action.patients;

    case CREATE_PATIENT_SUCCESS:
      return [...state, Object.assign({}, action.patient)];

    default:
      return state;
  }
};

export const languagesInitialFetchSucceeded = (state = false, action) => {
  if (action.type === LANGUAGES_INITIAL_FETCH_SUCCESS) {
    return action.initialFetchSucceeded;
  }
  return state;
};

export const languagesIsLoading = (state = false, action) => {
  if (action.type === LANGUAGES_FETCH_DATA_IS_LOADING) {
    return action.isLoading;
  }
  return state;
};

export const languagesHasErrored = (state = false, action) => {
  if (action.type === LANGUAGES_FETCH_DATA_HAS_ERRORED) {
    return action.hasErrored;
  }
  return state;
};

export const languages = (state = [], action) => {
  switch (action.type) {
    case LANGUAGES_FETCH_DATA_SUCCESS:
      return action.languages;

    default:
      return state;
  }
};
