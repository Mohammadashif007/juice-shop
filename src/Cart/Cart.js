import React, { useState } from "react";
import "./Cart.css";
import "../App.css";

const Cart = ({ cart, setCart, random }) => {
    console.log(random);

    const handleRemove = (item) => {
        // console.log(item);
        
    }

    return (
        <div>
            {random.name?<h2>{random.name}</h2>:cart.map((item) => (
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
