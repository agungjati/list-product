import React, { useState, Fragment } from 'react'
import { Paper, List, ListItem, ListItemText, Divider, CircularProgress, Slide, MenuItem, Select, FormControl, InputLabel, Grid, IconButton, Icon, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { filterCategory } from '../reducers/actions';

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
    const [category, setCategory] = useState(1)
    const asc = (a, b) => a.price > b.price ? 1 : -1
    const desc = (a, b) => a.price > b.price ? -1 : 1

    const renderFilter = () => {
        return (
            <Grid container alignItems='center' justify='flex-end' >
                <FormControl className={classes.formControl}>
                    <InputLabel >Category</InputLabel>
                    <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} >
                        <MenuItem value={1}>
                            <em>None</em>
                        </MenuItem>
                        {categories.map((c, key) => (
                            <MenuItem value={c.id} key={key} >{c.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Tooltip title='Sort price'>
                    <IconButton color="primary" >
                        <Icon>sort</Icon>
                    </IconButton>
                </Tooltip>
            </Grid>
        )
    }

    return (<>
        {props.isLoading ? <center><CircularProgress disableShrink /></center> :
            <Slide direction="up" in={props.products.length > 0} mountOnEnter unmountOnExit> 
                <div>
                    {renderFilter()}
                    <Paper className={classes.paper} >
                        <List component="nav" >
                            {props.products.map((product, key) =>
                                (<Fragment key={key}>
                                    <ListItem button  >
                                        <ListItemText
                                            primary={product.name + '  $' + product.price}
                                            secondary={product.category.name} />
                                    </ListItem>
                                    <Divider />
                                </Fragment>))}
                        </List>
                    </Paper>
                </div>
            </Slide>
        }
    </>)
}

const mapDispatch = (dispatch) => ({
    filterCategory: (categoryId) => dispatch(filterCategory(categoryId))
})

export default connect((state) => state.product, mapDispatch)(ListProduct)
