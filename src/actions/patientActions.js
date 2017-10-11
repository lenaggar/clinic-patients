import {
  CREATE_PATIENT,
  DELETE_PATIENT,
  PATIENTS_IS_LOADING,
  PATIENTS_HAS_ERRORED,
  PATIENTS_FETCH_DATA_SUCCESS,
} from "./actionTypes";

export const createPatient = patient => ({
  type: CREATE_PATIENT,
  patient,
});

export const deletePatient = patient => ({
  type: DELETE_PATIENT,
  patient,
});

export const patientsIsLoading = bool => ({
  type: PATIENTS_IS_LOADING,
  isLoading: bool,
});

export const patientsHasErrored = bool => ({
  type: PATIENTS_HAS_ERRORED,
  hasErrored: bool,
});

export const patientsFetchDataSuccess = (patients, latency) => ({
  type: PATIENTS_FETCH_DATA_SUCCESS,
  patients,
  latency,
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
    .then(patients => dispatch(patientsFetchDataSuccess(patients)))
    .catch(() => dispatch(patientsHasErrored(true)));
};
