import React from "react";
import "./Personal.scss";
import bemNames from "util/bemnames";

type PersonalProps = {
    seekingEmploymentSince?: Date;
    employer?: string;
};

const bem = bemNames.create("Personal");

class Personal extends React.Component<PersonalProps> {
    static defaultProps = {
        seekingEmploymentSince: null,
        employer: null
    };

    render() {
        return (
            <div className={bem.b()}>
                <p className={bem.e("line")}>
                    I'm a software developer from Lawrenceville just outside of
                    Atlanta, Georgia.
                </p>

                <p className={bem.e("line")}>
                    I graduated from Georgia Tech with a B.S. in Computer
                    Science in 2017, and have been writing software since then.
                </p>

                <p className={bem.e("line")}>
                    I'm fluent in Java, but experienced in other languages and
                    all parts of the software stack. I have the fundamentals to
                    work in any language.
                </p>

                <p className={bem.e("line")}>
                    I pride myself on doing things the 'right' way, and making
                    sure I understand the implications of how I'm building
                    something while I build it.
                </p>

                {this.getEmploymentLine()}
            </div>
        );
    }

    getEmploymentLine() {
        if (this.props.seekingEmploymentSince == null) {
            return (
                <p>
                    {this.getEmployerPhrase() == null
                        ? ""
                        : this.getEmployerPhrase() + " "}{" "}
                    Check out my resume, or projects hosted here and on GitHub.
                </p>
            );
        } else {
            return (
                <p>
                    I'm seeking employment since{" "}
                    {this.props.seekingEmploymentSince.toLocaleDateString()}.
                    Check out my resume or GitHub, or send me an email.
                </p>
            );
        }
    }

    getEmployerPhrase() {
        if (this.props.employer == null) {
            return null;
        } else {
            return "I'm currently employed at " + this.props.employer + ".";
        }
    }
}

export default Personal;
