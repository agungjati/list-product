
import { FETCHING_PRODUCT , SET_PRODUCT , ERROR_PRODUCT , FILTER_PRODUCT } from './types'
import { getProducts  } from './product-api'

const setProductsAction = (products) => ({
    type : SET_PRODUCT ,
    payload : products
})

const errProduct = (message) => ({
    type : ERROR_PRODUCT ,
    payload : message
})

export const filterProduct = (filter) => (dispatch) => dispatch({
    type : FILTER_PRODUCT ,
    payload : filter
})


export const fetchProduct = ({ search , sortPrice , category }) => (dispatch) => {    
    dispatch({ type : FETCHING_PRODUCT })
    getProducts(search , sortPrice , category)
    .then( products => {
        dispatch(setProductsAction(products))
    })

}
