import React from 'react'
import './Item.css';

const Item = ({item}) => {
    return (
        <div className="product-card" key={item.id}>
            <div className="img-container">
                <img src={item.img} alt="" className="product-img"/>
            </div>
            <div className="info-container">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-description">{item.description}</p>
                <p className="product-price">${item.price}</p>
            </div>
        </div>
    )
}

export default Item

