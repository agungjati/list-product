
import { FETCHING_PRODUCT , SET_PRODUCT , ERROR_PRODUCT } from './types'

const initialState = {
    products : [] , //['Nasi Goreng', 'Ikan Asin', 'Es Teh', 'Prata', 'Tahu Kupat'] ,
    isLoading : false,
    errMessage : null
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
