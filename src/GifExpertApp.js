import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const initialState = ['One Piece'];

const GifExpertApp = () => {
    const [categories, setCategories] = useState(initialState);

    const handleAddCategory = newCategory => {
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory handleAddCategory={handleAddCategory} />
            <hr />
            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category} />)
            }
        </>
    );
}

export default GifExpertApp;