import '../scss/Navbar.scss';
import {Link} from 'react-router-dom'
import bottomNavbar from '../navbar_bottom.svg'

function Navbar() {
    return (
        <>
            <nav>
                <div className="div-left">
                    <Link to="/" className="title">WebShop</Link>
                    <Link to="#">Link 1</Link>
                    <Link to="#">Link 2</Link>
                </div>

                <div className="div-right">
                    <Link to="/cart"><i className="nav-cart fa fa-shopping-cart"></i></Link>
                </div>
            </nav>
            <img src={bottomNavbar} alt="Navbar Bottom" />
        </>
    );
}

export default Navbar;