import React from 'react';
import { Grid, Paper, Divider , TextField, IconButton, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root : {
    height: '100vh',
    background: 'linear-gradient(45deg, #c5ceff, #e6f0ffb8)'
  },
  paper: {
    padding: '10px',
    marginTop: '5px',
    width: '500px'
  },
  formInput: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles()

  return (
    <Grid container alignItems='center' justify='center' className={classes.root} >
      <Paper className={classes.paper} >
        <Grid container alignItems='center' justify='center' >
          <TextField label="Search Products" variant="outlined" className={classes.formInput} />
          &nbsp;
          <IconButton color="primary">
            <Icon>search</Icon>
          </IconButton>
        </Grid>       
      </Paper>
    </Grid>
  );
}

export default App;
