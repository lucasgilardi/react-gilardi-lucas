import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { getFetch } from "../../services/getFetch";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getFetch
        .then(res =>{
            setItem(res)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])

    return (
        <div>
            {loading ? <h3>Cargando...</h3>
                    : <ItemDetail item={item[0]}/>
            }
        </div>
    )
}

export default ItemDetailContainer
