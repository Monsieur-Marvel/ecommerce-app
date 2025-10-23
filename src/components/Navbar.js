import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const [animateCount, setAnimateCount] = useState(false);
  const navRef = useRef(null);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0) || 0;

  // Animate cart number when it changes
  useEffect(() => {
    if (totalItems > 0) {
      setAnimateCount(true);
      const timeout = setTimeout(() => setAnimateCount(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

   // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-left">
        {/* Logo card */}
        <Link to="/" className="logo-card">
          <span className="logo-text">Marvel's Store</span>
        </Link>

        {/* Cart Button beside logo */}
        <Link to="/cart" className="cart-btn">
          <FaShoppingCart className="cart-icon" />
          <span className={`cart-count ${animateCount ? "pop" : ""}`}>
            {totalItems}
          </span>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;