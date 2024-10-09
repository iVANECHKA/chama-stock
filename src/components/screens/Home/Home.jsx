import ProductItem from "./ProductItem/ProductItem"
import SearchField from "./SearchField/SearchField"
import Tabs from "./Tabs/Tabs"
import { useState, useEffect } from "react"
import { supabase } from '../../../createClient'
import styles from './Home.module.css'

const Home = () => {


    const [products, setProducts] = useState([])
    const [comps, setComps] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    // Собираем данные
    async function fetchProducts() {
        const { data } = await supabase.from('products').select('*')
        setProducts(data)
        setFilteredProducts(data)
    }

    async function fetchComps() {
        const { data } = await supabase.from('comps').select('*')
        setComps(data)
    }


    // Вызываем товары 1 раз
    useEffect(() => {
        fetchProducts()
        fetchComps()
    }, [])

    // Функция поиска
    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
    
        const filteredItems = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setFilteredProducts(filteredItems);
      }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SKLAD</h1>
            <SearchField handleInputChange={handleInputChange} searchItem={searchItem} />
            <Tabs />
            {filteredProducts.map(product => (
                <ProductItem product={product} key={product.id} comps={comps} />
            ))}
        </div>
    )
}

export default Home
