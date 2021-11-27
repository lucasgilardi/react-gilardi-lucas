import { createContext, useState, useContext } from 'react'

const CartContext = createContext ([])

export const useCartContext = () =>{
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (item, amount) => {

        let inCartList = cartList.find((cartItem) => cartItem.id === item.id);

        if (inCartList) {
            inCartList.amount += amount
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...item, amount }])
        }

    }

    const removeItem = (id) =>{
        setCartList(cartList.filter((prod) => prod.id !== id))
    }

    const clearCart = () =>{
        setCartList([])
    }

    const itemCounter = () =>{
        return cartList.reduce((accum, item) => accum = accum + item.amount, 0)
    }

    const addPrice = () =>{
        return cartList.reduce((accum, item) => accum = accum + item.price, 0)
    }

    const totalPrice = () =>{
        return cartList.reduce((accum, item) => (accum += item.price * item.amount), 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            clearCart,
            itemCounter,
            addPrice,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
