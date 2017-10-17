import {
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_ERROR,
  FETCH_PATIENTS_API_START,
  FETCH_PATIENTS_API_DONE,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_ERROR,
  FETCH_LANGUAGES_API_START,
  FETCH_LANGUAGES_API_DONE,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_ERROR,
  CREATE_PATIENT_API_START,
  CREATE_PATIENT_API_DONE
} from "./../actions/actionTypes";

export const initialFetchSucceeded = (state = false, action) => {
  if (action.type === FETCH_PATIENTS_SUCCESS) {
    return true;
  }
  return state;
};

export const createPatientIsLoading = (state = false, action) => {
  switch (action.type) {
    case CREATE_PATIENT_API_START:
      return true;

    case CREATE_PATIENT_API_DONE:
      return false;

    default:
      return state;
  }
};

export const createPatientHasErrored = (state = false, action) => {
  if (action.type === CREATE_PATIENT_ERROR) {
    return true;
  }
  return state;
};

export const patientsIsLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_PATIENTS_API_START:
      return true;

    case FETCH_PATIENTS_API_DONE:
      return false;

    default:
      return state;
  }
};

export const patientsHasErrored = (state = false, action) => {
  if (action.type === FETCH_PATIENTS_ERROR) {
    return true;
  }
  return state;
};

export const patients = (state = [], action) => {
  switch (action.type) {
    case FETCH_PATIENTS_SUCCESS:
      return action.data;

    case CREATE_PATIENT_SUCCESS:
      return [...state, Object.assign({}, action.data)];

    default:
      return state;
  }
};

export const languagesInitialFetchSucceeded = (state = false, action) => {
  if (action.type === FETCH_LANGUAGES_SUCCESS) {
    return true;
  }
  return state;
};

export const languagesIsLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES_API_START:
      return true;

    case FETCH_LANGUAGES_API_DONE:
      return false;

    default:
      return state;
  }
};

export const languagesHasErrored = (state = false, action) => {
  if (action.type === FETCH_LANGUAGES_ERROR) {
    return true;
  }
  return state;
};

export const languages = (state = [], action) => {
  switch (action.type) {
    case FETCH_LANGUAGES_SUCCESS:
      return action.data;

    default:
      return state;
  }
};
