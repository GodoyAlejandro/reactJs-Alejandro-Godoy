import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import React from "react";

const ItemCount = ({ contador, stock, setContador, addToCart }) => {
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => sumar()}
          variant="contained"
          sx={{ color: "white" }}
        >
          <AddIcon />
        </Button>
        <Typography
          variant="p"
          sx={{
            width: "2rem",
            margin: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {contador}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            restar();
          }}
        >
          <RemoveIcon />
        </Button>
      </CardActions>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => {
            addToCart();
          }}
        >
          add to cart
        </Button>
      </CardActions>
      <Typography variant="caption text">*stock disponible: {stock}</Typography>
    </div>
  );
};

export default ItemCount;
