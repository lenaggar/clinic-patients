import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const logger = store => next => action => {
  if (typeof action !== 'function') {
    console.log("dispatching:   ", action); // eslint-disable-line no-console
  } else {
    console.log("thunk:   ", action); // eslint-disable-line no-console
  }
  const result = next(action);
  console.log("next state:   ", store.getState()); // eslint-disable-line no-console
  return result;
};

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, thunk)
  );
  return store;
};

export default configureStore;
