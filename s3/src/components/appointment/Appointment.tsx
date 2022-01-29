import React from "react";
import Navigation from "components/navigation/Navigation";
import wordmark from "brand/wordmark.png";
import profile from "brand/profile.png";
import Profile from "components/profile/Profile";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./_Appointment.scss";
import bemNames from "util/bemnames";
import { Formik, FormikValues } from "formik";
import FormField from "../FormField/FormField";

const bem = bemNames.create("Appointment");

type AppointmentProps = {};

type AppointmentState = {
    successfullySubmitted: boolean;
};
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
class Appointment extends React.Component<AppointmentProps, AppointmentState> {
    constructor(props: AppointmentProps) {
        super(props);
        this.state = { successfullySubmitted: false };
    }

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
        this.setState({ successfullySubmitted: true });
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
                        <h2 className={bem.e("heading")}>
                            Appointment Request
                        </h2>
                        <p className={bem.e("line")}>
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
                                if (
                                    values.email &&
                                    !values.email.includes("@")
                                ) {
                                    errors[FORM_EMAIL] =
                                        "Incorrect email format";
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
                            {(formLibrary:FormikValues) => (
                                <Form
                                    className={bem.e("form")}
                                    onSubmit={formLibrary.handleSubmit}
                                >
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
                                        groupedFields={[FORM_PHONE]}
                                    />
                                    <FormField
                                        fieldName={FORM_PHONE}
                                        fieldLabel={"Primary Phone"}
                                        controlProps={{ type: "tel" }}
                                        formLibrary={formLibrary}
                                        groupedFields={[FORM_EMAIL]}
                                    />
                                    <FormField
                                        fieldName={FORM_MESSAGE}
                                        fieldLabel={"Your Message"}
                                        controlProps={{
                                            as: "textarea",
                                            rows: 3,
                                        }}
                                        formLibrary={formLibrary}
                                    />

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={
                                            this.state.successfullySubmitted
                                        }
                                        className={
                                            this.state.successfullySubmitted
                                                ? bem.em("button", "submitted")
                                                : bem.em("button", "pending")
                                        }
                                    >
                                        {this.state.successfullySubmitted
                                            ? "Success"
                                            : "Submit"}
                                    </Button>
                                </Form>
                            )}
                        </Formik>

                        {/*<p className={bem.e("line")}>*/}
                        {/*    Current clients can use the client portal to*/}
                        {/*    schedule an appointment online.*/}
                        {/*</p>*/}
                        {/*<h3>*/}
                        {/*    <a href={""}>Client Portal</a>*/}
                        {/*</h3>*/}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Appointment;
