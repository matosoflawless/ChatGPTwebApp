import React, { useState } from "react";

const HeroTofuForm = ({ handleOrder, cartItems }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email content with cart items and quantities
    const emailContent = cartItems
      .map((item) => `${item.name}: Quantity - ${item.quantity}`)
      .join("\n");

    // Call the handleOrder function with the email content
    handleOrder(emailContent);

    // Reset form fields
    setName("");
    setEmail("");
  };

  return (
    <form
      action="https://public.herotofu.com/v1/d4915370-31f0-11ee-9093-f9d31d228b92"
      method="post"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          name="Name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">rissoiserolos@gmail.com</label>
        <input
          name="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input type="submit" value="Place Order" />
        <div
          style={{
            textIndent: "-99999px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "absolute",
          }}
          aria-hidden="true"
        >
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </div>
      </div>
    </form>
  );
};

export default HeroTofuForm;