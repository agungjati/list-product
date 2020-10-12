
import products from './model'

export const getProduct = (search) => {
    return new Promise((resolve) => {
        setTimeout( () => {              
            resolve(products.filter( ag => (new RegExp( search, 'gi')).test(ag.name) ))
        } , 3000)
    })
}