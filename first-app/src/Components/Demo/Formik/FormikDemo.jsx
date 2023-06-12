import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function FormikDemo() {
  const validateHandler = (values) => {
    let errors = {};

    if (values.email.trim() === "") {
      errors.email = "Email is Required.";
    } else if (!values.email.includes("@")) {
      errors.email = "Email should be in proper format";
    } else if (values.username.trim() === "") {
      errors.username = "Username is required Field.";
    }

    return errors;
  };

  const submitHandler = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("VALUES : ", values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={{ email: "test@test", username: "" }}
      onSubmit={submitHandler}
      validate={validateHandler}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="email" placeholder="enter email" type="text" />
          <br />
          <ErrorMessage name="email" component="div" />

          <br />

          <Field name="username" placeholder="enter username" type="text" />
          <br />
          <ErrorMessage name="username" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
