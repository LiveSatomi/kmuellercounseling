import React from "react";
import "./Personal.scss";
import bemNames from "util/bemnames";

type PersonalProps = {};

const bem = bemNames.create("Personal");

class Personal extends React.Component<PersonalProps> {
    render() {
        return <p>Hello, world!</p>;
    }
}

export default Personal;
