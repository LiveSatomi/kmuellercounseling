import React from "react";
import bemNames from "util/bemnames";
import "./Social.scss";
// TODO resolve these images dynamically
import githubMark from "./image/githubMark.png";
import linkedinMark from "./image/linkedinMark.png";

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
                <a href={this.props.link}>
                    <img
                        className={bem.e("mark")}
                        src={this.props.type.mark}
                        alt={this.props.type + " mark"}
                    />
                    <span>{this.props.handle}</span>
                </a>
            </div>
        );
    }
}

// Networks that have logomarks internal to the component.
export const github: SocialNetwork = { network: "GitHub", mark: githubMark };
export const linkedin: SocialNetwork = {
    network: "LinkedIn",
    mark: linkedinMark
};

export default Social;
