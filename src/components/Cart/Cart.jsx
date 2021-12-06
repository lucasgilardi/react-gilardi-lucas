import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { AiFillDelete } from 'react-icons/ai';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import './Cart.css';

const Cart = () => {
    
    const {cartList, removeItem, clearCart, itemCounter, totalPrice} = useCartContext()

    return(
        <>
            {cartList.length === 0 && 
                <div className="emptyCart-container">
                    <h2 className="checkOut-title">Your cart is empty!</h2>
                    <br/>
                    <p className="checkOut-description">Go back to the store to add some products</p>
                    <br />
                    <Link to='/category'><button className="keep-shopping-btn">GO SHOPPING</button></Link>
                </div>
            }
            
            {cartList.length > 0 && 
                <div className="cart-container">
                    <div className="items-cart-container">
                        {cartList.map(item => <div className="product-card-cart" key={item.id}>
                                                <div>
                                                    <img src={item.img} alt="" className="product-cart-img"/>
                                                </div>
                                                <div className="info-container-cart">
                                                    <div className="title-delete-container">
                                                        <h3 className="product-title-cart">{item.title}</h3>
                                                        <button onClick={() => removeItem(item.id)} className="delete-item-btn" title="Delete item"><AiFillDelete/></button>
                                                    </div>
                                                    <p className="product-amount">Amount: {item.amount}</p>
                                                    <p className="product-price">${item.price}</p>
                                                </div>
                                            </div>
                                            )}
                    </div>
                    <div className="items-detail-container">
                        <h2 className="checkOut-title">Your purchase...</h2>
                        <div className="checkOut-description-container">
                            <p className="checkOut-description">Total items: {itemCounter()}</p>
                            <p className="checkOut-description">Total price: ${totalPrice()}</p>
                        </div>
                        <div>
                            <Link to='/category'><button className="keep-shopping-btn">KEEP SHOPPING</button></Link>
                            <button onClick={clearCart} className="delete-all-btn">DELETE ALL ITEMS</button>
                        </div>
                        <CheckOutForm />
                    </div>           
                </div>
            }
        </>
    )
}

export default Cart