
import { FETCHING_PRODUCT , SET_PRODUCT , ERROR_PRODUCT , CATEGORY_PRODUCT } from './types'
import { getProduct } from './product-api'

const setProductsAction = (products) => ({
    type : SET_PRODUCT ,
    payload : products
})

const errProduct = (message) => ({
    type : ERROR_PRODUCT ,
    payload : message
})

export const filterCategory = (categoryId) => (dispatch) => dispatch({
    type : CATEGORY_PRODUCT ,
    payload : categoryId
})


export const fetchProduct = (search) => (dispatch) => {    
    dispatch({ type : FETCHING_PRODUCT })

    getProduct(search)
    .then( products => {
        dispatch(setProductsAction(products))
    })

}
