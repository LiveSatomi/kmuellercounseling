import React, { ElementType } from "react";
import Navigation from "components/navigation/Navigation";
import wordmark from "brand/wordmark.png";
import profile from "brand/profile.png";
import Profile from "components/profile/Profile";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./_Appointment.scss";
import bemNames from "util/bemnames";
import { ErrorMessage, Field, FieldProps, Formik, useField } from "formik";

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
                        <Formik
                            initialValues={{
                                [FORM_NAME]: "",
                                [FORM_EMAIL]: "",
                                [FORM_PHONE]: "",
                                [FORM_MESSAGE]: "",
                            }}
                            validate={values => {
                                const errors: { [key: string]: string } = {};
                                if (!values[FORM_NAME]) {
                                    errors[FORM_NAME] = "Required";
                                }
                                if (
                                    !values[FORM_EMAIL] &&
                                    !values[FORM_PHONE]
                                ) {
                                    errors[FORM_EMAIL] =
                                        "Email or Phone is required";
                                    errors[FORM_PHONE] =
                                        "Email or Phone is required";
                                }
                                const maxMessageLength: number = 10000;
                                if (
                                    values[FORM_MESSAGE].length >
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
                                    <Field name={FORM_NAME}>
                                        {() => (
                                            <Form.Group
                                                className="mb-5"
                                                controlId={FORM_NAME}
                                            >
                                                <Form.Label>
                                                    Full Name
                                                </Form.Label>

                                                <ErrorMessage name={FORM_NAME}>
                                                    {message => (
                                                        <p>{message}</p>
                                                    )}
                                                </ErrorMessage>
                                                <Form.Control
                                                    autoComplete={"no"}
                                                    {...formLibrary.getFieldProps(
                                                        FORM_NAME
                                                    )}
                                                />
                                            </Form.Group>
                                        )}
                                    </Field>

                                    <Field name={FORM_EMAIL}>
                                        {() => (
                                            <Form.Group
                                                className="mb-3"
                                                controlId={FORM_EMAIL}
                                            >
                                                <Form.Label>Email</Form.Label>
                                                <ErrorMessage name={FORM_EMAIL}>
                                                    {message => (
                                                        <p>{message}</p>
                                                    )}
                                                </ErrorMessage>
                                                <Form.Control
                                                    {...formLibrary.getFieldProps(
                                                        FORM_EMAIL
                                                    )}
                                                />
                                            </Form.Group>
                                        )}
                                    </Field>

                                    <Field name={FORM_PHONE}>
                                        {() => (
                                            <Form.Group
                                                className="mb-3"
                                                controlId={FORM_PHONE}
                                            >
                                                <Form.Label>Phone</Form.Label>
                                                <ErrorMessage name={FORM_PHONE}>
                                                    {message => (
                                                        <p>{message}</p>
                                                    )}
                                                </ErrorMessage>
                                                <Form.Control
                                                    {...formLibrary.getFieldProps(
                                                        FORM_PHONE
                                                    )}
                                                />
                                            </Form.Group>
                                        )}
                                    </Field>

                                    <Field name={FORM_MESSAGE}>
                                        {() => (
                                            <Form.Group
                                                className="mb-3"
                                                controlId={FORM_MESSAGE}
                                            >
                                                <Form.Label>Message</Form.Label>
                                                <ErrorMessage
                                                    name={FORM_MESSAGE}
                                                >
                                                    {message => (
                                                        <p>{message}</p>
                                                    )}
                                                </ErrorMessage>
                                                <Form.Control
                                                    {...formLibrary.getFieldProps(
                                                        FORM_MESSAGE
                                                    )}
                                                    as={"textarea"}
                                                    rows={4}
                                                />
                                            </Form.Group>
                                        )}
                                    </Field>

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
