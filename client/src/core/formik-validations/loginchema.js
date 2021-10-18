import * as yup from "yup";

export const initialLoginValues = {
  email: "",
  password: "",
};

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Write a valid email. Ex: name@email.com")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
