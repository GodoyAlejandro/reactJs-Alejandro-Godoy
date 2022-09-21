import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function GoToCart() {
  return (
    <div>
      <p>este articulo esta en el carrito</p>
      <Button variant="contained">
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          go to cart
        </Link>
      </Button>
    </div>
  );
}

export default GoToCart;
