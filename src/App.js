import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Fruit from "./Fruit/Fruit";
import Cart from "./Cart/Cart";

function App() {
    const [fruits, setFruits] = useState([]);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch("fake.json")
            .then((res) => res.json())
            .then((data) => setFruits(data));
    }, []);

    const addToCart = (fruit) => {
        let isPresent = false;
        cart.forEach((item) => {
            if (item.id === fruit.id) {
                isPresent = true;
            }
        });
        if (isPresent) {
          setWarning(true);
            setTimeout(() => {
              setWarning(false);
            }, 2000)
            return;
        } else {
            const newCart = [...cart, fruit];
            setCart(newCart);
        }

    };

    const getRandomItem = () => {
      const arr = Math.floor(Math.random()*cart.length);
      const item = cart[arr];
      setRandom(item);
    }

    return (
        <div className="fruits-shop">
            <h1>All Items</h1>
            <button className="random-btn" onClick={() => getRandomItem()}>Random</button>
            <div className="fruits-container">
                {fruits.map((fruit) => (
                    <Fruit
                        fruit={fruit}
                        key={fruit.id}
                        addToCart={addToCart}
                    ></Fruit>
                ))}
            </div>
            <div>
                <Cart cart={cart} setCart={setCart} random = {random}></Cart>
            </div>
            {
              warning && <div className="warning">Item already added on your cart</div>
            }
        </div>
    );
}

export default App;
