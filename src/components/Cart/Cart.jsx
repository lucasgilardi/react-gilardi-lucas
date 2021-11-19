import { useCartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    
    const {cartList, removeItem, clearCart} = useCartContext()
    console.log(cartList)

    const style = {margin: "4rem",}

    return (
        <div style={style}>
            <h2>Cart</h2>
            <br /> 
            {cartList.map(item => <ul key={item.id}>
                                        <li><b>Item: {item.title}</b></li>
                                        <li>Amount: {item.count}</li> 
                                        <li>Price: ${item.price}</li> 
                                        <li>Description: {item.description}</li> 
                                        <button onClick={() => removeItem(item.id)}>X</button>
                                        <br />
                                    </ul>
                                    )}
            <button onClick={clearCart}>Delete all items</button>
        </div>
    )
}

export default Cart
