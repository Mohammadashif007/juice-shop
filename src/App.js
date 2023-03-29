import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Fruit from "./Fruit/Fruit";
import Cart from "./Cart/Cart";

function App() {
  const [fruits, setFruits] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  const addToCart = (fruit) => {
    const newCart = [...cart, fruit];
    setCart(newCart);
  }
  return (
    <div className="fruits-shop">
      <h1><span className="name-color">Anik's</span> Juice Shop</h1>
      <div className="fruits-container">
        {fruits.map((fruit) => (
          <Fruit fruit={fruit} key={fruit.id} addToCart = {addToCart}></Fruit>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
