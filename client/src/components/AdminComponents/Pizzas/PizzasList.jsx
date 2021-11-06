import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getPizzasList } from "../../../redux/actions/pizzas.actions";
// Components
import { Loader, Message } from "../../../containers";

function PizzasList({ history }) {
  const dispatch = useDispatch();

  // User Login Selector
  const { user_login } = useSelector((state) => state.users.login);

  // Pizza List Selector
  const {
    loading: loadingList,
    error: errorList,
    pizzas,
  } = useSelector((state) => state.pizzas.list);

  console.log("OK", pizzas);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    } else {
      dispatch(getPizzasList());
    }
  }, [dispatch, user_login, history]);

  return (
    <div className="container text-center">
      {loadingList ? (
        <Loader />
      ) : errorList ? (
        <Message message={errorList} type="error" />
      ) : (
        pizzas && (
          <React.Fragment>
            <div>okok</div>
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default PizzasList;
