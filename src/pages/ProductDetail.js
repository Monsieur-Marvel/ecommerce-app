import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

// Sample products (same as Products.js — later we'll move this to a shared file or backend)
const products = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 120, description: "High-quality wireless headphones with noise cancellation.", img: "https://via.placeholder.com/400" },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 150, description: "Track your health and stay connected on the go.", img: "https://via.placeholder.com/400" },
  { id: 3, name: "Leather Wallet", category: "Fashion", price: 45, description: "Premium handcrafted leather wallet.", img: "https://via.placeholder.com/400" },
  { id: 4, name: "Sneakers", category: "Fashion", price: 80, description: "Comfortable and stylish sneakers for everyday wear.", img: "https://via.placeholder.com/400" },
  { id: 5, name: "Bluetooth Speaker", category: "Electronics", price: 100, description: "Portable Bluetooth speaker with deep bass sound.", img: "https://via.placeholder.com/400" },
  { id: 6, name: "Office Chair", category: "Home", price: 220, description: "Ergonomic office chair with adjustable height and lumbar support.", img: "https://via.placeholder.com/400" },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="detail-container">
        <img src={product.img} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="category">{product.category}</p>
          <p className="price">${product.price}</p>
          <p className="desc">{product.description}</p>
          <button className="add-cart">Add to Cart</button>
          <button className="back" onClick={() => navigate("/products")}>← Back</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;