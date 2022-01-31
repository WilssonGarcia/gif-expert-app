import React, { useState } from 'react';
import  PropTypes  from "prop-types";

export const AddCategory = ({ handleAddCategory }) => {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (category.trim().length > 2) {
            handleAddCategory(category);
            setCategory('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={category}
                onChange={handleCategoryChange} />
        </form>
    );
};

AddCategory.propTypes = {
    handleAddCategory: PropTypes.func.isRequired
}
