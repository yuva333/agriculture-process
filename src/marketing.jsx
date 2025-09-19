// MarketingPricingPage.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./MarketingPricingPage.css";

import wheat from "./assets/wheat.jpg";
import onion from "./assets/onion.jpg";
import rice from "./assets/rice.jpg";
import tomato from "./assets/tomato.jpg";
import potato from "./assets/potato.jpg";
import cholam from "./assets/cholam.jpg";
import carrot from "./assets/carrot.jpg";
import cabbage from "./assets/cabage.jpg";
import pea from "./assets/peas.jpg";

// ✅ Market Prices Fallback Data
const FALLBACK_PRICES = [
  { id: 1, crop: "Wheat", price: "₹2100 / quintal", demand: "High", img: wheat },
  { id: 2, crop: "Rice", price: "₹1850 / quintal", demand: "Moderate", img: rice },
  { id: 3, crop: "Maize", price: "₹1650 / quintal", demand: "Low", img: cholam },
  { id: 4, crop: "Tomato", price: "₹30 / kg", demand: "High", img: tomato },
  { id: 5, crop: "Potato", price: "₹25 / kg", demand: "Moderate", img: potato },
  { id: 6, crop: "Onion", price: "₹40 / kg", demand: "High", img: onion },
  { id: 7, crop: "Cabbage", price: "₹40 / kg", demand: "Moderate", img: cabbage },
  { id: 8, crop: "Pea", price: "₹50 / kg", demand: "High", img: pea },
];

// ✅ Product Marketplace Data
const PRODUCTS = [
  { crop: "Tomatoes", price: "₹25 / kg", img: tomato },
  { crop: "Potatoes", price: "₹30 / kg", img: potato },
  { crop: "Onions", price: "₹35 / kg", img: onion },
  { crop: "Carrots", price: "₹40 / kg", img: carrot },
];

export default function MarketingPricingPage() {
  const [prices, setPrices] = useState([]);
  const [view, setView] = useState("home");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [newCrop, setNewCrop] = useState({ crop: "", price: "", demand: "", img: "" });
  const [message, setMessage] = useState("");

  // ✅ Cart & Order States
  const [cart, setCart] = useState([]);
  const [orderState, setOrderState] = useState("viewCart"); // viewCart | success | cancelWithin | cancelExpired

  useEffect(() => {
    setTimeout(() => {
      setPrices(FALLBACK_PRICES);
    }, 800);
  }, []);

  // ✅ Sell Crop
  const handleSell = (e) => {
    e.preventDefault();
    if (!newCrop.crop || !newCrop.price || !newCrop.demand || !newCrop.img) return;
    setPrices([...prices, { id: Date.now(), ...newCrop }]);
    setNewCrop({ crop: "", price: "", demand: "", img: "" });
    setView("home");
    setMessage("✅ Crop listed for sale!");
  };

  // ✅ Buy Crop → Add to Cart
  const handleBuy = (cropId, cropName, price, img) => {
    setCart([...cart, { id: Date.now(), name: cropName, price, img, quantity: 1 }]);
    setMessage(`🛒 ${cropName} added to cart!`);
  };

  // ✅ Handle Marketplace Actions
  const handleAction = (action, crop) => {
    setMessage(`${action} successful for ${crop}! ✅`);
  };

  // ✅ Order Flow Content
  const renderOrderFlow = () => {
    if (orderState === "viewCart") {
      return (
        <div className="form-container">
          <h2 className="section-title">🛒 Your Shopping Cart</h2>
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div key={item.id} className="buy-item">
                  <div className="buy-info">
                    <img src={item.img} alt={item.name} className="buy-img" />
                    <span>
                      <strong>{item.name}</strong> – {item.price} × {item.quantity}
                    </span>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: "15px" }}>
                <p>Subtotal: ₹{cart.reduce((acc, item) => acc + parseInt(item.price.replace(/\D/g, "")) * item.quantity, 0)}</p>
                <p>Taxes: ₹100</p>
                <p>Shipping: ₹50</p>
                <h3>Total: ₹{cart.reduce((acc, item) => acc + parseInt(item.price.replace(/\D/g, "")) * item.quantity, 0) + 150}</h3>
              </div>
              <div className="details-actions">
                <button className="btn btn-sell" onClick={() => setOrderState("success")}>Proceed to Checkout ✅</button>
                <button className="btn btn-gray" onClick={() => setView("home")}>Continue Shopping ⬅️</button>
              </div>
            </>
          ) : (
            <p>🛒 Your cart is empty. Start shopping now!</p>
          )}
        </div>
      );
    }

    if (orderState === "success") {
      return (
        <div className="form-container" style={{ textAlign: "center" }}>
          <h2>🎉 Order Placed Successfully!</h2>
          <p>Order ID: #12345</p>
          <p>Estimated delivery: 3–5 days</p>
          <p>Email confirmation sent.</p>
          <div className="details-actions">
            <button className="btn btn-buy">Track Order</button>
            <button className="btn btn-gray" onClick={() => setOrderState("viewCart")}>View Cart</button>
            <button className="btn btn-sell" onClick={() => setOrderState("cancelWithin")}>Cancel Order ❌</button>
          </div>
        </div>
      );
    }

    if (orderState === "cancelWithin") {
      return (
        <div className="form-container" style={{ textAlign: "center" }}>
          <h2>⚠️ Your order has been cancelled.</h2>
          <p>Refund initiated (3–7 business days).</p>
          <div className="details-actions">
            <button className="btn btn-sell" onClick={() => setView("home")}>Shop Again 🌾</button>
            <button className="btn btn-gray" onClick={() => setOrderState("viewCart")}>View Cart</button>
          </div>
        </div>
      );
    }

    if (orderState === "cancelExpired") {
      return (
        <div className="form-container" style={{ textAlign: "center" }}>
          <h2>⏳ Sorry, cancellation period expired.</h2>
          <p>This order can no longer be cancelled.</p>
          <div className="details-actions">
            <button className="btn btn-buy">Contact Support 📞</button>
            <button className="btn btn-gray" onClick={() => setOrderState("viewCart")}>View Cart</button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="page-container">
      {/* ✅ Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-section"
      >
        <h1 className="hero-title">🌾 Agriculture Marketing & Pricing</h1>
        <p className="hero-subtitle">
          Connecting farmers directly with markets, ensuring transparency,
          better prices, and efficient supply chains.
        </p>
        <div className="hero-buttons">
          <button onClick={() => setView("sell")} className="btn btn-sell">Sell Crops 🌽</button>
          <button onClick={() => setView("buy")} className="btn btn-buy">Buy Crops 🛒</button>
          <button onClick={() => setView("cart")} className="btn btn-gray">View Cart 🛒</button>
        </div>
      </motion.div>

      {/* ✅ Alerts */}
      <AnimatePresence>
        {message && (
          <motion.div
            className="alert-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <span>{message}</span>
            <button className="close-btn" onClick={() => setMessage("")}>❌</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- HOME ---------------- */}
      {view === "home" && (
        <>
          {/* ✅ Market Prices */}
          <motion.div className="card-section">
            <h2 className="section-title">📈 Current Market Prices</h2>
            {prices.length === 0 ? (
              <p>No crops available right now.</p>
            ) : (
              <div className="grid-container">
                {prices.map((item) => (
                  <motion.div key={item.id} whileHover={{ scale: 1.05 }} className="crop-card">
                    <motion.img src={item.img} alt={item.crop} className="crop-img" />
                    <h3 className="crop-title">{item.crop}</h3>
                    <p className="crop-price">{item.price}</p>
                    <span className={`demand-badge ${item.demand.toLowerCase()}`}>Demand: {item.demand}</span>
                    <button onClick={() => { setSelectedCrop(item); setView("details"); }} className="btn btn-details">
                      More Details ℹ️
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* ✅ Marketplace */}
          <div className="marketplace-section">
            <h2 className="section-title">🛒 Fresh Products Marketplace</h2>
            <div className="grid-container">
              {PRODUCTS.map((product, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="product-card">
                  <img src={product.img} alt={product.crop} className="product-img" />
                  <div className="product-info">
                    <h3>{product.crop}</h3>
                    <p>{product.price}</p>
                    <div className="product-actions">
                      <motion.button whileTap={{ scale: 0.9 }} className="btn btn-sell"
                        onClick={() => { setNewCrop({ ...newCrop, crop: product.crop }); setView("sell"); }}>
                        Sell 🌾
                      </motion.button>
                      <motion.button whileTap={{ scale: 0.9 }} className="btn btn-buy"
                        onClick={() => handleBuy(idx, product.crop, product.price, product.img)}>
                        Buy 🛒
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ---------------- SELL ---------------- */}
      {view === "sell" && (
        <div className="form-container">
          <h2 className="section-title">🌽 Sell Crops</h2>
          <form onSubmit={handleSell} className="form">
            <input type="text" placeholder="Crop Name" value={newCrop.crop}
              onChange={(e) => setNewCrop({ ...newCrop, crop: e.target.value })} />
            <input type="text" placeholder="Price (e.g. ₹2000 / quintal)" value={newCrop.price}
              onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })} />
            <input type="text" placeholder="Image URL" value={newCrop.img}
              onChange={(e) => setNewCrop({ ...newCrop, img: e.target.value })} />
            <select value={newCrop.demand} onChange={(e) => setNewCrop({ ...newCrop, demand: e.target.value })}>
              <option value="">Select Demand</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
            <button type="submit" className="btn btn-sell">Submit 🚀</button>
            <button type="button" onClick={() => setView("home")} className="btn btn-gray">Back ⬅️</button>
          </form>
        </div>
      )}

      {/* ---------------- BUY ---------------- */}
      {view === "buy" && (
        <div className="form-container">
          <h2 className="section-title">🥦 Buy Produce</h2>
          {prices.length === 0 ? (
            <p>No crops available to buy right now.</p>
          ) : (
            <ul className="buy-list">
              {prices.map((item) => (
                <motion.li key={item.id} className="buy-item">
                  <div className="buy-info">
                    <img src={item.img} alt={item.crop} className="buy-img" />
                    <span><strong>{item.crop}</strong> – {item.price}</span>
                  </div>
                  <motion.button className="btn btn-buy"
                    onClick={() => handleBuy(item.id, item.crop, item.price, item.img)}>
                    Buy Now 🛒
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          )}
          <button onClick={() => setView("home")} className="btn btn-gray">Back ⬅️</button>
        </div>
      )}

      {/* ---------------- CART & ORDER FLOW ---------------- */}
      {view === "cart" && renderOrderFlow()}

      {/* ---------------- DETAILS ---------------- */}
      {view === "details" && selectedCrop && (
        <motion.div className="form-container">
          <img src={selectedCrop.img} alt={selectedCrop.crop} className="details-img" />
          <h2 className="section-title">ℹ️ Crop Details</h2>
          <p><strong>Crop:</strong> {selectedCrop.crop}</p>
          <p><strong>Price:</strong> {selectedCrop.price}</p>
          <p><strong>Demand:</strong> {selectedCrop.demand}</p>
          <div className="details-actions">
            <button onClick={() => handleBuy(selectedCrop.id, selectedCrop.crop, selectedCrop.price, selectedCrop.img)} className="btn btn-buy">Buy This 🛒</button>
            <button onClick={() => setView("home")} className="btn btn-gray">Back ⬅️</button>
          </div>
        </motion.div>
      )}


      {/* ---------------- SUPPLY CHAIN ---------------- */}
      <div className="supply-chain">
        <h2 className="section-title">🚚 Supply Chain Transparency</h2>
        <p>
          From <strong>Farmers</strong> ➝ <strong>Market Hubs</strong> ➝ <strong>Consumers</strong> –
          we ensure fair pricing, reduced middlemen, and faster delivery.
        </p>
        <div className="supply-steps">
          <div className="step">👨‍🌾 Farmers</div>
          <div className="step">🏪 Market</div>
          <div className="step">🛍️ Consumers</div>
        </div>
      </div>

      {/* ---------------- CALL TO ACTION ---------------- */}
      <div className="cta-section">
        <h2>🌱 Join the AgriFuture Movement</h2>
        <p>Empowering farmers & giving customers access to fresh, fairly priced produce.</p>
        <button className="btn btn-sell">Start Selling 🚜</button>
        <button className="btn btn-buy">Start Buying 🛒</button>
      </div>

      {/* ---------------- AWARENESS ---------------- */}
      <div className="awareness-section">
        <h2 className="section-title">📢 Awareness & Education</h2>
        <ul>
          <li>✅ Fair pricing ensures farmer sustainability</li>
          <li>✅ Buying local reduces carbon footprint</li>
          <li>✅ Seasonal crops = better quality & nutrition</li>
          <li>✅ Transparent supply chain builds trust</li>
        </ul>
      </div>

      {/* ---------------- DETAILS ---------------- */}
      <div className="details-section">
        <h2 className="section-title">ℹ️ Platform Benefits</h2>
        <div className="details-grid">
          <div className="detail-card">
            <h3>For Farmers</h3>
            <p>Direct access to markets, better pricing, and reduced middlemen.</p>
          </div>
          <div className="detail-card">
            <h3>For Consumers</h3>
            <p>Fresh produce at fair rates with supply chain transparency.</p>
          </div>
          <div className="detail-card">
            <h3>For Society</h3>
            <p>Supports sustainability, reduces waste, and promotes fair trade.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
