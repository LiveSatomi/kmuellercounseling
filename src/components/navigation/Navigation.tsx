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
            <Navbar expand={"lg"} className={bem.b()} variant={"light"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={bem.e("navlist")}>
                        <Nav.Link className={bem.e("about")} href="index.html">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            className={bem.e("services")}
                            href="/services"
                        >
                            Service & Rates
                        </Nav.Link>
                        <Nav.Link
                            className={bem.e("appointment")}
                            href="/appointment"
                        >
                            Make Appointment
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
