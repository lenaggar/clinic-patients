import { API, FETCH_ACTION_TYPE } from "./actionTypes";

export const fetchPaients = () => ({
  type: API,
  payload: Object.assign(
    { url: "patients" },
    { method: "GET" },
    FETCH_ACTION_TYPE("FETCH_PATIENTS")
  )
});

export const fetchLanguages = () => ({
  type: API,
  payload: Object.assign(
    { url: "availableLanguages" },
    { method: "GET" },
    FETCH_ACTION_TYPE("FETCH_LANGUAGES")
  )
});

export const createPatient = patient => ({
  type: API,
  payload: Object.assign(
    { url: "patients" },
    { method: "POST" },
    { data: patient },
    FETCH_ACTION_TYPE("CREATE_PATIENT")
  )
});
