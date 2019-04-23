import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import shopBuy from "./shopBuy";
import { Link } from "react-router-dom";
import shopDelete from "./shopDelete";

const styles = {
  card: {
    maxWidth: 180,
    minWidth: 180
  },
  media: {
    height: 140
  }
};

function ShopArmorer(props) {
  const { classes } = props;
  if (
    Number(props.items.itemTypeId) === 11 &&
    Number(props.items.itemRarityId) <= Number(props.playerLocationSize) &&
    Number(props.items.userId) !== Number(localStorage.getItem("logged-in")) &&
    props.items.legal === true
  ) {
    return (
      <Card id="item" className={classes.card}>
        <CardActionArea
          href={props.items.description}
          alt="Whoops"
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            className={classes.media}
            image={props.items.image}
            title={props.items.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.items.name}
            </Typography>
            <Typography component="div">
              <p className="shopPtagOne">{props.items.statOne}</p>
              <p className="shopPtagTwo">{props.items.statTwo}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions id="cardButtons">
          <Button
            size="small"
            id="shopBuyButton"
            onClick={() => {
              shopBuy(
                props.items.id,
                props.items.value,
                props.playerLocation,
                props.shopBuySellRefresh
              );
            }}
          >
            Buy ({props.items.value})
          </Button>
        </CardActions>
      </Card>
    );
  } else if (
    Number(props.items.itemTypeId) === 11 &&
    Number(props.items.itemRarityId) <= Number(props.playerLocationSize) &&
    Number(props.items.userId) === Number(localStorage.getItem("logged-in")) &&
    props.items.legal === true
  ) {
    return (
      <Card id="item" className={classes.card}>
        <CardActionArea
          href={props.items.description}
          alt="Whoops"
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            className={classes.media}
            image={props.items.image}
            title={props.items.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.items.name}
            </Typography>
            <Typography component="div">
              <p className="shopPtagOne">{props.items.statOne}</p>
              <p className="shopPtagTwo">{props.items.statTwo}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions id="cardButtons">
          <Button
            size="small"
            id="shopBuyButton"
            onClick={() => {
              shopBuy(
                props.items.id,
                props.items.value,
                props.playerLocation,
                props.items.weight,
                props.shopBuySellRefresh,
                props.carryRefresh
              );
            }}
          >
            Buy ({props.items.value})
          </Button>
          <Button
            size="small"
            id="shopBuyButton"
            onClick={() => {
              shopDelete(props.items.id, props.itemsRefresh);
            }}
          >
            Delete
          </Button>
          <p className="footer-icon color-orange">
            <Link
              className="far fa-edit color-white iconFooter editButton"
              style={{ textDecoration: "none" }}
              to={{
                pathname: "/item-edit",
                state: {
                  name: props.items.name,
                  statOne: props.items.statOne,
                  statTwo: props.items.statTwo,
                  description: props.items.description,
                  image: props.items.image,
                  itemRarityId: props.items.itemRarityId,
                  itemTypeId: props.items.itemTypeId,
                  value: props.items.value,
                  legal: props.items.legal,
                  id: props.items.id,
                  weight: props.items.weight
                }
              }}
            />
          </p>
        </CardActions>
      </Card>
    );
  } else {
    return null;
  }
}

ShopArmorer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShopArmorer);
