import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

import heroBg from "../Assets/Css/Images/backgroundgirlhomepage.png";
import womenImg from "../Assets/Css/Images/women.png";
import menImg from "../Assets/Css/Images/men.png";
import kidImg from "../Assets/Css/Images/kid.png";
import menImg1 from "../Assets/Css/Images/men_6.jpeg";
import womenImg1 from "../Assets/Css/Images/women_2.jpg";
import womenImg2 from "../Assets/Css/Images/women_7.jpg";
import kidImg1 from "../Assets/Css/Images/kid_1.png";

function HomePage() {
  return (
    <>
      {/* Navbar */}

      <nav className="navbar-custom">

        <div className="logo" >
          <span color="white" italic>Fab Fit</span>
        </div>

        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
          <li>Offers</li>
          <li>Contact Us</li>
        </ul>
        <div className="search-container">

  <input
    type="text"
    placeholder="Search Products"
    className="search-box"
  />

  <i className="bi bi-search search-icon"></i>

</div>
        <div className="d-flex gap-4">

  <a href="#" className="text-white text-decoration-none">
    <i className="bi bi-heart"></i>
    <span className="ms-1">Wishlist</span>
  </a>

  <a href="#" className="text-white text-decoration-none">
    <i className="bi bi-bag"></i>
    <span className="ms-1">Orders</span>
  </a>

  <a href="#" className="text-white text-decoration-none">
  <i className="bi bi-cart"></i>
  <span className="ms-1">Cart</span>
</a>

<Link to="/login">
  <button className="login-btn">
    Login
  </button>
</Link>

<a href="#" className="text-white text-decoration-none">
  <i className="bi bi-person-circle"></i>
</a>
</div>

      </nav>

      {/* Hero Section */}

      <div className="container">

        <div
          className="hero-section"
          style={{
            backgroundImage: `url(${heroBg})`
          }}
        >

          <div className="hero-content">

            <h6>LIMITED TIME ONLY</h6>

            <h2>FLAT</h2>

            <h1>50% OFF</h1>

            <h3>Summer Sale</h3>

            <p>
              Fresh styles. Cool looks. Hot offers.
            </p>

            <button>
              SHOP NOW
            </button>

          </div>

        </div>

      </div>

      {/* Categories */}

      <div className="container">

        <h2 className="section-title">
          Categories
        </h2>

        <div className="category-row">

          <div className="category-card">

            <img src={womenImg} alt="Women" />

            <div>
              <h4>Women</h4>
              <p>Explore Now →</p>
            </div>

          </div>

          <div className="category-card">

            <img src={menImg} alt="Men" />

            <div>
              <h4>Men</h4>
              <p>Explore Now →</p>
            </div>

          </div>

          <div className="category-card">

            <img src={kidImg} alt="Kids" />

            <div>
              <h4>Kids</h4>
              <p>Explore Now →</p>
            </div>

          </div>

        </div>

      </div>

      {/* Trending Products */}

      <div className="container">

        <h2 className="section-title">
          Trending Products
        </h2>

        <div className="product-row">

          <div className="product-card">

    <img
        src={menImg1}
        alt="Mens Casual Shirt"
        className="product-img"
    />

    <div className="product-body">

        <h5 className="product-title">
            Mens casual shirt
        </h5>

        <div className="price-row">
    <span className="current-price">₹1299</span>
    <span className="old-price">₹2599</span>
    <span className="discount">50% OFF</span>
</div>

<div className="cart-rating-row">
    <button className="cart-btn">
        Add To Cart
    </button>

    <span className="rating">
        ★★★★☆ (120)
    </span>
</div>

<button className="buy-btn">
    Buy Now
</button>
    </div>

</div>

          <div className="product-card">
            <img
        src={womenImg1}
        alt="Mens Casual Shirt"
        className="product-img"
    />
    <div className="product-body">
      <h5 className="product-title">
            Party Wear Gown</h5>
            <div className="price-row">
    <span className="current-price">₹1241</span>
    <span className="old-price">₹1799</span>
    <span className="discount">31% OFF</span>
</div>
            <div className="cart-rating-row">
    <button className="cart-btn">
        Add To Cart
    </button>

    <span className="rating">
        ★★★★★ (210)
    </span>
</div>

<button className="buy-btn">
    Buy Now
</button>
</div>
          </div>

          <div className="product-card">
            <img
        src={womenImg2}
        alt="Mens Casual Shirt"
        className="product-img"
    />
    <div className="product-body">
            < h5 className="product-title">
            Stylish Crop Top</h5>
            <div className="price-row">
    <span className="current-price">₹701</span>
    <span className="old-price">₹899</span>
    <span className="discount">22% OFF</span>
</div>
            <div className="cart-rating-row">
    <button className="cart-btn">
        Add To Cart
    </button>

    <span className="rating">
        ★★★★☆ (160)
    </span>
</div>

<button className="buy-btn">
    Buy Now
</button>
          </div>
          </div>

          <div className="product-card">
            <img
        src={kidImg1}
        alt="Mens Casual Shirt"
        className="product-img"
    />
    <div className="product-body">
            <h5 className="product-title">Kids Hoodie</h5>
            <div className="price-row">
    <span className="current-price">₹700</span>
    <span className="old-price">₹999</span>
    <span className="discount">30% OFF</span>
</div>
            <div className="cart-rating-row">
    <button className="cart-btn">
        Add To Cart
    </button>

    <span className="rating">
        ★★★★☆ (95)
    </span>
</div>

<button className="buy-btn">
    Buy Now
</button>
          </div>
</div>
        </div>

      </div>

      {/* Why Shop */}

      <div className="container why-shop">

        <h2 >
          Why Shop With <span style={{ fontStyle: "italic" }}>Fab Fit</span>?
        </h2>

       <div className="why-row">

    <div className="why-item">
        <i className="bi bi-tags"></i>
        <h5>Best Prices</h5>
    </div>

    <div className="why-item">
        <i className="bi bi-box-seam"></i>
        <h5>Perfect Packing</h5>
    </div>

    <div className="why-item">
        <i className="bi bi-truck"></i>
        <h5>Fast Delivery</h5>
    </div>

    <div className="why-item">
        <i className="bi bi-shield-check"></i>
        <h5>Secure Payment</h5>
    </div>

    <div className="why-item">
        <i className="bi bi-arrow-repeat"></i>
        <h5>Easy Return</h5>
    </div>

    <div className="why-item">
        <i className="bi bi-patch-check"></i>
        <h5>Premium Quality</h5>
    </div>

</div>

      </div>

      {/* Footer */}

      <footer className="footer">

        <div className="footer-grid">

          <div>
            <h3 className="footer-logo">Fab Fit</h3>
            <p>Fashion For Everyone</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>Category</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>

          <div>
            <h4>Group Companies</h4>
            <p>BODEGA</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>FAQ</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 <span style={{ fontStyle: "italic" }} >Fab Fit</span>. Fashion For Everyone.
          All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default HomePage;