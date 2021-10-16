import React from "react";
import { pizzas } from "../localPizzas";
import PizzaCard from "../components/PizzaCard";

function Home() {
  return (
    <div className="container text-center">
      <div className="row">
        {pizzas.map((pizza, ind) => (
          <div className="col-md-4" key={ind}>
            <PizzaCard pizza={pizza} />;
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
