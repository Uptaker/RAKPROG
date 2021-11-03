import React from 'react'
// import {Button, Layout} from 'antd'
import {Link} from 'react-router-dom'
import '../scss/Header.scss';
import { Context } from '../store';
import {useContext} from 'react'
import { logoutUser } from '../store/actions';

function CustomHeader() {

    const [state, dispatch] = useContext(Context)

    function handleLogout() {
        dispatch(logoutUser())
    }

    return (
        <nav>
            <div className="div-left">
                <Link to="/" className="title">RAKPROG</Link>
                <Link to="/posts">Posts</Link>
            </div>

            {!state.auth.token ?
            <div className="div-right">
                <Link to="/register">Register   </Link>
                <Link to="/login">Login</Link>
            </div>
            :
            <div className="div-right">
                <Link to="#">Welcome, {state.auth.user.firstName}</Link>
                <Link onClick={handleLogout} to="#">Log out</Link>
            </div>
            }

        </nav>
    )
}

export default CustomHeader
