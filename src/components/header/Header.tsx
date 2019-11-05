import React from "react";
import "./Header.scss";
import bemNames from "util/bemnames";

type HeaderProps = {
    wordmark: string;
};

const bem = bemNames.create("Header");

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <div className={bem.b()}>
                <img
                    className={bem.e("message")}
                    alt={"JM"}
                    src={this.props.wordmark}
                />
            </div>
        );
    }
}

export default Header;
