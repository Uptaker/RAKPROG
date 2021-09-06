import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/add-item'>
        <div>Add Item, not done yet</div>
      </Route>

    </div>
  );
}

export default App;
