
import Item from '../components/Item';
import '../scss/item.scss'


function ItemList(props) {
    return (
        <div className="someList">
            {props.items.map(item => (
                <Item key={item.id} name={item.name} price={item.price} category={item.category}/>
            ))}
        </div>
    )
}

export default ItemList
