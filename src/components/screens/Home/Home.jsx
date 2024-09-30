import ProductItem from "./ProductItem/ProductItem"
import SearchField from "./SearchField/SearchField"
import Tabs from "./Tabs/Tabs"
import { useState, useEffect } from "react"
import { supabase } from '../../../createClient'
import styles from './Home.module.css'

const Home = () => {


    const [products, setProducts] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    // Собираем данные
    async function fetchProducts() {
        const { data } = await supabase.from('products').select('*')
        setProducts(data)
        setFilteredProducts(data)
    }



    useEffect(() => {
        fetchProducts()
    }, [])

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
    
        // filter the items using the apiUsers state
        const filteredItems = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setFilteredProducts(filteredItems);
      }

    // Функция удаления продукта
//     async function removeProducts(id) {
//         // const response = await supabase
//         //     .from('products')
//         //     .delete()
//         //     .eq('id', id)

//         // if (response.status === 204) {
//         //     setProducts(products.filter(p => p.id != id))
//         // } else {alert('Нихуя не получилось')}
// }


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SKLAD</h1>
            <SearchField handleInputChange={handleInputChange} searchItem={searchItem} />
            <Tabs />
            {filteredProducts.map(product => (
                <ProductItem product={product} key={product.id} quantity={product.quantity} />
            ))}
        </div>
    )
}

export default Home
