import React from 'react';
import './Fruit.css';

const Fruit = ({fruit, addToCart}) => {
    const {name, picture, price} = fruit;
    
    return (
        <div className='fruit-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>Price : {price}</h3>
            <button className='add-btn' onClick={() => addToCart(fruit)}>Add To Cart</button>
        </div>
    );
};

export default Fruit;