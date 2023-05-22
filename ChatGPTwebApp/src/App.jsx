import React from "react";
import "./style.css";

function App() {
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
      description: "Rissóis rechados com todo o sabor de uma pizza tipica Portuguesa",
    },
  ];

  return (
    <div className="app">
      <header>
        <img src="src\images\LOGO SAL E AÇUCAR (1).png" alt="Big Image" className="responsive-image" />
      </header>

      <main>
      <h2 className="list-heading">Lista de produtos</h2>
        <ul>
          
  {products.map((product) => (
    <li key={product.id} className="list-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </li>
  ))}
</ul>
      </main>
    </div>
  );
}

export default App;