import React from "react";
import Navigation from "components/navigation/Navigation";
import "./Projects.scss";
import bemNames from "util/bemnames";
import { Col, Container, Row } from "react-bootstrap";
import wordmark from "../../brand/wordmark.png";

const bem = bemNames.create("Projects");

const Projects: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Navigation wordmark={wordmark} />
                </Col>
            </Row>
            <Row className={bem.e("content")}>
                <Col>
                    <h2>Coming Soon!</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;
