import * as yup from "yup";

export const initialRegisterValues = {
  name: "",
  email: "",
  newPassword: "",
  confirmPassword: "",
};

export const registerSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .trim()
    .email("Write a valid email. Ex: name@email.com")
    .required("Email is required"),
  newPassword: yup
    .string()
    .matches(/^(\S+$)/, "Password must not have white spaces")
    .matches(/[0-9]/, "Password mast have at least a number")
    .matches(/[a-z]/, "Password mast have at least a lowercase letter")
    .matches(/[A-Z]/, "Password mast have at least a uppercase letter")
    .min(6, "Password mast have at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("newPassword"), null], "Passwords do not match")
    .required("Comfirm Password is required"),
});
