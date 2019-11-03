import React from "react";
import "./Header.scss";
import bemNames from "util/bemnames";

class HeaderProps {}
const bem = bemNames.create("Header");

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <div className={bem.b()}>
                <p className={bem.e("message")}>hello</p>
            </div>
        );
    }
}

export default Header;
