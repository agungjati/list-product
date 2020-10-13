import React , { useState } from 'react'
import { TextField, Paper, Grid, IconButton, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { fetchProduct , filterProduct } from '../reducers/actions'
import { connect } from 'react-redux'

const useStyles = makeStyles(() => ({
    formInput: {
        flexGrow: 1
    },
    paper: {
        padding: '10px',
        marginTop: '20px',        
        marginBottom: '20px'
    }
}));


const Search = (props) => {
   
    const classes = useStyles()

    const onSearch = () => {        
        props.fetchProduct(props.filter)
    }

    const onKeyPress = (e) => {
        if (e.keyCode === 13) onSearch()
    }
 
    return (
        <Paper className={classes.paper} >
            <Grid container alignItems='center' justify='center' >
                <TextField 
                    label="Search Products" 
                    variant="outlined" 
                    disabled={props.filter === ''}
                    className={classes.formInput} onKeyDown={onKeyPress} 
                    value={props.filter.search} 
                    onChange={ ev => props.filterProduct({ ...props.filter , search : ev.target.value }) } />
                &nbsp;
                <IconButton color="primary" onClick={onSearch}>
                    <Icon>search</Icon>
                </IconButton>
            </Grid>
        </Paper>)
}


const mapState = (state) => ({ filter : state.product.filter })

const mapDispatch = (dispatch) => ({
    fetchProduct : (filter) => dispatch(fetchProduct(filter)),
    filterProduct : (filter) => dispatch(filterProduct(filter)) 
})

export default connect( mapState , mapDispatch ) (Search)