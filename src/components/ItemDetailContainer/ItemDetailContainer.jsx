import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from "../../services/getFirestore";
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const [loading, setLoading] = useState(true)

    const [click, setClick] = useState(false)

    const {cartList, addItem } = useCartContext()

    const {id} = useParams()

    const handleAdd = (count) =>{
        setClick(count)
        addItem(item, count)
    }

    console.log(cartList)

    useEffect(() =>{

        const dbQuery = getFirestore()

        dbQuery.collection('items').doc(id).get()
            .then(res => setItem({id: res.id, ...res.data()}))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    },[id])

    console.log(item)

    return (
        <div className="item-detail-container">
            {loading ? <div className="spinner-container"><div className="loading-spinner"></div></div>
                    : <ItemDetail item={item} {...{click, setClick}} handleAdd={handleAdd}/>
            }
        </div>
    )
}

export default ItemDetailContainer