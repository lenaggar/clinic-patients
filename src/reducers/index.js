import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  createPatient,
  patientsHasErrored,
  patientsIsLoading,
  patients,
} from "./patientReducers";

export default combineReducers({
  createPatient,
  patientsHasErrored,
  patientsIsLoading,
  patients,
  form: formReducer,
});
