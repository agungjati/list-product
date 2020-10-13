
import { FETCHING_PRODUCT , SET_PRODUCT , ERROR_PRODUCT , FILTER_PRODUCT } from './types'

const initialState = {
    products : [] , 
    isLoading : false,
    errMessage : null,
    filter : {
        search : '',
        category : 0,
        sortPrice : 'lowestFirst'
    }    
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
        case FILTER_PRODUCT : 
            return Object.assign({},
                state,
                { filter :  { ...action.payload  } }
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
