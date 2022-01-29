import React from "react";
import { Form } from "react-bootstrap";
import "./_FormField.scss";
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
    /** These fields must also be touched before the error message is shown */
    groupedFields?: string[];
};
class FormField extends React.Component<FormFieldProps> {
    render() {
        return (
            <Field name={this.props.fieldName}>
                {() => (
                    <Form.Group
                        className={bem.e("field")}
                        controlId={this.props.fieldName}
                    >
                        <Form.Label className={bem.e("label")}>
                            {this.props.fieldLabel}
                        </Form.Label>
                        {this.props.groupedFields === undefined ||
                        this.props.groupedFields.every(
                            (groupedField: string) =>
                                this.props.formLibrary.touched[groupedField]
                        ) ? (
                            <ErrorMessage name={this.props.fieldName}>
                                {message => (
                                    <p className={bem.e("error")}>{message}</p>
                                )}
                            </ErrorMessage>
                        ) : null}
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
