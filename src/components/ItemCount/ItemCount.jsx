import { useState } from 'react'
import React from 'react'
import './ItemCount.css';

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial)

    const sumarItem = () => {
        count < stock ? setCount(count + 1) : alert("Superaste el stock disponible")
    }
    const restarItem = () => {
        count > initial ? setCount(count - 1) : alert("No puedes seleccionar menos de un producto")
    }
    const onAdd = () => {
        alert(`Agregaste ${count} productos al carrito`)
    }

    return (
        <div>
            <div className="item-count-container">
                <h3 className="product-name">Producto 1</h3>
                <div className="count-container">
                    <button className="btn-counter" onClick={sumarItem}> + </button>
                    <label>{count}</label>
                    <button className="btn-counter" onClick={restarItem}> - </button>
                </div>
                
                <button className="btn-addToCart" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
