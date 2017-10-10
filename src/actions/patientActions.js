const createPatient = patient => ({
  type: "CREATE_PATIENT",
  patient
});

const deletePatient = patient => ({
  type: "DELETE_PATIENT",
  patient
});

export { createPatient, deletePatient };
