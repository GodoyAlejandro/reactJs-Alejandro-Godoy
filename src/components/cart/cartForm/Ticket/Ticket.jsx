import {
  Button,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Ticket = ({ ticketView }) => {
  const { buyer, id, date, total, items } = ticketView;
  const { name, tel, email } = buyer;

  return (
    <Container sx={{ height: "100vh" }}>
      <Box
        sx={{
          margin: "1rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Paper elevation={3} sx={{ width: "30rem" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: "2rem", padding: ".5rem", textAlign: "center" }}
          >
            Ticket
          </Typography>
          <Divider variant="middle" textAlign="left">
            <Chip label={date}/>
          </Divider>
          <CardContent>
            <Grid
              item
              columnSpacing={2}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography variant="subtitle1">Purchase ID: {id}</Typography>
              <Typography variant="subtitle1">Name: {name}</Typography>
              <Typography variant="subtitle1">Phone Number: {tel}</Typography>
              <Typography variant="subtitle1">Email: {email}</Typography>
            </Grid>
          </CardContent>
          <Divider variant="middle" textAlign="left">
          <Chip label='items' />
          </Divider>
          <CardContent>
            <Grid
              item
              columnSpacing={2}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {items.map((i, index) => {
                return (
                  <Typography key={index} variant="subtitle1">
                    -{i.tittle} x {i.quantity} copy{i.quantity > 1 && "'s"} for
                    ${i.price}
                  </Typography>
                );
              })}
            </Grid>
          </CardContent>
          <Divider variant="middle" />
          <CardContent>
            <Typography>Total: ${total}</Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Button>
          </CardActions>
        </Paper>
      </Box>
    </Container>
  );
};

export default Ticket;
