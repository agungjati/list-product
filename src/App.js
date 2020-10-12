import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Search from './components/Search'
import List from './components/List'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(45deg, #c5ceff, #e6f0ffb8)',
    overflow: 'auto'
  }
}));

function App() {
  const classes = useStyles()

  return (
    <Grid container alignItems='center' justify='center' direction='column' className={classes.root} >
      <Grid container alignItems='center' justify='center' >
        <Grid item md={6} xs={11} >
          <Search />
        </Grid>
      </Grid>
      <Grid container alignItems='center' justify='center' >
        <Grid item md={6} xs={11} >
          <List />
        </Grid>
      </Grid>
    </Grid>

  );
}

export default App;
