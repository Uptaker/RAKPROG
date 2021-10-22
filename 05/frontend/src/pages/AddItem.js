import AddItemForm from '../components/AddItemForm';

function AddItem() {

    function itemSubmitHandler(item) {
        fetch('http://localhost:8080/items',
        {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type':'application/json'}
        });
    }

    return (
        <>
            <h2>Add a new item</h2>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </>
    );
}

export default AddItem;