import React from 'react'
// import {Button, Layout} from 'antd'
import {Link} from 'react-router-dom'
import '../scss/Header.scss';



function CustomHeader() {
    return (
        <nav>
            <div className="div-left">
                <Link to="/" className="title">RAKPROG</Link>
                <Link to="/posts">Add Post</Link>
                <Link to="/posts/show">View Posts</Link>
            </div>

            <div className="div-right">
                <Link to="/register">Register   </Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default CustomHeader
