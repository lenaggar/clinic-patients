import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import App from "./App";
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

render(<App />, document.getElementById("app"));
