import React, { Fragment } from 'react'
import { Paper, List, ListItem, ListItemText, Divider, CircularProgress, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const useStyles = makeStyles(() => ({
    formInput: {
        flexGrow: 1
    },
    paper: {
        width: '500px'
    }
}));


const ListProduct = (props) => {

    const classes = useStyles()

    return (<>
        {props.isLoading ? <CircularProgress disableShrink /> :
            <Slide direction="up" in={props.products.length > 0} mountOnEnter unmountOnExit>
                <Paper className={classes.paper} >
                    <List component="nav" >
                        {props.products.map((product, key) =>
                            (<Fragment key={key}>
                                <ListItem button  >
                                    <ListItemText primary={product} />
                                </ListItem>
                                <Divider />
                            </Fragment>))}
                    </List>
                </Paper>
            </Slide>
        }
    </>)
}


export default connect((state) => state.product)(ListProduct)
