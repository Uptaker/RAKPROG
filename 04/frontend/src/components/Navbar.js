import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/"><img className="logo" src="logo.png" alt="logo"/></Link>
            <Link to="/cart"><img className="cart" src="shopping-cart.svg" alt="shopping cart"/></Link>
        </nav>
    );
}

export default Navbar;