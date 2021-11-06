import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { addPizza } from "../../../redux/actions/pizzas.actions";
import { setSnackbar } from "../../../redux/actions/snackbar.actions";
import { PizzaActionTypes } from "../../../redux/types/pizzas.types";
import { Loader, Message } from "../../../containers";
// Form Control Components
import {
  NameFormControl,
  CategoryFormControl,
  PriceFormControl,
  ImageurlFormControl,
  DescriptionFormControl,
} from "../../../core/form-controls";
// Formik
import { useFormik } from "formik";
import {
  initialPizzaValues,
  pizzaSchema,
} from "../../../core/formik-validations";

function AddPizza({ history }) {
  const dispatch = useDispatch();
  // User Login Selector
  const { user_login } = useSelector((state) => state.users.login);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    }
    // Clear State
    return () => {
      dispatch({ type: PizzaActionTypes.ADD.RESET });
    };
  }, [user_login, history, dispatch]);

  const formik = useFormik({
    initialValues: initialPizzaValues,
    validationSchema: pizzaSchema,
    onSubmit: (values) => {
      console.log("AAAA", values);
    },
  });

  return (
    <div className="container p-lg-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            {/* Name */}
            <NameFormControl formik={formik} />
          </div>
          <div className="col-md-6">
            {/* Category */}
            <CategoryFormControl formik={formik} />
          </div>
        </div>

        {/* Prices */}
        <div className="row">
          <div className="col-md-4">
            <PriceFormControl
              name={"priceSmall"}
              value={formik.values.priceSmall}
              onChange={formik.handleChange}
              touched={formik.touched.priceSmall}
              errors={formik.errors.priceSmall}
            />
          </div>
          <div className="col-md-4">
            <PriceFormControl
              name={"priceMedium"}
              value={formik.values.priceMedium}
              onChange={formik.handleChange}
              touched={formik.touched.priceMedium}
              errors={formik.errors.priceMedium}
            />
          </div>
          <div className="col-md-4">
            <PriceFormControl
              name={"priceLarge"}
              value={formik.values.priceLarge}
              onChange={formik.handleChange}
              touched={formik.touched.priceLarge}
              errors={formik.errors.priceLarge}
            />
          </div>
        </div>

        {/* Image URL */}
        <ImageurlFormControl formik={formik} />

        {/* Description */}
        <DescriptionFormControl formik={formik} />

        {/* Buttom */}
        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPizza;
