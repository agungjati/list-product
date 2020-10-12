
import { FETCHING_PRODUCT , SET_PRODUCT , ERROR_PRODUCT , CATEGORY_PRODUCT } from './types'

const initialState = {
    products : [] , 
    isLoading : false,
    errMessage : null,
    sortPrice : 'asc'
}

const productReducer = ( state = initialState , action) => {
    switch(action.type) {
        case FETCHING_PRODUCT : 
            return Object.assign({}, 
                state, 
                { isLoading : true , products : [] }
            )
        case SET_PRODUCT : 
            return Object.assign({},
                state,
                { products : action.payload , isLoading : false }
            )
        case CATEGORY_PRODUCT : 
            return Object.assign({},
                state,
                { products : state.products.filter( s => s.category.id === action.payload ) }
            )
        case ERROR_PRODUCT :
            return Object.assign({},
                state,
                { errMessage : action.payload }
            )
        default : 
            return state
    }
}

export default productReducer
