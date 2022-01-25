import React from "react";

import {
  Button,
  Typography,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import useStyles from "./Styles";

const ProductCard = ({ name, currPrice, prevPrice, off, img }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.image} image={img} />
        <CardContent className={classes.card_heading}>
          <Typography className={classes.name} variant={"h6"}>
            {name}
          </Typography>

          <CardContent className={classes.prices}>
            <Typography variant={"h7"}>${currPrice}</Typography>
            <Typography
              variant={"h7"}
              style={{
                textDecoration: "line-through",
                textDecorationColor: "gray",

                marginRight: "8em",
              }}
            >
              {prevPrice}
            </Typography>
            <Typography variant={"h7"} color="error">
              {off}% OFF
            </Typography>
          </CardContent>

          <Button
            className={classes.button}
            variant="outlined"
            color="error"
            style={{ fontSize: "1.2rem" }}
          >
            MOVE TO BAG
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
