import Item from '../components/Item';

function Home() {
    return (
        <div>
            Home
            <Item name="item1" price="100" category="phone"/>
            <Item name="item2" price="400" category="laptop"/>
        </div>
    );
}

export default Home;