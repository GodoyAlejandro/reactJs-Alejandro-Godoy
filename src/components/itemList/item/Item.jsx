import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Item({ prods }) {
  const { id, tittle, description, price, src } = prods;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, margin: ".5rem" }}>
      <CardMedia component="img" image={src} alt={tittle} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: "4rem" }}
        >
          {tittle}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          price: $ {price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: "4rem", overflow: "hidden" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            navigate(`/product/${id}`);
          }}
          size="small"
        >
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
