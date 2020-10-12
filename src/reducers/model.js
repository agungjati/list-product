
const category = ( id, name) => ({
    id ,
    name
})

const products = [ 
    {
        name : 'Ketumbar' ,
        category : category( 113, 'Spices') ,
        price : 1.1
    },
    {
        name : 'Ikan Goreng' ,
        category : category( 119, 'Seafood') ,
        price : 1.5
    },
    {
        name : 'Kopi Luwak' ,
        category : category( 140, 'Coffe Beans') ,
        price : 1.3
    },
    {
        name : 'Jagung' ,
        category : category( 141, 'Fruits') ,
        price : 1.7
    },
    {
        name : 'Kemangi' ,
        category : category( 143, 'Vegetables') ,
        price : 1.2
    },
    {
        name : 'Tea Sari Wangi' ,
        category : category( 144, 'Tea') ,
        price : 1.78
    },
    {
        name : 'Merica' ,
        category : category( 113, 'Spices') ,
        price : 1.41
    },
    {
        name : 'Ikan Gulai' ,
        category : category( 119, 'Seafood') ,
        price : 1.17
    },
    {
        name : 'Kopi Kap' ,
        category : category( 140, 'Coffe Beans') ,
        price : 1.01
    },
    {
        name : 'Anggur' ,
        category : category( 141, 'Fruits') ,
        price : 1.08
    },
    {
        name : 'Wortel' ,
        category : category( 143, 'Vegetables') ,
        price : 4.1
    },
    {
        name : 'Tea Tarek' ,
        category : category( 144, 'Tea') ,
        price : 1.01
    }
]

export default products
