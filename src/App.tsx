import React from "react";
import Navigation from "./components/navigation/Navigation";
import wordmark from "brand/wordmark.png";
import profile from "brand/profile.png";
import Profile from "./components/profile/Profile";
import { Col, Container, Row } from "react-bootstrap";
import Personal from "./components/personal/Personal";
import "App.scss";
import bemNames from "./util/bemnames";

const bem = bemNames.create("App");

const App: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Navigation wordmark={wordmark} />
                </Col>
            </Row>
            <Row className={bem.e("content")}>
                <Col className={bem.e("profile")}>
                    <Profile name={"Jack Mueller"} picture={profile} />
                </Col>
                <Col className={bem.e("personal")}>
                    <Personal
                        seekingEmploymentSince={new Date()}
                        employer={"Kapsch TrafficCom"}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
