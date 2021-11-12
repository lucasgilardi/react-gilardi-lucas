import { useState } from 'react'
import React from 'react'
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const sumarItem = () => {
        count < stock ? setCount(count + 1) : alert("Superaste el stock disponible")
    }
    const restarItem = () => {
        count > initial ? setCount(count - 1) : alert("No puedes seleccionar menos de un producto")
    }
    
    return (
        <div>
            <div className="item-count-container">
                <div className="count-container">
                    <button className="btn-counter" onClick={sumarItem}> + </button>
                    <label>{count}</label>
                    <button className="btn-counter" onClick={restarItem}> - </button>
                </div>
                
                <button className="btn-addToCart" onClick={() => onAdd(count)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ItemCount
