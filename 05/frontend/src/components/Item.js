
function Item(props) {
    return (
        <div className="item">
            <h3>{props.name}</h3>
            <table>
                <tr>
                    <td>
                        <b>Price</b>
                    </td>
                    <td>
                        {props.price}
                    </td>
                </tr>

                <tr>
                    <td>
                        <b>Category</b>
                    </td>
                    <td>
                        {props.category}
                    </td>
                </tr>
        
            </table>
        </div>
    );
}

export default Item;