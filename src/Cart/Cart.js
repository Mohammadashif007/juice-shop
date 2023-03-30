import React, { useState } from "react";
import "./Cart.css";
import "../App.css";

const Cart = ({ cart, setCart, random }) => {

    const handleRemove = (item) => {
        const arr = cart.filter(product => item.id !== product.id);
        setCart(arr);
        
    }

    return (
        <div>
            {random.name && random.picture && random.price?<div className="random-item">
                <img src={random.picture} alt="" />
                <h3>{random.name}</h3>
                <h3>{random.price}</h3>
            </div>:cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="img-name">
                        <img src={item.picture} alt="" />
                        <h4>{item.name}</h4>
                    </div>
                    <div>
                        <h4>{item.price}</h4>
                    </div>
                    <button onClick={() => handleRemove(item)} className="random-btn">Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
