import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import wordmark from "brand/wordmark.png";

const App: React.FC = () => {
    return <Header wordmark={wordmark} />;
};

export default App;
