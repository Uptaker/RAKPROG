import Item from "../components/Item";
import { useState, useEffect } from 'react'

function SingleItem(props) {

    const [item, setItem] = useState(null)
    const [failedFetch, setFailedFetch] = useState(false)
    const [loading, setLoading] = useState(true)

    const itemId = window.location.href.split("/item/")[1]

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


    return (
        <div>
        <Item key={item.id} id={item.id} name={item.name} price={item.price} category={item.category} ></Item>
        </div>

    )
}

export default SingleItem;