import React from 'react'

function Category(props) {
    return (
        <>
            <div>{props.name}</div>
            <div>{props.categoryType}</div><br/>
        </>
    )
}

export default Category
