import React , { useState } from 'react'
import { TextField, Paper, Grid, IconButton, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fetchProduct from '../reducers/actions'
import { connect } from 'react-redux'

const useStyles = makeStyles(() => ({
    formInput: {
        flexGrow: 1
    },
    paper: {
        padding: '10px',
        marginTop: '5px',
        width: '500px',
        marginBottom: '20px'
    }
}));


const Search = (props) => {

    const [ search , setSearch ] = useState('')
    const classes = useStyles()

    const onSearch = () => {        
        props.fetchProduct(search)
    }

    const onKeyPress = (e) => {
        if (e.keyCode === 13) onSearch()
    }
 
    return (
        <Paper className={classes.paper} >
            <Grid container alignItems='center' justify='center' >
                <TextField label="Search Products" variant="outlined" className={classes.formInput} onKeyDown={onKeyPress} onChange={ ev => setSearch(ev.target.value) } />
                &nbsp;
                <IconButton color="primary" onClick={onSearch}>
                    <Icon>search</Icon>
                </IconButton>
            </Grid>
        </Paper>)
}

const mapDispatch = (dispatch) => ({
    fetchProduct : (search) => dispatch(fetchProduct(search))
})

export default connect( null , mapDispatch ) (Search)