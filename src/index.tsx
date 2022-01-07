import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const path = (/#!(\/.*)$/.exec(document.location.hash) || [])[1];
if (path) {
    history.replace(path);
}

ReactDOM.render(<App />, document.getElementById("root"));
