import React from 'react'
import Item from '../Item/Item'
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className="items-container">
            {items.map(item => <Item item={item}/> )}
        </div>
    )
}

export default ItemList