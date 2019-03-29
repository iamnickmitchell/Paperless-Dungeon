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
import shopBuy from "./shopBuy"

const styles = {
  card: {
    maxWidth: 180,
    minWidth: 180
  },
  media: {
    height: 140
  }
};

function ShopTools(props) {
  const { classes } = props;
  if(props.items.itemTypeId === 2 && Number(props.items.itemRarityId) <= Number(props.playerLocationSize)){
  return (
    <Card id="item" className={classes.card}>
      <CardActionArea href={props.items.description} alt="Whoops" style={{textDecoration: 'none'}}>
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
            <p className="shopPtag">{props.items.statOne}</p>
            <p className="shopPtag">{props.items.statTwo}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
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
  )} else {return null}
}

ShopTools.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShopTools);