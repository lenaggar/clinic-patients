export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_PATIENT":
      return [...state, Object.assign({}, action.patient)];

    default:
      return state;
  }
};
