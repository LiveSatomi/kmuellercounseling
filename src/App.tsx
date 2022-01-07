import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "components/home/Home";
import Services from "components/services/Services";
import Appointment from "components/appointment/Appointment";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/index.html" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/appointment" element={<Appointment />} />
            </Routes>
        </Router>
    );
}
