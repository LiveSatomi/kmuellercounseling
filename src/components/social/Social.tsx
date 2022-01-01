import React from "react";
import bemNames from "util/bemnames";
import "./Social.scss";
// TODO resolve these images dynamically
import githubMark from "./image/githubMark.png";
import linkedinMark from "./image/linkedinMark.png";
import facebookMark from "./image/facebookMark.png";
import emailMark from "./image/emailMark.png";

type SocialProps = {
    handle: string;
    type: SocialNetwork;
    link: string;
};

interface SocialNetwork {
    network: string;
    mark: string;
}

const bem = bemNames.create("Social");

class Social extends React.Component<SocialProps> {
    render() {
        return (
            <div className={bem.b()}>
                <img
                    className={bem.e("mark")}
                    src={this.props.type.mark}
                    alt={this.props.type.network + " mark"}
                />
                <a href={this.props.link}>
                    <span className={bem.e("handle")}>{this.props.handle}</span>
                </a>
            </div>
        );
    }
}

// Networks that have logomarks internal to the component.
export const github: SocialNetwork = { network: "GitHub", mark: githubMark };
export const facebook: SocialNetwork = {
    network: "Facebook",
    mark: facebookMark,
};
export const linkedin: SocialNetwork = {
    network: "LinkedIn",
    mark: linkedinMark,
};
export const email: SocialNetwork = { network: "Mail", mark: emailMark };

export default Social;
