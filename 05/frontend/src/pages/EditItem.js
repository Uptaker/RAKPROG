import { useState, useEffect, useRef } from 'react'

function EditItem(props) {

    const [item, setItem] = useState(null)
    const [failedFetch, setFailedFetch] = useState(false)
    const [loading, setLoading] = useState(true)

    const nameRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();

    const itemId = window.location.href.split("/edit/")[1]

    useEffect(() => {
            fetch("http://localhost:8080/items/" + itemId)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("500")
                }
            }).then(data => {
                console.log(data);
                setItem(data);
                setLoading(false)
            }).catch(e => {
                setFailedFetch(true)
                console.log('o fuc')
            })
    }, [])

    if (failedFetch) {
        return (
            <h1>Something went wrong.</h1>
        )
    }

    if (loading) {
        return (
        <h2>Loading..</h2>
        )
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log(nameRef.current.value);
        const nameValue = nameRef.current.value;
        const priceValue = priceRef.current.value;
        const categoryValue = categoryRef.current.value;

        const itemSubmitted = {
            id: item.id,
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }

        // todo: api fetch in a seperate component
        // could be seperate for both the form and fetch
        fetch('http://localhost:8080/items/edit/',
        {
            method: 'POST',
            body: JSON.stringify(itemSubmitted),
            headers: {'Content-Type':'application/json'}
        });
    }


    return (
        <form onSubmit={formSubmitHandler} className="addForm">
            <h2>Edit item</h2>
            <label htmlFor="iname">Item name:</label>
            <input type="text" id="iname" name="iname" defaultValue={item.name} placeholder={item.name} required ref={nameRef}/>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" defaultValue={item.price} placeholder={item.price} required ref={priceRef}/>
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" defaultValue={item.category} placeholder={item.category} required ref={categoryRef}/>
            <button>Save Changes</button>
        </form>

    )
}

export default EditItem;