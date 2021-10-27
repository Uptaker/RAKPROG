
import { useHistory } from "react-router-dom";

function Item(props) {

    function handleDelete(itemId) {
        props.deleteItem(itemId);
    }

    const {push} = useHistory();

    return (
        <div className="item">
            <h3 onClick={() => push(`/item/${props.id}`)} style={{cursor:"pointer"}}>{props.name}</h3>
            <table>
                <tbody>
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

                    { !props.isAddToCartButton && 
                    
                    <tr>
                        <td>
                            <b>ID</b>
                        </td>
                        <td>
                            {props.id}
                        </td>
                    </tr>
                    
                    }
                </tbody>
            </table>
            { props.isAddToCartButton ? 
                <button>Add To Cart <i className="fa fa-cart-plus"></i></button>
                :
                <>
                <button onClick={() => push(`/item/edit/${props.id}`)}>Edit <i className="fa fa-edit"></i></button>
                <button onClick={() => handleDelete(props.id)}>Remove <i className="fa fa-trash"></i></button>
                </>
                }
        </div>
    );
}

export default Item;