import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import routes from "./routes";

const store = configureStore();

const App = () => <Provider store={store}>{routes}</Provider>;

export default App;
