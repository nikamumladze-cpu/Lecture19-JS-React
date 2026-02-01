import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Min 3 characters")
    .max(15, "Max 15 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min 8 characters")
    .matches(/\d/, "Must contain at least one number"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
