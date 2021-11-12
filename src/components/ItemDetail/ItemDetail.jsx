import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import Cart from '../Cart/Cart';
import './ItemDetail.css';

const ItemDetail = ({item}) => {

    const [click, setClick] = useState(false)

    const handleAdd = (cantidad) =>{
        console.log(cantidad)
        setClick(true)
    }

    return (
        <div className="item-detail">
            <img src={item.img} alt="" className="item-img"/>
            <div className="details-container">
                <h2 className="item-name">{item.title}</h2>
                <p className="item-price">${item.price}</p>
                <p className="item-size">S M L XL</p>
                <p className="items-details"><b>DETAILS</b><br/>{item.description}</p>
                {click ? <Link to='/cart'><Cart/></Link> 
                       : <ItemCount initial={1} stock={5} onAdd={handleAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail