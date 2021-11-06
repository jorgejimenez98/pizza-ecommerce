import * as yup from "yup";

export const initialPizzaValues = {
  name: "",
  category: "veg",
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
    .required("Price Small is required"),
  priceMedium: yup
    .number()
    .positive("Price Medium must be positive")
    .required("Price Medium  is required"),
  priceLarge: yup
    .number()
    .positive("Price Large must be positive")
    .required("Price Large  is required"),
  imageUrl: yup.string().trim().required("Image Url is required"),
  description: yup.string().trim().required("Description is required"),
});
