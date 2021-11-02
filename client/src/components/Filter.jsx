import React, { useState } from "react";

function Filter({ filterSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("all");

  const handleSubmit = () => {
    filterSubmit({ name, category });
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
