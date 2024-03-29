import React, { memo } from 'react'
import Item from '../Item/Item'
import './ItemList.css';

const ItemList = memo (
        ({items}) => {
            return (
                <div className="items-container">
                    {items.map(item => <Item key={item.id} item={item}/> )}
                </div>
            )
        }
    )

export default ItemList