import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  createPatientIsLoading,
  createPatientHasErrored,
  patientsHasErrored,
  patientsIsLoading,
  patients,
  initialFetchSucceeded,
  languagesIsLoading,
  languagesHasErrored,
  languages,
  languagesInitialFetchSucceeded,
} from "./patientReducers";

export default combineReducers({
  createPatientIsLoading,
  createPatientHasErrored,
  patientsHasErrored,
  patientsIsLoading,
  patients,
  initialFetchSucceeded,
  languagesIsLoading,
  languagesHasErrored,
  languages,
  languagesInitialFetchSucceeded,
  form: formReducer,
});
