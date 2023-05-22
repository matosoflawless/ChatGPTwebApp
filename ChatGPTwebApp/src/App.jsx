import React from "react";
import "./style.css";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setCartOpen] = React.useState(false);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartOpen(true); // Open the cart panel when adding items
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  // Function to handle the "Encomendar" button click
  const handleOrder = () => {
    // Send email with the cart items
    // Implement your email sending logic here
    const emailContent = cartItems.map((item) => `${item.name}: ${item.description}`).join('\n');
    console.log('Email content:', emailContent);

    // Clear the cart after placing the order
    setCartItems([]);
    setCartOpen(false); // Close the cart panel after placing the order
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
      name: "Rissóis de pizza",
      description: "Rissóis recheados com todo o sabor de uma pizza típica Portuguesa",
    },
  ];

  return (
    <div className="app">
      <header>
        <img src="src\images\LOGO SAL E AÇUCAR (1).png" alt="Big Image" className="responsive-image" />
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
          <h2>Cart</h2>
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
          <button onClick={handleOrder} disabled={cartItems.length === 0}>
            Encomendar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;