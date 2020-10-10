import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Search from './components/Search'
import List from './components/List'

const useStyles = makeStyles(() => ({
  root : {
    height: '100vh',
    background: 'linear-gradient(45deg, #c5ceff, #e6f0ffb8)'
  }
}));

function App() {
  const classes = useStyles()

  return (
    <Grid container alignItems='center' justify='center' direction='column' className={classes.root} >
        <Search />
        <List />
    </Grid>
  );
}

export default App;
