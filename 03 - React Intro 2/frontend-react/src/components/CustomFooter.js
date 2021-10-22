import React from 'react'
// import {Button, Layout} from 'antd'
import {Link} from 'react-router-dom'

const headerStyle = {
    textAlign: 'center',
};

function CustomHeader() {
    return (
        <footer style={headerStyle}>
            <Link to="https://github.com/Uptaker">GitHub</Link>
        </footer>
    )
}

export default CustomHeader