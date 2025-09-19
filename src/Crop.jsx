import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import groundnut from "./assets/groundnut.jpg";
import carrot from "./assets/carrot.jpg";
import potato from "./assets/potato.jpg";
import watermelon from "./assets/watermelon.jpg";
import garlic from "./assets/garlic.jpg";
import onion from "./assets/onion.jpg";
import cucumber from "./assets/cucumber.jpg";
import sweet from "./assets/sweet potato.jpg";
import muskmelon from "./assets/muskmelon.jpg";

import paddy from "./assets/paddy.jpg";
import wheat from "./assets/wheat.jpg";
import sugarcane from "./assets/sugercane.jpg";
import cotton from "./assets/cotton.jpg";
import pulse from "./assets/pulse.jpg";
import guava from "./assets/guava.jpg";
import banana from "./assets/banana.jpg";
import chilli from "./assets/chilli.jpg";
import tomato from "./assets/tomato.jpg";

import brinjal from "./assets/brinjal.jpg";
import rice from "./assets/rice.jpg";
import lotus from "./assets/lotus.jpg";

import cholam from "./assets/cholam.jpg";
import bajra from "./assets/kambu.jpg";
import oilseeds from "./assets/oilseeds.jpg";
import citrus from "./assets/citrus.jpg";
import graps from "./assets/graps.jpg";

import ragi from "./assets/ragi.jpg";
import pomagranet from "./assets/pomagranet.jpg";
import mango from "./assets/mango.jpg";

import soybean from "./assets/soyaben.jpg";
import mustard from "./assets/mustard.jpg";
import spinach from "./assets/spinach.jpg";
import ladysfinger from "./assets/ladiesfinger.jpg";
import cabbage from "./assets/cabage.jpg";
import pea from "./assets/peas.jpg";

import sandy from "./assets/sandy soil.jpg";
import silty from "./assets/silty soil.jpg";
import loamy from "./assets/loamy soil.jpg";
import red from "./assets/red soil.jpg";
import clay from "./assets/clay soil.jpg";
import black from "./assets/black soil.jpg";
import { h1 } from "framer-motion/client";

const Crop = () => {
  const [soil, setSoil] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [columns, setColumns] = useState(1); // for responsive grid
  const navigate = useNavigate();

  // ✅ Update grid columns on resize
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 769) {
        setColumns(1); // mobile
      } else if (window.innerWidth < 1025) {
        setColumns(2); // tablet
      } else {
        setColumns(3); // desktop
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const cropData = {
      sandy: [
        { name: "Groundnut", emoji: "🌰", img: groundnut },
        { name: "Carrot", emoji: "🥕", img: carrot },
        { name: "Potato", emoji: "🥔", img: potato },
        { name: "Watermelon", emoji: "🍉", img: watermelon },
        { name: "Garlic", emoji: "🧄", img: garlic },
        { name: "Onion", emoji: "🧄", img: onion },
        { name: "Cucumber", emoji: "🥒", img: cucumber },
        { name: "Sweet Potato", emoji: "🍠", img: sweet },
        { name: "Muskmelon", emoji: "🍈", img: muskmelon },
      ],
      clay: [
        { name: "Rice", emoji: "🌾", img: rice },
        { name: "Tomato", emoji: "🍅", img: tomato },
        { name: "Chilli", emoji: "🌶", img: chilli },
        { name: "Lotus", emoji: "🌸", img: lotus },
        { name: "Brinjal", emoji: "🍆", img: brinjal },
        { name: "Lentils", emoji: "🥬", img: pulse },
      ],

      loamy: [
        { name: "Wheat", emoji: "🌿", img: wheat },
        { name: "Sugarcane", emoji: "🍬", img: sugarcane },
        { name: "Cotton", emoji: "🧶", img: cotton },
        { name: "chilli", emoji: "🥦", img: chilli },
        { name: "pulses", emoji: "🥦", img: pulse },
        { name: "paddy", emoji: "🥦", img: paddy },
        { name: "Banana", emoji: "🥦", img: banana },
        { name: "Guava", emoji: "🥦", img: guava },
        { name: "Tomato", emoji: "🥦", img: tomato },
      ],
      black: [
        { name: "Cotton", emoji: "🌱", img: cotton },
        { name: "Jowar", emoji: "🫘", img: cholam },
        { name: "Bajra", emoji: "🌿", img: bajra },
        { name: "Wheat", emoji: "🌿", img: wheat },
        { name: "sugarcane", emoji: "🌿", img: sugarcane },
        { name: "oilseeds", emoji: "🌿", img: oilseeds },
        { name: "pulses", emoji: "🌿", img: pulse },
        { name: "Citrus Fruits", emoji: "🌿", img: citrus },
        { name: "Grapes", emoji: "🌿", img: graps },
      ],
      silty: [
        { name: "Maize", emoji: "🌱", img: cholam },
        { name: "Soybean", emoji: "🫘", img: soybean },
        { name: "Mustard", emoji: "🌿", img: mustard },
        { name: "Pulses", emoji: "🌿", img: pulse },
        { name: "Spinach", emoji: "🌿", img: spinach },
        { name: "Lady's Finger", emoji: "🌿", img: ladysfinger },
        { name: "Cabbage", emoji: "🌿", img: cabbage },
        { name: "Pea", emoji: "🌿", img: pea },
      ],
      red: [
        { name: "Millets", emoji: "🌾", img: ragi },
        { name: "Groundnut", emoji: "🌰", img: groundnut },
        { name: "Potato", emoji: "🥔", img: potato },
        { name: "Mango", emoji: "🥭", img: mango },
        { name: "Pomegranate", emoji: "🥭", img: pomagranet },
        { name: "pulses", emoji: "🌿", img: pulse },
        { name: "Citrus Fruits", emoji: "🌿", img: citrus },
        { name: "Grapes", emoji: "🌿", img: graps },
        { name: "Guava", emoji: "🥦", img: guava },
      ],
      // ... keep other soils same
    };

    const crops = cropData[soil.toLowerCase()] || [];
    setRecommendation({ soil, temperature, rainfall, crops });
  };

  return (
    <div style={styles.container}>
      <h1>🌱 Crop Recommendation System</h1>
      <p>
        Enter your soil type, average temperature, and rainfall to get the best crop
        suggestions.
      </p>

      <div style={styles.decorativeImages}>
        {[
          { type: "Sandy", img: sandy },
          { type: "Silty", img: silty },
          { type: "Loamy", img: loamy },
          { type: "Clay", img: clay },
          { type: "Red", img: red },
          { type: "Black", img: black },
        ].map((soilItem) => (
          <img
            key={soilItem.type}
            src={soilItem.img}
            alt={soilItem.type}
            style={{
              ...styles.decorativeImage,
              boxShadow:
                soil.toLowerCase() === soilItem.type.toLowerCase()
                  ? "0 0 25px 8px #8A2BE2" // glow effect for selected soil
                  : "none",
              transform:
                soil.toLowerCase() === soilItem.type.toLowerCase()
                  ? "scale(1.1)"
                  : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Soil Type:
          <select
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            required
            style={styles.input}
          >
            <option value="">--Select--</option>
            <option value="Sandy">Sandy</option>
            <option value="Clay">Clay</option>
            <option value="Loamy">Loamy</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Silty">Silty</option>
          </select>
        </label>

        <label>
          Temperature (°C):
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
            style={styles.input}
          />
        </label>

        <label>
          Rainfall (mm):
          <input
            type="number"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            required
            style={styles.input}
          />
        </label>

        <button type="submit" style={styles.button}>
          Get Recommendation 🚀
        </button>
      </form>

      {recommendation && (
        <div style={styles.result}>
          <h2>✅ Recommended Crops:</h2>
          <p>
            For <b>{recommendation.soil}</b> soil, with{" "}
            <b>{recommendation.temperature}°C</b> temperature and{" "}
            <b>{recommendation.rainfall}mm</b> rainfall, the best crops are:
          </p>

          {/* ✅ Responsive Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: "20px",
              marginTop: "20px",
              justifyItems: "center",
            }}
          >
            {recommendation.crops.map((crop, index) => (
              <div
                key={index}
                onMouseEnter={(e) => {
                  setHoveredIndex(index);
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  setHoveredIndex(null);
                  e.currentTarget.style.transform = "scale(1)";
                }}
                style={{
                  ...styles.card,
                  boxShadow:
                    hoveredIndex === index
                      ? "0 8px 20px rgba(0, 0, 0, 0.88)"
                      : "0 4px 10px rgba(0,0,0,0.15)",
                }}
              >
                <img src={crop.img} alt={crop.name} style={styles.image} />
                <h3>
                  {crop.emoji} {crop.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Button to View */}
          <Link to="/View">
            <button
              onClick={() => {
                handleSubmit();
                navigate("/view", { state: { recommendation } });
              }}
              style={styles.soilButton}
              disabled={!soil || !temperature || !rainfall}
            >
              View Details 🚀
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    Width: "100%",
    height:"100vh",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
    lineHeight: "1.8",
    fontSize: "17.5px",
    overflowX: "hidden",
    background: "linear-gradient(to right, #d9f99d, #ffffff, #ecfccb)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    margin: "20px 0",
    alignItems: "center",
  },
  input: {
    margin: "auto",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #201e1eff",
  },
  button: {
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
    width: "200px",
    height: "50px",
  },
  result: {
    marginTop: "20px",
  },
  card: {
    background: "#f8f8f8",
    padding: "10px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "400px",
    height: "300px",
    transition: "all 0.3s ease",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  soilButton: {
    padding: "12px 25px",
    background: "#279523ff",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "20px 0",
    transition: "all 0.3s ease",
    marginTop: "20px",
  },
  decorativeImages: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "15px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  decorativeImage: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s ease-in-out",

  },
};

export default Crop;
