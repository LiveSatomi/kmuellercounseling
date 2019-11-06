import React from "react";
import Navigation from "./components/navigation/Navigation";
import wordmark from "brand/wordmark.png";

const App: React.FC = () => {
    return <Navigation wordmark={wordmark} />;
};

export default App;
