import React, { useState } from "react";
import "./style.css";
import HeroTofuForm from "./HeroTofuForm"; // Import the modified HeroTofuForm component

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartOpen(true);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const handleOrder = (emailContent) => {
    // Here, you can use your email sending logic
    // This example logs the email content to the console
    console.log("Email content:", emailContent);

    // Clear the cart after placing the order
    setCartItems([]);
    setCartOpen(false);
  };

  const products = [
    {
      id: 1,
      name: "Rissóis de Carne",
      description: "Rissóis recheados com carne",
    },
    {
      id: 2,
      name: "Rissóis de Camarão",
      description: "Rissóis recheados com 2 camarões",
    },
    {
      id: 3,
      name: "Rissóis de Pizza",
      description: "Rissóis recheados com todo o sabor de uma pizza típica Portuguesa",
    },
  ];

  return (
    <div className="app">
      <header>
        <img src="src\images\LOGO SAL E AÇUCAR (1).png" alt="Big Image" className="responsive-image" />
        <h1>Bem vindo à Sal e Açúcar</h1>
      </header>
  
      <main>
        <h2 className="list-heading">Lista de produtos</h2>
        <ul className="card-list">
          {products.map((product) => (
            <li key={product.id} className="card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </main>
  
      {isCartOpen && (
        <div className="cart-panel">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          {/* Pass the handleOrder function to the HeroTofuForm */}
          <HeroTofuForm handleOrder={handleOrder} cartItems={cartItems} />
        </div>
      )}
    </div>
  );
}

export default App;