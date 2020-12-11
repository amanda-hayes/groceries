import React from 'react';
import GroceryItem from './GroceryItem';

const Grocery = (props) => {
    const { item, brand, price, quantity, isPurchased } = props.data;
    return (
            <div>
                <GroceryItem item={item} />
                <label>
                 <input type="checkbox" checked={GroceryItem.isPurchased} /> 
                   
                </label>
                    <p>{brand}</p>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <p>{GroceryItem.isPurchased}</p>  
            </div>
    )
}

export default Grocery;