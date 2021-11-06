import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getPizzaDetails } from "../../../redux/actions/pizzas.actions";
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

function EditPizza({ history, match }) {
  const dispatch = useDispatch();
  const pizzaId = match.params.pizzaId;

  // User Login Selector
  const { user_login } = useSelector((state) => state.users.login);

  // Pizza Details Selector
  const { loading, error, pizza } = useSelector(
    (state) => state.pizzas.details
  );

  // Initialize the formik values
  initialPizzaValues.name = pizza?.name;
  initialPizzaValues.category = pizza?.category;
  initialPizzaValues.priceSmall = pizza?.prices[0].small;
  initialPizzaValues.priceMedium = pizza?.prices[0].medium;
  initialPizzaValues.priceLarge = pizza?.prices[0].large;
  initialPizzaValues.imageUrl = pizza?.image;
  initialPizzaValues.description = pizza?.description;

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    } else {
      if (pizzaId) {
        dispatch(getPizzaDetails(pizzaId));
      }
    }
    // Clear State
    return () => {
      dispatch({ type: PizzaActionTypes.ADD.RESET });
    };
  }, [user_login, history, dispatch, pizzaId]);

  const formik = useFormik({
    initialValues: initialPizzaValues,
    validationSchema: pizzaSchema,
    onSubmit: (values) => {
      console.log("EDit", values);
    },
  });

  return (
    <div className="container p-lg-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
      ) : (
        pizza && (
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
                Edit
              </button>
            </div>
          </form>
        )
      )}
    </div>
  );
}

export default EditPizza;
