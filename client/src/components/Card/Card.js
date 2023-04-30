import React, { useEffect, useState } from 'react'
import "./style.css"
import { useDispatch } from "react-redux"
import { updatePrice } from '../../redux/productsSlice'
import { Link } from 'react-router-dom'

function Card({ product, budget }) {
    const [id] = useState(product.id)
    const [price] = useState(Number(product.productPrice))
    const [count, setCount] = useState(Number(product.count))

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(updatePrice({ id, count, price }));
    }, [dispatch, id, price, count])
    const handleBuy = () => {
        setCount(buy => buy + 1)
    }
    const handleSell = () => setCount(sell => count > 0 ? sell - 1 : 0)


    return (
        <div className='card'>
            <div className='cardPicture'>
                <h1>{product.productName}</h1>
                <img src={product.image} alt={product.image} />
            </div>
            <div className='shop'>
                <h3>{product.productName} {product.productPrice}$</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='button'>
                    <button onClick={handleSell}>Sell</button>
                    <h3>{count}</h3>
                    <button onClick={handleBuy}
                        disabled={product.productPrice > budget ? true : false}
                    >buy</button>
                </div>
            <Link to={product.id}><button className='button-link'>Detail</button></Link>
            </div>
        </div>
    )
}

export default Card
