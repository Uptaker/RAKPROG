
import {Link} from 'react-router-dom';
import ItemList from '../components/ItemList';
import {useState, useEffect} from 'react';

function AdminHome() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setloadedItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setloadedItems(data);
        });
    }, [])

    if (isLoading) {
        return (
            <div>is loading</div>
        )
    }

    function makeDeleteRequest(itemId) {
        fetch('http://localhost:8080/items/delete/' + itemId, {method: 'DELETE'}).then(res => {
            return res.json();
        }).then(data => {
            setloadedItems(data);
        });
    }

    return (
        <div>
            <h2>Admin Home</h2>
            <Link to="add-item">
                <button>Add new item <i className="fa fa-plus"></i></button> 
            </Link>

            <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={false} items={loadedItems}/>
        </div>
    );
}

export default AdminHome;