
import "./style.css"
function Reciept({
    budget,
    product,
    money }) {

    const filtered = product.filter((item) => item.count > 0)
    const total = Math.abs(money - budget)

    if (filtered === 0) {
        return null
    }
    return (
        <div className="reciept">
            <h1 className="total-price">Total</h1>
            {filtered.map(item =>
                <div className='reciept-item' key={item.id}>
                    <h1>  {item.productName}</h1>
                    <h1>  {item.count}x</h1>
                    <h1>   {item.productPrice * item.count}</h1>
                </div>)}
            <div className="total">
                <h3 className="total-price">${total !== 0 && total}</h3>
                 <h3 className="total-count">{filtered.length > 0 && filtered.length}</h3>
            </div>

        </div>
    )
}

export default Reciept
