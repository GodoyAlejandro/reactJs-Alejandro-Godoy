/* eslint-disable react-hooks/exhaustive-deps */
import { Divider, Grid, Paper } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../cartContext/CartContext";
import ItemCountContainer from "./itemCount/ItemCountContainer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ItemDetail({ product }) {
  const [contador, setContador] = useState(1);
  const [alert, setAlert] = useState(false);
  const { id, tittle, price, description, src, stock } = product;
  const { addItem } = useContext(CartContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(false);
  };

  const addToCart = () => {
    setAlert(true);
    let item = {
      id,
      tittle,
      stock,
      src,
      price,
      quantity: contador,
    };
    addItem(item);
  };
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src={src}
          alt={tittle}
          sx={{ width: "20rem", alignSelf: "center" }}
        />
        <Divider />
        <Typography variant="h2" fontWeight="500">
          {tittle}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" align="left" fontSize="1.5rem">
          price: ${price}
        </Typography>
        <Box>
          <ItemCountContainer
            stock={stock}
            contador={contador}
            setContador={setContador}
            addToCart={addToCart}
          />
          <Snackbar
            open={alert}
            autoHideDuration={10000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            onClose={handleClose}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Item succesfully added to the cart
            </Alert>
          </Snackbar>
        </Box>
        <Divider variant="middle" />
        <Typography variant="h4">Description</Typography>
        <Typography variant="h6" fontWeight="100">
          {description}
        </Typography>
      </Box>
      <Paper elevation={2} sx={{ display: { xs: "none", md: "flex" } }}>
        <Grid container spacing={2}>
          <Grid item md={7} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={src}
              alt={tittle}
              sx={{ width: "25rem" }}
            />
          </Grid>
          <Grid item md={5}>
            <Typography variant="h2" fontWeight="500">
              {tittle}
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" align="left" fontSize="1.5rem">
              price: ${price}
            </Typography>
            <Box>
              <ItemCountContainer
                stock={stock}
                contador={contador}
                setContador={setContador}
                addToCart={addToCart}
              />
              <Snackbar
                open={alert}
                autoHideDuration={10000}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                onClose={handleClose}
              >
                <Alert severity="success" sx={{ width: "100%" }}>
                  Item succesfully added to the cart
                </Alert>
              </Snackbar>
            </Box>
            <Divider variant="middle" />
            <Typography variant="h4">Description</Typography>
            <Typography variant="h6" fontWeight="100">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ItemDetail;
