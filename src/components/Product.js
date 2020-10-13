import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Product({ product }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} 
                alt={product.SpreeProductImages[0] && product.SpreeProductImages[0].alternative_text} 
                src={product.SpreeProductImages[0] && product.SpreeProductImages[0].thumbnail_image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  { product.SpreeStore.store_name }
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  rate { product.average_rating } <br />
                  created at { moment(product.created_at).subtract(6, 'days').calendar() }
                </Typography>
              </Grid>              
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">${product.sell_price} </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}