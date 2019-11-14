import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "components/home/Home";
import Projects from "components/projects/Projects";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
