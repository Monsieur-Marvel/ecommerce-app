import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to <span>Marvel's Store</span></h1>
        <p>Your one-stop store for quality and style.</p>
        <Link to="/products" className="shop-btn">Shop Now</Link>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>Quality Products</h3>
          <p>We source the best brands and deliver top-tier quality.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Swift, reliable, and always on time — right to your doorstep.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>Your safety comes first. Pay securely through trusted gateways.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;