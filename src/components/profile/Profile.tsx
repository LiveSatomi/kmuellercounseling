import React from "react";
import "./_Profile.scss";
import bemNames from "util/bemnames";
import Social, { email, facebook, linkedin } from "components/social/Social";

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
                <h2 className={bem.e("name")}>{this.props.name}</h2>
                <Social
                    handle={"kmueller.lpc@gmail.com"}
                    type={email}
                    link={"mailto:kmueller.lpc@gmail.com"}
                />
                <Social
                    handle={"Kathleen Mueller"}
                    type={linkedin}
                    link={
                        "https://www.linkedin.com/in/kathleen-mueller-ma-lpc-94640282/"
                    }
                />
                <Social
                    handle={"LiveSatomi"}
                    type={facebook}
                    link={
                        "https://www.facebook.com/kathleenmuellercounseling/timeline"
                    }
                />
            </div>
        );
    }
}

export default Profile;
