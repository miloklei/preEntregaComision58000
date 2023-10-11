import { useState, useEffect } from "react"
import { getProducts, getProductsById, } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'



const ItemListContainer= ({ greeting }) =>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
        .then((response) => {
            setProducts(response)
    })
        .catch(error =>{
            console.log('Error fetching products', error)
        } )
    }, [categoryId])

    
return(
    <div>
        <h1>{greeting}</h1>
    </div>
)
}

export default ItemListContainer