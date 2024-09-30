import ProductItem from "./ProductItem/ProductItem"
import CreateProductField from "./CreateProductField/CreateProductField"
import { useState, useEffect } from "react"
import { supabase } from '../../../createClient'
import styles from './Home.module.css'

const Home = () => {


    const [products, setProducts] = useState([])

    // Собираем данные
    async function fetchProducts() {
        const { data } = await supabase.from('products').select('*')
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products);

    // Функция удаления продукта
    async function removeProducts(id) {
        // const response = await supabase
        //     .from('products')
        //     .delete()
        //     .eq('id', id)

        // if (response.status === 204) {
        //     setProducts(products.filter(p => p.id != id))
        // } else {alert('Нихуя не получилось')}
}


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SKLAD</h1>
            <CreateProductField setProducts={setProducts} />
            {products.map(product => (
                <ProductItem product={product} key={product.id} quantity={product.quantity} removeProducts={removeProducts} />
            ))}
        </div>
    )
}

export default Home
