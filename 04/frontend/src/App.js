import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import AddCategory from './pages/AddCategory';

function App() {
  return (
      <div>
        <Navbar />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/add-item'>
          <AddItem />
        </Route>
        <Route path='/add-category'>
          <AddCategory />
        </Route>
        <Route path="/categories">
          <Categories/>
        </Route>
      </div>
  );
}

export default App;
