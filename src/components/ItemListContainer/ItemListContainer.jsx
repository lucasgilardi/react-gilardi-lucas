import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../services/getFirestore";
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() =>{

        const dbQuery = getFirestore()

        if(categoryId){
            dbQuery.collection('items').where('category', '==', categoryId).get()
                .then(data => setItems(data.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }else{
            dbQuery.collection('items').get()
                .then(data => setItems(data.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    },[categoryId])
  
    return (
        <div className="item-list-container">
            {loading ? <div className="spinner-container"><div className="loading-spinner"></div></div>
                    : 
                    <ItemList items={items}/>
            }
        </div>
    )
}

export default ItemListContainer