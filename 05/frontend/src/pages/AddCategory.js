import React from 'react'
import AddCategoryForm from '../components/AddCategoryForm'

function AddCategory() {


    function categorySubmitHandler(c) {
        fetch('http://localhost:8080/categories',
        {
            method: 'POST',
            body: JSON.stringify(c),
            headers: {'Content-Type':'application/json'}
        });
    }

    return (
        <>
            <h2>Add a new category</h2>
            <AddCategoryForm onAddCategory={categorySubmitHandler}/>
        </>
    )
}

export default AddCategory
