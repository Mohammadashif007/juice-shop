import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Cart item : {cart.length}</h1>
        </div>
    );
};

export default Cart;