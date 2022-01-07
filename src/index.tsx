import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
console.log("jmtest");
console.log("jmtest1 " + document.location.hash);
console.log("jmtest2 " + document.location);
const path = (/#!(\/.*)$/.exec(document.location.hash) || [])[1];
console.log("jmtestA " + path);
if (path) {
    console.log("jmtestB");
    history.replace(path);
}

ReactDOM.render(<App />, document.getElementById("root"));
