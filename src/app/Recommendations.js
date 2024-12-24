"use client"
import React, { useState } from "react";

function Recommendations() {
  const [recommendations, setRecommendations] = useState([
    { name: "John Doe", message: "Excellent developer!" },
    { name: "Jane Smith", message: "Highly recommend working with them!" },
    { name: "Bob Johnson", message: "Outstanding skills and creativity!" },
  ]);

  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecommendations([...recommendations, form]);
    alert("Thank you for your recommendation!");
    setForm({ name: "", message: "" });
  };

  return (
    <section id="recommendations" className="recommendations-section">
      <h2>Recommendations</h2>
      <div id="recommendation-list">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation">
            <p>
              <strong>{rec.name}:</strong> {rec.message}
            </p>
          </div>
        ))}
      </div>
      <form id="recommendation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Recommendation"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit">Submit Recommendation</button>
      </form>
    </section>
  );
}

export default Recommendations;