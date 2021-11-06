import React from "react";

function AddPizza() {
  return (
    <div className="container p-lg-5">
      <div className="row">
        <div className="col-md-6">
          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Write Here"
            />
          </div>
        </div>
        <div className="col-md-6">
          {/* Category */}
          <div className="form-group">
            <label>Category</label>
            <select className="form-control">
              <option value="veg">Vegan</option>
              <option value="nonveg">No Vegan</option>
            </select>
          </div>
        </div>
      </div>

      {/* Prices */}
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label>Price Small Pizza</label>
            <input
              type="number"
              className="form-control"
              placeholder="Write Here"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Price Medium Pizza</label>
            <input
              type="number"
              className="form-control"
              placeholder="Write Here"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Price Large Pizza</label>
            <input
              type="number"
              className="form-control"
              placeholder="Write Here"
            />
          </div>
        </div>
      </div>

      {/* Image URL */}
      <div className="form-group">
        <label>Image URL</label>
        <input type="text" className="form-control" placeholder="Write Here" />
      </div>

      {/* Description */}
      <div className="form-group">
        <label>Pizza Description</label>
        <textarea className="form-control" rows="4" placeholder="Write Here" />
      </div>

      {/* Buttom */}
      <div className="text-right">
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddPizza;
