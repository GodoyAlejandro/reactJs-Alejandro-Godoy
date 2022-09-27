import DeleteIcon from "@mui/icons-material/Delete";
import { Button, CardActions, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import { Link } from "react-router-dom";

function Cart({ clear, removeItem, total, cartItem }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
      <Paper elevation={3} sx={{ width: "50rem" }}>
        <div
          style={{
            padding: "1rem",
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
        </div>
        {cartItem.map((item, index) => {
          return (
            <Paper
              elevation={6}
              key={index}
              style={{ display: "flex", margin: "1rem" }}
            >
              <img src={item.src} alt={item.tittle} style={{ width: "7rem" }} />
              <div style={{ padding: ".5rem", width: "40rem" }}>
                <Typography variant="h6" sx={{ fontSize: "2rem" }} gutterBottom>
                  {item.tittle}
                </Typography>
                <Typography variant="body1">
                  Quantity of the product: {item.quantity}
                </Typography>
                <Typography variant="body1">
                  price per product: ${item.price}
                </Typography>
                <Typography variant="body1">
                  subtotal price: ${item.price * item.quantity}
                </Typography>
              </div>
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
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: "1rem",
            height: "5rem",
          }}
        >
          {total === 0 ? (
            <Typography />
          ) : (
            <Typography variant="h4" sx={{ fontWeight: "500" }}>
              Total: ${total}
            </Typography>
          )}
          <Link to='/cart-form' style={{textDecoration:'none'}}>
            <Button variant="outlined" sx={{ margin: ".5rem" }}>
              Finish buy
            </Button>
          </Link>
        </CardActions>
      </Paper>
    </Box>
  );
}

export default Cart;
