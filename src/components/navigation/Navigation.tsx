import React from "react";
import "./_Navigation.scss";
import bemNames from "util/bemnames";
import { Nav, Navbar } from "react-bootstrap";

type NavigationProps = {
    wordmark: string;
};

const bem = bemNames.create("Navigation");

class Navigation extends React.Component<NavigationProps> {
    render() {
        return (
            <Navbar className={bem.b()} variant={"light"}>
                <Navbar.Brand href="/">
                    <img
                        className={bem.e("wordmark")}
                        alt={"JM"}
                        src={this.props.wordmark}
                    />
                </Navbar.Brand>
                <Nav className={bem.e("navlist")}>
                    <Nav.Link className={bem.e("name")} href="/">
                        Jack
                    </Nav.Link>
                    <Nav.Link className={bem.e("about")} href="/">
                        About
                    </Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
