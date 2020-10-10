
import { FETCHING_PRODUCT , SET_PRODUCT , ERROR_PRODUCT } from './types'

const setProductsAction = (products) => ({
    type : SET_PRODUCT ,
    payload : products
})

const errProduct = (message) => ({
    type : ERROR_PRODUCT ,
    payload : message
})


const fetchProduct = (search) => (dispatch) => {    
    dispatch({ type : FETCHING_PRODUCT })

    new Promise((resolve) => {
        setTimeout( () => {
            dispatch(setProductsAction([ 'anngur', 'jagung']))
            resolve()
        } , 5000)
    })

}

export default fetchProduct