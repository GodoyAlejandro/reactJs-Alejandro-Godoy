import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <Container>
      <Typography variant="h1" fontSize="3rem" fontWeight="400">
        your cart is empty, if you want to purchase something for our store
        please go back to the home page and select at least one movie
      </Typography>
      <Button variant="contained">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </Button>
    </Container>
  );
}

export default CartEmpty;
