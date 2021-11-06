import * as yup from "yup";

export const initialPizzaValues = {
  name: "",
  category: "",
  priceSmall: "",
  priceMedium: "",
  priceLarge: "",
  imageUrl: "",
  description: "",
};

export const pizzaSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  category: yup.string().trim().required("Category is required"),
  priceSmall: yup
    .number()
    .positive("Price Small must be positive")
    .min(1, "Price Small Cannot be 0")
    .required("Price Small is required"),
  priceMedium: yup
    .number()
    .positive("Price Medium must be positive")
    .min(1, "Price Medium Cannot be 0")
    .required("Price Medium  is required"),
  priceLarge: yup
    .number()
    .positive("Price Large must be positive")
    .min(1, "Price Large Cannot be 0")
    .required("Price Large  is required"),
  imageUrl: yup
    .string()
    .trim()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct image url!"
    )
    .required("Image Url is required"),
  description: yup.string().trim().required("Description is required"),
});
