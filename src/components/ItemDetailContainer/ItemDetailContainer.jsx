import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from "../../services/getFetch";
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() =>{
        getFetch
            .then(res => setItem(res.find(element => element.id === parseInt(id))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[id])

    return (
        <div className="item-detail-container">
            {loading ? <div className="spinner-container"><div className="loading-spinner"></div></div>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer