import DeleteIcon from "@mui/icons-material/Delete";
import { Button, CardActions, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import { Link } from "react-router-dom";

function Cart({ clear, removeItem, total, cartItem }) {
  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: ".5rem",
        }}
      >
        <Paper
          elevation={3}
          sx={{ width: { xs: "100%", sm: "50rem" } }}
        >
          <Box
            sx={{
              padding: ".5rem",
              height: "3rem",
              display: "flex",
              justifyContent: "space-between",
              alingItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              Products in the cart:
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ height: "2rem", width: "2rem" }}
              onClick={() => {
                clear();
              }}
            >
              <DeleteIcon />
            </Button>
          </Box>
          {cartItem.map((item, index) => {
            return (
              <Paper
                elevation={6}
                key={index}
                sx={{ display: "flex", margin: "1rem" }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.tittle}
                  sx={{ width: "7rem" }}
                />
                <Box sx={{ padding: ".5rem", width: "100%" }}>
                  <Typography
                    variant='h6'
                    sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                  >
                    {item.tittle}
                  </Typography>
                  <Typography variant="body1">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body1">
                    price per product: ${item.price}
                  </Typography>
                  <Typography variant="body1">
                    subtotal price: ${item.price * item.quantity}
                  </Typography>
                </Box>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alingItems: "center",
                    width: "4rem",
                  }}
                >
                  <Button
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </CardActions>
              </Paper>
            );
          })}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: ".5rem",
              height: "5rem",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "500" }}>
              Total: ${total}
            </Typography>

            <Link to="/cart-form" style={{ textDecoration: "none" }}>
              <Button variant="outlined" sx={{ margin: ".5rem" }}>
                Finish buy
              </Button>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Cart;
