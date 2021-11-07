import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getPizzaDetails,
  editPizza,
} from "../../../redux/actions/pizzas.actions";
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

  // EDIT Pizza Selector
  const {
    loading: loadingEdit,
    error: errorEdit,
    success,
  } = useSelector((state) => state.pizzas.edit);

  // Initialize the formik values
  initialPizzaValues.name = pizza?.name;
  initialPizzaValues.category = pizza?.category;
  initialPizzaValues.priceSmall = pizza?.prices ? pizza?.prices[0].small : 0;
  initialPizzaValues.priceMedium = pizza?.prices ? pizza?.prices[0].medium : 0;
  initialPizzaValues.priceLarge = pizza?.prices ? pizza?.prices[0].large : 0;
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

      if (success) {
        const message = "Pizza Updated Successfully";
        dispatch(setSnackbar(true, "success", message));
        dispatch({ type: PizzaActionTypes.EDIT.RESET });
        history.push("/admin/panel/pizzas/list");
      }
    }
    // Clear State
    return () => {
      dispatch({ type: PizzaActionTypes.EDIT.RESET });
    };
  }, [user_login, history, dispatch, pizzaId, success]);

  const formik = useFormik({
    initialValues: initialPizzaValues,
    validationSchema: pizzaSchema,
    onSubmit: (values) => {
      dispatch(editPizza(pizzaId, values));
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
            {errorEdit && <Message type="error" message={errorEdit} />}
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
              {loadingEdit && <Loader />}
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
