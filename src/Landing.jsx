import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [text, setText] = useState("");
  const fullText = "🌱 Welcome to AgriFuture"; // ✅ emoji included
  const speed = 100;
  const navigate = useNavigate();

  useEffect(() => {
  const chars = Array.from(fullText);
  let i = 0;

  const typing = setInterval(() => {
    if (i < chars.length) {
      const currentChar = chars[i];
      if (currentChar !== undefined) {
        setText((prev) => prev + currentChar);
      }
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);

  return () => clearInterval(typing);
}, []);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "90vh",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/agrivideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.45)",
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
        }}
      >
        {/* Typing Heading */}
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          {text}
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "1.4rem",
            marginBottom: "25px",
          }}
        >
          Sustainable Farming • Smart Agriculture • Green Future
        </p>

        {/* Explore Button */}
        <button
          onClick={() => navigate("/Crop")}
          style={{
            padding: "12px 30px",
            fontSize: "1.5rem",
            border: "none",
            borderRadius: "30px",
            background: "#86f373",
            color: "black",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#5de17a";
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0px 4px 15px rgba(0,0,0,0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#86f373";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Landing;
