import React from "react";
import { motion } from "framer-motion";

export default function AboutAgriculture() {
  return (
    <div className="about-container">
      {/* Page Title */}
      <motion.h1
        className="page-title"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.05 }}
      >
        About Agriculture
      </motion.h1>

      {/* Content Wrapper */}
      <motion.div className="content-wrapper">
        {[
          {
            title: "🌱 History of Agriculture",
            text: [
              "Agriculture is one of humanity’s oldest practices, dating back over 10,000 years. Early humans transitioned from hunting and gathering to cultivating crops and domesticating animals. This transformation gave rise to permanent settlements and the foundations of civilization.",
              "Ancient societies like Mesopotamia, Egypt, and the Indus Valley flourished because of agricultural advancements such as irrigation, plowing, and crop rotation.",
            ],
          },
          {
            title: "💰 Importance in Economy",
            text: [
              "Agriculture remains the backbone of many economies. It provides food for billions, raw materials for industries, and employment for millions of people worldwide.",
            ],
            list: [
              "Supports rural livelihoods.",
              "Supplies cotton, jute, sugarcane, and more.",
              "Contributes to GDP and exports.",
              "Ensures global food security.",
            ],
          },
          {
            title: "🌍 Modern Relevance",
            text: [
              "In today’s world, agriculture is merging with technology. Drones, IoT-based systems, and AI are making farming smarter and more productive while promoting sustainability.",
              "Governments and organizations are emphasizing eco-friendly practices to fight climate change and feed the growing global population.",
            ],
          },
          {
            title: "🚀 Future of Agriculture",
            text: [
              "The future of agriculture lies in vertical farming, hydroponics, bioengineering, and precision farming. These innovations will help maximize yield while protecting the environment.",
              "With a growing population, agriculture will continue to shape the world’s food systems and economies for decades to come.",
            ],
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Animated Title */}
            <motion.h2
              className="section-title"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {section.title}
            </motion.h2>

            {/* Paragraphs wave effect */}
            {section.text.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
              >
                {p}
              </motion.p>
            ))}

            {/* List Items with rotate-in effect */}
            {section.list && (
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.25 } },
                }}
              >
                {section.list.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, rotateY: -90 },
                      visible: { opacity: 1, rotateY: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.section>
        ))}
      </motion.div>

      {/* Internal CSS */}
      <style>{`
        .about-container {
          background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb);
          min-height: 100vh;
          padding: 3rem;
          font-family: Arial, sans-serif;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 750;
          color: #14532d;
          margin-bottom: 3rem;
          text-align: center;
        }

        .content-wrapper {
          max-width: 900px;
          margin: 0 auto;
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }

        .section {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #166534;
          margin-bottom: 1rem;
          transition: transform 0.3s ease-in-out;
        }

        ul {
          margin-top: 1rem;
          margin-left: 1.5rem;
        }

        ul li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
