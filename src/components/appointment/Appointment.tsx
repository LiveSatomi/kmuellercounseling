import React from "react";
import Navigation from "components/navigation/Navigation";
import wordmark from "brand/wordmark.png";
import profile from "brand/profile.png";
import Profile from "components/profile/Profile";
import { Col, Container, Row } from "react-bootstrap";
import "./_Appointment.scss";
import bemNames from "util/bemnames";

const bem = bemNames.create("Appointment");

const Appointment: React.FC = () => {
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
                <Col className={bem.e("about")}>
                    <p>
                        Today you are one step closer to a new you where you
                        feela empowered and on a positive path to growth and
                        well-being. As a therapist with a client centered and
                        strength based approach, my goal is to help you uncover
                        your true potential and lead a life that is worth
                        celebrating. While we can't change difficult situations
                        of the past, we can work together to better understand
                        and resolve challenges in your life. By applying
                        complementary therapy approaches and techniques, we will
                        unearth long-standing behavior patterns or negative
                        perceptions that may be holding you back from
                        experiencing a more fulfilling and meaningful life. If
                        you're looking for extra support and guidance through a
                        challenging situation or you're just ready to move in a
                        new direction in your life, I look forward to working
                        with you to achieve your goals. Please call or email me
                        for an individual, couples or family therapy
                        consultation today.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Appointment;
