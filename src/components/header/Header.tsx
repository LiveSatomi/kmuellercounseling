import React from "react";
import "./Header.scss";
import bemNames from "util/bemnames";
import { Nav, Navbar } from "react-bootstrap";

type HeaderProps = {
    wordmark: string;
};

const bem = bemNames.create("Header");

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <Navbar>
                <Navbar.Brand href="/">
                    <img
                        className={bem.e("wordmark")}
                        alt={"JM"}
                        src={this.props.wordmark}
                    />
                </Navbar.Brand>

                <Nav>
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
