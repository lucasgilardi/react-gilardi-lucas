import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    return (
        <div className="item-detail">
            <img src={item.img} alt="" className="item-img"/>
            <div className="details-container">
                <h2 className="item-name">{item.title}</h2>
                <p className="item-price">${item.price}</p>
                <p className="item-size">S M L XL</p>
                <ItemCount initial={1} stock={5}/>
                <p className="items-details"><b>DETAILS</b><br/>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail