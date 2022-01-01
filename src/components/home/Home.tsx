import React from "react";
import Navigation from "components/navigation/Navigation";
import wordmark from "brand/wordmark.png";
import profile from "brand/profile.png";
import Profile from "components/profile/Profile";
import { Col, Container, Row } from "react-bootstrap";
import Personal from "components/personal/Personal";
import "./_Home.scss";
import bemNames from "util/bemnames";

const bem = bemNames.create("Home");

const Home: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Navigation wordmark={wordmark} />
                </Col>
            </Row>
            <Row className={bem.e("content")}>
                <Col className={bem.e("profile")}>
                    <Profile name={"Kathleen Mueller"} picture={profile} />
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

export default Home;
