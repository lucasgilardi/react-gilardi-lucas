import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({titulo}) => {
    
    const style = {
        color: 'black',
        fontSize: '1.5rem',
        margin: '1rem 0'
    };

    return (
        <div>
            <h2 style={style}>{titulo}</h2>
            <ItemCount initial={1} stock={5}/>
        </div>
    )
}

export default ItemListContainer