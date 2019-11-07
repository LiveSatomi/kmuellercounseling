import React from "react";
import "./Profile.scss";
import bemNames from "util/bemnames";

type ProfileProps = {
    name: string;
};

const bem = bemNames.create("Profile");

class Profile extends React.Component<ProfileProps> {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Profile;
