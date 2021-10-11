function Item(props) {
    return (
        <div>
            <div className="itemName">{props.name}</div>
            <div className="itemName">{props.price}</div>
            <div className="itemName">{props.category}</div><br/>
        </div>
    );
}

export default Item;