import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const initialAdressValues = {
  shippingAddress1: "",
  shippingAddress2: "",
  city: "",
  country: "",
  phone: "",
};

export const adressSchema = yup.object({
  shippingAddress1: yup.string().trim().required("Required"),
  shippingAddress2: yup.string().trim().required("Required"),
  city: yup.string().trim().required("Required"),
  country: yup.string().trim().required("Required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
});
