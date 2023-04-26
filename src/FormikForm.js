import { Form, Formik, Field } from "formik";
import React from "react";

import { object, string } from "yup";
import { verifyId, verifyURL } from "./validations";

const validation = object({
  id: verifyId,
  url: verifyURL.when("id", {
    is: "Novum",
    then: (schema) => schema.required("URL is mandartory when ID is Novum"),
  }),
  isNovum: string().when("id", {
    is: "Novum",
    then: (schema) => schema.required("isNovum is required"),
  }),
});

const initialValues = {
  id: "",
  url: "",
  isNovum: "",
};

const onSubmit = () => alert("submit!");

const FormikForm = (props) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validation}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
            {console.log(values)}
            <div>ID:</div>
            <Field name="id" />
            {errors.id && touched.id && <div>id errors: {errors.id}</div>}
            <div>URL:</div>
            <Field name="url" />
            {errors.url && touched.url && <div>url errors: {errors.url}</div>}
            {values.id === "Novum" && (
              <>
                <div>Is novum:</div>
                <Field name="isNovum" />
              </>
            )}
            {errors.isNovum && touched.isNovum && (
              <div>isNovum errors: {errors.isNovum}</div>
            )}
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
