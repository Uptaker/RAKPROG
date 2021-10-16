import React from 'react'
import Category from './Category'

function CategoryList(props) {
    return (
        <div className="someList">
            {props.categories.map(cat => (
                <Category key={cat.id} name={cat.name} categoryType={cat.categoryType}/>
            ))}
        </div>
    )
}

export default CategoryList
