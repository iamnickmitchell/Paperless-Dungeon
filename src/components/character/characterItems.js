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
import shopSell from "../shop/shopSell";

const styles = {
  card: {
    maxWidth: 180,
    minWidth: 180
  },
  media: {
    height: 140
  }
};

function CharacterItems(props) {
  const { classes } = props;
  if (props.item.sold === null) {
    return (
      <Card id="item" className={classes.card}>
        <CardActionArea
          href={props.item.item.description}
          alt="Whoops"
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            className={classes.media}
            image={props.item.item.image}
            title={props.item.item.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.item.item.name}
            </Typography>
            <Typography component="div">
              <p className="shopPtagOne">{props.item.item.statOne}</p>
              <p className="shopPtagTwo">{props.item.item.statTwo}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions id="cardButtons">
          <Button
            size="small"
            id="shopBuyButton"
            onClick={() => {
              shopSell(
                props.item.id,
                props.item.item.value / 2,
                props.playerLocation,
                props.item.item.weight,
                props.shopBuySellRefresh,
                props.carryRefresh
              );
            }}
          >
            Sell Item ({props.item.item.value / 2})
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return null;
  }
}

CharacterItems.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CharacterItems);
