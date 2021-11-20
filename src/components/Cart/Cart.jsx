import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import { AiFillDelete } from 'react-icons/ai';
import './Cart.css';

const Cart = () => {
    
    const {cartList, removeItem, clearCart, itemCounter} = useCartContext()

    let totalPrice = 0;

    return<>
    {cartList.length === 0 && 
        <div className="emptyCart-container">
            <h2 className="checkOut-title">Your cart is empty!</h2>
            <br />
            <p className="checkOut-description">Go back to the store to add some products</p>
            <br />
            <Link to='/category'><button className="checkOut-btn">GO SHOPPING</button></Link>
        </div>}
    
    {cartList.length > 0 && 
        <div className="cart-container">
            <div className="items-cart-container">
                {cartList.map(item => <div className="product-card-cart" key={item.id}>
                                        <div>
                                            <img src={item.img} alt="" className="product-img"/>
                                        </div>
                                        <div className="info-container">
                                            <h3 className="product-title-cart">{item.title}<button onClick={() => removeItem(item.id)} className="delete-item-btn" title="Delete item"><AiFillDelete/></button></h3>
                                            
                                            <p className="product-amount">Amount: {item.count}</p>
                                            <p className="product-price">${item.price}</p>
                                        </div>
                                    </div>
                                    )}
            </div>
            {cartList.map(item => { totalPrice = item.price * item.count + totalPrice })}
            <div className="items-detail-container">
                <h2 className="checkOut-title">Your purchase...</h2>
                <div className="checkOut-description-container">
                    <p className="checkOut-description">Total items: {itemCounter()}</p>
                    <p className="checkOut-description">Total price: ${totalPrice}</p>
                </div>
                <div>
                    <button className="checkOut-btn">CHECK OUT</button>
                    <Link to='/category'><button className="keep-shopping-btn">KEEP SHOPPING</button></Link>
                    <button onClick={clearCart} className="delete-all-btn">DELETE ALL ITEMS</button>
                </div>
            </div>
        </div>
    }</>
}

export default Cart
