import { useState, useEffect } from "react";
import { getFetch } from "../../services/getFetch";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() =>{

        if(categoryId){
            getFetch
            .then(res =>{
                setItems(res.filter(item => item.category === categoryId))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }else{
            getFetch
            .then(res =>{
                setItems(res)
            })
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