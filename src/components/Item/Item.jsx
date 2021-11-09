import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {

    return (
        <div className="product-card" key={item.id}>
            <Link to={`/detail/${item.id}`}>
                <div>
                    <img src={item.img} alt="" className="product-img"/>
                </div>
                <div className="info-container">
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-description">{item.description}</p>
                    <p className="product-price">${item.price}</p>
                </div>
                <div className="overlay"><button className="btn-see-more">SEE MORE</button></div>
            </Link>
        </div>
    )
}

export default Item

