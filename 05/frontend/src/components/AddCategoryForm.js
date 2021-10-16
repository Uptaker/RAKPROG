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
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="cname">Category name:</label><br/><br/>
            <input type="text" id="cname" name="cname" required ref={nameRef}/><br/><br/>
            <label htmlFor="type">Type:</label><br/><br/>
            <select name="type" id="type" required ref={typeRef}>
                <option value="BASIC" default>Basic</option>
                <option value="ECONOMY">Economy</option>
                <option value="PREMIUM">Premium</option>
            </select><br/><br/>
            <button>Add Item</button>
        </form>
    )
}

export default AddCategoryForm
