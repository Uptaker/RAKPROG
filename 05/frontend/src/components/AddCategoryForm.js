import React from 'react'
import {useRef} from 'react'

function AddCategoryForm(props) {

    const nameRef = useRef()
    const typeRef = useRef()

    function formSubmitHandler(e) {
        e.preventDefault();

        const category = {
            name: nameRef.current.value,
            categoryType: typeRef.current.value
        }

        props.onAddCategory(category)
    }

    return (
        <form onSubmit={formSubmitHandler} className="addForm">
            <label htmlFor="cname">Category name:</label>
            <input type="text" id="cname" name="cname" required ref={nameRef}/>
            <label htmlFor="type">Type:</label>
            <select name="type" id="type" required ref={typeRef}>
                <option value="BASIC" default>Basic</option>
                <option value="ECONOMY">Economy</option>
                <option value="PREMIUM">Premium</option>
            </select>
            <button>Add Item</button>
        </form>

    )
}

export default AddCategoryForm
