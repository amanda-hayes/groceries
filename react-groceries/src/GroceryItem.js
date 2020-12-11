import React from 'react';

const GroceryItem = ({ item }) => {
    return (
        <div>     
            <h1 className="item-name">{item}</h1>    
        </div>
    )
}

export default GroceryItem;