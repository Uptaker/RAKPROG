import '../scss/Navbar.scss';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/"><p className="title">WebShop</p></Link>
            <Link to="/cart"><i className="nav-cart fa fa-shopping-cart"></i></Link>
        </nav>
    );
}

export default Navbar;