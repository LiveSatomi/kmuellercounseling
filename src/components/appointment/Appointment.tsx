import React from "react";
import Navigation from "components/navigation/Navigation";
import wordmark from "brand/wordmark.png";
import profile from "brand/profile.png";
import Profile from "components/profile/Profile";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./_Appointment.scss";
import bemNames from "util/bemnames";
import { Formik } from "formik";
import FormField from "../FormField/FormField";

const bem = bemNames.create("Appointment");

type AppointmentProps = {};
const FORM_NAME = "name";
const FORM_EMAIL = "email";
const FORM_PHONE = "phone";
const FORM_MESSAGE: string = "message";
type FormFields = {
    name: string;
    email?: string;
    phone?: string;
    message?: string;
};
class Appointment extends React.Component<AppointmentProps> {
    formValues: FormFields = {
        [FORM_NAME]: "",
        [FORM_EMAIL]: "",
        [FORM_PHONE]: "",
        [FORM_MESSAGE]: "",
    };

    sendEmail(name: string, email?: string, phone?: string, message?: string) {
        console.log(
            "call api gateway:\nname: " + name,
            "\nemail: " + email + "\nmessage: " + message
        );
    }

    render() {
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
                    <Col className={bem.e("appointment")}>
                        <h2>Appointment Request</h2>
                        <p>
                            To schedule an individual, children, or family
                            therapy appointment or to obtain additional
                            information about any of these counseling services,
                            please fill out the form below or give me a call.
                        </p>
                        <Formik
                            initialValues={this.formValues}
                            validate={values => {
                                const errors: { [key: string]: string } = {};
                                if (!values.name) {
                                    errors[FORM_NAME] = "Required";
                                }
                                if (!values.email && !values.phone) {
                                    errors[FORM_EMAIL] =
                                        "Email or Phone is required";
                                    errors[FORM_PHONE] =
                                        "Email or Phone is required";
                                }
                                const maxMessageLength: number = 10000;
                                if (
                                    values.message === undefined
                                        ? 0
                                        : values.message.length >
                                          maxMessageLength
                                ) {
                                    errors[FORM_MESSAGE] =
                                        "Max message length is " +
                                        maxMessageLength +
                                        " characters";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                this.sendEmail(
                                    values.name,
                                    values.email,
                                    values.phone,
                                    values.message
                                );
                                setSubmitting(false);
                            }}
                        >
                            {formLibrary => (
                                <Form onSubmit={formLibrary.handleSubmit}>
                                    <FormField
                                        fieldName={FORM_NAME}
                                        fieldLabel={"Family or Individual Name"}
                                        formLibrary={formLibrary}
                                    />
                                    <FormField
                                        fieldName={FORM_EMAIL}
                                        fieldLabel={"Primary Email"}
                                        controlProps={{ type: "email" }}
                                        formLibrary={formLibrary}
                                    />
                                    <FormField
                                        fieldName={FORM_PHONE}
                                        fieldLabel={"Primary Phone"}
                                        controlProps={{ type: "phone" }}
                                        formLibrary={formLibrary}
                                    />
                                    <FormField
                                        fieldName={FORM_MESSAGE}
                                        fieldLabel={"Your Message"}
                                        controlProps={{
                                            as: "textarea",
                                            rows: 4,
                                        }}
                                        formLibrary={formLibrary}
                                    />

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={formLibrary.isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Appointment;
