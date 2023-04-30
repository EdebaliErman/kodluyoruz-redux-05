import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fecthProducts, selectBudget, selectMoney, selectProducts, selectStatus } from '../../redux/productsSlice'
import Card from '../../components/Card/Card'
import Header from '../../components/Header'
import Reciept from '../../components/Reciept'
import "./style.css"

function Home() {
    const dispatch = useDispatch()
    const status = useSelector(selectStatus)
    const products = useSelector(selectProducts)
    const budget = useSelector(selectBudget)
    const money = useSelector(selectMoney)

    useEffect(() => {
        dispatch(fecthProducts())
    }, [dispatch])

    if (status === "loading") {
        return "loading"
    }
    if (status === "error") {
        return "error"
    }
    return (
        <div className='home'>
            <Header
                budget={budget} />

            <div className='cardMap'>
                {products.map((product) => <Card
                    key={product.id}
                    product={product}
                    budget={budget} />)}</div>

            <Reciept
                product={products}
                money={money}
                budget={budget} />

        </div>
    )
}

export default Home
