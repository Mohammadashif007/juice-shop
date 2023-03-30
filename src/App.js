import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Fruit from "./Fruit/Fruit";
import Cart from "./Cart/Cart";

function App() {
    const [fruits, setFruits] = useState([]);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

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

    return (
        <div className="fruits-shop">
            <h1>All Items</h1>
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
                <Cart cart={cart} setCart={setCart}></Cart>
            </div>
            {
              warning && <div className="warning">Item already added to your cart</div>
            }
        </div>
    );
}

export default App;
