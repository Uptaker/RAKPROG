import './AddItemForm.css';
import {useRef} from 'react';

function AddItemForm(props) {

    const nameRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log(nameRef.current.value);
        const nameValue = nameRef.current.value;
        const priceValue = priceRef.current.value;
        const categoryValue = categoryRef.current.value;

        const item = {
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }

        props.onAddItem(item);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="iname">Item name:</label><br/>
            <input type="text" id="iname" name="iname" required ref={nameRef}/><br/>
            <label htmlFor="price">Price:</label><br/>
            <input type="number" id="price" name="price" required ref={priceRef}/><br/>
            <label htmlFor="category">Category:</label><br/>
            <input type="text" id="category" name="category" required ref={categoryRef}/><br/>
            <button>Add Item</button>
        </form>
    )
}

export default AddItemForm;