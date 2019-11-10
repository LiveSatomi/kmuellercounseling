import React from "react";
import "./Profile.scss";
import bemNames from "util/bemnames";
import Social, { email, github, linkedin } from "components/social/Social";

type ProfileProps = {
    name: string;
    picture: string;
};

const bem = bemNames.create("Profile");

class Profile extends React.Component<ProfileProps> {
    render() {
        return (
            <div className={bem.b()}>
                <img
                    className={bem.e("picture")}
                    alt={this.props.name}
                    src={this.props.picture}
                />
                <h2>{this.props.name}</h2>
                <Social
                    handle={"mueller.o.jack@gmail.com"}
                    type={email}
                    link={"mailto:mueller.o.jack@gmail.com"}
                />
                <Social
                    handle={"Jack Mueller"}
                    type={linkedin}
                    link={"https://www.linkedin.com/in/jack-mueller/"}
                />
                <Social
                    handle={"LiveSatomi"}
                    type={github}
                    link={"https://github.com/Livesatomi"}
                />
            </div>
        );
    }
}

export default Profile;
