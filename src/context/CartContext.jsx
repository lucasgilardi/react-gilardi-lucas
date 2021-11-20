import { createContext, useState, useContext } from 'react'

const CartContext = createContext ([])

export const useCartContext = () =>{
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (item, count) =>{
        if(isInCart(item)){
            let newCart = cartList;
            newCart.forEach((cartItem) => {
                if(cartItem.id === item.id){
                    cartItem.count += count;
                }
            });
            setCartList(newCart);
        }else{
            setCartList([...cartList, {...item, count}])
        }
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const clearCart = () =>{
        setCartList([])
    }

    const isInCart = (item) =>{
        return cartList.some((cartItem) => cartItem.id === item.id)
    }

    const itemCounter = () =>{
        return cartList.reduce((accum, item) => accum = accum + item.count, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            clearCart,
            itemCounter
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
