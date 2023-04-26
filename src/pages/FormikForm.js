import { Form, Formik, Field } from "formik";
import React from "react";

import { object, string, boolean } from "yup";
import { verifyId, verifyURL } from "../validations";
import Checkbox from "../components/inputs/Checkbox";
import { TextField } from "@telefonica/mistica";

const validation = object({
  id: verifyId,
  isNovum: boolean(),
  url: verifyURL.when("isNovum", {
    is: true,
    then: (schema) => schema.required("URL is mandartory when ID is Novum"),
  }),
  novumPreferences: string().when("isNovum", {
    is: true,
    then: (schema) => schema.required("Preferences is required"),
  }),
});

const initialValues = {
  id: "",
  isNovum: false,
  url: "",
  novumPreferences: "",
};

const onSubmit = () => alert("submit!");

const FormikForm = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validation}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexDirection: "column",
              margin: 20,
              maxWidth: 500,
            }}
          >
            {console.log(values)}
            <Field name="id" label="ID:" component={TextField}/>
            {errors.id && touched.id && (
              <div style={{ color: "red" }}>{errors.id}</div>
            )}
            <Checkbox name="isNovum" label="is novum?" />
            {errors.isNovum && touched.isNovum && (
              <div style={{ color: "red" }}>{errors.isNovum}</div>
            )}
            <div>URL:</div>
            <Field name="url" />
            {errors.url && touched.url && (
              <div style={{ color: "red" }}>{errors.url}</div>
            )}
            {!!values.isNovum && (
              <>
                <div>Novum preferences:</div>
                <Field name="novumPreferences" />
              </>
            )}
            {errors.novumPreferences && touched.novumPreferences && (
              <div style={{ color: "red" }}>{errors.novumPreferences}</div>
            )}
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
