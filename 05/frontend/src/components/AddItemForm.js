import '../scss/AddItemForm.scss';
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
        <form onSubmit={formSubmitHandler} className="addForm">
            <label htmlFor="iname">Item name:</label>
            <input type="text" id="iname" name="iname" required ref={nameRef}/>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" required ref={priceRef}/>
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" required ref={categoryRef}/>
            <button>Add Item</button>
        </form>
    )
}

export default AddItemForm;