import React, { useState, useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import headphones from "../images/headphones.jpg";
import watch from "../images/watch.jpg";
import wallet from "../images/wallet.jpg";
import sneakers from "../images/sneakers.jpg";
import speaker from "../images/speaker.jpg";
import chair from "../images/chair.jpg";

const sampleProducts = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 120, img: headphones },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 150, img: watch },
  { id: 3, name: "Leather Wallet", category: "Fashion", price: 45, img: wallet },
  { id: 4, name: "Sneakers", category: "Fashion", price: 80, img: sneakers },
  { id: 5, name: "Bluetooth Speaker", category: "Electronics", price: 100, img: speaker },
  { id: 6, name: "Office Chair", category: "Home", price: 220, img: chair },
];

function Products() {
  const [category, setCategory] = useState("All");
  const { addToCart } = useContext(CartContext);

  const filtered = category === "All"
    ? sampleProducts
    : sampleProducts.filter((item) => item.category === category);

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="filter-bar">
        {["All", "Electronics", "Fashion", "Home"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;