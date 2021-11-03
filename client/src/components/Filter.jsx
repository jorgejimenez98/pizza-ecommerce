import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Filter() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name || category) {
      history.push(`/home/?keyword=${name}&category=${category}`);
    } else {
      // Volver a la pagina original en q se encuentra el usuario
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <div className="container mb-3">
      <div className="row justify-content-center p-3 shadow-lg rounded mt-2">
        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Pizza"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="veg">Veg</option>
              <option value="noveg">No Veg</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <button className="btn btn-success w-100" onClick={handleSubmit}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
