import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
    // console.log(cart);

    const handleRemove = (item) => {
        console.log(item);
    }

    return (
        <div>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="img-name">
                        <img src={item.picture} alt="" />
                        <h4>{item.name}</h4>
                    </div>
                    <div>
                        <h4>{item.price}</h4>
                    </div>
                    <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
