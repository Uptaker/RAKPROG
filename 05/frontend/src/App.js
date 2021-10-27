import './App.scss';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import AddCategory from './pages/AddCategory';
import AdminHome from './pages/AdminHome';
import SingleItem from './pages/SingleItem';
import EditItem from './pages/EditItem';

function App() {
  return (
      <div>
        <Navbar />
        <div className="container">
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
          <Route path="/admin">
            <AdminHome />
          </Route>
          <Route exact path="/item/:itemId">
            <SingleItem />
          </Route>
          <Route exact path="/item/edit/:itemId">
            <EditItem />
          </Route>
        </div>
      </div>
  );
}

export default App;
