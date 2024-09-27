import TodoItem from "./item/ProductItem"
import CreateProductField from "./create-todo-field/CreateProductField"
import { useState, useEffect } from "react"
import { supabase } from '../../../createClient'


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
        const response = await supabase
            .from('products')
            .delete()
            .eq('id', id)

        if (response.status === 204) {
            setProducts(products.filter(p => p.id != id))
        } else {alert('Нихуя не получилось')}
}

    // const removeProducts = id => setProducts(products.filter(t => t._id != id))


    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl text-center mb-10 font-bold">ChamaStock</h1>
            <CreateProductField setProducts={setProducts} />
            {products.map(product => (
                <TodoItem product={product} key={product.id} quantity={product.quantity} removeProducts={removeProducts} />
            ))}
        </div>
    )
}

export default Home
