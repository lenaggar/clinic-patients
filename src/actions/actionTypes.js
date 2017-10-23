export const API = "API";

export const ASYNC_ACTION_TYPE = type => ({
  success: `${type}_SUCCESS`,
  error: `${type}_ERROR`,
  apiStart: `${type}_API_START`,
  apiDone: `${type}_API_DONE`
});

export const FETCH_PATIENTS_SUCCESS = "FETCH_PATIENTS_SUCCESS";

export const FETCH_PATIENTS_ERROR = "FETCH_PATIENTS_ERROR";

export const FETCH_PATIENTS_API_START = "FETCH_PATIENTS_API_START";

export const FETCH_PATIENTS_API_DONE = "FETCH_PATIENTS_API_DONE";

export const FETCH_LANGUAGES_SUCCESS = "FETCH_LANGUAGES_SUCCESS";

export const FETCH_LANGUAGES_ERROR = "FETCH_LANGUAGES_ERROR";

export const FETCH_LANGUAGES_API_START = "FETCH_LANGUAGES_API_START";

export const FETCH_LANGUAGES_API_DONE = "FETCH_LANGUAGES_API_DONE";

export const CREATE_PATIENTS_SUCCESS = "CREATE_PATIENTS_SUCCESS";

export const CREATE_PATIENTS_ERROR = "CREATE_PATIENTS_ERROR";

export const CREATE_PATIENTS_API_START = "CREATE_PATIENTS_API_START";

export const CREATE_PATIENTS_API_DONE = "CREATE_PATIENTS_API_DONE";
