

export const getProducts = ( search = '', sort = 'lowestFirst', category = 0 ) => {
    category = category > 0 ? `&subCategory=${category}` : ''
    search = search !== '' ? `&search=${search}` : ''
    sort = `?sort=${sort}`

    return fetch(`https://apis.aspenku.com/api/v1/product${sort + search + category}`, {
        headers: {
          'Authorization' : 'Basic QXNwZW5rdTpBc3Blbmt1' 
        }
      })
      .then( res => res.json() )
      .then(res => res.data.rows )
}