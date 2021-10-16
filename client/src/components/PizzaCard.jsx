import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Row, Col } from "react-bootstrap";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ImageModal from "./ImageModal";

export default function PizzaCard({ pizza }) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [openImage, setopenImage] = useState(false);

  const handleClose = () => {
    setopenImage(false);
  };

  return (
    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
      <h6 className="mt-3">{pizza.name}</h6>

      <ImageModal
        pizza={pizza}
        open={openImage}
        handleClose={handleClose}
      />

      {/* Pizza Image */}
      <img
        src={pizza.image}
        alt="pizza"
        className="img-fluid pointer"
        style={{ height: "200px", with: "200px" }}
        onClick={() => setopenImage(true)}
      />

      <CardContent>
        {/* CONTENT */}
        <Row>
          <Col md="6" sm="12">
            <h6 className="mt-3">Varients:</h6>

            <FormControl fullWidth>
              <Select
                label=""
                value={varient}
                onChange={(e) => setVarient(e.target.value)}
              >
                {pizza.varients.map((vari, ind) => (
                  <MenuItem key={ind} value={vari}>
                    {vari}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>

          <Col md="6" sm="12">
            <h6 className="mt-3">Quantity:</h6>

            <FormControl fullWidth>
              <Select
                label=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(10).keys()].map((x, i) => (
                  <MenuItem value={i + 1} key={i}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>
        </Row>
      </CardContent>

      <CardActions>
        {/* FOOTER */}
        <Row className="w-100">
          <Col md="6" sm="12">
            <h6>Price: {pizza.prices[0][varient] * quantity} cup</h6>
          </Col>
          <Col md="6" sm="12">
            <div className="text-center">
              <Button variant="contained" color="success">
                ADD
              </Button>
            </div>
          </Col>
        </Row>
      </CardActions>
    </Card>
  );
}
