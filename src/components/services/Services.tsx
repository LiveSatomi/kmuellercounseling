import React from "react";
import Navigation from "components/navigation/Navigation";
import wordmark from "brand/wordmark.png";
import profile from "brand/profile.png";
import Profile from "components/profile/Profile";
import { Col, Container, Row } from "react-bootstrap";
import "./_Services.scss";
import bemNames from "util/bemnames";

const bem = bemNames.create("Services");

const Services: React.FC = () => {
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
                <Col className={bem.e("line")}>
                    <h2>Services & Rates</h2>
                    <p>Providing individual, couples and family counseling.</p>

                    <p>Treatment specialization includes:</p>

                    <ul>
                        <li>Therapy for Depression and Anxiety</li>
                        <li>Addiction & Recovery</li>
                        <li>Trauma Therapy</li>
                        <li>Parenting Support</li>
                        <li>Grief Counseling</li>
                        <li>Work and Career issues</li>
                        <li>Stress Management</li>
                    </ul>
                    <p>
                        I work with a wide range of emotional and behavioral
                        issues providing services ranging from depression and
                        anxiety counseling to addiction and recovery to couples
                        counseling and beyond. In a comfortable and supportive
                        atmosphere, I offer a highly personalized approach
                        tailored to your individual needs to help attain your
                        personal growth potential.
                    </p>
                    <h3>Rates</h3>
                    <p>$150 per 50-minute session</p>

                    <h3>Insurance</h3>

                    <p>
                        Services may be covered in full or in part by your
                        health insurance or employee benefit plan. Please check
                        your coverage carefully by asking the following
                        questions:
                    </p>
                    <ul>
                        <li>Do I have mental health insurance benefits?</li>
                        <li>What is my deductible and has it been met?</li>
                        <li>
                            How many sessions per year does my health insurance
                            cover?
                        </li>
                        <li>
                            What is the coverage amount per therapy session?
                        </li>
                        <li>
                            Is approval required from my primary care physician?
                        </li>
                    </ul>
                    <h3>Payment</h3>
                    <p>Cash, check and Visa/Mastercard accepted.</p>
                    <h3>Cancellation Policy</h3>
                    <p>
                        If you do not show up for your scheduled therapy
                        appointment, and you have not notified us at least 24
                        hours in advance, you will be required to pay $80.00 for
                        the missed session.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;
