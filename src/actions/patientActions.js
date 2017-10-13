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
} from "./actionTypes";

export const initialFetchSucceeded = bool => ({
  type: INITIAL_FETCH_SUCCESS,
  initialFetchSucceeded: bool,
});

export const languagesInitialFetchSucceeded = bool => ({
  type: LANGUAGES_INITIAL_FETCH_SUCCESS,
  initialFetchSucceeded: bool,
});

export const createPatientIsLoading = bool => ({
  type: CREATE_PATIENT_IS_LOADING,
  isLoading: bool,
});

export const createPatientHasErrored = bool => ({
  type: CREATE_PATIENT_HAS_ERRORED,
  hasErrored: bool,
});

export const createPatientSuccess = patient => ({
  type: CREATE_PATIENT_SUCCESS,
  patient,
});

export const createPatient = patient => dispatch => {
  dispatch(createPatientIsLoading(true));

  fetch("https://59de0d524c181d0012a8ce8c.mockapi.io/api/patients", {
    method: "POST",
    body: JSON.stringify(patient),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      setTimeout(() => {
        dispatch(createPatientIsLoading(false));
      }, 3000);

      return res.json();
    })
    .then(patientObj => {
      dispatch(createPatientSuccess(patientObj));
    })
    .catch(() => dispatch(createPatientHasErrored(true)));
};

export const patientsIsLoading = bool => ({
  type: PATIENTS_IS_LOADING,
  isLoading: bool,
});

export const patientsHasErrored = bool => ({
  type: PATIENTS_HAS_ERRORED,
  hasErrored: bool,
});

export const patientsFetchDataSuccess = patients => ({
  type: PATIENTS_FETCH_DATA_SUCCESS,
  patients,
});

export const patientsFetchData = () => dispatch => {
  dispatch(patientsIsLoading(true));

  fetch("https://59de0d524c181d0012a8ce8c.mockapi.io/api/patients")
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      dispatch(patientsIsLoading(false));

      return res.json();
    })
    .then(patients => {
      dispatch(initialFetchSucceeded(true));
      dispatch(patientsFetchDataSuccess(patients));
    })
    .catch(() => dispatch(patientsHasErrored(true)));
};

export const languagesIsLoading = bool => ({
  type: LANGUAGES_FETCH_DATA_IS_LOADING,
  isLoading: bool,
});

export const languagesHasErrored = bool => ({
  type: LANGUAGES_FETCH_DATA_HAS_ERRORED,
  hasErrored: bool,
});

export const languagesFetchDataSuccess = languages => ({
  type: LANGUAGES_FETCH_DATA_SUCCESS,
  languages,
});

export const languagesFetchData = () => dispatch => {
  languagesIsLoading(true);

  fetch("https://59de0d524c181d0012a8ce8c.mockapi.io/api/availableLanguages")
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      setTimeout(() => {
        dispatch(languagesIsLoading(false));
      }, 2000);
      return res.json();
    })
    .then(objects => objects.map(obj => obj.language))
    .then(languages => {
      dispatch(languagesInitialFetchSucceeded(true));
      dispatch(languagesFetchDataSuccess(languages));
    })
    .catch(() => dispatch(languagesHasErrored(true)));
};
