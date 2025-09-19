import { color } from "chart.js/helpers";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.navbarWrap}>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.brand}>
          <span style={styles.logo}>🌱</span>
          <span style={styles.name}>AgriFuture</span>
        </Link>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={styles.navLinks}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/About" style={styles.link}>About</Link>
            <Link to="/Modern" style={styles.link}>Modern Farming</Link>
            <Link to="/Marketing" style={styles.link}>Marketing</Link>
            <Link to="/View" style={styles.link}>View</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        )}

        {/* Hamburger for Mobile */}
        {isMobile && (
          <button
            style={styles.hamb}
            className={open ? "active" : ""}
            onClick={() => setOpen(!open)}
          >
            <span style={styles.bar}></span>
            <span style={styles.bar}></span>
            <span style={styles.bar}></span>
          </button>
        )}

        {/* Wave Effect */}
        <div style={styles.wave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path
              d="M0,32 C120,52 240,64 360,64 C540,64 600,16 780,16 C960,16 1080,64 1260,64 C1340,64 1390,56 1440,48 L1440,80 L0,80 Z"
              fill="rgba(255,255,255,0.85)"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile Panel */}
      {isMobile && open && (
        <div style={styles.mobilePanel}>
          <Link to="/" style={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/About" style={styles.mobileLink} onClick={() => setOpen(false)}>About</Link>
           <Link to="/Modern" style={styles.mobileLink} onClick={() => setOpen(false)}>Modern Farming</Link>
          <Link to="/Marketing" style={styles.mobileLink} onClick={() => setOpen(false)}>Marketing</Link>
          <Link to="/View" style={styles.mobileLink} onClick={() => setOpen(false)}>View</Link>
          <Link to="/contact" style={styles.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

const styles = {
  navbarWrap: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    boxShadow: "0 6px 20px rgba(0,0,0,.12)",
  },
  navbar: {
    position: "relative",
    background: "linear-gradient(135deg,#4CAF50,#2E7D32)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    overflow: "hidden",
  },
  brand: { display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "white" },
  logo: { fontSize: "30px" },
  name: { fontSize: "30px", fontWeight: "700" },
  navLinks: { display: "flex",fontSize: "20px", gap: "20px", },
  link: { color: "white", textDecoration: "none", fontWeight: "500" },
  hamb: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30px",
    height: "24px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  bar: { height: "3px", width: "100%", background: "white", borderRadius: "2px" },
  wave: { position: "absolute", left: 0, right: 0, bottom: "-1px", height: "50px", pointerEvents: "none" },
  mobilePanel: {
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(180deg, rgba(76,175,80,.8), rgba(46,125,50,.9))",
    padding: "15px",
    backdropFilter: "blur(6px)",
  },
  mobileLink: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    margin: "5px 0",
    background: "rgba(255,255,255,.1)",
    borderRadius: "8px",
  },
};

export default Navbar;
