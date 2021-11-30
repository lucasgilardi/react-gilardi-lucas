import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { AiFillDelete } from 'react-icons/ai';
import { getFirestore } from '../../services/getFirestore';
import firebase from 'firebase/app';
import CheckOutModal from '../Modal/Modal';
import './Cart.css';

const Cart = () => {
    
    const {cartList, removeItem, clearCart, itemCounter, totalPrice} = useCartContext()

    const [showModal, setShowModal] = useState(false)

    const [idOrder, setIdOrder] = useState()

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const generateOrder = (e) =>{
        
        e.preventDefault()

        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer = formData
        orden.total = totalPrice()
        orden.items = cartList.map(cartItem =>{
            const id = cartItem.id;
            const name = cartItem.title;
            const price = cartItem.price * cartItem.amount;

            return {id, name, price}
        })

       const dbQuery = getFirestore()
        dbQuery.collection('orders').add(orden)
            .then(({id} ) => {setIdOrder(id)})
            .then(resp => console.log(resp))
            .catch (err => console.log (err))   
    }

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleHide = () => {
        setShowModal(false)
        clearCart()
    }

    return<>
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

                    <div className="checkOut-container">
                        <h3 className="checkOut-title">Check Out</h3>
                        <form 
                            onSubmit={generateOrder}
                            onChange={handleChange}
                        >
                            <div>
                                <input 
                                    className="checkOut-input" 
                                    type="text" 
                                    name="name"
                                    placeholder="Name"
                                    defaultValue={formData.name}
                                />
                            </div>
                            <div>
                                <input 
                                    className="checkOut-input" 
                                    type="text" 
                                    name="phone"
                                    placeholder="Phone"
                                    defaultValue={formData.phone}
                                />
                            </div>
                            <div>
                                <input 
                                    className="checkOut-input" 
                                    type="text" 
                                    name="email"
                                    placeholder="Email"
                                    defaultValue={formData.email}
                                />
                            </div>
                            <div className="my-2">
                                <button className="keep-shopping-btn" onClick={() => setShowModal(true)}>CHECK OUT</button>
                            </div>
                        </form>
                    </div>
                </div>           
                <CheckOutModal show={showModal} onHide={handleHide} idOrder={idOrder} totalPrice={totalPrice()}/>
            </div>                       
        }
        </>
}

export default Cart
