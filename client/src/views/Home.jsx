import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getPizzasList } from "../redux/actions/pizzas.actions";
// Components
import { Filter, PizzaCard } from "../components";
import { Loader, Message } from "../containers";

function Home() {
  const dispatch = useDispatch();

  const {
    loading: loadingList,
    error: errorList,
    pizzas,
  } = useSelector((state) => state.pizzas.list);

  useEffect(() => {
    dispatch(getPizzasList());
  }, [dispatch]);

  const filterSubmit = (values) => {
    console.log(values.name, values.category, "OKOK");
  };

  return (
    <div className="container text-center">
      {loadingList ? (
        <Loader />
      ) : errorList ? (
        <Message message={errorList} type="error" />
      ) : (
        pizzas && (
          <React.Fragment>
            <Filter filterSubmit={filterSubmit} />
            <div className="row">
              {pizzas.map((pizza, ind) => (
                <div className="col-md-4" key={ind}>
                  <PizzaCard pizza={pizza} />;
                </div>
              ))}
            </div>
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default Home;
