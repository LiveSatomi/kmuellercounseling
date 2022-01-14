import React from "react";
import { Form } from "react-bootstrap";
import "../appointment/_Appointment.scss";
import bemNames from "util/bemnames";
import { ErrorMessage, Field } from "formik";
import { FormikValues } from "formik/dist/types";
import { FormControlProps } from "react-bootstrap/FormControl";

const bem = bemNames.create("FormField");

type FormFieldProps = {
    fieldName: string;
    fieldLabel: string;
    controlProps?: (
        | React.InputHTMLAttributes<HTMLInputElement>
        | React.TextareaHTMLAttributes<HTMLTextAreaElement>) &
        FormControlProps;
    formLibrary: FormikValues;
};
class FormField extends React.Component<FormFieldProps> {
    render() {
        return (
            <Field name={this.props.fieldName}>
                {() => (
                    <Form.Group
                        className="mb-3"
                        controlId={this.props.fieldName}
                    >
                        <Form.Label>{this.props.fieldLabel}</Form.Label>

                        <ErrorMessage name={this.props.fieldName}>
                            {message => <p>{message}</p>}
                        </ErrorMessage>
                        <Form.Control
                            {...this.props.controlProps}
                            {...this.props.formLibrary.getFieldProps(
                                this.props.fieldName
                            )}
                        />
                    </Form.Group>
                )}
            </Field>
        );
    }
}

export default FormField;
