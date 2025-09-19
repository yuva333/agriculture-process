import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Edit & Delete icons

export default function ContactReviewsFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  const [reviews, setReviews] = useState([
    { name: "Alice", comment: "Great service! 🌾", rating: 5 },
    { name: "Bob", comment: "Very helpful and friendly team! 😃", rating: 4 },
    { name: "Charlie", comment: "Loved the experience! 👍", rating: 5 },
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit or update review
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update review
      const updatedReviews = [...reviews];
      updatedReviews[editIndex] = {
        name: formData.name,
        comment: formData.message,
        rating: Number(formData.rating),
      };
      setReviews(updatedReviews);
      setEditIndex(null);
    } else {
      // Add new review
      setReviews([
        { name: formData.name, comment: formData.message, rating: Number(formData.rating) },
        ...reviews,
      ]);
    }

    setFormData({ name: "", email: "", message: "", rating: 5 });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Edit review
  const handleEdit = (index) => {
    const review = reviews[index];
    setFormData({
      name: review.name,
      email: "",
      message: review.comment,
      rating: review.rating,
    });
    setEditIndex(index);
  };

  // Delete review
  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  // Render stars
  const renderStars = (num) => "⭐".repeat(num) + "☆".repeat(5 - num);

  // Show only last 10 reviews
  const displayedReviews = reviews.slice(0, 10);

  return (
    <div className="container">
      {/* Inline CSS */}
      <style>{`
        body { margin:0; font-family:'Segoe UI', sans-serif; background: linear-gradient(to right, #d9f99d, #ffffff, #ecfccb); }
        .container { max-width:1500px; width:100%; display:flex; flex-direction:column; align-items:center; padding:20px; }
        .header { text-align:center; margin-bottom:40px; }
        .header h1 { font-size:2.8rem; color:#065f46; margin-bottom:10px; }
        .header p { font-size:1.2rem; color:#065f46; }
        .section { background:#fff; padding:30px; margin-bottom:40px; border-radius:30px; box-shadow:0 10px 25px rgba(0,0,0,0.1); width:100%; max-width:900px; text-align:center; transition:transform 0.3s ease; }
        .section:hover { transform:scale(1.02); }
        .section h2 { font-size:2rem; color:#047857; margin-bottom:20px; }
        .contact-info p { margin:8px 0; font-size:1.1rem; color:#065f46; }
        .reviews-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:20px; }
        .review-card { background:#fff; padding:20px; border-radius:25px; box-shadow:0 5px 15px rgba(0,0,0,0.1); position:relative; transition:transform 0.3s ease; }
        .review-card:hover { transform:scale(1.05); }
        .review-card p { margin:5px 0; }
        .review-stars { color:#facc15; font-size:1.2rem; }
        .review-actions { position:absolute; top:10px; right:15px; display:flex; gap:10px; }
        .review-actions svg { cursor:pointer; color:#047857; transition:color 0.3s ease; }
        .review-actions svg:hover { color:#dc2626; }
        .feedback-form { display:flex; flex-direction:column; gap:15px; }
        .feedback-form input, .feedback-form textarea, .feedback-form select { padding:12px; border-radius:10px; border:1px solid #d1d5db; font-size:1rem; outline:none; transition:border 0.3s ease, box-shadow 0.3s ease; }
        .feedback-form input:focus, .feedback-form textarea:focus, .feedback-form select:focus { border-color:#10b981; box-shadow:0 0 5px rgba(16,185,129,0.5); }
        .feedback-form button { padding:12px; border:none; border-radius:10px; background-color:#10b981; color:#fff; font-weight:bold; cursor:pointer; transition: background-color 0.3s ease; }
        .feedback-form button:hover { background-color:#059669; }
        .submitted-msg { color:#10b981; font-weight:bold; margin-top:10px; text-align:center; animation:fadeIn 0.5s ease; }
        .extra-info { background-color:#dcfce7; padding:25px; border-radius:20px; box-shadow:inset 0 5px 10px rgba(0,0,0,0.05); text-align:center; }
        .extra-info h3 { color:#047857; font-size:1.8rem; margin-bottom:10px; }
        .extra-info p { color:#065f46; font-size:1rem; }
        @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
      `}</style>

      {/* Header */}
      <div className="header">
        <h1>📬 Contact & Feedback 🌱</h1>
        <p>We value your opinion! Contact us or submit feedback to help us improve. 💚</p>
      </div>

      {/* Contact Info */}
      <div className="section contact-info">
        <h2>Contact Information 📞</h2>
        <p>📍 Address: 123 Green Street, Farmville, India 🌾</p>
        <p>📞 Phone: +91 9876543210</p>
        <p>📧 Email: contact@agriculturefuture.com</p>
        <p>⏰ Working Hours: Mon - Sat (9:00 AM - 6:00 PM)</p>
      </div>

      {/* Reviews */}
      <div className="section">
        <h2>User Reviews 🌟</h2>
        <div className="reviews-grid">
          {displayedReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-actions">
                <FaEdit onClick={() => handleEdit(index)} />
                <FaTrash onClick={() => handleDelete(index)} />
              </div>
              <p className="review-stars">{renderStars(review.rating)}</p>
              <p>{review.comment}</p>
              <p>- {review.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Form */}
      <div className="section">
        <h2>{editIndex !== null ? "Edit Review ✏️" : "Submit Your Feedback ✍️"}</h2>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Feedback"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <label>
            🌟 Rating:
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            >
              <option value={5}>5 - Excellent</option>
              <option value={4}>4 - Very Good</option>
              <option value={3}>3 - Good</option>
              <option value={2}>2 - Fair</option>
              <option value={1}>1 - Poor</option>
            </select>
          </label>
          <button type="submit">
            {editIndex !== null ? "Update Review" : "Submit Feedback"}
          </button>
        </form>
        {submitted && (
          <p className="submitted-msg">
            {editIndex !== null
              ? "Review updated successfully! 🎉"
              : "Thank you! Your feedback has been added. 🎉"}
          </p>
        )}
      </div>

      {/* Extra Info */}
      <div className="extra-info">
        <h3>Why Your Feedback Matters 💚</h3>
        <p>
          Your insights help us improve services, support farmers, and create a
          sustainable agricultural future. 🌾🌱
        </p>
      </div>
    </div>
  );
}
