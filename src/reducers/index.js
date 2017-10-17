import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  patients,
  languages,
  createPatientIsLoading,
  createPatientHasErrored,
  patientsIsLoading,
  patientsHasErrored,
  languagesIsLoading,
  languagesHasErrored,
  initialFetchSucceeded,
  languagesInitialFetchSucceeded
} from "./patientReducers";

export default combineReducers({
  db: combineReducers({
    patients,
    languages
  }),
  ui: combineReducers({
    createPatientIsLoading,
    createPatientHasErrored,
    patientsIsLoading,
    patientsHasErrored,
    languagesIsLoading,
    languagesHasErrored,
    initialFetchSucceeded,
    languagesInitialFetchSucceeded
  }),
  form: formReducer
});
