import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { getFetch } from "../../services/getFetch";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({titulo}) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getFetch
        .then(res =>{
            setItems(res)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])
    
    const style = {
        color: 'black',
        fontSize: '1.5rem',
        margin: '1rem 0'
    };

    return (
        <div>
            <h2 style={style}>{titulo}</h2>
            <ItemCount initial={1} stock={5}/>
            {loading ? <h3>Cargando...</h3>
                    : <ItemList items={items}/>
            }
        </div>
    )
}

export default ItemListContainer