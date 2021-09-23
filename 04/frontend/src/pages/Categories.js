import React from 'react'
import {Link} from 'react-router-dom';
import CategoryList from '../components/CategoryList'
import { useState, useEffect } from 'react';



function Categories() {

    const [isLoading, setIsLoading] = useState(true)
    const [loadedCategories, setLoadedCategories] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedCategories(data)
        });
    }, [])
    
    if (isLoading) {
        return (
            <div>Categories are being loaded..</div>
        )
    }

    return (
        <div>
            <Link to="add-category">
                <button>Add Category</button>
            </Link>
            <CategoryList categories={loadedCategories} />
        </div>
    )
}

export default Categories