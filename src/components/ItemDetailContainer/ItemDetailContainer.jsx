import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from "../../services/getFirestore";
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const [loading, setLoading] = useState(true)

    //eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(1)

    const [click, setClick] = useState(false)

    //eslint-disable-next-line no-unused-vars
    const {cartList, addItem } = useCartContext()

    const {id} = useParams()

    const onAdd = (count) => {       
        addItem(item, count)
        setClick(true)
        setCount(count)
    }

    useEffect(() =>{

        const dbQuery = getFirestore()

        dbQuery.collection('items').doc(id).get()
            .then(res => setItem({id: res.id, ...res.data()}))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    },[id])

    return (
        <div className="item-detail-container">
            {loading ? <div className="spinner-container"><div className="loading-spinner"></div></div>
                     : <ItemDetail item={item} {...{click, setClick}} onAdd={onAdd}/>
            }
        </div>
    )
}

export default ItemDetailContainer