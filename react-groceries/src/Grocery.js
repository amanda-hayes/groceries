import React from 'react';
import GroceryItem from './GroceryItem';

const Grocery = (props) => {
    const { item, brand, price, quantity, isPurchased } = props.data;
    return (
            <div>
                <GroceryItem item={item} />
                    <p>{brand}</p>
                    <p>{price}</p>
                    <p>{quantity}</p>
            </div>
    )
}

export default Grocery;