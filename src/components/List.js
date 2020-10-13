import React, { useState, Fragment } from 'react'
import { Paper, List, ListItem, ListItemText, Divider, CircularProgress, Slide, MenuItem, Select, FormControl, InputLabel, Grid, IconButton, Icon, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { filterProduct , fetchProduct } from '../reducers/actions';
import Product from './Product'

const useStyles = makeStyles(theme => ({
    formInput: {
        flexGrow: 1
    },
    paper: {
        marginBottom: '20px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

const categories = [
    { id: 113, name: 'Spices' },
    { id: 119, name: 'Seafood' },
    { id: 140, name: 'Coffe Beans' },
    { id: 141, name: 'Fruits' },
    { id: 143, name: 'Vegetables' },
    { id: 144, name: 'Tea' },
]

const ListProduct = (props) => {
    
    const classes = useStyles()
    const [ sort , setSort ] = useState(false)
    const filter = props.filter

    const changeSelect = (e) => {
        props.filterProduct({ ...filter , category : e.target.value })
        props.fetchProduct(props.filter)
    }

    const sortPrice = () => {
        props.filterProduct({ ...filter , sortPrice : sort ? 'lowestFirst' : 'highestFirst' })
        props.fetchProduct(props.filter)
        setSort(!sort)
    }

    const renderFilter = () => {
        return (
            <Grid container alignItems='center' justify='flex-end' >
                <FormControl className={classes.formControl}>
                    <InputLabel >Category</InputLabel>
                    <Select
                        value={filter.category}
                        onChange={changeSelect} >
                        <MenuItem value={0}>
                            <em>None</em>
                        </MenuItem>
                        {categories.map((c, key) => (
                            <MenuItem value={c.id} key={key} >{c.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Tooltip title='Sort price'>
                    <IconButton color="primary" onClick={sortPrice} >
                        <Icon>sort</Icon>
                    </IconButton>
                </Tooltip>
            </Grid>
        )
    }

    return (<>
        {props.isLoading ? <center><CircularProgress disableShrink /></center> :
        <>
            {renderFilter()}
            <Slide direction="up" in={props.products.length > 0} mountOnEnter unmountOnExit> 
                <div>
                    
                    { props.products.map((product, key) => 
                        <Product product={product} key={key} />
                    ) }
                    
                </div>
            </Slide>
        </>

        }
    </>)
}

const mapDispatch = (dispatch) => ({
    fetchProduct : (filter) => dispatch(fetchProduct(filter)),
    filterProduct : (filter) => dispatch(filterProduct(filter))
})

export default connect((state) => state.product, mapDispatch)(ListProduct)
