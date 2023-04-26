import { string } from "yup";

export const verifyId = string()
  .matches(/^[0-9a-zA-Z-]*$/, "Wrong chars")
  .required("Is required");

export const verifyURL = string().test(
  "invalid-url",
  "Javascript URLs are not supported",
  (value) => !value?.includes("javascript")
);