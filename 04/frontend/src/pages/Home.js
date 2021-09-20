
import {Link} from 'react-router-dom';
import ItemList from '../components/ItemList';
import {useState, useEffect} from 'react';

function Home() {

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

    return (
        <div>
            <Link to="add-item">
                <button>Add new item</button>
            </Link>
            <ItemList items={loadedItems}/>
        </div>
    );
}

export default Home;