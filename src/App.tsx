import React from "react";
import Navigation from "./components/navigation/Navigation";
import wordmark from "brand/wordmark.png";
import Profile from "./components/profile/Profile";
import { Col, Container, Row } from "react-bootstrap";

const App: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Navigation wordmark={wordmark} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <Profile name={"Jack Mueller"} />
                </Col>
                <Col xs={12} md={8}></Col>
            </Row>
        </Container>
    );
};

export default App;
